// Variantes de símbolo sem cantos transparentes: ícones de app (iOS, Android
// maskable) recebem o quadrado cheio e o sistema aplica o próprio recorte.
const SAFE_ZONE_CONTENT = 600;

function squareTile(layout) {
  return { ...layout, tile: { ...layout.tile, radius: 0 } };
}

function contentWidth(brand, layout) {
  return brand.boundsOf(layout.parts).width * layout.content.scale;
}

// Reduz o conteúdo em torno do centro do quadrado (500, 500).
function shrinkContent(brand, layout, targetWidth) {
  const factor = targetWidth / contentWidth(brand, layout);
  const { x, y, scale } = layout.content;
  return { ...layout, content: { x: 500 + (x - 500) * factor, y: 500 + (y - 500) * factor, scale: scale * factor } };
}

export function fullBleedSvg(brand, variant) {
  return brand.serializeSvg(brand.buildBrandTree({ variant, tone: "cyan", decorate: squareTile }));
}

export function maskableSvg(brand, variant) {
  const decorate = (layout) => shrinkContent(brand, squareTile(layout), SAFE_ZONE_CONTENT);
  return brand.serializeSvg(brand.buildBrandTree({ variant, tone: "cyan", decorate }));
}

// Só as formas, sem bloco: o Safari pinta a máscara com a cor do atributo `color`
// do <link>, então o SVG precisa ser monocromático e sem fundo. Usa o próprio
// símbolo (não o monograma) para a aba fixada bater com o favicon escolhido.
export function pinnedTabSvg(brand, variant) {
  const decorate = (layout) => {
    const bounds = brand.boundsOf(layout.parts);
    const side = Math.max(bounds.width, bounds.height);
    const viewBox = { x: bounds.x - (side - bounds.width) / 2, y: bounds.y - (side - bounds.height) / 2, width: side, height: side };
    return { ...layout, tile: null, viewBox, content: { x: 0, y: 0, scale: 1 } };
  };
  return brand.serializeSvg(brand.buildBrandTree({ variant, tone: "solid-black", decorate }));
}
