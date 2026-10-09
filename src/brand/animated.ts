import { brandAnimationCss } from "./css";
import { layoutBrand, partBox, type BrandLayout, type BrandPart, type BrandVariant, type GlyphPart, type RectPart } from "./layout";
import type { BrandTone } from "./palette";
import { REST, sampleTrack, timelineFor, type BrandAnimation, type Frame, type Timeline } from "./timelines";
import { buildBrandTree, type SvgAttrs, type SvgNode } from "./tree";

export type AnimatedBrandOptions = {
  variant: BrandVariant;
  tone: BrandTone;
  animation: BrandAnimation;
  title?: string;
  bracketOpacity?: number;
  color?: string;
  idPrefix?: string;
};

export type PreparedAnimation = { layout: BrandLayout; timeline: Timeline };

// A digitação precisa de um cursor; variantes sem cursor ganham um sublinhado
// provisório depois do último glifo, invisível fora da animação.
function withTypingCursor(layout: BrandLayout): BrandLayout {
  if (layout.parts.some((part) => part.kind === "rect")) return layout;
  const glyphs = layout.parts.filter((part): part is GlyphPart => part.kind === "glyph");
  const last = glyphs[glyphs.length - 1];
  const cursor: RectPart = { kind: "rect", id: "cursor", role: "cursor", x: last.x + 600, y: -96, width: 300, height: 96, transient: true };
  return { ...layout, parts: [...layout.parts, cursor] };
}

export function prepareAnimation(variant: BrandVariant, animation: BrandAnimation): PreparedAnimation {
  const base = layoutBrand(variant);
  const layout = animation === "type" ? withTypingCursor(base) : base;
  return { layout, timeline: timelineFor(animation, layout) };
}

const withClass = (shape: SvgNode, className: string): SvgNode => ({ ...shape, attrs: { ...shape.attrs, class: className } });

function strokeOf(shape: SvgNode): SvgNode {
  const { d, transform, fill } = shape.attrs;
  return {
    tag: "path",
    attrs: { d, transform, fill: "none", stroke: fill, "stroke-width": 10, "stroke-linejoin": "round", pathLength: 1, "stroke-dasharray": 1, "stroke-dashoffset": 0, class: "mf-brand-stroke" },
    children: [],
  };
}

function strokeChildren(timeline: Timeline) {
  return (part: BrandPart, shape: SvgNode): SvgNode[] =>
    timeline.usesStroke && part.kind === "glyph" ? [withClass(shape, "mf-brand-fill"), strokeOf(shape)] : [shape];
}

export function buildAnimatedBrandTree(options: AnimatedBrandOptions): SvgNode {
  const { layout, timeline } = prepareAnimation(options.variant, options.animation);
  return buildBrandTree({
    ...options,
    decorate: () => layout,
    partChildren: strokeChildren(timeline),
    rootClass: `mf-brand--${options.variant} mf-brand--${options.animation}`,
    style: brandAnimationCss(timeline, options.variant),
  });
}

function frameOf(part: BrandPart, timeline: Timeline, timeMs: number): Frame {
  const track = timeline.tracks.find((candidate) => candidate.part === part.id);
  if (track) return sampleTrack(track, timeMs, timeline.trigger);
  return part.kind === "rect" && part.transient ? { ...REST, opacity: 0 } : REST;
}

// SVG não tem transform-origin no atributo: a escala em torno do centro da
// peça vira translate → scale → translate de volta, igual ao fill-box do CSS.
function frameAttrs(part: BrandPart, frame: Frame): SvgAttrs {
  const box = partBox(part);
  const cx = box.x + box.width / 2;
  const cy = box.y + box.height / 2;
  const transform = `translate(${frame.x} ${frame.y}) translate(${cx} ${cy}) scale(${frame.scale}) translate(${-cx} ${-cy})`;
  return { transform, opacity: Number(frame.opacity.toFixed(4)) };
}

function frameChildren(timeline: Timeline, timeMs: number) {
  return (part: BrandPart, shape: SvgNode): SvgNode[] => {
    if (!timeline.usesStroke || part.kind !== "glyph") return [shape];
    const frame = frameOf(part, timeline, timeMs);
    const fill = { ...shape, attrs: { ...shape.attrs, opacity: Number(frame.fill.toFixed(4)) } };
    const stroke = strokeOf(shape);
    return [fill, { ...stroke, attrs: { ...stroke.attrs, "stroke-dashoffset": Number((1 - frame.draw).toFixed(4)) } }];
  };
}

// Quadro parado no instante `timeMs`: é o que o gerador rasteriza para os PNG/WebP animados.
export function buildFrameTree(options: AnimatedBrandOptions, timeMs: number): SvgNode {
  const { layout, timeline } = prepareAnimation(options.variant, options.animation);
  return buildBrandTree({
    ...options,
    decorate: () => layout,
    partChildren: frameChildren(timeline, timeMs),
    partAttrs: (part) => frameAttrs(part, frameOf(part, timeline, timeMs)),
  });
}
