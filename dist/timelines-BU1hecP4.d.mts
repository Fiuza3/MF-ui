type GlyphChar = "<" | "M" | "F" | "/" | ">";
type GlyphBox = {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
};
type Glyph = {
    d: string;
    advance: number;
    box: GlyphBox;
};
declare const GLYPHS: Readonly<Record<GlyphChar, Glyph>>;

declare const BRAND_VARIANTS: readonly ["horizontal", "monogram", "symbol-block", "symbol-tag", "symbol-cursor"];
type BrandVariant = (typeof BRAND_VARIANTS)[number];
type PartId = "lt" | "m" | "f" | "slash" | "gt" | "cursor";
type GlyphPart = {
    kind: "glyph";
    id: PartId;
    role: "core" | "bracket";
    char: GlyphChar;
    x: number;
};
type RectPart = {
    kind: "rect";
    id: "cursor";
    role: "cursor";
    x: number;
    y: number;
    width: number;
    height: number;
    transient?: boolean;
};
type BrandPart = GlyphPart | RectPart;
type Box = {
    x: number;
    y: number;
    width: number;
    height: number;
};
type BrandLayout = {
    variant: BrandVariant;
    viewBox: Box;
    tile: {
        size: number;
        radius: number;
    } | null;
    content: {
        x: number;
        y: number;
        scale: number;
    };
    parts: BrandPart[];
};
declare function partBox(part: BrandPart): Box;
declare function boundsOf(parts: BrandPart[]): Box;
declare function layoutBrand(variant: BrandVariant): BrandLayout;

declare const BRAND_TONES: readonly ["cyan", "light", "ink", "solid-black", "solid-white"];
type BrandTone = (typeof BRAND_TONES)[number];
type ToneColors = {
    core: string;
    bracket: string;
    bracketOpacity: number;
    cursor: string;
    tile: string;
    knockout: boolean;
};
declare const BRAND_COLORS: {
    readonly cyan: "#3DF2E0";
    readonly ink: "#0B0F14";
    readonly teal: "#0A6E6A";
    readonly ice: "#F7FAFC";
    readonly paper: "#F4F6F7";
    readonly white: "#FFFFFF";
    readonly black: "#000000";
};
declare const TONES: Readonly<Record<BrandTone, ToneColors>>;

type Easing = {
    kind: "cubic";
    points: readonly [number, number, number, number];
} | {
    kind: "linear";
} | {
    kind: "step-end";
};
declare const EASING: {
    expoOut: Easing;
    inOut: Easing;
    softOut: Easing;
    linear: {
        readonly kind: "linear";
    };
    stepEnd: {
        readonly kind: "step-end";
    };
};
declare function easingToCss(easing: Easing): string;
declare function applyEasing(easing: Easing, progress: number): number;

declare const BRAND_ANIMATIONS: readonly ["assemble", "type", "draw", "pulse", "spread"];
type BrandAnimation = (typeof BRAND_ANIMATIONS)[number];
type Frame = {
    opacity: number;
    x: number;
    y: number;
    scale: number;
    draw: number;
    fill: number;
};
type Keyframe = {
    at: number;
} & Partial<Frame>;
type ResolvedKeyframe = {
    at: number;
} & Frame;
type Track = {
    part: PartId;
    delay: number;
    duration: number;
    easing: Easing;
    keyframes: ResolvedKeyframe[];
};
type Trigger = "mount" | "loop" | "hover";
type Timeline = {
    animation: BrandAnimation;
    trigger: Trigger;
    length: number;
    usesStroke: boolean;
    tracks: Track[];
};
declare const REST: Frame;
declare function timelineFor(animation: BrandAnimation, layout: BrandLayout): Timeline;
declare function sampleTrack(track: Track, timeMs: number, trigger: Trigger): Frame;

export { BRAND_ANIMATIONS as B, EASING as E, type Frame as F, GLYPHS as G, type Keyframe as K, type PartId as P, REST as R, TONES as T, BRAND_COLORS as a, BRAND_TONES as b, BRAND_VARIANTS as c, type Box as d, type BrandAnimation as e, type BrandLayout as f, type BrandPart as g, type BrandTone as h, type BrandVariant as i, type Easing as j, type Glyph as k, type GlyphBox as l, type GlyphChar as m, type GlyphPart as n, type RectPart as o, type Timeline as p, type ToneColors as q, type Track as r, type Trigger as s, applyEasing as t, boundsOf as u, easingToCss as v, layoutBrand as w, partBox as x, sampleTrack as y, timelineFor as z };
