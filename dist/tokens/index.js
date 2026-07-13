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
  blinkMs: () => blinkMs,
  cores: () => cores,
  duration: () => duration,
  ease: () => ease,
  fadeIn: () => fadeIn,
  fadeUp: () => fadeUp,
  familias: () => familias,
  pesos: () => pesos,
  scaleIn: () => scaleIn
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
  mono: "var(--fonte-mono), ui-monospace, SFMono-Regular, Menlo, monospace",
  logo: "'MF Logo Mono', ui-monospace, SFMono-Regular, Menlo, monospace"
};
var pesos = {
  regular: 400,
  medio: 500,
  semibold: 600,
  bold: 700
};

// src/tokens/duration.ts
var duration = {
  micro: 0.15,
  fast: 0.24,
  reveal: 0.64,
  section: 0.9
};
var blinkMs = 530;

// src/tokens/ease.ts
var ease = {
  expoOut: [0.16, 1, 0.3, 1],
  powerOut: [0.22, 1, 0.36, 1],
  softInOut: [0.65, 0, 0.35, 1]
};

// src/tokens/motion.ts
var fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: duration.reveal, ease: ease.expoOut }
});
var fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay, duration: duration.reveal, ease: ease.expoOut }
});
var scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  transition: { delay, duration: duration.fast, ease: ease.powerOut }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  blinkMs,
  cores,
  duration,
  ease,
  fadeIn,
  fadeUp,
  familias,
  pesos,
  scaleIn
});
//# sourceMappingURL=index.js.map