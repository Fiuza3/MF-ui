// @vitest-environment node
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { globSync } from "node:fs";

/**
 * `text-[var(--x)]` é ambíguo para o Tailwind: `text-` serve para cor e para
 * tamanho, e diante de um var() ele decide por COR. Um token de tipografia
 * escrito assim vira `color: var(--text-h2)` — declaração inválida, nenhum
 * font-size, e o título renderiza no tamanho do corpo em TODO consumidor.
 *
 * Foi exatamente o que aconteceu com os seis blocos até a v3.0.1. A forma
 * correta é `text-[length:var(--text-h2)]`.
 */

const raiz = resolve(process.cwd(), "src");

function arquivos(): string[] {
  return globSync("**/*.tsx", { cwd: raiz }).map((f) => resolve(raiz, f));
}

/** Código de componente publicado: fora stories e testes, que podem citar classes proibidas. */
function ehComponente(caminho: string): boolean {
  return !caminho.includes(".stories.") && !/[\\/](testes|__tests__)[\\/]/.test(caminho);
}

const TOKENS_DE_TAMANHO = /text-\[var\(--(text|leading|spacing)-/;

describe("classes do Tailwind", () => {
  it("token de tipografia nunca entra como text-[var(--...)] sem length:", () => {
    const infratores: string[] = [];

    for (const caminho of arquivos()) {
      const conteudo = readFileSync(caminho, "utf8");
      conteudo.split("\n").forEach((linha, i) => {
        if (TOKENS_DE_TAMANHO.test(linha)) {
          infratores.push(`${caminho.replace(raiz, "src")}:${i + 1}`);
        }
      });
    }

    expect(
      infratores,
      "Use text-[length:var(--token)] — sem o length: o Tailwind gera color: e o tamanho some",
    ).toEqual([]);
  });

  // text-white sobre bg-destructive passava por fora do par que o contraste.test
  // valida: no tema escuro dava 2,6:1 (coral + branco), abaixo do AA.
  it("cor de texto sempre vem de token, nunca de text-white/text-black", () => {
    const infratores: string[] = [];

    for (const caminho of arquivos()) {
      if (!ehComponente(caminho)) continue;
      readFileSync(caminho, "utf8")
        .split("\n")
        .forEach((linha, i) => {
          if (/(?<![\w-])text-(white|black)(?![\w-])/.test(linha)) {
            infratores.push(`${caminho.replace(raiz, "src")}:${i + 1}`);
          }
        });
    }

    expect(infratores, "Use o par *-foreground do token de fundo").toEqual([]);
  });

  // (?<!not-): `aria-invalid:not-focus-visible:ring-*/N` é a tinta de inválido sem foco, permitida.
  const ANEL_COM_ALFA = /(?<!not-)focus-visible:ring-[\w-]+\/\d+/;
  // Casa 0–11px e 0.1–0.749rem; 0.75rem (12px) em diante passa.
  const FONTE_PEQUENA = /text-\[(?:(?:[0-9]|1[01])px|0?\.(?:[0-6]\d*|7(?:[0-4]\d*)?)rem)\]/;

  function infratoresDe(padrao: RegExp): string[] {
    const achados: string[] = [];
    for (const caminho of arquivos().filter(ehComponente)) {
      readFileSync(caminho, "utf8")
        .split("\n")
        .forEach((linha, i) => {
          if (padrao.test(linha)) achados.push(`${caminho.replace(raiz, "src")}:${i + 1}`);
        });
    }
    return achados;
  }

  it("anel de foco nunca usa alfa (ring-ring/50 dá 2,19:1; destructive/20 dá 1,36:1)", () => {
    expect(infratoresDe(ANEL_COM_ALFA), "use focus-visible:ring-ring ou ring-destructive opaco").toEqual([]);
  });

  it("nenhuma fonte abaixo de 12px (0.75rem) — px fixo também não acompanha o zoom", () => {
    expect(infratoresDe(FONTE_PEQUENA), "use text-xs ou maior").toEqual([]);
  });
});

// Aqui --accent é a cor da marca ("destaque" em cores.ts), não o cinza de hover
// do shadcn de onde os primitivos vieram. hover/focus em accent pintava item de
// menu, ghost e paginação de ciano/laranja cheio — com ícone a 1,1:1 e página em
// hover idêntica à página atual.
describe("estado interativo", () => {
  it("hover e foco de item não usam o accent da marca como fundo", () => {
    const infratores: string[] = [];

    for (const caminho of arquivos()) {
      if (!ehComponente(caminho)) continue;
      readFileSync(caminho, "utf8")
        .split("\n")
        .forEach((linha, i) => {
          if (/(?:hover|focus|data-\[state=open\]):bg-accent(?![\w-])/.test(linha)) {
            infratores.push(`${caminho.replace(raiz, "src")}:${i + 1}`);
          }
        });
    }

    expect(infratores, "Use hover:bg-foreground/10 hover:text-foreground").toEqual([]);
  });
});

// Primitivos usavam anel de 3px em --ring/50 e blocos 2px em --cyan/70: o mesmo
// foco de teclado com duas aparências na mesma página.
describe("anel de foco", () => {
  it("todo anel de foco usa 3px em --ring, sem variação por família", () => {
    const infratores: string[] = [];

    for (const caminho of arquivos()) {
      if (!ehComponente(caminho)) continue;
      readFileSync(caminho, "utf8")
        .split("\n")
        .forEach((linha, i) => {
          if (/focus-visible:ring-(?:2|cyan)(?![\w-])|focus-visible:ring-cyan\//.test(linha)) {
            infratores.push(`${caminho.replace(raiz, "src")}:${i + 1}`);
          }
        });
    }

    expect(infratores, "Use focus-visible:ring-[3px] focus-visible:ring-ring/50").toEqual([]);
  });
});
