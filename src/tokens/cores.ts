export const cores = {
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
  erro: "#E40014",
} as const;

export type Cores = typeof cores;
