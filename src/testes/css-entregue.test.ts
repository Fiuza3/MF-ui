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
  /(?<![\w-])((?:data-\[[^\]]+\]:)?(?:animate-(?:in|out)|fade-(?:in|out)-\d+|zoom-(?:in|out)-\d+|slide-(?:in|out)-from-[a-z]+(?:-\d+)?|animate-accordion-(?:up|down)))(?![\w-])/g;

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
});
