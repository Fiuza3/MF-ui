// @vitest-environment node
import { globSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { compile } from "@tailwindcss/node";
import { beforeAll, describe, expect, it } from "vitest";

/**
 * O consumidor importa só `tailwindcss` + `@mf/ui/globals.css`. Toda utility que
 * um componente usa precisa sair desse par — se depender de plugin que o app
 * "deveria" instalar, ela vira classe morta em produção sem erro nenhum.
 * Foi o caso das animações de Dialog/Select/Toast/Accordion até a v3.0.2.
 */

const raiz = resolve(process.cwd(), "src");
const ENTRADA = '@import "tailwindcss";\n@import "./tokens/globals.css";';

// Famílias que o core do Tailwind não tem; qualquer uso delas depende do pacote.
const FORA_DO_CORE =
  /(?<![\w-])((?:data-\[[^\]]+\]:)?(?:animate-(?:in|out)|fade-(?:in|out)-\d+|zoom-(?:in|out)-\d+|slide-(?:in|out)-(?:from|to)-[a-z]+(?:-\d+|-full)?|animate-accordion-(?:up|down)))(?![\w-])/g;

function classesForaDoCore(): string[] {
  const achadas = new Set<string>();
  for (const arquivo of globSync("**/*.tsx", { cwd: raiz })) {
    if (arquivo.includes(".stories.")) continue;
    const conteudo = readFileSync(resolve(raiz, arquivo), "utf8");
    for (const [, classe] of conteudo.matchAll(FORA_DO_CORE)) achadas.add(classe);
  }
  return [...achadas].sort();
}

function seletorDe(classe: string): string {
  return "." + classe.replace(/[[\]:=]/g, (c) => `\\${c}`);
}

describe("CSS entregue pelo pacote", () => {
  let css: string;
  let classes: string[];

  beforeAll(async () => {
    classes = classesForaDoCore();
    const compilador = await compile(ENTRADA, { base: raiz, onDependency: () => {} });
    css = compilador.build(classes);
  }, 30_000);

  it("encontra as classes de animação que os componentes usam", () => {
    expect(classes.length).toBeGreaterThan(10);
  });

  it("toda classe de animação usada por um componente gera CSS", () => {
    const mortas = classes.filter((classe) => !css.includes(seletorDe(classe)));

    expect(mortas, "classe usada em componente sem CSS correspondente no pacote").toEqual([]);
  });

  it("borda sem cor explícita usa o token --border, não currentColor", () => {
    expect(css).toMatch(/border-color:\s*var\(--border\)/);
  });

  it("body já sai com fundo, cor e fonte do tema", () => {
    const body = css.match(/(?:^|\n)\s*body\s*\{([^}]*)\}/)?.[1] ?? "";

    expect(body).toMatch(/background-color:\s*var\(--background\)/);
    expect(body).toMatch(/color:\s*var\(--foreground\)/);
    expect(body).toMatch(/font-family:\s*var\(--font-sans\)/);
  });

  // Tailwind v4 tirou o cursor: pointer de <button>; sem a base, Button, Checkbox,
  // Tabs e Accordion ficavam com seta enquanto só o Switch mostrava a mãozinha.
  it("controle clicável mostra cursor de mão, desabilitado não", () => {
    expect(css).toMatch(/button:not\(:disabled\)[^{]*\{[^}]*cursor:\s*pointer/);
  });

  // aria-invalid:ring-destructive/20 vinha depois de focus-visible:ring-ring com a mesma
  // especificidade e deixava o campo inválido focado com anel de 20% (ilegível).
  it("tinta de campo inválido só vale sem foco (variante not-focus-visible compila)", async () => {
    const compilador = await compile(ENTRADA, { base: raiz, onDependency: () => {} });
    const saida = compilador.build(["aria-invalid:not-focus-visible:ring-destructive/20"]);

    expect(saida).toMatch(/not\(\*:focus-visible\)|:not\([^)]*focus-visible/);
    expect(saida).toContain("aria-invalid");
  });

  // O tema é a classe no <html>; sem @custom-variant o Tailwind v4 liga `dark:`
  // ao prefers-color-scheme, e o tema claro herda ajustes do escuro quando o SO
  // do visitante está em modo escuro.
  it("dark: segue a classe de tema, não a preferência do sistema operacional", async () => {
    const compilador = await compile(ENTRADA, { base: raiz, onDependency: () => {} });
    const saida = compilador.build(["dark:bg-input"]);

    expect(saida).not.toMatch(/prefers-color-scheme/);
    expect(saida).toMatch(/\.light/);
  });
});

// Os blocos vieram do site da MF, e o CSS das classes próprias deles ficou no
// globals.css do site: fora dele o carrossel do Projects parava e o fundo do
// Hero sumia, sem erro nenhum.
describe("classes próprias dos blocos", () => {
  const PROPRIAS = /(?<![\w-])((?:hero|project|stack|process|service)-[a-z-]+)(?![\w-])/g;
  const ENTRADA_COMPLETA = `${ENTRADA}\n@import "./tokens/utilitarios.css";`;

  function classesProprias(): string[] {
    const achadas = new Set<string>();
    for (const arquivo of globSync("{blocos,componentes}/*.tsx", { cwd: raiz })) {
      if (arquivo.includes(".stories.")) continue;
      const conteudo = readFileSync(resolve(raiz, arquivo), "utf8");
      for (const [, aspas, crase] of conteudo.matchAll(/className=(?:"([^"]*)"|\{`([^`]*)`\})/g)) {
        for (const [, classe] of (aspas ?? crase ?? "").matchAll(PROPRIAS)) achadas.add(classe);
      }
    }
    return [...achadas].sort();
  }

  it("toda classe própria usada num bloco tem CSS no pacote", async () => {
    const classes = classesProprias();
    const compilador = await compile(ENTRADA_COMPLETA, { base: raiz, onDependency: () => {} });
    const css = compilador.build(classes);
    const mortas = classes.filter((classe) => !css.includes(`.${classe}`));

    expect(classes.length).toBeGreaterThan(5);
    expect(mortas, "classe usada em bloco sem CSS no pacote").toEqual([]);
  });
});

// O animated-icon.css chega ao consumidor só via utilitarios.css; sem o @import o
// AnimatedIcon renderiza sem animação alguma e sem erro. E o estado "escondido" do
// draw só pode existir armado pelo JS — sem data-armed, ícone sumiria no SSR.
describe("animated-icon.css", () => {
  const css = () => readFileSync(resolve(raiz, "tokens/animated-icon.css"), "utf8");

  it("é importado por utilitarios.css e compila no pacote", async () => {
    const utilitarios = readFileSync(resolve(raiz, "tokens/utilitarios.css"), "utf8");
    expect(utilitarios).toMatch(/@import\s+"\.\/animated-icon\.css"/);

    const compilador = await compile(`${ENTRADA}\n@import "./tokens/utilitarios.css";`, {
      base: raiz,
      onDependency: () => {},
    });
    expect(compilador.build([])).toContain("mf-icon-draw");
  }, 30_000);

  it("o estado escondido (dashoffset 100) exige [data-armed=\"true\"]", () => {
    // Keyframes (from/to) também declaram dashoffset; só interessam as regras de seletor.
    const regras = [...css().matchAll(/([^{}]+)\{([^{}]*stroke-dashoffset:\s*100[^{}]*)\}/g)].filter(
      ([, seletor]) => seletor!.includes(".mf-anim-icon"),
    );
    expect(regras.length).toBeGreaterThan(0);
    for (const [, seletor] of regras) expect(seletor).toContain('[data-armed="true"]');
  });
});
