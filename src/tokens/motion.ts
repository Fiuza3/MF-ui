/**
 * Tokens de motion.
 *
 * Mesma regra das cores: os valores vivem em `globals.css`, aqui so ha
 * referencias. Isso mantem uma unica definicao de "quanto tempo dura uma
 * entrada" — antes havia duas, em unidades diferentes, e elas ja tinham
 * divergido (0.64s no TypeScript contra 600ms no CSS).
 */

const DURACOES = {
  micro: "--mf-duration-micro",
  rapida: "--mf-duration-fast",
  entrada: "--mf-duration-reveal",
  secao: "--mf-duration-section",
} as const;

const CURVAS = {
  expo: "--mf-ease-expo",
  power: "--mf-ease-power",
  suave: "--mf-ease-soft",
} as const;

export type NomeDeDuracao = keyof typeof DURACOES;
export type NomeDeCurva = keyof typeof CURVAS;

/** Nomes das custom properties, para uso com `lerToken`. */
export const tokensDeMotion = { duracoes: DURACOES, curvas: CURVAS } as const;

/** `var(--token)` de cada duracao, para `style` e `transition` inline. */
export const duracoes = Object.fromEntries(
  Object.entries(DURACOES).map(([chave, prop]) => [chave, `var(${prop})`]),
) as Record<NomeDeDuracao, string>;

/** `var(--token)` de cada curva de aceleracao. */
export const curvas = Object.fromEntries(
  Object.entries(CURVAS).map(([chave, prop]) => [chave, `var(${prop})`]),
) as Record<NomeDeCurva, string>;
