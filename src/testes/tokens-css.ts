import { readFileSync } from "node:fs";
import { resolve } from "node:path";

/**
 * Leitura tolerante do globals.css para os testes de tema.
 *
 * O arquivo passa pelo Prettier, que pode quebrar `:root, .dark {` em duas
 * linhas. Casar o seletor por texto literal quebra junto — por isso aqui o
 * casamento é por expressão regular, e a leitura fica num lugar só em vez de
 * duplicada em cada teste.
 */

export const css = readFileSync(resolve(process.cwd(), "src/tokens/globals.css"), "utf8");

const SELETORES = {
  escuro: /:root\s*,\s*\.dark\s*\{/,
  claro: /\.light\s*\{/,
} as const;

export type Tema = keyof typeof SELETORES;

/** Todas as custom properties declaradas no bloco do tema, na ordem do arquivo. */
export function variaveis(tema: Tema): Record<string, string> {
  const abertura = SELETORES[tema].exec(css);
  if (!abertura) throw new Error(`Bloco do tema "${tema}" não encontrado em globals.css`);

  const inicio = abertura.index + abertura[0].length;
  const fim = css.indexOf("}", inicio);
  if (fim === -1) throw new Error(`Bloco do tema "${tema}" não foi fechado em globals.css`);

  const corpo = css.slice(inicio, fim);
  const vars: Record<string, string> = {};
  for (const m of corpo.matchAll(/(--[a-z0-9-]+)\s*:\s*([^;]+);/g)) {
    vars[m[1]] = m[2].trim();
  }
  return vars;
}

/** Nomes das variáveis do tema, ordenados — para comparar paridade entre temas. */
export function chaves(tema: Tema): string[] {
  return Object.keys(variaveis(tema)).sort();
}
