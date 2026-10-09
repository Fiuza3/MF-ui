'use client'

"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  About: () => About,
  Accordion: () => Accordion,
  AccordionContent: () => AccordionContent,
  AccordionItem: () => AccordionItem,
  AccordionTrigger: () => AccordionTrigger,
  AnimatedIcon: () => AnimatedIcon,
  AppShell: () => AppShell,
  BRAND_ANIMATIONS: () => BRAND_ANIMATIONS,
  BRAND_TONES: () => BRAND_TONES,
  BRAND_VARIANTS: () => BRAND_VARIANTS,
  Badge: () => Badge,
  BrandMark: () => BrandMark,
  BrandMarkAnimated: () => BrandMarkAnimated,
  Button: () => Button,
  Card: () => Card,
  CardAction: () => CardAction,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  Checkbox: () => Checkbox,
  Contact: () => Contact,
  CopyField: () => CopyField,
  DataTable: () => DataTable,
  Dialog: () => Dialog,
  DialogClose: () => DialogClose,
  DialogContent: () => DialogContent,
  DialogDescription: () => DialogDescription,
  DialogFooter: () => DialogFooter,
  DialogHeader: () => DialogHeader,
  DialogOverlay: () => DialogOverlay,
  DialogPortal: () => DialogPortal,
  DialogTitle: () => DialogTitle,
  DialogTrigger: () => DialogTrigger,
  DropdownMenu: () => DropdownMenu,
  DropdownMenuCheckboxItem: () => DropdownMenuCheckboxItem,
  DropdownMenuContent: () => DropdownMenuContent,
  DropdownMenuGroup: () => DropdownMenuGroup,
  DropdownMenuItem: () => DropdownMenuItem,
  DropdownMenuLabel: () => DropdownMenuLabel,
  DropdownMenuPortal: () => DropdownMenuPortal,
  DropdownMenuRadioGroup: () => DropdownMenuRadioGroup,
  DropdownMenuRadioItem: () => DropdownMenuRadioItem,
  DropdownMenuSeparator: () => DropdownMenuSeparator,
  DropdownMenuShortcut: () => DropdownMenuShortcut,
  DropdownMenuSub: () => DropdownMenuSub,
  DropdownMenuSubContent: () => DropdownMenuSubContent,
  DropdownMenuSubTrigger: () => DropdownMenuSubTrigger,
  DropdownMenuTrigger: () => DropdownMenuTrigger,
  EmptyState: () => EmptyState,
  Footer: () => Footer,
  FormField: () => FormField,
  Hero: () => Hero,
  Input: () => Input,
  Label: () => Label,
  Logo: () => Logo,
  LogoAnimado: () => LogoAnimado,
  Navbar: () => Navbar,
  NodeNetwork: () => NodeNetwork,
  PageHeader: () => PageHeader,
  Pagination: () => Pagination,
  PaginationContent: () => PaginationContent,
  PaginationControl: () => PaginationControl,
  PaginationEllipsis: () => PaginationEllipsis,
  PaginationItem: () => PaginationItem,
  PaginationLink: () => PaginationLink,
  PaginationNext: () => PaginationNext,
  PaginationPrevious: () => PaginationPrevious,
  Process: () => Process,
  Projects: () => Projects,
  RATIO_ALTURA_LOGO: () => RATIO_ALTURA_LOGO,
  RATIO_AVANCO_LOGO: () => RATIO_AVANCO_LOGO,
  RATIO_PADDING_LOGO: () => RATIO_PADDING_LOGO,
  Reveal: () => Reveal,
  Select: () => Select,
  SelectContent: () => SelectContent,
  SelectGroup: () => SelectGroup,
  SelectItem: () => SelectItem,
  SelectLabel: () => SelectLabel,
  SelectScrollDownButton: () => SelectScrollDownButton,
  SelectScrollUpButton: () => SelectScrollUpButton,
  SelectSeparator: () => SelectSeparator,
  SelectTrigger: () => SelectTrigger,
  SelectValue: () => SelectValue,
  Separator: () => Separator,
  Services: () => Services,
  Sheet: () => Sheet,
  SheetClose: () => SheetClose,
  SheetContent: () => SheetContent,
  SheetDescription: () => SheetDescription,
  SheetFooter: () => SheetFooter,
  SheetHeader: () => SheetHeader,
  SheetTitle: () => SheetTitle,
  SheetTrigger: () => SheetTrigger,
  Skeleton: () => Skeleton,
  Stack: () => Stack,
  StatCard: () => StatCard,
  Switch: () => Switch,
  Table: () => Table,
  TableBody: () => TableBody,
  TableCaption: () => TableCaption,
  TableCell: () => TableCell,
  TableFooter: () => TableFooter,
  TableHead: () => TableHead,
  TableHeader: () => TableHeader,
  TableRow: () => TableRow,
  Tabs: () => Tabs,
  TabsContent: () => TabsContent,
  TabsList: () => TabsList,
  TabsTrigger: () => TabsTrigger,
  Testimonials: () => Testimonials,
  Textarea: () => Textarea,
  Toast: () => ToastRoot,
  ToastAction: () => ToastAction,
  ToastClose: () => ToastClose,
  ToastComponentProvider: () => ToastComponentProvider,
  ToastDescription: () => ToastDescription,
  ToastProvider: () => ToastProvider,
  ToastTitle: () => ToastTitle,
  ToastViewport: () => ToastViewport,
  Tooltip: () => Tooltip,
  TooltipContent: () => TooltipContent,
  TooltipProvider: () => TooltipProvider,
  TooltipTrigger: () => TooltipTrigger,
  badgeVariants: () => badgeVariants,
  buttonVariants: () => buttonVariants,
  cn: () => cn,
  cores: () => cores,
  curvas: () => curvas,
  duracoes: () => duracoes,
  familias: () => familias,
  lerToken: () => lerToken,
  pesos: () => pesos,
  toastVariants: () => toastVariants,
  tokensDeCor: () => tokensDeCor,
  tokensDeMotion: () => tokensDeMotion,
  useToast: () => useToast
});
module.exports = __toCommonJS(index_exports);

// src/tokens/cores.ts
var NOMES = {
  fundo: "--background",
  texto: "--foreground",
  superficie: "--card",
  superficieTexto: "--card-foreground",
  superficieElevada: "--surface-raised",
  flutuante: "--popover",
  flutuanteTexto: "--popover-foreground",
  primaria: "--primary",
  primariaTexto: "--primary-foreground",
  primariaHover: "--primary-hover",
  primariaSutil: "--cyan-dim",
  marca: "--brand",
  marcaTexto: "--brand-foreground",
  secundaria: "--secondary",
  secundariaTexto: "--secondary-foreground",
  neutra: "--muted",
  neutraTexto: "--muted-foreground",
  textoSutil: "--subtle-foreground",
  destaque: "--accent",
  destaqueTexto: "--accent-foreground",
  alerta: "--warning",
  alertaTexto: "--warning-foreground",
  sucesso: "--success",
  sucessoTexto: "--success-foreground",
  erro: "--destructive",
  erroTexto: "--destructive-foreground",
  borda: "--border",
  bordaCampo: "--input",
  foco: "--ring"
};
var tokensDeCor = NOMES;
var cores = Object.fromEntries(
  Object.entries(NOMES).map(([chave, prop]) => [chave, `var(${prop})`])
);

// src/tokens/tipografia.ts
var familias = {
  sans: "var(--fonte-sans), system-ui, -apple-system, sans-serif",
  mono: "var(--fonte-mono), ui-monospace, SFMono-Regular, Menlo, monospace",
  logo: "'MF Logo Mono', ui-monospace, SFMono-Regular, Menlo, monospace"
};
var pesos = {
  regular: 400,
  medio: 500,
  semibold: 600,
  bold: 700
};

// src/tokens/motion.ts
var DURACOES = {
  micro: "--mf-duration-micro",
  rapida: "--mf-duration-fast",
  entrada: "--mf-duration-reveal",
  secao: "--mf-duration-section"
};
var CURVAS = {
  expo: "--mf-ease-expo",
  power: "--mf-ease-power",
  suave: "--mf-ease-soft"
};
var tokensDeMotion = { duracoes: DURACOES, curvas: CURVAS };
var duracoes = Object.fromEntries(
  Object.entries(DURACOES).map(([chave, prop]) => [chave, `var(${prop})`])
);
var curvas = Object.fromEntries(
  Object.entries(CURVAS).map(([chave, prop]) => [chave, `var(${prop})`])
);

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

// src/componentes/BrandMark.tsx
var import_react2 = require("react");

// src/componentes/brand-node.tsx
var import_react = require("react");
var REACT_ATTR = {
  class: "className",
  "fill-opacity": "fillOpacity",
  "stroke-width": "strokeWidth",
  "stroke-dasharray": "strokeDasharray",
  "stroke-dashoffset": "strokeDashoffset",
  "stroke-linejoin": "strokeLinejoin"
};
function reactAttrs(attrs) {
  const props = {};
  for (const [name, value] of Object.entries(attrs)) props[REACT_ATTR[name] ?? name] = value;
  return props;
}
function childrenOf(node2, skipTitle) {
  if (node2.text !== void 0) return [node2.text];
  const visible = skipTitle ? node2.children.filter((child) => child.tag !== "title") : node2.children;
  return visible.map((child, index) => toElement(child, index));
}
function toElement(node2, key, root) {
  const base = reactAttrs(node2.attrs);
  for (const name of root?.drop ?? []) delete base[name];
  const props = { ...base, ...root?.props, key };
  return (0, import_react.createElement)(node2.tag, props, ...childrenOf(node2, root?.skipTitle ?? false));
}
function renderBrandRoot(tree, root) {
  return toElement(tree, 0, root);
}
function joinClasses(...parts) {
  return parts.filter(Boolean).join(" ");
}

// src/componentes/brand-root.ts
function rootOverrides({
  tree,
  height,
  decorative,
  className
}) {
  const base = { width: "auto", overflow: "visible" };
  const props = {
    style: typeof height === "number" ? base : { ...base, height },
    className: joinClasses(String(tree.attrs.class ?? ""), className)
  };
  if (typeof height === "number") props.height = height;
  if (decorative) {
    props["aria-hidden"] = "true";
    props.focusable = "false";
  }
  return { props, drop: decorative ? ["role", "aria-label"] : [], skipTitle: decorative };
}

// src/componentes/BrandMark.tsx
function useBrandIdPrefix() {
  return `mf-brand-${(0, import_react2.useId)().replace(/[^A-Za-z0-9_-]/g, "")}-`;
}
function BrandMark({
  variant = "horizontal",
  tone = "cyan",
  height = 24,
  color,
  title,
  bracketOpacity,
  decorative = false,
  className
}) {
  const idPrefix = useBrandIdPrefix();
  const tree = buildBrandTree({ variant, tone, color, title, bracketOpacity, idPrefix });
  return renderBrandRoot(tree, rootOverrides({ tree, height, decorative, className }));
}

// src/componentes/Logo.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var RATIO_AVANCO_LOGO = 13.2 / 22;
var RATIO_ALTURA_LOGO = 30 / 22;
var RATIO_PADDING_LOGO = 1 / 22;
var VIEWBOX_HEIGHT = layoutBrand("horizontal").viewBox.height;
var alturaDoLogo = (tamanho) => tamanho * VIEWBOX_HEIGHT / 1e3;
var opacidadePadraoDosColchetes = (compacto) => compacto ? 0.28 : 0.58;
function Logo({
  tamanho = 24,
  cor = "var(--cyan)",
  opacidadeColchetes,
  compacto = false,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    BrandMark,
    {
      variant: "horizontal",
      tone: "cyan",
      color: cor,
      height: alturaDoLogo(tamanho),
      bracketOpacity: opacidadeColchetes ?? opacidadePadraoDosColchetes(compacto),
      className
    }
  );
}

// src/componentes/BrandMarkAnimated.tsx
var import_react3 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
function BrandMarkAnimated({
  animation = "assemble",
  variant = "horizontal",
  tone = "cyan",
  height = 24,
  color,
  title,
  bracketOpacity,
  decorative = false,
  replayKey,
  className
}) {
  const idPrefix = useBrandIdPrefix();
  const tree = buildAnimatedBrandTree({
    variant,
    tone,
    animation,
    color,
    title,
    bracketOpacity,
    idPrefix
  });
  const svg = renderBrandRoot(tree, rootOverrides({ tree, height, decorative, className }));
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react3.Fragment, { children: svg }, replayKey);
}

