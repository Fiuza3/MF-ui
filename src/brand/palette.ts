// Cores fixas da marca, em hex: arquivos SVG/PNG saem do pacote e não enxergam
// as variáveis CSS do tema. Os componentes usam as mesmas para nunca divergir.
export const BRAND_TONES = ["cyan", "light", "ink", "solid-black", "solid-white"] as const;

export type BrandTone = (typeof BRAND_TONES)[number];

export type ToneColors = {
  core: string;
  bracket: string;
  bracketOpacity: number;
  cursor: string;
  tile: string;
  // Uma cor só (carimbo, gravação, fax): o símbolo vira bloco com as letras vazadas.
  knockout: boolean;
};

const INK = "#0B0F14";
const CYAN = "#3DF2E0";
const TEAL = "#0A6E6A";

export const TONES: Readonly<Record<BrandTone, ToneColors>> = {
  cyan: { core: CYAN, bracket: CYAN, bracketOpacity: 0.58, cursor: CYAN, tile: INK, knockout: false },
  light: { core: "#F7FAFC", bracket: CYAN, bracketOpacity: 1, cursor: CYAN, tile: INK, knockout: false },
  // Sobre fundo claro o ciano some (1.3:1); o teal mantém o DNA com 5.6:1.
  ink: { core: INK, bracket: TEAL, bracketOpacity: 1, cursor: TEAL, tile: "#F4F6F7", knockout: false },
  "solid-black": { core: "#000000", bracket: "#000000", bracketOpacity: 1, cursor: "#000000", tile: "#000000", knockout: true },
  "solid-white": { core: "#FFFFFF", bracket: "#FFFFFF", bracketOpacity: 1, cursor: "#FFFFFF", tile: "#FFFFFF", knockout: true },
};
