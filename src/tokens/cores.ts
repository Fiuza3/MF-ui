/**
 * Tokens de cor.
 *
 * Os VALORES ficam em `globals.css` e trocam entre `:root, .dark` e `.light`.
 * Aqui existem apenas referencias — nenhum hexadecimal. Uma constante com o
 * valor literal so estaria certa em um dos dois temas.
 *
 * - em estilo inline ou CSS-in-JS: use `cores.accent` (`"var(--primary)"`).
 * - em API que nao entende `var()` (canvas, WebGL, libs de grafico): use
 *   `lerToken(el, tokensDeCor.accent)`, que resolve no tema ativo.
 */

const NOMES = {
  fundo: "--background",
  texto: "--foreground",

  superficie: "--card",
  superficieTexto: "--card-foreground",
  superficieElevada: "--surface-raised",
  flutuante: "--popover",
  flutuanteTexto: "--popover-foreground",

  primaria: "--primary",
  primariaTexto: "--primary-foreground",
  primariaHover: "--primary-hover",
  primariaSutil: "--cyan-dim",
  secundaria: "--secondary",
  secundariaTexto: "--secondary-foreground",
  neutra: "--muted",
  neutraTexto: "--muted-foreground",
  textoSutil: "--subtle-foreground",
  destaque: "--accent",
  destaqueTexto: "--accent-foreground",

  alerta: "--warning",
  alertaTexto: "--warning-foreground",
  sucesso: "--success",
  sucessoTexto: "--success-foreground",
  erro: "--destructive",
  erroTexto: "--destructive-foreground",

  borda: "--border",
  bordaCampo: "--input",
  foco: "--ring",
} as const;

export type NomeDeCor = keyof typeof NOMES;

/** Nome da custom property de cada token, para uso com `lerToken`. */
export const tokensDeCor: Record<NomeDeCor, string> = NOMES;

/** Referencia `var(--token)` de cada cor, para estilo inline e CSS-in-JS. */
export const cores = Object.fromEntries(
  Object.entries(NOMES).map(([chave, prop]) => [chave, `var(${prop})`]),
) as Record<NomeDeCor, string>;

export type Cores = typeof cores;