// src/componentes/LogoAnimado.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var MARCA = "MF Desenvolvimento";
function LogoAnimado({
  tamanho = 24,
  cor = "var(--cyan)",
  opacidadeColchetes,
  compacto = false,
  onClick,
  label = MARCA,
  className
}) {
  const brilho = onClick ? "group-hover/logo:[filter:drop-shadow(0_0_9px_var(--cyan-glow))]" : "";
  const svg = /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    BrandMarkAnimated,
    {
      animation: "assemble",
      color: cor,
      height: alturaDoLogo(tamanho),
      title: label,
      bracketOpacity: opacidadeColchetes ?? opacidadePadraoDosColchetes(compacto),
      className: `transition-[filter] duration-300 ${brilho} ${className ?? ""}`
    }
  );
  if (onClick) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "button",
      {
        type: "button",
        "aria-label": label === MARCA ? MARCA : `${label} \u2014 ${MARCA}`,
        onClick,
        className: "group/logo inline-flex items-center rounded-sm outline-none focus-visible:ring-[3px] focus-visible:ring-ring",
        children: svg
      }
    );
  }
  return svg;
}

// src/componentes/Navbar.tsx
var import_react4 = require("react");

// src/lib/comportamento-de-scroll.ts
function comportamentoDeScroll() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

// src/lib/link-externo.ts
var URL_ABSOLUTA = /^https?:\/\//i;
function propsDeLink(href) {
  return URL_ABSOLUTA.test(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

// src/componentes/Navbar.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var FOCO = "focus-visible:ring-ring focus-visible:ring-[3px] focus-visible:outline-none";
function propsDoLinkDeMenu(link) {
  return link.externo ? { target: "_blank", rel: "noopener noreferrer" } : {};
}
function Navbar({
  links = [],
  ctaHref,
  ctaLabel = "Fale comigo",
  acoes,
  logoLabel = "Ir para o topo",
  onLogoClick
}) {
  const [isScrolled, setIsScrolled] = (0, import_react4.useState)(false);
  const [menuOpen, setMenuOpen] = (0, import_react4.useState)(false);
  const headerRef = (0, import_react4.useRef)(null);
  const hamburgerRef = (0, import_react4.useRef)(null);
  const menuId = (0, import_react4.useId)();
  useScrollado(setIsScrolled);
  useFecharMenu({ aberto: menuOpen, setAberto: setMenuOpen, headerRef, hamburgerRef });
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "header",
    {
      ref: headerRef,
      className: `fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${isScrolled || menuOpen ? "border-line bg-background/90 border-b backdrop-blur-md" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex w-full items-center justify-between px-5 py-4 sm:px-8 lg:px-10", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            LogoAnimado,
            {
              compacto: isScrolled,
              onClick: onLogoClick ?? (() => window.scrollTo({ top: 0, behavior: comportamentoDeScroll() })),
              label: logoLabel
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(NavDesktop, { links, ctaHref, ctaLabel, acoes }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            Hamburguer,
            {
              ref: hamburgerRef,
              aberto: menuOpen,
              controla: menuId,
              alternar: () => setMenuOpen(!menuOpen)
            }
          )
        ] }),
        menuOpen && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          NavMobile,
          {
            id: menuId,
            links,
            ctaHref,
            ctaLabel,
            acoes,
            fechar: () => setMenuOpen(false)
          }
        )
      ]
    }
  );
}
function useScrollado(setIsScrolled) {
  (0, import_react4.useEffect)(() => {
    const handler = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [setIsScrolled]);
}
function useFecharMenu({ aberto, setAberto, headerRef, hamburgerRef }) {
  (0, import_react4.useEffect)(() => {
    if (!aberto) return;
    const fechar = () => setAberto(false);
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      fechar();
      hamburgerRef.current?.focus();
    };
    const onPointer = (e) => {
      if (e.target instanceof Node && !headerRef.current?.contains(e.target)) fechar();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [aberto, setAberto, headerRef, hamburgerRef]);
}
function NavDesktop({ links, ctaHref, ctaLabel, acoes }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("nav", { "aria-label": "Navega\xE7\xE3o principal", className: "hidden items-center gap-8 md:flex", children: [
    links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "a",
      {
        href: link.href,
        ...propsDoLinkDeMenu(link),
        className: `text-gray-text hover:text-foreground rounded px-1 py-0.5 font-mono text-sm tracking-wide transition-colors ${FOCO}`,
        children: link.label
      },
      link.href
    )),
    acoes && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex items-center gap-2", children: acoes }),
    ctaHref && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "a",
      {
        href: ctaHref,
        ...propsDeLink(ctaHref),
        className: `border-cyan text-cyan hover:bg-cyan hover:text-background ml-2 rounded border px-4 py-1.5 font-mono text-sm transition-all duration-200 ${FOCO}`,
        children: ctaLabel
      }
    )
  ] });
}
function NavMobile({
  id,
  links,
  ctaHref,
  ctaLabel,
  acoes,
  fechar
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "mf-entrada mf-entrada-down border-line bg-background absolute inset-x-0 top-full border-b md:hidden", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("nav", { id, "aria-label": "Menu mobile", className: "flex flex-col gap-1 px-6 py-6", children: [
    links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "a",
      {
        href: link.href,
        ...propsDoLinkDeMenu(link),
        onClick: fechar,
        className: `text-gray-text hover:text-foreground flex min-h-11 items-center rounded py-2 font-mono text-sm transition-colors ${FOCO}`,
        children: link.label
      },
      link.href
    )),
    ctaHref && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "a",
      {
        href: ctaHref,
        ...propsDeLink(ctaHref),
        onClick: fechar,
        className: `border-cyan text-cyan hover:bg-cyan hover:text-background mt-4 flex min-h-11 items-center justify-center rounded border px-4 py-2 text-center font-mono text-sm transition-all ${FOCO}`,
        children: ctaLabel
      }
    ),
    acoes && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "mt-4 flex items-center gap-2", children: acoes })
  ] }) });
}
function Hamburguer({ ref, aberto, controla, alternar }) {
  const barra = "bg-foreground block h-px w-6 transition-all";
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "button",
    {
      ref,
      type: "button",
      "aria-label": aberto ? "Fechar menu" : "Abrir menu",
      "aria-expanded": aberto,
      "aria-controls": controla,
      onClick: alternar,
      className: `flex size-11 flex-col items-center justify-center gap-1.5 rounded md:hidden ${FOCO}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: `${barra} ${aberto ? "translate-y-[7px] rotate-45" : ""}` }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: `${barra} ${aberto ? "opacity-0" : ""}` }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: `${barra} ${aberto ? "-translate-y-[7px] -rotate-45" : ""}` })
      ]
    }
  );
}

// src/componentes/Footer.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var ROTULOS_PADRAO = {
  resumo: "runtime summary",
  local: "location",
  cnpj: "cnpj",
  contato: "contact",
  saida: "process.exit(0)"
};
function Footer({
  links = [],
  email,
  localizacao,
  cnpj,
  nomeEmpresa = "MF Desenvolvimento",
  onLogoClick,
  rotulos
}) {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const r = { ...ROTULOS_PADRAO, ...rotulos };
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "footer",
    {
      className: "relative overflow-hidden border-t border-line py-16 lg:py-24",
      "aria-label": "Rodap\xE9 do site",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:items-end", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "min-w-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "mb-8", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              LogoAnimado,
              {
                label: "Voltar ao topo",
                onClick: onLogoClick ?? (() => window.scrollTo({ top: 0, behavior: comportamentoDeScroll() }))
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              "svg",
              {
                "aria-hidden": "true",
                focusable: "false",
                overflow: "visible",
                viewBox: "0 0 280 90",
                className: "w-full max-w-[67.2rem] select-none",
                children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                  "text",
                  {
                    x: "0",
                    y: "77",
                    className: "fill-cyan/10 font-mono font-black",
                    fontSize: "100",
                    letterSpacing: "-5",
                    children: "<MF/>"
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "grid min-w-0 gap-8 font-mono", children: [
            (email || localizacao || cnpj) && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "rounded border border-line bg-surface p-5", children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "text-xs uppercase tracking-[0.2em] text-gray-text", children: r.resumo }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mt-5 grid gap-3 text-sm", children: [
                localizacao && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { className: "flex items-baseline justify-between gap-4 border-b border-line pb-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "text-gray-text shrink-0", children: r.local }),
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "text-foreground min-w-0 text-right [overflow-wrap:anywhere]", children: localizacao })
                ] }),
                cnpj && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { className: "flex items-baseline justify-between gap-4 border-b border-line pb-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "text-gray-text shrink-0", children: r.cnpj }),
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "text-foreground min-w-0 text-right [overflow-wrap:anywhere]", children: cnpj })
                ] }),
                email && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { className: "flex items-baseline justify-between gap-4", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "text-gray-text shrink-0", children: r.contato }),
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                    "a",
                    {
                      href: `mailto:${email}`,
                      className: "text-cyan hover:text-foreground focus-visible:ring-ring min-w-0 rounded-sm text-right [overflow-wrap:anywhere] focus-visible:ring-[3px] focus-visible:outline-none",
                      children: email
                    }
                  )
                ] })
              ] })
            ] }),
            links.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("nav", { "aria-label": "Links do rodap\xE9", className: "flex flex-wrap gap-x-3 gap-y-1.5", children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              "a",
              {
                href: link.href,
                className: "border-line text-gray-text hover:border-cyan/60 hover:text-foreground focus-visible:ring-ring inline-flex min-h-11 items-center rounded border px-3 py-2 text-xs transition-colors focus-visible:ring-[3px] focus-visible:outline-none",
                children: link.label
              },
              link.href
            )) }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex flex-col gap-3 border-line text-gray-text border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { children: [
                "\xA9 ",
                year,
                " ",
                nomeEmpresa
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "text-cyan", children: "$" }),
                " ",
                r.saida
              ] })
            ] })
          ] })
        ] }) })
      ]
    }
  );
}

// src/componentes/Reveal.tsx
var React = __toESM(require("react"));
var import_jsx_runtime6 = require("react/jsx-runtime");
function Reveal({
  as = "div",
  variant = "up",
  delayMs = 0,
  margin = "-70px",
  className,
  children,
  ...rest
}) {
  const ref = React.useRef(null);
  const escondido = variant === "left" ? "mf-reveal-hidden-left" : "mf-reveal-hidden";
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof window.IntersectionObserver === "undefined") return;
    el.classList.add(escondido);
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          el.classList.remove(escondido);
          el.classList.add("mf-reveal-visible");
          observer.disconnect();
        }
      },
      { rootMargin: margin }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      el.classList.remove(escondido, "mf-reveal-visible");
    };
  }, [margin, escondido]);
  const Tag = as;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    Tag,
    {
      ref,
      className,
      style: delayMs ? { "--mf-entrada-delay": `${delayMs}ms` } : void 0,
      ...rest,
      children
    }
  );
}

// src/componentes/NodeNetwork.tsx
var React2 = __toESM(require("react"));

// src/lib/token.ts
function lerToken(el, token, fallback) {
  const estilo = getComputedStyle(el);
  const valor = estilo.getPropertyValue(token).trim();
  if (valor) return valor;
  if (fallback) return fallback;
  return estilo.color?.trim() || "transparent";
}

