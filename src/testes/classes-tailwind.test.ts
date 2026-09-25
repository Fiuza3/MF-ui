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
      if (caminho.includes(".stories.")) continue;
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
});
