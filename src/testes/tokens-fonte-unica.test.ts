// @vitest-environment node
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, resolve, sep } from "node:path";
import { describe, expect, it } from "vitest";

import { tokensDeCor } from "../tokens/cores";
import { tokensDeMotion } from "../tokens/motion";
import { chaves, css, variaveis } from "./tokens-css";

/**
 * Trava de arquitetura: `globals.css` e a unica fonte de valor de token.
 *
 * Um valor literal fora dele volta a criar duas verdades — e, no caso de cor,
 * uma que so esta certa em um dos dois temas. O teste existe para que essa
 * decisao continue valendo daqui a um ano sem depender de ninguem lembrar.
 */

const RAIZ = resolve(process.cwd(), "src");
const FONTE_DE_VALOR = join("src", "tokens", "globals.css");

function arquivosDeCodigo(dir: string, acc: string[] = []): string[] {
  for (const nome of readdirSync(dir)) {
    const caminho = join(dir, nome);
    if (statSync(caminho).isDirectory()) {
      // Testes ficam de fora: eles precisam de literais para exercitar
      // overrides (ex.: `<Logo cor="#FF0000" />`).
      if (nome === "testes" || nome === "__tests__") continue;
      arquivosDeCodigo(caminho, acc);
      continue;
    }
    if (/\.(ts|tsx|css)$/.test(nome)) acc.push(caminho);
  }
  return acc;
}

const ARQUIVOS = arquivosDeCodigo(RAIZ).filter(
  (caminho) => relative(process.cwd(), caminho) !== FONTE_DE_VALOR.split("/").join(sep),
);

describe("globals.css e a unica fonte de valor", () => {
  // rgba(61,242,224,…) é o ciano do escuro congelado: no tema claro o brilho de
  // hover de Services/Process virava verde-água sobre creme.
  it("nenhum rgb()/rgba() literal fora de globals.css", () => {
    const infratores: string[] = [];

    for (const caminho of ARQUIVOS) {
      readFileSync(caminho, "utf8")
        .split("\n")
        .forEach((linha, i) => {
          if (/\brgba?\(\s*\d/.test(linha)) {
            infratores.push(`${relative(process.cwd(), caminho)}:${i + 1}`);
          }
        });
    }

    expect(infratores, "Use color-mix(in srgb, var(--token) N%, transparent)").toEqual([]);
  });

  it("nenhum hexadecimal de cor fora de globals.css", () => {
    const infratores: string[] = [];

    for (const caminho of ARQUIVOS) {
      const conteudo = readFileSync(caminho, "utf8");
      conteudo.split("\n").forEach((linha, i) => {
        const achados = linha.match(/#[0-9a-fA-F]{3}(?:[0-9a-fA-F]{3})?\b/g);
        if (achados) {
          infratores.push(`${relative(process.cwd(), caminho)}:${i + 1} → ${achados.join(", ")}`);
        }
      });
    }

    expect(
      infratores,
      `Cor literal fora de globals.css. Use var(--token) no CSS, cores.<nome> em estilo inline, ou lerToken(el, tokensDeCor.<nome>) quando a API nao entender var().\n${infratores.join("\n")}`,
    ).toEqual([]);
  });

  it("nenhuma duracao ou curva literal fora de globals.css", () => {
    const infratores: string[] = [];

    for (const caminho of ARQUIVOS) {
      if (!caminho.endsWith(".css")) continue;
      const conteudo = readFileSync(caminho, "utf8");
      conteudo.split("\n").forEach((linha, i) => {
        // `0ms` e o valor neutro de delay e nao e um token.
        const tempos = (linha.match(/\b\d+(?:\.\d+)?ms\b/g) ?? []).filter((t) => t !== "0ms");
        // Segundos: o animated-icon.css nasceu sem literal algum; os loops antigos
        // (hero-scan, marquee, carrossel) ficam fora desta trava por ora.
        if (caminho.endsWith("animated-icon.css")) {
          tempos.push(...(linha.match(/(?<![\w.-])\d+(?:\.\d+)?s\b/g) ?? []));
        }
        const curvas = linha.match(/cubic-bezier\([^)]*\)/g) ?? [];
        const achados = [...tempos, ...curvas];
        if (achados.length) {
          infratores.push(`${relative(process.cwd(), caminho)}:${i + 1} → ${achados.join(", ")}`);
        }
      });
    }

    expect(
      infratores,
      `Tempo ou curva literal fora de globals.css.\n${infratores.join("\n")}`,
    ).toEqual([]);
  });
});

describe("o TypeScript so referencia tokens que existem", () => {
  const escuro = chaves("escuro");
  const claro = chaves("claro");

  it.each(Object.entries(tokensDeCor))(
    "cores.%s aponta para %s, definido nos dois temas",
    (_nome, prop) => {
      expect(escuro).toContain(prop);
      expect(claro).toContain(prop);
    },
  );

  it.each([...Object.entries(tokensDeMotion.duracoes), ...Object.entries(tokensDeMotion.curvas)])(
    "motion.%s aponta para %s, definido em globals.css",
    (_nome, prop) => {
      expect(css).toMatch(new RegExp(`${prop}\\s*:`));
    },
  );

  it("nao ha token de cor definido no CSS e ausente da API de temas", () => {
    // Paridade ja e checada em tokens.test.ts; aqui garantimos que o mapa do
    // TypeScript nao ficou para tras de um token novo de uso semantico.
    const semanticos = Object.keys(variaveis("escuro")).filter((p) =>
      /^--(background|foreground|card|popover|primary|secondary|muted|accent|destructive|warning|border|input|ring)/.test(
        p,
      ),
    );
    const mapeados = Object.values(tokensDeCor);
    const faltando = semanticos.filter((p) => !mapeados.includes(p));
    expect(
      faltando,
      `Token semantico em globals.css sem entrada em tokensDeCor: ${faltando.join(", ")}`,
    ).toEqual([]);
  });
});
