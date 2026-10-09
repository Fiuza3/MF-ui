import { EASING, applyEasing, type Easing } from "./easing";
import type { BrandLayout, BrandPart, GlyphPart, PartId, RectPart } from "./layout";

// Animações como dados: o CSS dos componentes e os quadros dos PNG/WebP
// animados saem desta mesma definição. Duas fontes de verdade divergiriam no
// primeiro ajuste de tempo.
export const BRAND_ANIMATIONS = ["assemble", "type", "draw", "pulse", "spread"] as const;

export type BrandAnimation = (typeof BRAND_ANIMATIONS)[number];

export type Frame = {
  opacity: number;
  x: number;
  y: number;
  scale: number;
  draw: number;
  fill: number;
};

export type Keyframe = { at: number } & Partial<Frame>;

export type ResolvedKeyframe = { at: number } & Frame;

export type Track = {
  part: PartId;
  delay: number;
  duration: number;
  easing: Easing;
  keyframes: ResolvedKeyframe[];
};

export type Trigger = "mount" | "loop" | "hover";

export type Timeline = {
  animation: BrandAnimation;
  trigger: Trigger;
  length: number;
  usesStroke: boolean;
  tracks: Track[];
};

export const REST: Frame = { opacity: 1, x: 0, y: 0, scale: 1, draw: 1, fill: 1 };

const resolve = (keyframes: Keyframe[]): ResolvedKeyframe[] =>
  keyframes.map((keyframe) => ({ ...REST, ...keyframe }));

type TrackSpec = Omit<Track, "keyframes"> & { keyframes: Keyframe[] };

const track = (spec: TrackSpec): Track => ({ ...spec, keyframes: resolve(spec.keyframes) });

const glyphParts = (layout: BrandLayout) =>
  layout.parts.filter((part): part is GlyphPart => part.kind === "glyph");

const cursorOf = (layout: BrandLayout) =>
  layout.parts.find((part): part is RectPart => part.kind === "rect");

const SIDE: Record<PartId, number> = { lt: -1, m: 0, f: 0, slash: 1, gt: 1, cursor: 1 };

function assemble(layout: BrandLayout): Timeline {
  const tracks = layout.parts.map((part) => {
    if (part.role === "bracket") {
      const from = SIDE[part.id] * (part.id === "gt" ? 300 : 220);
      return track({
        part: part.id,
        delay: 0,
        duration: 900,
        easing: EASING.expoOut,
        keyframes: [{ at: 0, opacity: 0, x: from }, { at: 1 }],
      });
    }
    if (part.role === "cursor") {
      return track({
        part: part.id,
        delay: 750,
        duration: 450,
        easing: EASING.expoOut,
        keyframes: [{ at: 0, opacity: 0, x: -80 }, { at: 1 }],
      });
    }
    const delay = part.id === "m" ? 120 : 200;
    return track({
      part: part.id,
      delay,
      duration: 700,
      easing: EASING.expoOut,
      keyframes: [{ at: 0, opacity: 0, y: 60, scale: 0.92 }, { at: 1 }],
    });
  });
  return { animation: "assemble", trigger: "mount", length: 1200, usesStroke: false, tracks };
}

const TYPE_START = 200;
const TYPE_STEP = 150;
const BLINK = 500;

function typeCursorTrack(glyphs: GlyphPart[], cursor: RectPart, length: number): Track {
  const at = (ms: number) => ms / length;
  // x relativo à posição final do cursor (logo após o último glifo): começa no
  // primeiro glifo e salta para depois de cada letra digitada.
  const steps = glyphs.map((glyph, index) => ({
    at: at(TYPE_START + index * TYPE_STEP),
    x: glyph.x + 600 - cursor.x,
  }));
  const typedAt = TYPE_START + glyphs.length * TYPE_STEP;
  const blinks = [0, 1, 2, 3, 4, 5].map((index) => ({
    at: at(typedAt + index * (BLINK / 2)),
    opacity: index % 2 === 0 ? 0 : 1,
  }));
  const settle = { at: 1, opacity: cursor.transient ? 0 : 1 };
  return track({
    part: "cursor",
    delay: 0,
    duration: length,
    easing: EASING.stepEnd,
    keyframes: [{ at: 0, x: glyphs[0].x - cursor.x }, ...steps, ...blinks, settle],
  });
}

