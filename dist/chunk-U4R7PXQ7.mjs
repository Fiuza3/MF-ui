// src/brand/glyphs.ts
var GLYPHS = {
  "<": {
    d: "M530-144L530-19L70-216L70-367L530-564L530-439L185-292L530-144Z",
    advance: 600,
    box: { x1: 70, y1: -564, x2: 530, y2: -19 }
  },
  M: {
    d: "M343-98L257-98L174-448L174 0L44 0L44-710L204-710L300-334L396-710L556-710L556 0L426 0L426-448L343-98Z",
    advance: 600,
    box: { x1: 44, y1: -710, x2: 556, y2: 0 }
  },
  F: {
    d: "M236 0L94 0L94-710L546-710L546-582L236-582L236-410L528-410L528-285L236-285L236 0Z",
    advance: 600,
    box: { x1: 94, y1: -710, x2: 546, y2: 0 }
  },
  "/": {
    d: "M214 110L86 110L386-750L514-750L214 110Z",
    advance: 600,
    box: { x1: 86, y1: -750, x2: 514, y2: 110 }
  },
  ">": {
    d: "M530-216L70-19L70-144L415-292L70-439L70-564L530-367L530-216Z",
    advance: 600,
    box: { x1: 70, y1: -564, x2: 530, y2: -19 }
  }
};

// src/brand/layout.ts
var BRAND_VARIANTS = [
  "horizontal",
  "monogram",
  "symbol-block",
  "symbol-tag",
  "symbol-cursor"
];
var PART_ID = { "<": "lt", M: "m", F: "f", "/": "slash", ">": "gt" };
var roleOf = (char) => char === "M" || char === "F" ? "core" : "bracket";
var KERNING = {
  "<M": -40,
  MF: -15,
  "F/": -45,
  "/>": -105,
  "</": -120,
  "M>": -40
};
var TILE_SIZE = 1e3;
var TILE_RADIUS = 224;
var CONTENT_WIDTH = { "symbol-block": 720, "symbol-tag": 660, "symbol-cursor": 700 };
function rowItems(chars) {
  return chars.map((char, index) => {
    const next = chars[index + 1];
    const kernAfter = next ? KERNING[`${char}${next}`] ?? 0 : 0;
    return { char, id: PART_ID[char], role: roleOf(char), kernAfter };
  });
}
function placeRow(items) {
  let x = 0;
  return items.map((item) => {
    const part = { kind: "glyph", id: item.id, role: item.role, char: item.char, x };
    x += GLYPHS[item.char].advance + item.kernAfter;
    return part;
  });
}
function partBox(part) {
  if (part.kind === "rect") return { x: part.x, y: part.y, width: part.width, height: part.height };
  const { box } = GLYPHS[part.char];
  return { x: part.x + box.x1, y: box.y1, width: box.x2 - box.x1, height: box.y2 - box.y1 };
}
function boundsOf(parts) {
  const boxes = parts.map(partBox);
  const x1 = Math.min(...boxes.map((b) => b.x));
  const y1 = Math.min(...boxes.map((b) => b.y));
  const x2 = Math.max(...boxes.map((b) => b.x + b.width));
  const y2 = Math.max(...boxes.map((b) => b.y + b.height));
  return { x: x1, y: y1, width: x2 - x1, height: y2 - y1 };
}
function wordLayout(variant, chars) {
  const parts = placeRow(rowItems(chars));
  return {
    variant,
    viewBox: boundsOf(parts),
    tile: null,
    content: { x: 0, y: 0, scale: 1 },
    parts
  };
}
function centerInTile(parts, contentWidth) {
  const bounds = boundsOf(parts);
  const scale = contentWidth / bounds.width;
  return {
    scale,
    x: TILE_SIZE / 2 - (bounds.x + bounds.width / 2) * scale,
    y: TILE_SIZE / 2 - (bounds.y + bounds.height / 2) * scale
  };
}
function symbolLayout(variant, parts) {
  return {
    variant,
    viewBox: { x: 0, y: 0, width: TILE_SIZE, height: TILE_SIZE },
    tile: { size: TILE_SIZE, radius: TILE_RADIUS },
    content: centerInTile(parts, CONTENT_WIDTH[variant]),
    parts
  };
}
function blockSymbol() {
  const letters = placeRow(rowItems(["M", "F"]));
  const f = letters[1];
  const cursor = {
    kind: "rect",
    id: "cursor",
    role: "cursor",
    x: f.x + 600,
    y: -96,
    width: 300,
    height: 96
  };
  return symbolLayout("symbol-block", [...letters, cursor]);
}
function cursorSymbol() {
  const glyphs = placeRow(rowItems(["<", "M", ">"]));
  const gt = glyphs[2];
  const cursor = {
    kind: "rect",
    id: "cursor",
    role: "cursor",
    x: gt.x + 600,
    y: -564,
    width: 230,
    height: 545
  };
  return symbolLayout("symbol-cursor", [...glyphs, cursor]);
}
var LAYOUTS = {
  horizontal: () => wordLayout("horizontal", ["<", "M", "F", "/", ">"]),
  monogram: () => wordLayout("monogram", ["M", "F"]),
  "symbol-block": blockSymbol,
  "symbol-tag": () => symbolLayout("symbol-tag", placeRow(rowItems(["<", "/", ">"]))),
  "symbol-cursor": cursorSymbol
};
function layoutBrand(variant) {
  return LAYOUTS[variant]();
}