// src/componentes/NodeNetwork.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function lerCor(el, override) {
  return override ?? lerToken(el, tokensDeCor.primaria);
}
function NodeNetwork({
  count = 52,
  maxDistance = 160,
  speed = 0.45,
  color,
  className
}) {
  const canvasRef = React2.useRef(null);
  React2.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const el = canvas;
    const ctx = context;
    const reduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let corAtual = lerCor(el, color);
    let largura = 0;
    let altura = 0;
    let animId = 0;
    const nodes = [];
    function resize() {
      const dpr = window.devicePixelRatio || 1;
      largura = el.offsetWidth;
      altura = el.offsetHeight;
      el.width = largura * dpr;
      el.height = altura * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes.length = 0;
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * largura,
          y: Math.random() * altura,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed
        });
      }
      if (reduzido) desenhar();
    }
    function mover() {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0) n.x = largura;
        else if (n.x > largura) n.x = 0;
        if (n.y < 0) n.y = altura;
        else if (n.y > altura) n.y = 0;
      }
    }
    function desenharLigacoes() {
      ctx.strokeStyle = corAtual;
      ctx.lineWidth = 0.8;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist >= maxDistance) continue;
          ctx.globalAlpha = (1 - dist / maxDistance) * 0.28;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }
    function desenharNos() {
      ctx.fillStyle = corAtual;
      ctx.globalAlpha = 0.55;
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
    function desenhar() {
      ctx.clearRect(0, 0, largura, altura);
      desenharLigacoes();
      desenharNos();
    }
    function tick() {
      mover();
      desenhar();
      animId = requestAnimationFrame(tick);
    }
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    resize();
    const mo = new MutationObserver(() => {
      corAtual = lerCor(el, color);
      if (reduzido) desenhar();
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    if (!reduzido) animId = requestAnimationFrame(tick);
    return () => {
      ro.disconnect();
      mo.disconnect();
      if (animId) cancelAnimationFrame(animId);
    };
  }, [count, maxDistance, speed, color]);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "canvas",
    {
      ref: canvasRef,
      "aria-hidden": "true",
      className,
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none"
      }
    }
  );
}

// src/primitivos/Button.tsx
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");

// src/lib/cn.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/primitivos/Spinner.tsx
var import_lucide_react = require("lucide-react");
var import_jsx_runtime8 = require("react/jsx-runtime");
function Spinner({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    import_lucide_react.Loader2Icon,
    {
      role: "status",
      "aria-label": "Carregando",
      "data-slot": "spinner",
      className: cn("size-4 animate-spin motion-reduce:animate-none", className),
      ...props
    }
  );
}

// src/primitivos/Button.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring focus-visible:ring-[3px] aria-invalid:not-focus-visible:ring-destructive/20 dark:aria-invalid:not-focus-visible:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive",
        outline: "border bg-background shadow-xs hover:bg-foreground/10 hover:text-foreground dark:bg-input/30 dark:border-input",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-foreground/10 hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        // xs/icon-xs existem para ferramenta densa (painel, admin), onde o sm
        // ainda empurra a linha da tabela. Fora desse contexto, use sm.
        xs: "h-7 rounded-md gap-1 px-2 text-xs has-[>svg]:px-1.5",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-7",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  disabled,
  children,
  ...props
}) {
  const estado = loading ? { "aria-busy": true, "aria-disabled": true } : {};
  if (asChild) {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      import_react_slot.Slot,
      {
        "data-slot": "button",
        className: cn(buttonVariants({ variant, size, className })),
        ...estado,
        ...props,
        children
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    "button",
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      disabled: disabled || loading,
      ...estado,
      ...props,
      children: [
        loading && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Spinner, {}),
        children
      ]
    }
  );
}

// src/primitivos/Card.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
function Card({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    "div",
    {
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function CardAction({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    "div",
    {
      "data-slot": "card-action",
      className: cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { "data-slot": "card-content", className: cn("px-6", className), ...props });
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    "div",
    {
      "data-slot": "card-footer",
      className: cn("flex items-center px-6 [.border-t]:pt-6", className),
      ...props
    }
  );
}

// src/primitivos/Badge.tsx
var import_react_slot2 = require("@radix-ui/react-slot");
var import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_runtime11 = require("react/jsx-runtime");
var badgeVariants = (0, import_class_variance_authority2.cva)(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring focus-visible:ring-[3px] aria-invalid:not-focus-visible:ring-destructive/20 dark:aria-invalid:not-focus-visible:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-destructive-foreground [a&]:hover:bg-destructive/90 focus-visible:ring-destructive",
        outline: "text-foreground [a&]:hover:bg-foreground/10 [a&]:hover:text-foreground dark:border-input"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? import_react_slot2.Slot : "span";
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Comp, { "data-slot": "badge", className: cn(badgeVariants({ variant }), className), ...props });
}

// src/primitivos/Input.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function Input({ className, type: type2, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    "input",
    {
      type: type2,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:mr-3 file:inline-flex file:h-7 file:items-center file:rounded-sm file:border-0 file:bg-muted file:px-2 file:text-base file:font-medium md:file:text-sm disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring focus-visible:ring-[3px]",
        "aria-invalid:not-focus-visible:ring-destructive/20 dark:aria-invalid:not-focus-visible:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}

// src/primitivos/Textarea.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring aria-invalid:not-focus-visible:ring-destructive/20 dark:aria-invalid:not-focus-visible:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}

// src/primitivos/Label.tsx
var LabelPrimitive = __toESM(require("@radix-ui/react-label"));
var import_jsx_runtime14 = require("react/jsx-runtime");
function Label({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}

// src/primitivos/Separator.tsx
var SeparatorPrimitive = __toESM(require("@radix-ui/react-separator"));
var import_jsx_runtime15 = require("react/jsx-runtime");
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    SeparatorPrimitive.Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}

// src/primitivos/Accordion.tsx
var AccordionPrimitive = __toESM(require("@radix-ui/react-accordion"));
var import_lucide_react2 = require("lucide-react");
var import_jsx_runtime16 = require("react/jsx-runtime");
function Accordion({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(AccordionPrimitive.Root, { "data-slot": "accordion", ...props });
}
function AccordionItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    AccordionPrimitive.Item,
    {
      "data-slot": "accordion-item",
      className: cn("border-b last:border-b-0", className),
      ...props
    }
  );
}
function AccordionTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
    AccordionPrimitive.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: cn(
        "focus-visible:border-ring focus-visible:ring-ring flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_lucide_react2.ChevronDownIcon, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function AccordionContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    AccordionPrimitive.Content,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: cn("pt-0 pb-4", className), children })
    }
  );
}

// src/primitivos/Dialog.tsx
var DialogPrimitive2 = __toESM(require("@radix-ui/react-dialog"));

// src/primitivos/OverlayClose.tsx
var DialogPrimitive = __toESM(require("@radix-ui/react-dialog"));
var import_lucide_react3 = require("lucide-react");
var import_jsx_runtime17 = require("react/jsx-runtime");
function OverlayClose({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    DialogPrimitive.Close,
    {
      "aria-label": "Fechar",
      className: cn(
        "text-muted-foreground absolute top-3 right-3 inline-flex size-8 items-center justify-center rounded-md transition-colors outline-none",
        "hover:bg-foreground/10 hover:text-foreground",
        "focus-visible:ring-ring focus-visible:ring-[3px]",
        "disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        className
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react3.XIcon, {})
    }
  );
}

