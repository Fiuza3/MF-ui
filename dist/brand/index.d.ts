import { i as BrandVariant, h as BrandTone, f as BrandLayout, g as BrandPart, p as Timeline, e as BrandAnimation } from '../timelines-DO4-gl_I.js';
export { B as BRAND_ANIMATIONS, a as BRAND_COLORS, b as BRAND_TONES, c as BRAND_VARIANTS, d as Box, E as EASING, j as Easing, F as Frame, G as GLYPHS, k as Glyph, l as GlyphBox, m as GlyphChar, n as GlyphPart, K as Keyframe, P as PartId, R as REST, o as RectPart, T as TONES, q as ToneColors, r as Track, s as Trigger, t as applyEasing, u as boundsOf, v as easingToCss, w as layoutBrand, x as partBox, y as sampleTrack, z as timelineFor } from '../timelines-DO4-gl_I.js';

type SvgAttrs = Record<string, string | number>;
type SvgNode = {
    tag: string;
    attrs: SvgAttrs;
    children: SvgNode[];
    text?: string;
};
type BrandTreeOptions = {
    variant: BrandVariant;
    tone: BrandTone;
    title?: string;
    bracketOpacity?: number;
    color?: string;
    idPrefix?: string;
    decorate?: (layout: BrandLayout) => BrandLayout;
    partChildren?: (part: BrandPart, fill: SvgNode) => SvgNode[];
    partAttrs?: (part: BrandPart) => SvgAttrs;
    rootClass?: string;
    style?: string;
};
declare const BRAND_TITLE = "MF Desenvolvimento";
declare function partShape(part: BrandPart, fill: string, opacity: number): SvgNode;
declare function buildBrandTree(options: BrandTreeOptions): SvgNode;

declare function serializeSvg(node: SvgNode): string;

declare function brandAnimationCss(timeline: Timeline, variant: BrandVariant): string;

type AnimatedBrandOptions = {
    variant: BrandVariant;
    tone: BrandTone;
    animation: BrandAnimation;
    title?: string;
    bracketOpacity?: number;
    color?: string;
    idPrefix?: string;
};
type PreparedAnimation = {
    layout: BrandLayout;
    timeline: Timeline;
};
declare function prepareAnimation(variant: BrandVariant, animation: BrandAnimation): PreparedAnimation;
declare function buildAnimatedBrandTree(options: AnimatedBrandOptions): SvgNode;
declare function buildFrameTree(options: AnimatedBrandOptions, timeMs: number): SvgNode;

export { type AnimatedBrandOptions, BRAND_TITLE, BrandAnimation, BrandLayout, BrandPart, BrandTone, type BrandTreeOptions, BrandVariant, type PreparedAnimation, type SvgAttrs, type SvgNode, Timeline, brandAnimationCss, buildAnimatedBrandTree, buildBrandTree, buildFrameTree, partShape, prepareAnimation, serializeSvg };
