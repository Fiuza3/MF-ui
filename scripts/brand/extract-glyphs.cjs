// Uso: node extract-glyphs.cjs <caminho-opentype> <fonte.ttf>
// Saída: JSON com path (em unidades de 1000/em, y para baixo, baseline em y=0),
// avanço e caixa de cada glifo de "<MF/>".
const [, , opentypePath, fontPath] = process.argv
const opentype = require(opentypePath)

const font = opentype.loadSync(fontPath)
const scale = 1000 / font.unitsPerEm
const result = { unitsPerEm: font.unitsPerEm, ascender: font.ascender * scale, descender: font.descender * scale, glyphs: {} }

for (const char of ['<', 'M', 'F', '/', '>']) {
  const glyph = font.charToGlyph(char)
  const path = glyph.getPath(0, 0, 1000)
  const box = path.getBoundingBox()
  result.glyphs[char] = {
    d: path.toPathData(2),
    advance: Math.round(glyph.advanceWidth * scale),
    box: { x1: +box.x1.toFixed(2), y1: +box.y1.toFixed(2), x2: +box.x2.toFixed(2), y2: +box.y2.toFixed(2) },
  }
}

console.log(JSON.stringify(result, null, 2))
