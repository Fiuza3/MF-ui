import path from "node:path";
import { writeFileDeep } from "./files.mjs";
import { rasterize, squareTarget } from "./raster.mjs";
import { staticSvg } from "./svg-files.mjs";

const WORDMARK_HEIGHTS = [32, 64, 128, 256, 512, 1024];
const SYMBOL_SIDES = [16, 32, 48, 64, 128, 180, 192, 256, 512, 1024];

const isWordmark = (variant) => variant === "horizontal" || variant === "monogram";

const sizesOf = (variant) => (isWordmark(variant) ? WORDMARK_HEIGHTS : SYMBOL_SIDES);

const targetOf = (variant, size) => (isWordmark(variant) ? { height: size } : squareTarget(size));

async function writeOne(ctx, svg, variant, tone, size) {
  const png = await rasterize(ctx.sharp, svg, targetOf(variant, size));
  const file = path.join(ctx.out, "png", variant, tone, `mf-${variant}-${tone}-${size}.png`);
  await writeFileDeep(file, png);
}

async function writeVariantTone(ctx, variant, tone) {
  const svg = staticSvg(ctx, variant, tone);
  await Promise.all(sizesOf(variant).map((size) => writeOne(ctx, svg, variant, tone, size)));
}

export async function writePngSets(ctx) {
  for (const variant of ctx.brand.BRAND_VARIANTS) {
    await Promise.all(ctx.brand.BRAND_TONES.map((tone) => writeVariantTone(ctx, variant, tone)));
  }
}
