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

// Única fonte de hex da marca no pacote (exceção registrada em tokens-fonte-unica.test.ts):
// tudo que desenha a marca — arquivos, componentes, manual — lê daqui.
export const BRAND_COLORS = {
  cyan: "#3DF2E0",
  ink: "#0B0F14",
  teal: "#0A6E6A",
  ice: "#F7FAFC",
  paper: "#F4F6F7",
  white: "#FFFFFF",
  black: "#000000",
} as const;

const {
  cyan: CYAN,
  ink: INK,
  teal: TEAL,
  ice: ICE,
  paper: PAPER,
  white: WHITE,
  black: BLACK,
} = BRAND_COLORS;

export const TONES: Readonly<Record<BrandTone, ToneColors>> = {
  cyan: {
    core: CYAN,
    bracket: CYAN,
    bracketOpacity: 0.58,
    cursor: CYAN,
    tile: INK,
    knockout: false,
  },
  light: { core: ICE, bracket: CYAN, bracketOpacity: 1, cursor: CYAN, tile: INK, knockout: false },
  // Sobre fundo claro o ciano some (1.3:1); o teal mantém o DNA com 5.6:1.
  ink: { core: INK, bracket: TEAL, bracketOpacity: 1, cursor: TEAL, tile: PAPER, knockout: false },
  "solid-black": {
    core: BLACK,
    bracket: BLACK,
    bracketOpacity: 1,
    cursor: BLACK,
    tile: BLACK,
    knockout: true,
  },
  "solid-white": {
    core: WHITE,
    bracket: WHITE,
    bracketOpacity: 1,
    cursor: WHITE,
    tile: WHITE,
    knockout: true,
  },
};