// src/primitivos/Dialog.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
function Dialog({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(DialogPrimitive2.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(DialogPrimitive2.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(DialogPrimitive2.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogClose({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(DialogPrimitive2.Close, { "data-slot": "dialog-close", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    DialogPrimitive2.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(DialogOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
      DialogPrimitive2.Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid max-h-[calc(100dvh-2rem)] w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 overflow-y-auto rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          showCloseButton && "[&_[data-slot=dialog-header]]:px-8 sm:[&_[data-slot=dialog-header]]:pl-0",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(OverlayClose, {})
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogFooter({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    "div",
    {
      "data-slot": "dialog-footer",
      className: cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
      ...props
    }
  );
}
function DialogTitle({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    DialogPrimitive2.Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
function DialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    DialogPrimitive2.Description,
    {
      "data-slot": "dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}

// src/primitivos/Sheet.tsx
var SheetPrimitive = __toESM(require("@radix-ui/react-dialog"));
var import_jsx_runtime19 = require("react/jsx-runtime");
function Sheet({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SheetPrimitive.Root, { "data-slot": "sheet", ...props });
}
function SheetTrigger({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SheetPrimitive.Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetClose({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SheetPrimitive.Close, { "data-slot": "sheet-close", ...props });
}
function SheetPortal({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SheetPrimitive.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    SheetPrimitive.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(SheetPortal, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SheetOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
      SheetPrimitive.Content,
      {
        "data-slot": "sheet-content",
        className: cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 overflow-y-auto shadow-lg [&_[data-slot=sheet-header]]:pr-12 transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto max-h-[85dvh] border-b",
          side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto max-h-[85dvh] border-t",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(OverlayClose, {})
        ]
      }
    )
  ] });
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { "data-slot": "sheet-header", className: cn("flex flex-col gap-2 p-4", className), ...props });
}
function SheetFooter({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    "div",
    {
      "data-slot": "sheet-footer",
      className: cn("mt-auto flex flex-col gap-2 p-4", className),
      ...props
    }
  );
}
function SheetTitle({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    SheetPrimitive.Title,
    {
      "data-slot": "sheet-title",
      className: cn("text-foreground text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
function SheetDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    SheetPrimitive.Description,
    {
      "data-slot": "sheet-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}

// src/primitivos/Tooltip.tsx
var TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"));
var import_jsx_runtime20 = require("react/jsx-runtime");
function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    TooltipPrimitive.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration,
      ...props
    }
  );
}
function Tooltip({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props }) });
}
function TooltipTrigger({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(TooltipPrimitive.Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(TooltipPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
    TooltipPrimitive.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(TooltipPrimitive.Arrow, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}

// src/primitivos/Select.tsx
var SelectPrimitive = __toESM(require("@radix-ui/react-select"));
var import_lucide_react4 = require("lucide-react");
var import_jsx_runtime21 = require("react/jsx-runtime");
function Select({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(SelectPrimitive.Root, { "data-slot": "select", ...props });
}
function SelectGroup({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(SelectPrimitive.Group, { "data-slot": "select-group", ...props });
}
function SelectValue({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(SelectPrimitive.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  children,
  size = "default",
  ...props
}) {
  const alturas = {
    default: "h-9 px-3 py-2 text-sm",
    sm: "h-8 px-3 py-1.5 text-sm",
    xs: "h-7 px-2 py-1 text-xs"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
    SelectPrimitive.Trigger,
    {
      "data-slot": "select-trigger",
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring aria-invalid:not-focus-visible:ring-destructive/20 aria-invalid:border-destructive dark:bg-input/30 dark:aria-invalid:not-focus-visible:ring-destructive/40 flex w-full items-center justify-between gap-2 rounded-md border bg-transparent whitespace-nowrap shadow-xs outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2",
        alturas[size],
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_lucide_react4.ChevronDownIcon, { className: "size-4 opacity-50 shrink-0" }) })
      ]
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    SelectPrimitive.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn("flex cursor-default items-center justify-center py-1", className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_lucide_react4.ChevronUpIcon, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    SelectPrimitive.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn("flex cursor-default items-center justify-center py-1", className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_lucide_react4.ChevronDownIcon, { className: "size-4" })
    }
  );
}
function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(SelectPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
    SelectPrimitive.Content,
    {
      "data-slot": "select-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(SelectScrollUpButton, {}),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          SelectPrimitive.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectLabel({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    SelectPrimitive.Label,
    {
      "data-slot": "select-label",
      className: cn("text-muted-foreground px-2 py-1.5 text-xs", className),
      ...props
    }
  );
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
    SelectPrimitive.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-foreground/10 focus:text-foreground [&_svg:not([class*='size-'])]:size-4 relative flex w-full cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_lucide_react4.CheckIcon, { className: "size-4" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(SelectPrimitive.ItemText, { children })
      ]
    }
  );
}
function SelectSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    SelectPrimitive.Separator,
    {
      "data-slot": "select-separator",
      className: cn("bg-border pointer-events-none -mx-1 my-1 h-px", className),
      ...props
    }
  );
}

// src/primitivos/Checkbox.tsx
var CheckboxPrimitive = __toESM(require("@radix-ui/react-checkbox"));
var import_lucide_react5 = require("lucide-react");
var import_jsx_runtime22 = require("react/jsx-runtime");
function Checkbox({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    CheckboxPrimitive.Root,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring aria-invalid:not-focus-visible:ring-destructive/20 dark:aria-invalid:not-focus-visible:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        CheckboxPrimitive.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_lucide_react5.CheckIcon, { className: "size-3.5" })
        }
      )
    }
  );
}

// src/primitivos/Switch.tsx
var SwitchPrimitive = __toESM(require("@radix-ui/react-switch"));
var import_jsx_runtime23 = require("react/jsx-runtime");
function Switch({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    SwitchPrimitive.Root,
    {
      "data-slot": "switch",
      className: cn(
        "peer focus-visible:border-ring focus-visible:ring-ring inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        SwitchPrimitive.Thumb,
        {
          "data-slot": "switch-thumb",
          className: cn(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}

// src/primitivos/Tabs.tsx
var TabsPrimitive = __toESM(require("@radix-ui/react-tabs"));
var import_jsx_runtime24 = require("react/jsx-runtime");
function Tabs({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    TabsPrimitive.Root,
    {
      "data-slot": "tabs",
      className: cn("flex flex-col gap-2", className),
      ...props
    }
  );
}
function TabsList({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    TabsPrimitive.List,
    {
      "data-slot": "tabs-list",
      className: cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-1",
        className
      ),
      ...props
    }
  );
}
function TabsTrigger({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    TabsPrimitive.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: cn(
        "text-muted-foreground hover:text-foreground data-[state=active]:bg-card data-[state=active]:text-foreground dark:data-[state=active]:border-input focus-visible:border-ring focus-visible:ring-ring focus-visible:outline-ring inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function TabsContent({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    TabsPrimitive.Content,
    {
      "data-slot": "tabs-content",
      className: cn("flex-1 outline-none", className),
      ...props
    }
  );
}

// src/primitivos/Skeleton.tsx
var import_jsx_runtime25 = require("react/jsx-runtime");
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("bg-foreground/10 animate-pulse rounded-md", className),
      ...props
    }
  );
}

// src/primitivos/Table.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");
function Table({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { "data-slot": "table-wrapper", className: "relative w-full overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    "table",
    {
      "data-slot": "table",
      className: cn("w-full caption-bottom text-sm", className),
      ...props
    }
  ) });
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("thead", { "data-slot": "table-header", className: cn("[&_tr]:border-b", className), ...props });
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  );
}
function TableFooter({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: cn("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className),
      ...props
    }
  );
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    "tr",
    {
      "data-slot": "table-row",
      className: cn(
        "border-b border-border hover:bg-surface-raised/50 data-[state=selected]:bg-muted transition-colors",
        className
      ),
      ...props
    }
  );
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    "th",
    {
      "data-slot": "table-head",
      className: cn(
        "text-muted-foreground h-10 px-3 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    "td",
    {
      "data-slot": "table-cell",
      className: cn(
        "px-3 py-3 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function TableCaption({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    "caption",
    {
      "data-slot": "table-caption",
      className: cn("text-muted-foreground mt-4 text-sm", className),
      ...props
    }
  );
}

// src/primitivos/Pagination.tsx
var import_lucide_react6 = require("lucide-react");
var import_jsx_runtime27 = require("react/jsx-runtime");
function Pagination({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
    "nav",
    {
      "aria-label": "Pagina\xE7\xE3o",
      "data-slot": "pagination",
      className: cn("mx-auto flex w-full justify-center", className),
      ...props
    }
  );
}
function PaginationContent({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
    "ul",
    {
      "data-slot": "pagination-content",
      className: cn("flex flex-row items-center gap-1", className),
      ...props
    }
  );
}
function PaginationItem({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("li", { "data-slot": "pagination-item", ...props });
}
function PaginationLink({ className, isActive, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
    "button",
    {
      type: "button",
      "aria-current": isActive ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": isActive,
      className: cn(
        "inline-flex h-9 min-w-9 items-center justify-center rounded-md px-2 text-sm font-medium tabular-nums transition-colors",
        "hover:bg-foreground/10 hover:text-foreground",
        "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring",
        "disabled:pointer-events-none disabled:opacity-50",
        isActive && "bg-primary text-primary-foreground hover:bg-primary/90",
        className
      ),
      ...props
    }
  );
}
function PaginationPrevious({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
    PaginationLink,
    {
      "aria-label": "P\xE1gina anterior",
      className: cn("gap-1 px-2.5", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_lucide_react6.ChevronLeftIcon, { className: "size-4" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "hidden sm:inline", children: "Anterior" })
      ]
    }
  );
}
function PaginationNext({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
    PaginationLink,
    {
      "aria-label": "Pr\xF3xima p\xE1gina",
      className: cn("gap-1 px-2.5", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "hidden sm:inline", children: "Pr\xF3xima" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_lucide_react6.ChevronRightIcon, { className: "size-4" })
      ]
    }
  );
}
function PaginationEllipsis({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
    "span",
    {
      "aria-hidden": "true",
      "data-slot": "pagination-ellipsis",
      className: cn("flex h-9 min-w-9 items-center justify-center", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_lucide_react6.MoreHorizontalIcon, { className: "size-4" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "sr-only", children: "Mais p\xE1ginas" })
      ]
    }
  );
}
function gerarPaginasVisiveis(paginaAtual, totalPaginas) {
  const MAX_VISIVEIS = 7;
  if (totalPaginas <= MAX_VISIVEIS) {
    return Array.from({ length: totalPaginas }, (_, i) => i + 1);
  }
  const paginas = [1];
  const inicio = Math.max(2, paginaAtual - 1);
  const fim = Math.min(totalPaginas - 1, paginaAtual + 1);
  if (inicio > 2) paginas.push("ellipsis");
  for (let p = inicio; p <= fim; p++) paginas.push(p);
  if (fim < totalPaginas - 1) paginas.push("ellipsis");
  paginas.push(totalPaginas);
  return paginas;
}
var CLASSE_POR_ONDE = {
  sempre: void 0,
  desktop: "hidden sm:block",
  mobile: "sm:hidden"
};
var MAX_PAGINAS_NO_MOBILE = 5;
function montarItens(paginaAtual, totalPaginas) {
  const lista = gerarPaginasVisiveis(paginaAtual, totalPaginas);
  const cabeTudo = lista.length <= MAX_PAGINAS_NO_MOBILE;
  const noMobile = /* @__PURE__ */ new Set([1, paginaAtual, totalPaginas]);
  const itens = [];
  let ultimaNoMobile = 0;
  for (const p of lista) {
    if (p === "ellipsis") {
      itens.push({
        tipo: "elipse",
        chave: `e${itens.length}`,
        onde: cabeTudo ? "sempre" : "desktop"
      });
    } else if (cabeTudo || !noMobile.has(p)) {
      itens.push({ tipo: "pagina", pagina: p, onde: cabeTudo ? "sempre" : "desktop" });
    } else {
      if (ultimaNoMobile && p > ultimaNoMobile + 1) marcarElipseNoMobile(itens, ultimaNoMobile);
      itens.push({ tipo: "pagina", pagina: p, onde: "sempre" });
      ultimaNoMobile = p;
    }
  }
  return itens;
}
function marcarElipseNoMobile(itens, desde) {
  const inicio = itens.findIndex((i) => i.tipo === "pagina" && i.pagina === desde) + 1;
  const elipse = itens.slice(inicio).find((i) => i.tipo === "elipse");
  if (elipse) {
    elipse.onde = "sempre";
    return;
  }
  itens.push({ tipo: "elipse", chave: `m${desde}`, onde: "mobile" });
}
function PaginationControl({ page, totalPages, onPageChange, className }) {
  if (totalPages <= 1) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Pagination, { className, children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(PaginationContent, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(PaginationPrevious, { disabled: page <= 1, onClick: () => onPageChange(page - 1) }) }),
    montarItens(page, totalPages).map(
      (item) => item.tipo === "elipse" ? /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(PaginationItem, { className: CLASSE_POR_ONDE[item.onde], children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(PaginationEllipsis, {}) }, item.chave) : /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(PaginationItem, { className: CLASSE_POR_ONDE[item.onde], children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
        PaginationLink,
        {
          isActive: item.pagina === page,
          onClick: () => onPageChange(item.pagina),
          children: item.pagina
        }
      ) }, item.pagina)
    ),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(PaginationNext, { disabled: page >= totalPages, onClick: () => onPageChange(page + 1) }) })
  ] }) });
}

// src/primitivos/DropdownMenu.tsx
var DropdownMenuPrimitive = __toESM(require("@radix-ui/react-dropdown-menu"));
var import_lucide_react7 = require("lucide-react");
var import_jsx_runtime28 = require("react/jsx-runtime");
function DropdownMenu({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(DropdownMenuPrimitive.Trigger, { "data-slot": "dropdown-menu-trigger", ...props });
}
function DropdownMenuPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(DropdownMenuPrimitive.Portal, { "data-slot": "dropdown-menu-portal", ...props });
}
function DropdownMenuGroup({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(DropdownMenuPrimitive.Group, { "data-slot": "dropdown-menu-group", ...props });
}
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    DropdownMenuPrimitive.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      ),
      ...props
    }
  ) });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    DropdownMenuPrimitive.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-foreground/10 focus:text-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
    DropdownMenuPrimitive.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: cn(
        "focus:bg-foreground/10 focus:text-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_lucide_react7.CheckIcon, { className: "size-4" }) }) }),
        children
      ]
    }
  );
}
function DropdownMenuRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(DropdownMenuPrimitive.RadioGroup, { "data-slot": "dropdown-menu-radio-group", ...props });
}
function DropdownMenuRadioItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
    DropdownMenuPrimitive.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: cn(
        "focus:bg-foreground/10 focus:text-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_lucide_react7.CircleIcon, { className: "size-2 fill-current" }) }) }),
        children
      ]
    }
  );
}
function DropdownMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    DropdownMenuPrimitive.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": inset,
      className: cn("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className),
      ...props
    }
  );
}
function DropdownMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    DropdownMenuPrimitive.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className),
      ...props
    }
  );
}
function DropdownMenuShortcut({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: cn("text-muted-foreground ml-auto text-xs tracking-widest", className),
      ...props
    }
  );
}
function DropdownMenuSub({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(DropdownMenuPrimitive.Sub, { "data-slot": "dropdown-menu-sub", ...props });
}
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
    DropdownMenuPrimitive.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": inset,
      className: cn(
        "focus:bg-foreground/10 focus:text-foreground data-[state=open]:bg-foreground/10 data-[state=open]:text-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_lucide_react7.ChevronRightIcon, { className: "ml-auto size-4" })
      ]
    }
  );
}
function DropdownMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    DropdownMenuPrimitive.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      ),
      ...props
    }
  );
}

