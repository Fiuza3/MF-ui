import { GLYPHS, type GlyphChar } from "./glyphs";

export const BRAND_VARIANTS = ["horizontal", "monogram", "symbol-block", "symbol-tag", "symbol-cursor"] as const;

export type BrandVariant = (typeof BRAND_VARIANTS)[number];

// Ids estáveis: as linhas do tempo das animações miram estas peças.
export type PartId = "lt" | "m" | "f" | "slash" | "gt" | "cursor";

export type GlyphPart = { kind: "glyph"; id: PartId; role: "core" | "bracket"; char: GlyphChar; x: number };

export type RectPart = {
  kind: "rect";
  id: "cursor";
  role: "cursor";
  x: number;
  y: number;
  width: number;
  height: number;
  // Cursor que só existe durante a animação (digitação na horizontal): fora dela fica invisível.
  transient?: boolean;
};

export type BrandPart = GlyphPart | RectPart;

export type Box = { x: number; y: number; width: number; height: number };

// Conteúdo em unidades de glifo (1000/em); `content` posiciona e escala dentro do viewBox.
export type BrandLayout = {
  variant: BrandVariant;
  viewBox: Box;
  tile: { size: number; radius: number } | null;
  content: { x: number; y: number; scale: number };
  parts: BrandPart[];
};

type RowItem = { char: GlyphChar; id: PartId; role: "core" | "bracket"; kernAfter: number };

const PART_ID: Record<GlyphChar, PartId> = { "<": "lt", M: "m", F: "f", "/": "slash", ">": "gt" };

const roleOf = (char: GlyphChar): "core" | "bracket" => (char === "M" || char === "F" ? "core" : "bracket");

// Espaçamento ajustado à mão sobre o avanço monoespaçado (600): o mono puro
// deixava o "<" solto do MF e o "/>" lido como dois sinais. Medido em
// prévia renderizada; mais apertado que isto o "<" encosta no M.
const KERNING: Partial<Record<`${GlyphChar}${GlyphChar}`, number>> = {
  "<M": -40,
  MF: -15,
  "F/": -45,
  "/>": -105,
  "</": -120,
  "M>": -40,
};

const TILE_SIZE = 1000;
const TILE_RADIUS = 224;
// Largura útil do conteúdo por símbolo: o máximo que cabe sem encostar no
// recorte arredondado do iOS/Android. Medido em prévia de 16px: com 640 o
// "MF_" do bloco ficava ilegível na aba do navegador.
const CONTENT_WIDTH = { "symbol-block": 720, "symbol-tag": 660, "symbol-cursor": 700 } as const;

type SymbolVariant = keyof typeof CONTENT_WIDTH;

function rowItems(chars: GlyphChar[]): RowItem[] {
  return chars.map((char, index) => {
    const next = chars[index + 1];
    const kernAfter = next ? (KERNING[`${char}${next}`] ?? 0) : 0;
    return { char, id: PART_ID[char], role: roleOf(char), kernAfter };
  });
}

function placeRow(items: RowItem[]): GlyphPart[] {
  let x = 0;
  return items.map((item) => {
    const part: GlyphPart = { kind: "glyph", id: item.id, role: item.role, char: item.char, x };
    x += GLYPHS[item.char].advance + item.kernAfter;
    return part;
  });
}

export function partBox(part: BrandPart): Box {
  if (part.kind === "rect") return { x: part.x, y: part.y, width: part.width, height: part.height };
  const { box } = GLYPHS[part.char];
  return { x: part.x + box.x1, y: box.y1, width: box.x2 - box.x1, height: box.y2 - box.y1 };
}

export function boundsOf(parts: BrandPart[]): Box {
  const boxes = parts.map(partBox);
  const x1 = Math.min(...boxes.map((b) => b.x));
  const y1 = Math.min(...boxes.map((b) => b.y));
  const x2 = Math.max(...boxes.map((b) => b.x + b.width));
  const y2 = Math.max(...boxes.map((b) => b.y + b.height));
  return { x: x1, y: y1, width: x2 - x1, height: y2 - y1 };
}

function wordLayout(variant: "horizontal" | "monogram", chars: GlyphChar[]): BrandLayout {
  const parts = placeRow(rowItems(chars));
  return { variant, viewBox: boundsOf(parts), tile: null, content: { x: 0, y: 0, scale: 1 }, parts };
}

function centerInTile(parts: BrandPart[], contentWidth: number): BrandLayout["content"] {
  const bounds = boundsOf(parts);
  const scale = contentWidth / bounds.width;
  return {
    scale,
    x: TILE_SIZE / 2 - (bounds.x + bounds.width / 2) * scale,
    y: TILE_SIZE / 2 - (bounds.y + bounds.height / 2) * scale,
  };
}

function symbolLayout(variant: SymbolVariant, parts: BrandPart[]): BrandLayout {
  return {
    variant,
    viewBox: { x: 0, y: 0, width: TILE_SIZE, height: TILE_SIZE },
    tile: { size: TILE_SIZE, radius: TILE_RADIUS },
    content: centerInTile(parts, CONTENT_WIDTH[variant]),
    parts,
  };
}

// "MF_": o sublinhado é o cursor do terminal — o mesmo que pisca na animação de digitação.
function blockSymbol(): BrandLayout {
  const letters = placeRow(rowItems(["M", "F"]));
  const f = letters[1];
  const cursor: RectPart = { kind: "rect", id: "cursor", role: "cursor", x: f.x + 600, y: -96, width: 300, height: 96 };
  return symbolLayout("symbol-block", [...letters, cursor]);
}

function cursorSymbol(): BrandLayout {
  const glyphs = placeRow(rowItems(["<", "M", ">"]));
  const gt = glyphs[2];
  const cursor: RectPart = { kind: "rect", id: "cursor", role: "cursor", x: gt.x + 600, y: -564, width: 230, height: 545 };
  return symbolLayout("symbol-cursor", [...glyphs, cursor]);
}

const LAYOUTS: Record<BrandVariant, () => BrandLayout> = {
  horizontal: () => wordLayout("horizontal", ["<", "M", "F", "/", ">"]),
  monogram: () => wordLayout("monogram", ["M", "F"]),
  "symbol-block": blockSymbol,
  "symbol-tag": () => symbolLayout("symbol-tag", placeRow(rowItems(["<", "/", ">"]))),
  "symbol-cursor": cursorSymbol,
};

export function layoutBrand(variant: BrandVariant): BrandLayout {
  return LAYOUTS[variant]();
}
