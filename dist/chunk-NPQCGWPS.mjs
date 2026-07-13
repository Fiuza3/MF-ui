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

export {
  cores,
  familias,
  pesos,
  duration,
  blinkMs,
  ease,
  fadeUp,
  fadeIn,
  scaleIn
};
//# sourceMappingURL=chunk-NPQCGWPS.mjs.map