// src/primitivos/Toast.tsx
var React3 = __toESM(require("react"));
var ToastPrimitive = __toESM(require("@radix-ui/react-toast"));
var import_class_variance_authority3 = require("class-variance-authority");
var import_lucide_react8 = require("lucide-react");
var import_jsx_runtime29 = require("react/jsx-runtime");
function ToastProvider({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(ToastPrimitive.Provider, { "data-slot": "toast-provider", ...props });
}
function ToastViewport({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    ToastPrimitive.Viewport,
    {
      "data-slot": "toast-viewport",
      className: cn(
        "fixed inset-x-0 top-0 z-100 flex max-h-screen w-full flex-col-reverse p-4 sm:top-auto sm:right-0 sm:bottom-0 sm:left-auto sm:flex-col md:max-w-[420px]",
        className
      ),
      ...props
    }
  );
}
var toastVariants = (0, import_class_variance_authority3.cva)(
  "data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-(--radix-toast-swipe-end-x) data-[swipe=move]:translate-x-(--radix-toast-swipe-move-x) data-[swipe=move]:transition-none group relative pointer-events-auto flex w-full items-center justify-between gap-3 overflow-hidden rounded-md border p-4 shadow-lg transition-all data-[swipe=end]:animate-out data-[state=closed]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:animate-in data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "bg-popover text-popover-foreground border-border",
        success: "bg-popover text-popover-foreground border-success/60",
        destructive: "bg-destructive text-destructive-foreground border-destructive [&_[data-slot=toast-description]]:text-destructive-foreground/85 [&_[data-slot=toast-action]]:border-destructive-foreground/40 [&_[data-slot=toast-action]]:hover:bg-destructive-foreground/10 [&_[data-slot=toast-action]]:hover:text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function ToastRoot({
  className,
  variant,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    ToastPrimitive.Root,
    {
      "data-slot": "toast",
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
}
function ToastTitle({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    ToastPrimitive.Title,
    {
      "data-slot": "toast-title",
      className: cn("text-sm font-semibold", className),
      ...props
    }
  );
}
function ToastDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    ToastPrimitive.Description,
    {
      "data-slot": "toast-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function ToastAction({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    ToastPrimitive.Action,
    {
      "data-slot": "toast-action",
      className: cn(
        "shrink-0 rounded-md border bg-transparent px-3 py-1.5 text-sm font-medium transition-colors hover:bg-foreground/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring",
        className
      ),
      ...props
    }
  );
}
function ToastClose({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    ToastPrimitive.Close,
    {
      "data-slot": "toast-close",
      "aria-label": "Fechar",
      className: cn(
        "inline-flex size-8 shrink-0 items-center justify-center rounded-md text-current opacity-70 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring",
        // Sem hover em tela de toque: só esconde onde o ponteiro consegue revelar.
        "pointer-fine:opacity-0 pointer-fine:group-hover:opacity-70 pointer-fine:hover:opacity-100 pointer-fine:focus-visible:opacity-100",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_lucide_react8.XIcon, { className: "size-4" })
    }
  );
}
var ToastContext = React3.createContext(null);
var toastSeq = 0;
function gerarToastId() {
  toastSeq += 1;
  return `toast-${toastSeq}-${Date.now()}`;
}
function ToastComponentProvider({ children }) {
  const [toasts, setToasts] = React3.useState([]);
  const dismiss = React3.useCallback((id) => {
    setToasts((atual) => atual.filter((t) => t.id !== id));
  }, []);
  const toast = React3.useCallback((data) => {
    const id = gerarToastId();
    setToasts((atual) => [...atual, { ...data, id }]);
    return id;
  }, []);
  const value = React3.useMemo(() => ({ toasts, toast, dismiss }), [toasts, toast, dismiss]);
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(ToastContext.Provider, { value, children: /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(ToastProvider, { children: [
    children,
    toasts.map((t) => /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
      ToastRoot,
      {
        variant: t.variant,
        duration: t.duration ?? 5e3,
        onOpenChange: (open) => {
          if (!open) dismiss(t.id);
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex flex-col gap-1", children: [
            t.title && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(ToastTitle, { children: t.title }),
            t.description && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(ToastDescription, { children: t.description })
          ] }),
          t.action && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(ToastAction, { altText: t.action.label, onClick: t.action.onClick, children: t.action.label }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(ToastClose, {})
        ]
      },
      t.id
    )),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(ToastViewport, {})
  ] }) });
}
function useToast() {
  const context = React3.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast deve ser usado dentro de <ToastComponentProvider>");
  }
  return context;
}

// src/primitivos/AnimatedIcon.tsx
var React4 = __toESM(require("react"));
var import_jsx_runtime30 = require("react/jsx-runtime");
var semAssinatura = () => () => {
};
var lerSuporte = () => typeof IntersectionObserver === "undefined" ? "nao" : "sim";
var lerSuporteServidor = () => "servidor";
function useInViewActivation(alvo, enabled) {
  const suporte = React4.useSyncExternalStore(semAssinatura, lerSuporte, lerSuporteServidor);
  const [visto, setVisto] = React4.useState(false);
  const observavel = enabled && suporte === "sim";
  React4.useEffect(() => {
    if (!observavel || !alvo) return;
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada?.isIntersecting) return;
        setVisto(true);
        observador.disconnect();
      },
      { threshold: 0.4 }
    );
    observador.observe(alvo);
    return () => observador.disconnect();
  }, [alvo, observavel]);
  return {
    armed: observavel,
    active: enabled && (visto || suporte === "nao")
  };
}
var FORMAS = "path, circle, line, polyline, polygon, rect, ellipse";
function useNormalizedPathLength(alvo, enabled) {
  React4.useLayoutEffect(() => {
    if (!enabled || !alvo) return;
    const formas = alvo.querySelectorAll(FORMAS);
    formas.forEach((forma) => forma.setAttribute("pathLength", "100"));
    return () => formas.forEach((forma) => forma.removeAttribute("pathLength"));
  }, [alvo, enabled]);
}
function atribuirRef(ref, no) {
  if (typeof ref === "function") ref(no);
  else if (ref) ref.current = no;
}
function AnimatedIcon({
  icon: Icon2,
  animation = "draw",
  trigger = "hover",
  size = 24,
  label,
  className,
  ref: refDoConsumidor,
  ...props
}) {
  const [no, setNo] = React4.useState(null);
  const ref = React4.useCallback(
    (alvo) => {
      setNo(alvo);
      atribuirRef(refDoConsumidor, alvo);
    },
    [refDoConsumidor]
  );
  const { armed, active } = useInViewActivation(no, trigger === "inview");
  useNormalizedPathLength(no, animation === "draw");
  const acessivel = label ? { role: "img", "aria-label": label } : { "aria-hidden": true };
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    Icon2,
    {
      ref,
      size,
      "data-slot": "animated-icon",
      "data-anim": animation,
      "data-trigger": trigger,
      "data-armed": armed ? "true" : void 0,
      "data-active": active ? "true" : void 0,
      className: cn("mf-anim-icon", className),
      ...acessivel,
      ...props
    }
  );
}

// src/blocos/Hero.tsx
var import_jsx_runtime31 = require("react/jsx-runtime");
function Hero({ eyebrow, title, description, cta, stats, slot, slotLabel = "" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
    "section",
    {
      id: "hero",
      "aria-label": "Introdu\xE7\xE3o",
      className: "hero-shell relative flex min-h-[100svh] overflow-hidden border-b border-line",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "hero-noise", "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "hero-radial", "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "hero-scanline", "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "relative z-10 flex w-full flex-col justify-between px-5 pb-8 pt-28 sm:px-8 lg:px-10 lg:pt-32 2xl:px-14", children: [
          /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "grid flex-1 items-start gap-10 lg:grid-cols-[minmax(0,1.58fr)_minmax(380px,0.92fr)] lg:gap-14 2xl:grid-cols-[minmax(0,1.7fr)_minmax(460px,0.9fr)]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "relative", children: [
              /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("p", { className: "mf-entrada mf-entrada-up-suave mb-7 max-w-md font-mono text-xs uppercase tracking-[0.32em] text-cyan", children: eyebrow }),
              title,
              /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
                "div",
                {
                  style: { "--mf-entrada-delay": "300ms" },
                  className: "mf-entrada mf-entrada-up mt-8 flex max-w-5xl flex-col gap-5 sm:flex-row sm:items-end sm:justify-between",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("p", { className: "max-w-2xl text-base leading-relaxed text-gray-text sm:text-lg", children: description }),
                    /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
                      "a",
                      {
                        href: cta.href,
                        ...propsDeLink(cta.href),
                        className: "group inline-flex w-fit shrink-0 items-center gap-3 whitespace-nowrap rounded border border-brand bg-brand px-5 min-h-11 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand-foreground transition-all duration-300 hover:border-cyan hover:bg-transparent hover:text-cyan focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring",
                        children: [
                          cta.label,
                          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
                            "span",
                            {
                              className: "h-px w-8 bg-brand-foreground transition-colors group-hover:bg-cyan",
                              "aria-hidden": "true"
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              )
            ] }),
            slot && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "relative lg:translate-y-16", children: /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
              "div",
              {
                style: { "--mf-entrada-delay": "560ms" },
                className: "mf-entrada mf-entrada-up",
                children: [
                  slotLabel && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "absolute -left-4 -top-4 hidden font-mono text-xs uppercase tracking-[0.2em] text-gray-text lg:block", children: slotLabel }),
                  slot
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
            "div",
            {
              style: { "--mf-entrada-delay": "500ms" },
              className: "mf-entrada mf-entrada-up mt-16 grid grid-cols-2 gap-5 border-t border-line pt-6 sm:grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] lg:mt-24",
              children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "font-mono text-3xl font-black text-foreground sm:text-4xl", children: stat.value }),
                /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("p", { className: "mt-2 text-xs uppercase tracking-[0.18em] text-gray-text", children: stat.label })
              ] }, stat.label))
            }
          )
        ] })
      ]
    }
  );
}