// src/brand/palette.ts
var BRAND_TONES = ["cyan", "light", "ink", "solid-black", "solid-white"];
var BRAND_COLORS = {
  cyan: "#3DF2E0",
  ink: "#0B0F14",
  teal: "#0A6E6A",
  ice: "#F7FAFC",
  paper: "#F4F6F7",
  white: "#FFFFFF",
  black: "#000000"
};
var {
  cyan: CYAN,
  ink: INK,
  teal: TEAL,
  ice: ICE,
  paper: PAPER,
  white: WHITE,
  black: BLACK
} = BRAND_COLORS;
var TONES = {
  cyan: {
    core: CYAN,
    bracket: CYAN,
    bracketOpacity: 0.58,
    cursor: CYAN,
    tile: INK,
    knockout: false
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
    knockout: true
  },
  "solid-white": {
    core: WHITE,
    bracket: WHITE,
    bracketOpacity: 1,
    cursor: WHITE,
    tile: WHITE,
    knockout: true
  }
};

// src/brand/tree.ts
var BRAND_TITLE = "MF Desenvolvimento";
var node = (tag, attrs, children = [], text) => ({
  tag,
  attrs,
  children,
  text
});
function colorOf(part, colors) {
  if (part.role === "core") return colors.core;
  if (part.role === "bracket") return colors.bracket;
  return colors.cursor;
}
function partShape(part, fill, opacity) {
  const paint = { fill, ...opacity < 1 ? { "fill-opacity": opacity } : {} };
  if (part.kind === "rect")
    return node("rect", { x: part.x, y: part.y, width: part.width, height: part.height, ...paint });
  return node("path", { d: GLYPHS[part.char].d, transform: `translate(${part.x} 0)`, ...paint });
}
function partNode(part, colors, options) {
  const opacity = part.role === "bracket" ? options.bracketOpacity ?? colors.bracketOpacity : 1;
  const shape = partShape(part, colorOf(part, colors), opacity);
  const children = options.partChildren ? options.partChildren(part, shape) : [shape];
  const transient = part.kind === "rect" && part.transient ? " mf-brand-transient" : "";
  const attrs = {
    class: `mf-brand-part mf-brand-part--${part.id}${transient}`,
    "data-part": part.id,
    ...options.partAttrs?.(part)
  };
  return node("g", attrs, children);
}
function contentTransform(layout) {
  const { x, y, scale } = layout.content;
  return `translate(${x} ${y}) scale(${scale})`;
}
function tileRect(layout, fill, extra = {}) {
  const tile = layout.tile;
  const size = tile?.size ?? 0;
  return node("rect", {
    x: 0,
    y: 0,
    width: size,
    height: size,
    rx: tile?.radius ?? 0,
    fill,
    ...extra
  });
}
function knockoutTile(layout, colors, prefix) {
  const maskId = `${prefix}knockout`;
  const holes = layout.parts.map((part) => partShape(part, BRAND_COLORS.black, 1));
  const mask = node("mask", { id: maskId }, [
    tileRect(layout, BRAND_COLORS.white),
    node("g", { transform: contentTransform(layout) }, holes)
  ]);
  return [node("defs", {}, [mask]), tileRect(layout, colors.tile, { mask: `url(#${maskId})` })];
}
function bodyNodes(layout, colors, options) {
  if (layout.tile && colors.knockout)
    return knockoutTile(layout, colors, options.idPrefix ?? "mf-brand-");
  const parts = layout.parts.map((part) => partNode(part, colors, options));
  const content = node(
    "g",
    { class: "mf-brand-content", transform: contentTransform(layout) },
    parts
  );
  return layout.tile ? [tileRect(layout, colors.tile), content] : [content];
}
function colorsFor(options) {
  const tone = TONES[options.tone];
  if (!options.color) return tone;
  return { ...tone, core: options.color, bracket: options.color, cursor: options.color };
}
function buildBrandTree(options) {
  const base = layoutBrand(options.variant);
  const layout = options.decorate ? options.decorate(base) : base;
  const { x, y, width, height } = layout.viewBox;
  const title = options.title ?? BRAND_TITLE;
  const style = options.style ? [node("style", {}, [], options.style)] : [];
  const rootClass = ["mf-brand", options.rootClass].filter(Boolean).join(" ");
  return node(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: `${x} ${y} ${width} ${height}`,
      role: "img",
      "aria-label": title,
      class: rootClass
    },
    [node("title", {}, [], title), ...style, ...bodyNodes(layout, colorsFor(options), options)]
  );
}

