import { GLYPHS } from "./glyphs";
import { layoutBrand, type BrandLayout, type BrandPart, type BrandVariant } from "./layout";
import { BRAND_COLORS, TONES, type BrandTone, type ToneColors } from "./palette";

// Uma árvore neutra que o React (componente), o serializador (arquivos .svg) e
// o rasterizador (PNG, quadros animados) percorrem: os três desenham a mesma coisa.
export type SvgAttrs = Record<string, string | number>;

export type SvgNode = { tag: string; attrs: SvgAttrs; children: SvgNode[]; text?: string };

export type BrandTreeOptions = {
  variant: BrandVariant;
  tone: BrandTone;
  title?: string;
  bracketOpacity?: number;
  // Cor livre (ex.: "currentColor", "var(--cyan)") no lugar do tom: mantém a
  // opacidade dos colchetes e o bloco do tom. É o que o Logo legado recebe em `cor`.
  color?: string;
  // Prefixo de ids (máscara): necessário quando várias marcas vazadas dividem a página.
  idPrefix?: string;
  // Partes extras e classes que as animações precisam; o estático ignora.
  decorate?: (layout: BrandLayout) => BrandLayout;
  partChildren?: (part: BrandPart, fill: SvgNode) => SvgNode[];
  partAttrs?: (part: BrandPart) => SvgAttrs;
  rootClass?: string;
  style?: string;
};

export const BRAND_TITLE = "MF Desenvolvimento";

const node = (tag: string, attrs: SvgAttrs, children: SvgNode[] = [], text?: string): SvgNode => ({ tag, attrs, children, text });

function colorOf(part: BrandPart, colors: ToneColors): string {
  if (part.role === "core") return colors.core;
  if (part.role === "bracket") return colors.bracket;
  return colors.cursor;
}

export function partShape(part: BrandPart, fill: string, opacity: number): SvgNode {
  const paint = { fill, ...(opacity < 1 ? { "fill-opacity": opacity } : {}) };
  if (part.kind === "rect") return node("rect", { x: part.x, y: part.y, width: part.width, height: part.height, ...paint });
  return node("path", { d: GLYPHS[part.char].d, transform: `translate(${part.x} 0)`, ...paint });
}

function partNode(part: BrandPart, colors: ToneColors, options: BrandTreeOptions): SvgNode {
  const opacity = part.role === "bracket" ? (options.bracketOpacity ?? colors.bracketOpacity) : 1;
  const shape = partShape(part, colorOf(part, colors), opacity);
  const children = options.partChildren ? options.partChildren(part, shape) : [shape];
  const transient = part.kind === "rect" && part.transient ? " mf-brand-transient" : "";
  const attrs = { class: `mf-brand-part mf-brand-part--${part.id}${transient}`, "data-part": part.id, ...options.partAttrs?.(part) };
  return node("g", attrs, children);
}

function contentTransform(layout: BrandLayout): string {
  const { x, y, scale } = layout.content;
  return `translate(${x} ${y}) scale(${scale})`;
}

function tileRect(layout: BrandLayout, fill: string, extra: SvgAttrs = {}): SvgNode {
  const tile = layout.tile;
  const size = tile?.size ?? 0;
  return node("rect", { x: 0, y: 0, width: size, height: size, rx: tile?.radius ?? 0, fill, ...extra });
}

// Uma cor só: o bloco recebe as letras como furo (máscara), sem segunda cor.
function knockoutTile(layout: BrandLayout, colors: ToneColors, prefix: string): SvgNode[] {
  const maskId = `${prefix}knockout`;
  // Máscara por luminância: branco mostra o bloco, preto abre o furo da letra.
  const holes = layout.parts.map((part) => partShape(part, BRAND_COLORS.black, 1));
  const mask = node("mask", { id: maskId }, [
    tileRect(layout, BRAND_COLORS.white),
    node("g", { transform: contentTransform(layout) }, holes),
  ]);
  return [node("defs", {}, [mask]), tileRect(layout, colors.tile, { mask: `url(#${maskId})` })];
}

function bodyNodes(layout: BrandLayout, colors: ToneColors, options: BrandTreeOptions): SvgNode[] {
  if (layout.tile && colors.knockout) return knockoutTile(layout, colors, options.idPrefix ?? "mf-brand-");
  const parts = layout.parts.map((part) => partNode(part, colors, options));
  const content = node("g", { class: "mf-brand-content", transform: contentTransform(layout) }, parts);
  return layout.tile ? [tileRect(layout, colors.tile), content] : [content];
}

function colorsFor(options: BrandTreeOptions): ToneColors {
  const tone = TONES[options.tone];
  if (!options.color) return tone;
  return { ...tone, core: options.color, bracket: options.color, cursor: options.color };
}

export function buildBrandTree(options: BrandTreeOptions): SvgNode {
  const base = layoutBrand(options.variant);
  const layout = options.decorate ? options.decorate(base) : base;
  const { x, y, width, height } = layout.viewBox;
  const title = options.title ?? BRAND_TITLE;
  const style = options.style ? [node("style", {}, [], options.style)] : [];
  const rootClass = ["mf-brand", options.rootClass].filter(Boolean).join(" ");
  return node(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", viewBox: `${x} ${y} ${width} ${height}`, role: "img", "aria-label": title, class: rootClass },
    [node("title", {}, [], title), ...style, ...bodyNodes(layout, colorsFor(options), options)],
  );
}
