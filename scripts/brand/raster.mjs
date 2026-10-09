// Renderiza em 2x e reduz: a reamostragem Lanczos dá bordas mais limpas
// que a rasterização direta do librsvg em tamanhos pequenos (16–48 px).
const SUPERSAMPLE = 2;
const BASE_DENSITY = 72;

function intrinsicSize(svg) {
  const match = /viewBox="([^"]+)"/.exec(svg);
  if (!match) throw new Error("SVG sem viewBox");
  const [, , width, height] = match[1].split(/\s+/).map(Number);
  return { width, height };
}

/**
 * @param {import("sharp")} sharp
 * @param {string} svg
 * @param {{ width?: number, height?: number }} target  informe um dos lados
 * @returns {Promise<Buffer>}
 */
export function rasterize(sharp, svg, target) {
  const intrinsic = intrinsicSize(svg);
  const ratio = target.height ? target.height / intrinsic.height : target.width / intrinsic.width;
  const density = Math.max(1, Math.round(BASE_DENSITY * ratio * SUPERSAMPLE));
  return sharp(Buffer.from(svg), { density })
    .resize(target)
    .png({ compressionLevel: 9 })
    .toBuffer();
}

export const squareTarget = (side) => ({ width: side, height: side });