function type(layout: BrandLayout): Timeline {
  const glyphs = glyphParts(layout);
  const cursor = cursorOf(layout);
  const length = TYPE_START + glyphs.length * TYPE_STEP + 3 * BLINK + 200;
  const appear = glyphs.map((glyph, index) =>
    track({
      part: glyph.id,
      delay: TYPE_START + index * TYPE_STEP,
      duration: 1,
      easing: EASING.stepEnd,
      keyframes: [{ at: 0, opacity: 0 }, { at: 1 }],
    }),
  );
  const tracks = cursor ? [...appear, typeCursorTrack(glyphs, cursor, length)] : appear;
  return { animation: "type", trigger: "mount", length, usesStroke: false, tracks };
}

function draw(layout: BrandLayout): Timeline {
  const tracks = layout.parts.map((part, index) => {
    if (part.kind === "rect") {
      return track({
        part: part.id,
        delay: 1300,
        duration: 400,
        easing: EASING.softOut,
        keyframes: [{ at: 0, opacity: 0 }, { at: 1 }],
      });
    }
    return track({
      part: part.id,
      delay: index * 90,
      duration: 1500,
      easing: EASING.inOut,
      keyframes: [{ at: 0, draw: 0, fill: 0 }, { at: 0.62, draw: 1, fill: 0 }, { at: 1 }],
    });
  });
  return { animation: "draw", trigger: "mount", length: 1900, usesStroke: true, tracks };
}

function pulseTrack(part: BrandPart): Track {
  const base = { part: part.id, delay: 0, duration: 2600, easing: EASING.inOut };
  if (part.role === "bracket") {
    return track({
      ...base,
      keyframes: [{ at: 0 }, { at: 0.5, x: SIDE[part.id] * 36, opacity: 0.6 }, { at: 1 }],
    });
  }
  if (part.role === "cursor")
    return track({ ...base, keyframes: [{ at: 0 }, { at: 0.5, opacity: 0 }, { at: 1 }] });
  return track({ ...base, keyframes: [{ at: 0 }, { at: 0.5, scale: 1.02 }, { at: 1 }] });
}

function pulse(layout: BrandLayout): Timeline {
  return {
    animation: "pulse",
    trigger: "loop",
    length: 2600,
    usesStroke: false,
    tracks: layout.parts.map(pulseTrack),
  };
}

const SPREAD: Partial<Record<PartId, number>> = { lt: -70, slash: 30, gt: 70, cursor: 70 };

// Sem colchetes (monograma), quem se afasta são as próprias letras.
const CORE_SPREAD: Partial<Record<PartId, number>> = { m: -30, f: 30, cursor: 60 };

function spread(layout: BrandLayout): Timeline {
  const offsets = layout.parts.some((part) => part.role === "bracket") ? SPREAD : CORE_SPREAD;
  const tracks = layout.parts.flatMap((part) => {
    const x = offsets[part.id];
    if (x === undefined) return [];
    return [
      track({
        part: part.id,
        delay: 0,
        duration: 320,
        easing: EASING.expoOut,
        keyframes: [{ at: 0 }, { at: 1, x }],
      }),
    ];
  });
  return { animation: "spread", trigger: "hover", length: 320, usesStroke: false, tracks };
}

const BUILDERS: Record<BrandAnimation, (layout: BrandLayout) => Timeline> = {
  assemble,
  type,
  draw,
  pulse,
  spread,
};

export function timelineFor(animation: BrandAnimation, layout: BrandLayout): Timeline {
  return BUILDERS[animation](layout);
}

function localTime(track: Track, timeMs: number, trigger: Trigger): number {
  const elapsed = timeMs - track.delay;
  if (trigger === "loop" && elapsed > 0) return elapsed % track.duration;
  return elapsed;
}

// Mesma semântica do CSS: fill-mode both, easing aplicado por segmento entre keyframes.
export function sampleTrack(track: Track, timeMs: number, trigger: Trigger): Frame {
  const progress = Math.min(Math.max(localTime(track, timeMs, trigger) / track.duration, 0), 1);
  const frames = track.keyframes;
  const nextIndex = frames.findIndex((frame) => frame.at >= progress);
  if (nextIndex <= 0) return frames[Math.max(nextIndex, 0)];
  const from = frames[nextIndex - 1];
  const to = frames[nextIndex];
  const span = to.at - from.at;
  const eased = applyEasing(track.easing, span === 0 ? 1 : (progress - from.at) / span);
  const mix = (key: keyof Frame) => from[key] + (to[key] - from[key]) * eased;
  return {
    opacity: mix("opacity"),
    x: mix("x"),
    y: mix("y"),
    scale: mix("scale"),
    draw: mix("draw"),
    fill: mix("fill"),
  };
}
