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
  familias: () => familias,
  pesos: () => pesos
});
module.exports = __toCommonJS(tokens_exports);

// src/tokens/cores.ts
var cores = {
  fundo: "#0B0F14",
  superficie: "#141C26",
  superficieElevada: "#0F1520",
  borda: "#1E2A38",
  bordaForte: "#2A3B4D",
  textoPrimario: "#F7FAFC",
  textoSecundario: "#A0AEC0",
  textoSutil: "#5C6B7E",
  accent: "#3DF2E0",
  accentForte: "#5DF5E6",
  accentSutil: "rgba(61,242,224,0.1)",
  alerta: "#FFBD2E",
  erro: "#E40014"
};

// src/tokens/tipografia.ts
var familias = {
  sans: "var(--fonte-sans), system-ui, -apple-system, sans-serif",
  mono: "var(--fonte-mono), ui-monospace, SFMono-Regular, Menlo, monospace"
};
var pesos = {
  regular: 400,
  medio: 500,
  semibold: 600,
  bold: 700
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  cores,
  familias,
  pesos
});
//# sourceMappingURL=index.js.map