// src/tokens/cores.ts
var NOMES = {
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
  foco: "--ring"
};
var tokensDeCor = NOMES;
var cores = Object.fromEntries(
  Object.entries(NOMES).map(([chave, prop]) => [chave, `var(${prop})`])
);

// src/tokens/tipografia.ts
var familias = {
  sans: "var(--fonte-sans), system-ui, -apple-system, sans-serif",
  mono: "var(--fonte-mono), ui-monospace, SFMono-Regular, Menlo, monospace",
  logo: "'MF Logo Mono', ui-monospace, SFMono-Regular, Menlo, monospace"
};
var pesos = {
  regular: 400,
  medio: 500,
  semibold: 600,
  bold: 700
};

// src/tokens/motion.ts
var DURACOES = {
  micro: "--mf-duration-micro",
  rapida: "--mf-duration-fast",
  entrada: "--mf-duration-reveal",
  secao: "--mf-duration-section"
};
var CURVAS = {
  expo: "--mf-ease-expo",
  power: "--mf-ease-power",
  suave: "--mf-ease-soft"
};
var tokensDeMotion = { duracoes: DURACOES, curvas: CURVAS };
var duracoes = Object.fromEntries(
  Object.entries(DURACOES).map(([chave, prop]) => [chave, `var(${prop})`])
);
var curvas = Object.fromEntries(
  Object.entries(CURVAS).map(([chave, prop]) => [chave, `var(${prop})`])
);

export {
  tokensDeCor,
  cores,
  familias,
  pesos,
  tokensDeMotion,
  duracoes,
  curvas
};
//# sourceMappingURL=chunk-DOQVRQ5O.mjs.map