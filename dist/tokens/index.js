"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/tokens/index.ts
var tokens_exports = {};
__export(tokens_exports, {
  cores: () => cores,
  curvas: () => curvas,
  duracoes: () => duracoes,
  familias: () => familias,
  pesos: () => pesos,
  tokensDeCor: () => tokensDeCor,
  tokensDeMotion: () => tokensDeMotion
});
module.exports = __toCommonJS(tokens_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  cores,
  curvas,
  duracoes,
  familias,
  pesos,
  tokensDeCor,
  tokensDeMotion
});
//# sourceMappingURL=index.js.map