// src/brand/serialize.ts
var escapeText = (value) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var escapeAttr = (value) => escapeText(String(value)).replace(/"/g, "&quot;");
function attrsOf(node2) {
  return Object.entries(node2.attrs).map(([name, value]) => ` ${name}="${escapeAttr(value)}"`).join("");
}
function contentOf(node2) {
  if (node2.tag === "style") return node2.text ?? "";
  if (node2.text !== void 0) return escapeText(node2.text);
  return node2.children.map(serializeSvg).join("");
}
function serializeSvg(node2) {
  const content = contentOf(node2);
  if (content === "") return `<${node2.tag}${attrsOf(node2)}/>`;
  return `<${node2.tag}${attrsOf(node2)}>${content}</${node2.tag}>`;
}

// src/brand/easing.ts
var cubic = (x1, y1, x2, y2) => ({
  kind: "cubic",
  points: [x1, y1, x2, y2]
});
var EASING = {
  // expo-out da marca: o mesmo [0.16, 1, 0.3, 1] dos componentes do MF-UI.
  expoOut: cubic(0.16, 1, 0.3, 1),
  inOut: cubic(0.65, 0, 0.35, 1),
  softOut: cubic(0.33, 1, 0.68, 1),
  linear: { kind: "linear" },
  stepEnd: { kind: "step-end" }
};
function easingToCss(easing) {
  if (easing.kind === "cubic") return `cubic-bezier(${easing.points.join(",")})`;
  return easing.kind;
}
var bezier = (t, p1, p2) => 3 * (1 - t) ** 2 * t * p1 + 3 * (1 - t) * t ** 2 * p2 + t ** 3;
function solveT(x, x1, x2) {
  let low = 0;
  let high = 1;
  for (let step = 0; step < 30; step++) {
    const mid = (low + high) / 2;
    if (bezier(mid, x1, x2) < x) low = mid;
    else high = mid;
  }
  return (low + high) / 2;
}
function applyEasing(easing, progress) {
  const t = Math.min(Math.max(progress, 0), 1);
  if (easing.kind === "linear") return t;
  if (easing.kind === "step-end") return t >= 1 ? 1 : 0;
  const [x1, y1, x2, y2] = easing.points;
  return bezier(solveT(t, x1, x2), y1, y2);
}

// src/brand/timelines.ts
var BRAND_ANIMATIONS = ["assemble", "type", "draw", "pulse", "spread"];
var REST = { opacity: 1, x: 0, y: 0, scale: 1, draw: 1, fill: 1 };
var resolve = (keyframes2) => keyframes2.map((keyframe) => ({ ...REST, ...keyframe }));
var track = (spec) => ({ ...spec, keyframes: resolve(spec.keyframes) });
var glyphParts = (layout) => layout.parts.filter((part) => part.kind === "glyph");
var cursorOf = (layout) => layout.parts.find((part) => part.kind === "rect");
var SIDE = { lt: -1, m: 0, f: 0, slash: 1, gt: 1, cursor: 1 };
function assemble(layout) {
  const tracks = layout.parts.map((part) => {
    if (part.role === "bracket") {
      const from = SIDE[part.id] * (part.id === "gt" ? 300 : 220);
      return track({
        part: part.id,
        delay: 0,
        duration: 900,
        easing: EASING.expoOut,
        keyframes: [{ at: 0, opacity: 0, x: from }, { at: 1 }]
      });
    }
    if (part.role === "cursor") {
      return track({
        part: part.id,
        delay: 750,
        duration: 450,
        easing: EASING.expoOut,
        keyframes: [{ at: 0, opacity: 0, x: -80 }, { at: 1 }]
      });
    }
    const delay = part.id === "m" ? 120 : 200;
    return track({
      part: part.id,
      delay,
      duration: 700,
      easing: EASING.expoOut,
      keyframes: [{ at: 0, opacity: 0, y: 60, scale: 0.92 }, { at: 1 }]
    });
  });
  return { animation: "assemble", trigger: "mount", length: 1200, usesStroke: false, tracks };
}
var TYPE_START = 200;
var TYPE_STEP = 150;
var BLINK = 500;
function typeCursorTrack(glyphs, cursor, length) {
  const at = (ms) => ms / length;
  const steps = glyphs.map((glyph, index) => ({
    at: at(TYPE_START + index * TYPE_STEP),
    x: glyph.x + 600 - cursor.x
  }));
  const typedAt = TYPE_START + glyphs.length * TYPE_STEP;
  const blinks = [0, 1, 2, 3, 4, 5].map((index) => ({
    at: at(typedAt + index * (BLINK / 2)),
    opacity: index % 2 === 0 ? 0 : 1
  }));
  const settle = { at: 1, opacity: cursor.transient ? 0 : 1 };
  return track({
    part: "cursor",
    delay: 0,
    duration: length,
    easing: EASING.stepEnd,
    keyframes: [{ at: 0, x: glyphs[0].x - cursor.x }, ...steps, ...blinks, settle]
  });
}
function type(layout) {
  const glyphs = glyphParts(layout);
  const cursor = cursorOf(layout);
  const length = TYPE_START + glyphs.length * TYPE_STEP + 3 * BLINK + 200;
  const appear = glyphs.map(
    (glyph, index) => track({
      part: glyph.id,
      delay: TYPE_START + index * TYPE_STEP,
      duration: 1,
      easing: EASING.stepEnd,
      keyframes: [{ at: 0, opacity: 0 }, { at: 1 }]
    })
  );
  const tracks = cursor ? [...appear, typeCursorTrack(glyphs, cursor, length)] : appear;
  return { animation: "type", trigger: "mount", length, usesStroke: false, tracks };
}
function draw(layout) {
  const tracks = layout.parts.map((part, index) => {
    if (part.kind === "rect") {
      return track({
        part: part.id,
        delay: 1300,
        duration: 400,
        easing: EASING.softOut,
        keyframes: [{ at: 0, opacity: 0 }, { at: 1 }]
      });
    }
    return track({
      part: part.id,
      delay: index * 90,
      duration: 1500,
      easing: EASING.inOut,
      keyframes: [{ at: 0, draw: 0, fill: 0 }, { at: 0.62, draw: 1, fill: 0 }, { at: 1 }]
    });
  });
  return { animation: "draw", trigger: "mount", length: 1900, usesStroke: true, tracks };
}
function pulseTrack(part) {
  const base = { part: part.id, delay: 0, duration: 2600, easing: EASING.inOut };
  if (part.role === "bracket") {
    return track({
      ...base,
      keyframes: [{ at: 0 }, { at: 0.5, x: SIDE[part.id] * 36, opacity: 0.6 }, { at: 1 }]
    });
  }
  if (part.role === "cursor")
    return track({ ...base, keyframes: [{ at: 0 }, { at: 0.5, opacity: 0 }, { at: 1 }] });
  return track({ ...base, keyframes: [{ at: 0 }, { at: 0.5, scale: 1.02 }, { at: 1 }] });
}
function pulse(layout) {
  return {
    animation: "pulse",
    trigger: "loop",
    length: 2600,
    usesStroke: false,
    tracks: layout.parts.map(pulseTrack)
  };
}
var SPREAD = { lt: -70, slash: 30, gt: 70, cursor: 70 };
var CORE_SPREAD = { m: -30, f: 30, cursor: 60 };
function spread(layout) {
  const offsets = layout.parts.some((part) => part.role === "bracket") ? SPREAD : CORE_SPREAD;
  const tracks = layout.parts.flatMap((part) => {
    const x = offsets[part.id];
    if (x === void 0) return [];
    return [
      track({
        part: part.id,
        delay: 0,
        duration: 320,
        easing: EASING.expoOut,
        keyframes: [{ at: 0 }, { at: 1, x }]
      })
    ];
  });
  return { animation: "spread", trigger: "hover", length: 320, usesStroke: false, tracks };
}
var BUILDERS = {
  assemble,
  type,
  draw,
  pulse,
  spread
};
function timelineFor(animation, layout) {
  return BUILDERS[animation](layout);
}
function localTime(track2, timeMs, trigger) {
  const elapsed = timeMs - track2.delay;
  if (trigger === "loop" && elapsed > 0) return elapsed % track2.duration;
  return elapsed;
}
function sampleTrack(track2, timeMs, trigger) {
  const progress = Math.min(Math.max(localTime(track2, timeMs, trigger) / track2.duration, 0), 1);
  const frames = track2.keyframes;
  const nextIndex = frames.findIndex((frame) => frame.at >= progress);
  if (nextIndex <= 0) return frames[Math.max(nextIndex, 0)];
  const from = frames[nextIndex - 1];
  const to = frames[nextIndex];
  const span = to.at - from.at;
  const eased = applyEasing(track2.easing, span === 0 ? 1 : (progress - from.at) / span);
  const mix = (key) => from[key] + (to[key] - from[key]) * eased;
  return {
    opacity: mix("opacity"),
    x: mix("x"),
    y: mix("y"),
    scale: mix("scale"),
    draw: mix("draw"),
    fill: mix("fill")
  };
}

// src/brand/css.ts
var GROUP_KEYS = ["opacity", "x", "y", "scale"];
var percent = (at) => `${Number((at * 100).toFixed(3))}%`;
var groupDecl = (f) => `opacity:${f.opacity};transform:translate(${f.x}px,${f.y}px) scale(${f.scale})`;
var strokeDecl = (f) => `stroke-dashoffset:${Number((1 - f.draw).toFixed(4))}`;
var fillDecl = (f) => `opacity:${f.fill}`;
var varies = (track2, keys) => keys.some((key) => track2.keyframes.some((frame) => frame[key] !== track2.keyframes[0][key]));
var scopeOf = (variant, timeline) => `.mf-brand--${variant}.mf-brand--${timeline.animation}`;
function keyframes(name, track2, declare) {
  return `@keyframes ${name}{${track2.keyframes.map((f) => `${percent(f.at)}{${declare(f)}}`).join("")}}`;
}
function animate(selector, name, track2, timeline) {
  const iterations = timeline.trigger === "loop" ? "infinite" : "1";
  return `${selector}{animation:${name} ${track2.duration}ms ${easingToCss(track2.easing)} ${track2.delay}ms ${iterations} both}`;
}
var LAYERS = [
  { suffix: "", child: "", keys: GROUP_KEYS, declare: groupDecl },
  { suffix: "-stroke", child: " .mf-brand-stroke", keys: ["draw"], declare: strokeDecl },
  { suffix: "-fill", child: " .mf-brand-fill", keys: ["fill"], declare: fillDecl }
];
function trackRules(track2, timeline, variant) {
  const part = `${scopeOf(variant, timeline)} .mf-brand-part--${track2.part}`;
  return LAYERS.filter((layer) => varies(track2, layer.keys)).map((layer) => {
    const name = `mf-brand-${variant}-${timeline.animation}-${track2.part}${layer.suffix}`;
    return animate(part + layer.child, name, track2, timeline) + keyframes(name, track2, layer.declare);
  }).join("");
}
function hoverRules(timeline, variant) {
  const scope = scopeOf(variant, timeline);
  const transitions = timeline.tracks.map((track2) => {
    const end = track2.keyframes[track2.keyframes.length - 1];
    const part = `.mf-brand-part--${track2.part}`;
    const targets = [
      `${scope}:hover ${part}`,
      `:hover>${scope} ${part}`,
      `:focus-visible>${scope} ${part}`
    ];
    return `${scope} ${part}{transition:transform ${track2.duration}ms ${easingToCss(track2.easing)}}${targets.join(",")}{transform:translate(${end.x}px,${end.y}px) scale(${end.scale})}`;
  });
  return transitions.join("");
}
function brandAnimationCss(timeline, variant) {
  const base = ".mf-brand-part{transform-box:fill-box;transform-origin:center}.mf-brand-transient{opacity:0}";
  const motion = timeline.trigger === "hover" ? hoverRules(timeline, variant) : timeline.tracks.map((track2) => trackRules(track2, timeline, variant)).join("");
  return `${base}@media (prefers-reduced-motion:no-preference){${motion}}`;
}

// src/brand/animated.ts
function withTypingCursor(layout) {
  if (layout.parts.some((part) => part.kind === "rect")) return layout;
  const glyphs = layout.parts.filter((part) => part.kind === "glyph");
  const last = glyphs[glyphs.length - 1];
  const cursor = {
    kind: "rect",
    id: "cursor",
    role: "cursor",
    x: last.x + 600,
    y: -96,
    width: 300,
    height: 96,
    transient: true
  };
  return { ...layout, parts: [...layout.parts, cursor] };
}
function prepareAnimation(variant, animation) {
  const base = layoutBrand(variant);
  const layout = animation === "type" ? withTypingCursor(base) : base;
  return { layout, timeline: timelineFor(animation, layout) };
}
var withClass = (shape, className) => ({
  ...shape,
  attrs: { ...shape.attrs, class: className }
});
function strokeOf(shape) {
  const { d, transform, fill } = shape.attrs;
  return {
    tag: "path",
    attrs: {
      d,
      transform,
      fill: "none",
      stroke: fill,
      "stroke-width": 10,
      "stroke-linejoin": "round",
      pathLength: 1,
      "stroke-dasharray": 1,
      "stroke-dashoffset": 0,
      class: "mf-brand-stroke"
    },
    children: []
  };
}
function strokeChildren(timeline) {
  return (part, shape) => timeline.usesStroke && part.kind === "glyph" ? [withClass(shape, "mf-brand-fill"), strokeOf(shape)] : [shape];
}
function buildAnimatedBrandTree(options) {
  const { layout, timeline } = prepareAnimation(options.variant, options.animation);
  return buildBrandTree({
    ...options,
    decorate: () => layout,
    partChildren: strokeChildren(timeline),
    rootClass: `mf-brand--${options.variant} mf-brand--${options.animation}`,
    style: brandAnimationCss(timeline, options.variant)
  });
}
function frameOf(part, timeline, timeMs) {
  const track2 = timeline.tracks.find((candidate) => candidate.part === part.id);
  if (track2) return sampleTrack(track2, timeMs, timeline.trigger);
  return part.kind === "rect" && part.transient ? { ...REST, opacity: 0 } : REST;
}
function frameAttrs(part, frame) {
  const box = partBox(part);
  const cx = box.x + box.width / 2;
  const cy = box.y + box.height / 2;
  const transform = `translate(${frame.x} ${frame.y}) translate(${cx} ${cy}) scale(${frame.scale}) translate(${-cx} ${-cy})`;
  return { transform, opacity: Number(frame.opacity.toFixed(4)) };
}
function frameChildren(timeline, timeMs) {
  return (part, shape) => {
    if (!timeline.usesStroke || part.kind !== "glyph") return [shape];
    const frame = frameOf(part, timeline, timeMs);
    const fill = { ...shape, attrs: { ...shape.attrs, opacity: Number(frame.fill.toFixed(4)) } };
    const stroke = strokeOf(shape);
    return [
      fill,
      {
        ...stroke,
        attrs: { ...stroke.attrs, "stroke-dashoffset": Number((1 - frame.draw).toFixed(4)) }
      }
    ];
  };
}
function buildFrameTree(options, timeMs) {
  const { layout, timeline } = prepareAnimation(options.variant, options.animation);
  return buildBrandTree({
    ...options,
    decorate: () => layout,
    partChildren: frameChildren(timeline, timeMs),
    partAttrs: (part) => frameAttrs(part, frameOf(part, timeline, timeMs))
  });
}

export {
  GLYPHS,
  BRAND_VARIANTS,
  partBox,
  boundsOf,
  layoutBrand,
  BRAND_TONES,
  BRAND_COLORS,
  TONES,
  BRAND_TITLE,
  partShape,
  buildBrandTree,
  serializeSvg,
  EASING,
  easingToCss,
  applyEasing,
  BRAND_ANIMATIONS,
  REST,
  timelineFor,
  sampleTrack,
  brandAnimationCss,
  prepareAnimation,
  buildAnimatedBrandTree,
  buildFrameTree
};
//# sourceMappingURL=chunk-U4R7PXQ7.mjs.map