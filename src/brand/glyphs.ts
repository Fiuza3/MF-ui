// Contornos de Geist Mono 700 (Vercel, SIL Open Font License 1.1) extraídos com opentype.js.
// Unidades: 1000 por em, eixo y para baixo, linha de base em y = 0. Contorno em vez de <text>:
// a marca não pode depender de fonte instalada — SVG e PNG renderizados fora do site trocariam o desenho.
// Não edite à mão: para regenerar, rode o extrator descrito em brand/README.md.

export type GlyphChar = "<" | "M" | "F" | "/" | ">";

export type GlyphBox = { x1: number; y1: number; x2: number; y2: number };

export type Glyph = { d: string; advance: number; box: GlyphBox };

export const GLYPHS: Readonly<Record<GlyphChar, Glyph>> = {
  "<": {
    d: "M530-144L530-19L70-216L70-367L530-564L530-439L185-292L530-144Z",
    advance: 600,
    box: { x1: 70, y1: -564, x2: 530, y2: -19 },
  },
  "M": {
    d: "M343-98L257-98L174-448L174 0L44 0L44-710L204-710L300-334L396-710L556-710L556 0L426 0L426-448L343-98Z",
    advance: 600,
    box: { x1: 44, y1: -710, x2: 556, y2: 0 },
  },
  "F": {
    d: "M236 0L94 0L94-710L546-710L546-582L236-582L236-410L528-410L528-285L236-285L236 0Z",
    advance: 600,
    box: { x1: 94, y1: -710, x2: 546, y2: 0 },
  },
  "/": {
    d: "M214 110L86 110L386-750L514-750L214 110Z",
    advance: 600,
    box: { x1: 86, y1: -750, x2: 514, y2: 110 },
  },
  ">": {
    d: "M530-216L70-19L70-144L415-292L70-439L70-564L530-367L530-216Z",
    advance: 600,
    box: { x1: 70, y1: -564, x2: 530, y2: -19 },
  },
};