// src/blocos/Services.tsx
var import_jsx_runtime32 = require("react/jsx-runtime");
function ServiceCard({ service, index }) {
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(
    Reveal,
    {
      as: "article",
      margin: "-70px",
      delayMs: index * 80,
      className: "group relative min-h-[200px] overflow-hidden rounded border border-line bg-surface p-5 transition-colors duration-300 hover:border-cyan/60 lg:p-6",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
          "div",
          {
            className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            style: {
              background: "radial-gradient(circle at 24% 0%, color-mix(in srgb, var(--cyan) 8%, transparent), transparent 46%)"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "relative flex h-full flex-col justify-between gap-8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "flex items-center justify-between gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { className: "font-mono text-xs text-cyan", children: service.tag }),
              /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { className: "font-mono text-xs uppercase tracking-[0.2em] text-gray-text", children: service.id })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("h3", { className: "mt-5 text-[clamp(1.6rem,3vw,3.2rem)] font-black leading-none tracking-tight text-foreground", children: service.title }),
            /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("p", { className: "mt-4 max-w-2xl text-sm leading-relaxed text-gray-text lg:text-base", children: service.description })
          ] }),
          service.motif,
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("ul", { className: "grid gap-2 sm:grid-cols-2", "aria-label": `Itens de ${service.title}`, children: service.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("li", { className: "flex items-start gap-2 text-sm text-gray-text", children: [
            /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { className: "mt-0.5 font-mono text-cyan", "aria-hidden": "true", children: "/" }),
            item
          ] }, item)) })
        ] })
      ]
    }
  );
}
function Services({ eyebrow, title, description, services }) {
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    "section",
    {
      id: "servicos",
      "aria-label": "Servi\xE7os",
      className: "overflow-hidden border-t border-line py-16 lg:py-24",
      children: /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-16", children: [
        /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(Reveal, { margin: "-60px", className: "mb-8 lg:mb-10", children: [
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("p", { className: "mb-4 font-mono text-xs uppercase tracking-[0.34em] text-cyan", children: eyebrow }),
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("h2", { className: "text-[length:var(--text-h2)] font-black leading-[0.96] tracking-tight text-foreground", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("p", { className: "mt-4 max-w-3xl text-base leading-relaxed text-gray-text", children: description })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3", children: services.map((service, i) => /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(ServiceCard, { service, index: i }, service.id)) })
      ] })
    }
  );
}

// src/blocos/Projects.tsx
var import_react6 = require("react");
var import_lucide_react9 = require("lucide-react");

// src/lib/movimento-reduzido.ts
var import_react5 = require("react");
var CONSULTA = "(prefers-reduced-motion: reduce)";
function assinar(avisar) {
  const lista = window.matchMedia(CONSULTA);
  lista.addEventListener("change", avisar);
  return () => lista.removeEventListener("change", avisar);
}
function usePrefereMovimentoReduzido() {
  return (0, import_react5.useSyncExternalStore)(
    assinar,
    () => window.matchMedia(CONSULTA).matches,
    () => false
  );
}

// src/blocos/Projects.tsx
var import_jsx_runtime33 = require("react/jsx-runtime");
var ROTULO = "font-mono text-xs uppercase tracking-[0.2em] text-gray-text";
var TAG = "rounded border border-line px-2 py-1 font-mono text-xs text-gray-text";
var FOCO2 = "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring";
function BotaoDePausa({ pausado, onAlternar }) {
  const Icone = pausado ? import_lucide_react9.PlayIcon : import_lucide_react9.PauseIcon;
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
    "button",
    {
      type: "button",
      "aria-pressed": pausado,
      "aria-label": "Pausar carrossel",
      onClick: onAlternar,
      className: `project-carousel-pausa border-line text-gray-text hover:border-cyan hover:text-cyan inline-flex size-11 shrink-0 items-center justify-center rounded border transition-colors max-md:hidden ${FOCO2}`,
      children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Icone, { "aria-hidden": "true", className: "size-4" })
    }
  );
}
function rotuloDoFrame(project, index) {
  return [`frame ${String(index + 1).padStart(2, "0")}`, project.ano, project.categoria].filter(Boolean).join(" / ");
}
function Tags({ tags }) {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "flex flex-wrap gap-2", children: tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: TAG, children: tag }, tag)) });
}
function Metrica({ rotulo, valor }) {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "border-line bg-background/50 rounded border p-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", { className: ROTULO, children: rotulo }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", { className: "text-cyan mt-3 font-mono text-xl", children: valor })
  ] });
}
function CaseTecnico({
  project,
  origem
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
    DialogContent,
    {
      onCloseAutoFocus: (evento) => {
        evento.preventDefault();
        origem.current?.focus();
      },
      className: "bg-surface border-line rounded p-6 sm:max-w-3xl lg:p-8",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "pr-10", children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("p", { className: "text-cyan font-mono text-xs tracking-[0.28em] uppercase", children: [
            "case.log",
            project.ano ? ` / ${project.ano}` : ""
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(DialogTitle, { className: "text-foreground mt-4 max-w-2xl text-3xl leading-none font-black tracking-tight lg:text-5xl", children: project.title })
        ] }),
        project.description && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(DialogDescription, { className: "text-gray-text max-w-2xl text-base leading-relaxed", children: project.description }),
        (project.metrica || project.resultado) && /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "mt-2 grid gap-4 sm:grid-cols-2", children: [
          project.metrica && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Metrica, { rotulo: "m\xE9trica", valor: project.metrica }),
          project.resultado && /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "border-line bg-background/50 rounded border p-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", { className: ROTULO, children: "resultado" }),
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", { className: "text-foreground mt-3 text-sm leading-relaxed", children: project.resultado })
          ] })
        ] }),
        project.tags && project.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Tags, { tags: project.tags })
      ]
    }
  );
}
function ProjectFrame({ project, index, onOpen }) {
  const altura = project.mockup ? "min-h-[540px] sm:min-h-[620px]" : "";
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
    Reveal,
    {
      as: "article",
      margin: "-80px",
      delayMs: index * 60,
      className: `project-frame group border-line bg-surface hover:border-cyan/60 flex w-[88vw] shrink-0 scroll-ml-5 flex-col justify-between rounded border p-5 transition-colors sm:w-[76vw] lg:w-[56vw] lg:p-8 xl:w-[52vw] 2xl:w-[44vw] ${altura}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "grid gap-8 lg:grid-cols-[0.9fr_1.15fr] lg:items-start", children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", { className: "text-cyan font-mono text-xs tracking-[0.28em] uppercase", children: rotuloDoFrame(project, index) }),
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("h3", { className: "text-foreground mt-5 max-w-2xl text-[clamp(2.2rem,5vw,5.8rem)] leading-[0.88] font-black tracking-tight", children: project.title }),
            project.description && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", { className: "text-gray-text mt-6 max-w-xl text-base leading-relaxed", children: project.description })
          ] }),
          project.mockup && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            "div",
            {
              className: "project-mockup border-line bg-background/70 relative overflow-hidden rounded border p-4",
              "aria-hidden": "true",
              children: project.mockup
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(RodapeDoFrame, { project, onOpen })
      ]
    }
  );
}
function RodapeDoFrame({ project, onOpen }) {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "border-line mt-8 grid gap-5 border-t pt-6 md:grid-cols-[0.9fr_1fr_auto] md:items-end", children: [
    project.metrica && /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", { className: ROTULO, children: "m\xE9trica forte" }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", { className: "text-cyan mt-2 font-mono text-xl lg:text-2xl", children: project.metrica })
    ] }),
    project.tags && project.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", { className: `${ROTULO} mb-2`, children: "stack" }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Tags, { tags: project.tags })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "flex flex-wrap gap-2 md:col-start-3 md:justify-end", children: [
      project.href && /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
        "a",
        {
          href: project.href,
          ...propsDeLink(project.href),
          className: `border-line text-gray-text hover:border-cyan hover:text-cyan inline-flex items-center gap-1.5 rounded border px-4 min-h-11 py-3 font-mono text-xs font-bold tracking-[0.18em] uppercase transition-colors ${FOCO2}`,
          children: [
            "ver projeto ",
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_lucide_react9.ArrowUpRightIcon, { className: "size-3.5", "aria-hidden": "true" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
        "button",
        {
          type: "button",
          onClick: () => onOpen(project),
          className: `border-cyan text-cyan hover:bg-cyan hover:text-background inline-flex min-h-11 items-center justify-center rounded border px-4 py-3 font-mono text-xs font-bold tracking-[0.18em] uppercase transition-colors ${FOCO2}`,
          children: "abrir case"
        }
      )
    ] })
  ] });
}
function Projects({ eyebrow, title, description, projects }) {
  const [selected, setSelected] = (0, import_react6.useState)(null);
  const origemRef = (0, import_react6.useRef)(null);
  const abrir = (project) => {
    origemRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setSelected(project);
  };
  const [pausado, setPausado] = (0, import_react6.useState)(false);
  const movimentoReduzido = usePrefereMovimentoReduzido();
  const loopedProjects = [...projects, ...projects];
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
    "section",
    {
      id: "projetos",
      "aria-label": "Projetos",
      className: "border-line relative overflow-hidden border-t py-16 lg:py-24",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(Reveal, { margin: "-80px", className: "mb-8 flex items-end justify-between gap-6 lg:mb-10", children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", { className: "text-cyan mb-4 font-mono text-xs tracking-[0.34em] uppercase", children: eyebrow }),
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("h2", { className: "text-foreground text-[length:var(--text-h2)] leading-[0.96] font-black tracking-tight", children: title }),
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", { className: "text-gray-text mt-4 max-w-3xl text-base leading-relaxed", children: description })
          ] }),
          !movimentoReduzido && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(BotaoDePausa, { pausado, onAlternar: () => setPausado((p) => !p) })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "project-carousel relative overflow-hidden", "data-paused": pausado, children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            "div",
            {
              role: "group",
              "aria-roledescription": "carrossel",
              "aria-label": "Sequ\xEAncia de cases",
              className: "project-carousel-track flex w-max gap-4 px-5 pb-4 sm:px-8 lg:px-10 2xl:px-14",
              children: loopedProjects.map((project, index) => {
                const isClone = index >= projects.length;
                return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
                  "div",
                  {
                    "data-testid": isClone ? "project-clone" : "project-item",
                    ...isClone ? { inert: true } : {},
                    children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(ProjectFrame, { project, index: index % projects.length, onOpen: abrir })
                  },
                  `${project.title}-${index}`
                );
              })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            "div",
            {
              "aria-hidden": "true",
              className: "from-background pointer-events-none absolute inset-y-0 left-0 hidden w-10 bg-gradient-to-r to-transparent lg:block 2xl:w-14"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            "div",
            {
              "aria-hidden": "true",
              className: "from-background pointer-events-none absolute inset-y-0 right-0 hidden w-32 bg-gradient-to-l to-transparent lg:block"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Dialog, { open: selected !== null, onOpenChange: (aberto) => !aberto && setSelected(null), children: selected && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(CaseTecnico, { project: selected, origem: origemRef }) })
      ]
    }
  );
}

// src/blocos/Process.tsx
var import_jsx_runtime34 = require("react/jsx-runtime");
function PipelineCard({ step, index }) {
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(
    Reveal,
    {
      as: "article",
      margin: "-60px",
      delayMs: index * 60,
      className: "group relative flex h-full flex-col overflow-hidden rounded border border-line bg-surface p-5 transition-colors hover:border-cyan/60 lg:p-6",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
          "div",
          {
            className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            style: {
              background: "radial-gradient(circle at 0% 0%, color-mix(in srgb, var(--cyan) 7%, transparent), transparent 52%)"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "relative flex h-full flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { className: "font-mono text-xs uppercase tracking-[0.2em] text-cyan", children: step.numero }),
            step.duracao && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("span", { className: "shrink-0 rounded border border-line px-2 py-0.5 font-mono text-xs text-gray-text", children: step.duracao })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("h3", { className: "mt-3 text-[clamp(1.25rem,2.2vw,1.75rem)] font-black leading-[1.05] tracking-tight text-foreground", children: step.title }),
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { className: "mt-3 flex-1 text-sm leading-relaxed text-gray-text", children: step.description }),
          (step.commitLabel || step.commitOutput) && /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "mt-4 border-t border-line pt-3 font-mono", children: [
            step.commitLabel && /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("p", { className: "truncate text-xs text-foreground", children: [
              /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("span", { className: "text-cyan", children: "$" }),
              " ",
              step.commitLabel
            ] }),
            step.commitOutput && /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("p", { className: "mt-1 truncate text-xs text-gray-text", children: [
              /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("span", { className: "text-cyan/60", children: ">" }),
              " ",
              step.commitOutput
            ] })
          ] })
        ] })
      ]
    }
  );
}
function Process({ eyebrow, title, description, steps }) {
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
    "section",
    {
      id: "processo",
      "aria-label": "Processo de trabalho",
      className: "relative overflow-hidden border-t border-line py-16 lg:py-24",
      children: /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(Reveal, { margin: "-80px", className: "mb-8 lg:mb-10", children: [
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { className: "mb-4 font-mono text-xs uppercase tracking-[0.34em] text-cyan", children: eyebrow }),
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("h2", { className: "text-[length:var(--text-h2)] font-black leading-[0.96] tracking-tight text-foreground", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { className: "mt-4 max-w-3xl text-base leading-relaxed text-gray-text", children: description })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(14rem,1fr))]", children: steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(PipelineCard, { step, index }, step.numero)) })
      ] })
    }
  );
}

// src/blocos/Stack.tsx
var import_react7 = require("react");
var import_jsx_runtime35 = require("react/jsx-runtime");
var ROTULOS_PADRAO2 = {
  camada: "layer",
  ativo: "active",
  explicar: "explain --when-to-use",
  explicacao: "uso essa camada quando ela diminui incerteza operacional, n\xE3o para preencher logo em carrossel."
};
function Stack({ eyebrow, title, description, grupos, rotulos }) {
  const [categoriaAtiva, setCategoriaAtiva] = (0, import_react7.useState)(grupos[0]?.categoria);
  const active = grupos.find((g) => g.categoria === categoriaAtiva) ?? grupos[0];
  const r = { ...ROTULOS_PADRAO2, ...rotulos };
  if (!active) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    "section",
    {
      id: "stack",
      "aria-label": "Mapa t\xE9cnico da stack",
      className: "relative overflow-hidden border-t border-line py-16 lg:py-24",
      children: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(Reveal, { margin: "-80px", className: "mb-10 lg:mb-12", children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("p", { className: "mb-4 font-mono text-xs uppercase tracking-[0.34em] text-cyan", children: eyebrow }),
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("h2", { className: "text-[length:var(--text-h2)] font-black leading-[0.96] tracking-tight text-foreground", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("p", { className: "mt-4 max-w-3xl text-base leading-relaxed text-gray-text", children: description })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "grid gap-6 lg:grid-cols-[1fr_1.15fr] xl:grid-cols-[0.95fr_1.25fr]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "grid content-start gap-3", children: grupos.map((grupo, index) => {
            const selected = active.categoria === grupo.categoria;
            return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(
              Reveal,
              {
                as: "button",
                variant: "left",
                margin: "-80px",
                delayMs: index * 50,
                type: "button",
                onClick: () => setCategoriaAtiva(grupo.categoria),
                onMouseEnter: () => setCategoriaAtiva(grupo.categoria),
                "aria-pressed": selected,
                className: cn(
                  "group grid gap-5 rounded border p-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring sm:grid-cols-[auto_1fr]",
                  selected ? "border-cyan bg-cyan/10" : "border-line bg-surface hover:border-cyan/50"
                ),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
                    "span",
                    {
                      className: cn(
                        "font-mono text-sm transition-colors",
                        selected ? "text-cyan" : "text-gray-text group-hover:text-cyan"
                      ),
                      children: String(index + 1).padStart(2, "0")
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("span", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "block text-2xl font-black tracking-tight text-foreground", children: grupo.categoria }),
                    grupo.comando && /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("span", { className: "mt-2 block font-mono text-xs text-gray-text", children: [
                      "$ ",
                      grupo.comando
                    ] })
                  ] })
                ]
              },
              grupo.categoria
            );
          }) }),
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "rounded border border-line bg-surface p-5 lg:p-8", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "mf-entrada mf-entrada-up-suave", children: [
            /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "flex items-start justify-between gap-6", children: [
              /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("p", { className: "font-mono text-xs uppercase tracking-[0.28em] text-cyan", children: [
                  r.camada,
                  " / ",
                  active.categoria.toLowerCase()
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("h3", { className: "mt-4 text-[clamp(2.2rem,5vw,5.8rem)] font-black leading-[0.9] tracking-tight text-foreground", children: active.categoria })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "hidden rounded border border-line px-3 py-1 font-mono text-xs text-gray-text sm:block", children: r.ativo })
            ] }),
            active.description && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("p", { className: "mt-6 max-w-3xl text-base leading-relaxed text-gray-text", children: active.description }),
            /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "stack-map-grid mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3", children: active.itens.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(
              "div",
              {
                style: {
                  "--mf-entrada-delay": `${index * 40}ms`
                },
                className: "mf-entrada mf-entrada-up-suave group/item relative overflow-hidden rounded border border-line bg-background/55 p-4 font-mono transition-colors hover:border-cyan/60",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "relative z-10 text-sm text-foreground", children: item }),
                  /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
                    "span",
                    {
                      className: "stack-chip-fill absolute inset-y-0 left-0 w-full origin-left scale-x-0 bg-cyan/10 transition-transform duration-500 group-hover/item:scale-x-100",
                      "aria-hidden": "true"
                    }
                  )
                ]
              },
              item
            )) }),
            active.comando && /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "mt-8 border-t border-line pt-5 font-mono", children: [
              /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("p", { className: "text-sm text-foreground", children: [
                /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "text-cyan", children: "$" }),
                " ",
                r.explicar,
                " ",
                active.categoria.toLowerCase()
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("p", { className: "mt-2 text-xs leading-relaxed text-gray-text", children: [
                /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "text-cyan/70", children: ">" }),
                " ",
                active.explicacao ?? r.explicacao
              ] })
            ] })
          ] }, active.categoria) })
        ] })
      ] })
    }
  );
}

// src/blocos/Testimonials.tsx
var import_react8 = require("react");
var import_lucide_react10 = require("lucide-react");
var import_jsx_runtime36 = require("react/jsx-runtime");
var AUTOPLAY_MS = 5e3;
var BOTAO = "flex h-11 w-11 shrink-0 items-center justify-center rounded border border-line text-gray-text transition-all hover:border-cyan hover:text-cyan focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring [&_svg]:size-4";
function useApresentacao(total) {
  const reduzido = usePrefereMovimentoReduzido();
  const [atual, setAtual] = (0, import_react8.useState)(0);
  const [emUso, setEmUso] = (0, import_react8.useState)(false);
  const [escolha, setEscolha] = (0, import_react8.useState)(null);
  const pausadoPeloUsuario = escolha ? escolha === "pausar" : reduzido;
  const tocando = !pausadoPeloUsuario && !emUso;
  const proximo = (0, import_react8.useCallback)(() => setAtual((c) => (c + 1) % total), [total]);
  const anterior = (0, import_react8.useCallback)(() => setAtual((c) => (c - 1 + total) % total), [total]);
  (0, import_react8.useEffect)(() => {
    if (!tocando) return;
    const timer = setInterval(proximo, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [tocando, proximo]);
  const alternarPausa = () => setEscolha(pausadoPeloUsuario ? "tocar" : "pausar");
  return {
    atual,
    setAtual,
    proximo,
    anterior,
    tocando,
    pausadoPeloUsuario,
    alternarPausa,
    setEmUso
  };
}
function Citacao({ depoimento }) {
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(import_jsx_runtime36.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      "span",
      {
        "aria-hidden": "true",
        className: "text-cyan font-mono text-6xl leading-none opacity-20 select-none",
        children: "\u201C"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("p", { className: "text-foreground mt-2 max-w-6xl text-lg leading-relaxed lg:text-xl", children: depoimento.texto }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("footer", { className: "mt-8 flex items-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
        "div",
        {
          "aria-hidden": "true",
          className: "border-line bg-surface-raised text-cyan flex h-10 w-10 shrink-0 items-center justify-center rounded border font-mono text-sm font-bold",
          children: depoimento.autor.charAt(0)
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "min-w-0", children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("cite", { className: "text-foreground font-semibold not-italic", children: depoimento.autor }),
        (depoimento.papel || depoimento.empresa) && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("p", { className: "text-gray-text text-sm", children: [depoimento.papel, depoimento.empresa].filter(Boolean).join(" \xB7 ") })
      ] })
    ] })
  ] });
}
function Testimonials({ eyebrow, title, depoimentos }) {
  const apresentacao = useApresentacao(depoimentos.length);
  const { atual, tocando, setEmUso } = apresentacao;
  const depoimento = depoimentos[atual];
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
    "section",
    {
      id: "depoimentos",
      "aria-label": "Depoimentos de clientes",
      className: "border-line border-t py-16 lg:py-24",
      children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(Reveal, { margin: "-60px", className: "mb-8 lg:mb-10", children: [
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("p", { className: "text-cyan mb-4 font-mono text-xs tracking-[0.34em] uppercase", children: eyebrow }),
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("h2", { className: "text-foreground text-[length:var(--text-h2)] leading-[0.96] font-black tracking-tight", children: title })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
          "div",
          {
            role: "region",
            "aria-label": "Depoimentos de clientes",
            "aria-roledescription": "carrossel",
            onMouseEnter: () => setEmUso(true),
            onMouseLeave: () => setEmUso(false),
            onFocus: () => setEmUso(true),
            onBlur: (e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) setEmUso(false);
            },
            className: "relative",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { "aria-live": tocando ? "off" : "polite", "aria-atomic": "true", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
                Reveal,
                {
                  as: "blockquote",
                  className: "border-line bg-surface rounded border p-6 sm:p-10 lg:p-14",
                  children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Citacao, { depoimento })
                },
                `${depoimento.autor}-${atual}`
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Controles, { ...apresentacao, total: depoimentos.length })
            ]
          }
        )
      ] })
    }
  );
}
function Controles({
  atual,
  setAtual,
  proximo,
  anterior,
  pausadoPeloUsuario,
  alternarPausa,
  total
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "mt-6 flex flex-wrap items-center gap-x-4 gap-y-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("button", { type: "button", onClick: anterior, "aria-label": "Depoimento anterior", className: BOTAO, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_lucide_react10.ChevronLeftIcon, { "aria-hidden": "true" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("button", { type: "button", onClick: proximo, "aria-label": "Pr\xF3ximo depoimento", className: BOTAO, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_lucide_react10.ChevronRightIcon, { "aria-hidden": "true" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "flex gap-1.5", role: "group", "aria-label": "Navegar depoimentos", children: Array.from({ length: total }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      "button",
      {
        type: "button",
        "aria-current": i === atual,
        "aria-label": `Ir para depoimento ${i + 1}`,
        onClick: () => setAtual(i),
        className: "focus-visible:ring-ring flex h-11 w-11 items-center justify-center rounded focus-visible:ring-[3px] focus-visible:outline-none",
        children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          "span",
          {
            className: `block rounded-full transition-all duration-300 ${i === atual ? "bg-cyan h-1 w-6" : "bg-gray-text/50 hover:bg-gray-text h-1.5 w-1.5"}`
          }
        )
      },
      i
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      "button",
      {
        type: "button",
        onClick: alternarPausa,
        "aria-pressed": pausadoPeloUsuario,
        "aria-label": "Pausar apresenta\xE7\xE3o",
        className: BOTAO,
        children: pausadoPeloUsuario ? /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_lucide_react10.PlayIcon, { "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_lucide_react10.PauseIcon, { "aria-hidden": "true" })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("span", { className: "text-gray-text ml-auto shrink-0 font-mono text-xs whitespace-nowrap", children: [
      String(atual + 1).padStart(2, "0"),
      " / ",
      String(total).padStart(2, "0")
    ] })
  ] });
}

// src/blocos/About.tsx
var import_jsx_runtime37 = require("react/jsx-runtime");
function About({ eyebrow, title, paragrafos, slotLateral }) {
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("section", { id: "sobre", "aria-label": "Sobre", className: "relative overflow-hidden py-16 lg:py-24", children: [
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "grid gap-14 lg:grid-cols-[minmax(0,1.5fr)_minmax(360px,0.86fr)] lg:items-start 2xl:grid-cols-[minmax(0,1.7fr)_minmax(460px,0.8fr)]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(Reveal, { as: "div", margin: "-80px", children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("p", { className: "mb-5 font-mono text-xs uppercase tracking-[0.34em] text-cyan", children: eyebrow }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("h2", { className: "text-[length:var(--text-h2)] font-black leading-[0.94] tracking-tight text-foreground", children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]", children: paragrafos.map((paragrafo, index) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
          Reveal,
          {
            as: "div",
            margin: "-80px",
            delayMs: index * 60,
            className: "text-base leading-relaxed text-gray-text lg:text-lg",
            children: paragrafo
          },
          index
        )) })
      ] }),
      slotLateral && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
        Reveal,
        {
          as: "aside",
          margin: "-80px",
          delayMs: 120,
          className: "rounded border border-line bg-surface font-mono lg:sticky lg:top-28",
          children: slotLateral
        }
      )
    ] }) })
  ] });
}

// src/blocos/Contact.tsx
var import_lucide_react11 = require("lucide-react");
var import_jsx_runtime38 = require("react/jsx-runtime");
var ROTULOS_PADRAO3 = {
  legendaCta: "para quando o escopo j\xE1 est\xE1 claro",
  legendaEmail: "para materiais e projetos maiores",
  modo: "contract mode",
  modoValor: "PJ / NFS-e / remoto",
  modoDescricao: "O objetivo \xE9 sair da primeira conversa com risco, escopo e pr\xF3ximo passo claros."
};
function Contact({
  eyebrow,
  title,
  description,
  cta,
  email,
  slotFormulario,
  rotulos
}) {
  const r = { ...ROTULOS_PADRAO3, ...rotulos };
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
    "section",
    {
      id: "contato",
      "aria-label": "Iniciar projeto",
      className: "relative overflow-hidden border-t border-line py-16 lg:py-24",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(Reveal, { as: "div", margin: "-80px", className: "mb-10 lg:mb-12", children: [
            /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("p", { className: "mb-4 font-mono text-xs uppercase tracking-[0.34em] text-cyan", children: eyebrow }),
            /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("h2", { className: "text-[length:var(--text-h2)] font-black leading-[0.96] tracking-tight text-foreground", children: title }),
            /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("p", { className: "mt-4 max-w-3xl text-base leading-relaxed text-gray-text", children: description })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.55fr)] lg:items-start 2xl:grid-cols-[minmax(0,0.58fr)_minmax(0,1.7fr)]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(Reveal, { as: "div", margin: "-80px", className: "grid min-w-0 gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
                "a",
                {
                  href: cta.href,
                  ...propsDeLink(cta.href),
                  className: "group flex items-center gap-4 rounded border border-line bg-surface p-5 transition-colors hover:border-cyan/60 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded border border-line bg-background text-gray-text transition-colors group-hover:border-cyan group-hover:text-cyan", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_lucide_react11.MessageCircleIcon, { className: "size-4", "aria-hidden": "true" }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("p", { className: "font-mono text-sm text-foreground", children: cta.label }),
                      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("p", { className: "mt-1 text-xs text-gray-text", children: r.legendaCta })
                    ] })
                  ]
                }
              ),
              email && /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
                "a",
                {
                  href: `mailto:${email}`,
                  className: "group flex items-center gap-4 rounded border border-line bg-surface p-5 transition-colors hover:border-cyan/60 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded border border-line bg-background text-gray-text transition-colors group-hover:border-cyan group-hover:text-cyan", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_lucide_react11.MailIcon, { className: "size-4", "aria-hidden": "true" }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("p", { className: "font-mono text-sm text-foreground [overflow-wrap:anywhere]", children: email }),
                      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("p", { className: "mt-1 text-xs text-gray-text", children: r.legendaEmail })
                    ] })
                  ]
                }
              ),
              r.modoValor && /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "rounded border border-line bg-surface p-5 font-mono", children: [
                /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("p", { className: "text-xs uppercase tracking-[0.2em] text-gray-text", children: r.modo }),
                /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("p", { className: "mt-4 text-sm text-foreground", children: r.modoValor }),
                /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("p", { className: "mt-2 text-xs leading-relaxed text-gray-text", children: r.modoDescricao })
              ] })
            ] }),
            slotFormulario && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Reveal, { as: "div", margin: "-80px", delayMs: 80, className: "min-w-0", children: slotFormulario })
          ] })
        ] })
      ]
    }
  );
}

// src/blocos-app/AppShell.tsx
var React5 = __toESM(require("react"));
var import_lucide_react12 = require("lucide-react");
var import_jsx_runtime39 = require("react/jsx-runtime");
function AppShell({ sidebar, topbar, children, className, larguraSidebar = "w-64" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: cn("bg-background text-foreground flex min-h-svh w-full", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
      "aside",
      {
        "data-slot": "app-shell-sidebar",
        className: cn(
          "border-border bg-card sticky top-0 hidden h-svh shrink-0 overflow-y-auto border-r lg:block",
          larguraSidebar
        ),
        children: sidebar
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
        "header",
        {
          "data-slot": "app-shell-topbar",
          className: "border-border bg-card/80 sticky top-0 z-40 flex h-14 items-center gap-2 border-b px-4 backdrop-blur lg:px-6",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(MenuMobile, { sidebar }),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "flex min-w-0 flex-1 items-center", children: topbar })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("main", { "data-slot": "app-shell-content", className: "flex-1 overflow-x-clip", children })
    ] })
  ] });
}
function MenuMobile({ sidebar }) {
  const [aberto, setAberto] = React5.useState(false);
  function fecharAoNavegar(event) {
    if (event.target instanceof Element && event.target.closest("a[href]")) setAberto(false);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(Sheet, { open: aberto, onOpenChange: setAberto, children: [
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(SheetTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Button, { variant: "ghost", size: "icon", "aria-label": "Abrir menu", className: "-ml-2 lg:hidden", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_lucide_react12.MenuIcon, {}) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
      SheetContent,
      {
        side: "left",
        "aria-describedby": void 0,
        className: "bg-card w-64 gap-0 p-0",
        onClickCapture: fecharAoNavegar,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(SheetTitle, { className: "sr-only", children: "Menu" }),
          sidebar
        ]
      }
    )
  ] });
}

// src/blocos-app/EmptyState.tsx
var import_jsx_runtime40 = require("react/jsx-runtime");
function EmptyState({ icon, title, description, action, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(
    "div",
    {
      "data-slot": "empty-state",
      role: "status",
      className: cn(
        "flex flex-col items-center justify-center gap-3 px-6 py-16 text-center",
        className
      ),
      children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { "data-slot": "empty-state-icon", className: "text-muted-foreground [&_svg]:size-10", children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("p", { className: "text-foreground text-sm font-medium", children: title }),
        description && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("p", { className: "text-muted-foreground max-w-sm text-sm", children: description }),
        action && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "mt-2", children: action })
      ]
    }
  );
}

// src/blocos-app/DataTable.tsx
var import_jsx_runtime41 = require("react/jsx-runtime");
function isEmptyStateProps(value) {
  return typeof value === "object" && value !== null && "title" in value;
}
function DataTable({
  columns,
  rows,
  getRowKey,
  loading = false,
  loadingRowCount = 5,
  emptyState,
  page,
  totalPages,
  onPageChange,
  className
}) {
  const mostrarPaginacao = !loading && page !== void 0 && totalPages !== void 0 && onPageChange;
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { "data-slot": "data-table", className: cn("flex flex-col gap-4", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(Table, { "aria-busy": loading || void 0, children: [
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(TableRow, { children: columns.map((coluna) => /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(TableHead, { className: coluna.className, children: coluna.header }, coluna.key)) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(TableBody, { children: [
        loading && Array.from({ length: loadingRowCount }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(TableRow, { children: columns.map((coluna) => /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(TableCell, { className: coluna.className, children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Skeleton, { className: "h-4 w-full max-w-40" }) }, coluna.key)) }, `skeleton-${index}`)),
        !loading && rows.map((row, index) => /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(TableRow, { children: columns.map((coluna) => /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(TableCell, { className: coluna.className, children: coluna.render(row) }, coluna.key)) }, getRowKey ? getRowKey(row, index) : index))
      ] })
    ] }),
    !loading && rows.length === 0 && emptyState && (isEmptyStateProps(emptyState) ? /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(EmptyState, { ...emptyState }) : emptyState),
    mostrarPaginacao && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(PaginationControl, { page, totalPages, onPageChange })
  ] });
}

// src/blocos-app/StatCard.tsx
var import_lucide_react13 = require("lucide-react");
var import_jsx_runtime42 = require("react/jsx-runtime");
var tomPorDirecao = {
  up: "positivo",
  down: "negativo",
  neutral: "neutro"
};
var corPorTom = {
  positivo: "text-success",
  negativo: "text-destructive",
  neutro: "text-muted-foreground"
};
var setaPorDirecao = {
  up: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_lucide_react13.ArrowUpRightIcon, { "aria-hidden": "true" }),
  down: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_lucide_react13.ArrowDownRightIcon, { "aria-hidden": "true" }),
  neutral: null
};
function StatCard({ label, value, icon, delta, className }) {
  const direcao = delta?.direction ?? "neutral";
  const tom = delta?.tom ?? tomPorDirecao[direcao];
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Card, { className: cn("gap-1 py-5", className), children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(CardContent, { className: "flex items-start justify-between gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "flex min-w-0 flex-col gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { className: "text-muted-foreground text-xs font-medium uppercase tracking-wide", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { className: "text-foreground text-2xl font-semibold tabular-nums", children: value }),
      delta && /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
        "p",
        {
          "data-direction": direcao,
          className: cn(
            "inline-flex items-center gap-0.5 text-xs font-medium [&_svg]:size-3.5 [&_svg]:shrink-0",
            corPorTom[tom]
          ),
          children: [
            setaPorDirecao[direcao],
            delta.value
          ]
        }
      )
    ] }),
    icon && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
      "div",
      {
        "data-slot": "stat-card-icon",
        className: "bg-accent/10 text-accent flex size-9 shrink-0 items-center justify-center rounded-md [&_svg]:size-4.5",
        children: icon
      }
    )
  ] }) });
}

// src/blocos-app/PageHeader.tsx
var import_jsx_runtime43 = require("react/jsx-runtime");
function PageHeader({ title, breadcrumb, actions, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
    "div",
    {
      "data-slot": "page-header",
      className: cn(
        "flex flex-col gap-4 border-b border-border px-4 py-5 lg:px-6 sm:flex-row sm:items-center sm:justify-between",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: "flex min-w-0 flex-col gap-1.5", children: [
          breadcrumb && breadcrumb.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("nav", { "aria-label": "Trilha de navega\xE7\xE3o", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("ol", { className: "text-muted-foreground flex flex-wrap items-center gap-1.5 text-xs", children: breadcrumb.map((item, index) => {
            const isLast = index === breadcrumb.length - 1;
            return /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("li", { className: "flex items-center gap-1.5", children: [
              item.href && !isLast ? /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                "a",
                {
                  href: item.href,
                  className: "hover:text-foreground focus-visible:ring-ring inline-flex min-h-6 items-center rounded-sm transition-colors outline-none focus-visible:ring-[3px]",
                  children: item.label
                }
              ) : /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                "span",
                {
                  "aria-current": isLast ? "page" : void 0,
                  className: isLast ? "text-foreground" : void 0,
                  children: item.label
                }
              ),
              !isLast && /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("span", { "aria-hidden": "true", children: "/" })
            ] }, index);
          }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("h1", { className: "text-foreground text-xl font-semibold text-balance sm:truncate", children: title })
        ] }),
        actions && /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { "data-slot": "page-header-actions", className: "flex shrink-0 flex-wrap items-center gap-2", children: actions })
      ]
    }
  );
}

// src/blocos-app/FormField.tsx
var React6 = __toESM(require("react"));
var import_react_slot3 = require("@radix-ui/react-slot");
var import_jsx_runtime44 = require("react/jsx-runtime");
function FormField({ label, error, children, className, htmlFor }) {
  const idGerado = React6.useId();
  const controlId = htmlFor ?? idGerado;
  const errorId = `${controlId}-error`;
  const propsDoControle = {
    id: controlId,
    "aria-invalid": error ? true : void 0,
    "aria-describedby": error ? errorId : void 0
  };
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { "data-slot": "form-field", className: cn("flex flex-col gap-1.5", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Label, { htmlFor: controlId, children: label }),
    React6.isValidElement(children) ? /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_react_slot3.Slot, { ...propsDoControle, children }) : children,
    error && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("p", { id: errorId, role: "alert", className: "text-destructive text-xs font-medium", children: error })
  ] });
}

// src/blocos-app/CopyField.tsx
var React7 = __toESM(require("react"));
var import_lucide_react14 = require("lucide-react");
var import_jsx_runtime45 = require("react/jsx-runtime");
var MENSAGEM = {
  ocioso: "",
  copiado: "Copiado",
  falhou: "N\xE3o foi poss\xEDvel copiar. O valor est\xE1 selecionado: copie manualmente."
};
async function copiarTexto(texto) {
  try {
    await navigator.clipboard.writeText(texto);
    return true;
  } catch {
    return false;
  }
}
function CopyField({ value, label, className, feedbackDurationMs = 2e3 }) {
  const [estado, setEstado] = React7.useState("ocioso");
  const inputRef = React7.useRef(null);
  const timerRef = React7.useRef(void 0);
  const inputId = React7.useId();
  React7.useEffect(() => () => window.clearTimeout(timerRef.current), []);
  async function copiarValor() {
    window.clearTimeout(timerRef.current);
    const copiou = await copiarTexto(value);
    if (!copiou) inputRef.current?.select();
    setEstado(copiou ? "copiado" : "falhou");
    timerRef.current = window.setTimeout(() => setEstado("ocioso"), feedbackDurationMs);
  }
  const copiado = estado === "copiado";
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { "data-slot": "copy-field", className: cn("flex flex-col gap-1.5", className), children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Label, { htmlFor: inputId, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Input, { ref: inputRef, id: inputId, readOnly: true, value, className: "font-mono" }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
        Button,
        {
          type: "button",
          variant: "outline",
          size: "icon",
          "aria-label": copiado ? "Valor copiado" : "Copiar valor",
          onClick: copiarValor,
          children: copiado ? /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_lucide_react14.CheckIcon, { className: "text-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_lucide_react14.CopyIcon, {})
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
      "p",
      {
        role: "status",
        className: estado === "falhou" ? "text-muted-foreground text-xs" : "sr-only",
        children: MENSAGEM[estado]
      }
    )
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  About,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AnimatedIcon,
  AppShell,
  BRAND_ANIMATIONS,
  BRAND_TONES,
  BRAND_VARIANTS,
  Badge,
  BrandMark,
  BrandMarkAnimated,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Contact,
  CopyField,
  DataTable,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  EmptyState,
  Footer,
  FormField,
  Hero,
  Input,
  Label,
  Logo,
  LogoAnimado,
  Navbar,
  NodeNetwork,
  PageHeader,
  Pagination,
  PaginationContent,
  PaginationControl,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Process,
  Projects,
  RATIO_ALTURA_LOGO,
  RATIO_AVANCO_LOGO,
  RATIO_PADDING_LOGO,
  Reveal,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Separator,
  Services,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Skeleton,
  Stack,
  StatCard,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Testimonials,
  Textarea,
  Toast,
  ToastAction,
  ToastClose,
  ToastComponentProvider,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  badgeVariants,
  buttonVariants,
  cn,
  cores,
  curvas,
  duracoes,
  familias,
  lerToken,
  pesos,
  toastVariants,
  tokensDeCor,
  tokensDeMotion,
  useToast
});
//# sourceMappingURL=index.js.map