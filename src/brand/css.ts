import { easingToCss } from "./easing";
import type { BrandVariant } from "./layout";
import type { Frame, Timeline, Track } from "./timelines";

type Declare = (frame: Frame) => string;

const GROUP_KEYS = ["opacity", "x", "y", "scale"] as const;

const percent = (at: number) => `${Number((at * 100).toFixed(3))}%`;

const groupDecl: Declare = (f) =>
  `opacity:${f.opacity};transform:translate(${f.x}px,${f.y}px) scale(${f.scale})`;

// Traço com pathLength="1": o deslocamento vai de 1 (invisível) a 0 (desenhado).
const strokeDecl: Declare = (f) => `stroke-dashoffset:${Number((1 - f.draw).toFixed(4))}`;

const fillDecl: Declare = (f) => `opacity:${f.fill}`;

const varies = (track: Track, keys: readonly (keyof Frame)[]) =>
  keys.some((key) => track.keyframes.some((frame) => frame[key] !== track.keyframes[0][key]));

const scopeOf = (variant: BrandVariant, timeline: Timeline) =>
  `.mf-brand--${variant}.mf-brand--${timeline.animation}`;

function keyframes(name: string, track: Track, declare: Declare): string {
  return `@keyframes ${name}{${track.keyframes.map((f) => `${percent(f.at)}{${declare(f)}}`).join("")}}`;
}

function animate(selector: string, name: string, track: Track, timeline: Timeline): string {
  const iterations = timeline.trigger === "loop" ? "infinite" : "1";
  return `${selector}{animation:${name} ${track.duration}ms ${easingToCss(track.easing)} ${track.delay}ms ${iterations} both}`;
}

type Layer = { suffix: string; child: string; keys: readonly (keyof Frame)[]; declare: Declare };

const LAYERS: Layer[] = [
  { suffix: "", child: "", keys: GROUP_KEYS, declare: groupDecl },
  { suffix: "-stroke", child: " .mf-brand-stroke", keys: ["draw"], declare: strokeDecl },
  { suffix: "-fill", child: " .mf-brand-fill", keys: ["fill"], declare: fillDecl },
];

function trackRules(track: Track, timeline: Timeline, variant: BrandVariant): string {
  const part = `${scopeOf(variant, timeline)} .mf-brand-part--${track.part}`;
  return LAYERS.filter((layer) => varies(track, layer.keys))
    .map((layer) => {
      const name = `mf-brand-${variant}-${timeline.animation}-${track.part}${layer.suffix}`;
      return (
        animate(part + layer.child, name, track, timeline) + keyframes(name, track, layer.declare)
      );
    })
    .join("");
}

function hoverRules(timeline: Timeline, variant: BrandVariant): string {
  const scope = scopeOf(variant, timeline);
  const transitions = timeline.tracks.map((track) => {
    const end = track.keyframes[track.keyframes.length - 1];
    const part = `.mf-brand-part--${track.part}`;
    const targets = [
      `${scope}:hover ${part}`,
      `:hover>${scope} ${part}`,
      `:focus-visible>${scope} ${part}`,
    ];
    return `${scope} ${part}{transition:transform ${track.duration}ms ${easingToCss(track.easing)}}${targets.join(",")}{transform:translate(${end.x}px,${end.y}px) scale(${end.scale})}`;
  });
  return transitions.join("");
}

// Fora do @media fica só o estado de repouso: com movimento reduzido a marca
// aparece completa e parada, nunca escondida esperando uma animação.
export function brandAnimationCss(timeline: Timeline, variant: BrandVariant): string {
  const base =
    ".mf-brand-part{transform-box:fill-box;transform-origin:center}.mf-brand-transient{opacity:0}";
  const motion =
    timeline.trigger === "hover"
      ? hoverRules(timeline, variant)
      : timeline.tracks.map((track) => trackRules(track, timeline, variant)).join("");
  return `${base}@media (prefers-reduced-motion:no-preference){${motion}}`;
}
