import path from "node:path";
import { writeFileDeep } from "./files.mjs";
import { fullBleedSvg } from "./full-bleed.mjs";
import { rasterize, squareTarget } from "./raster.mjs";
import { staticSvg } from "./svg-files.mjs";

const BACKGROUND = "#0B0F14";

const AVATARS = [400, 1080];

// Largura da marca em fração da tela: redes sociais cortam bordas e sobrepõem
// avatar/UI nos banners, então a margem é generosa.
const CANVAS = {
  "banner-1500x500": { width: 1500, height: 500, share: 0.4 },
  "og-1200x630": { width: 1200, height: 630, share: 0.5 },
};

async function writeAvatar(ctx, side) {
  const png = await rasterize(
    ctx.sharp,
    fullBleedSvg(ctx.brand, "symbol-block"),
    squareTarget(side),
  );
  await writeFileDeep(path.join(ctx.out, "png", "social", `avatar-${side}.png`), png);
}

async function writeCanvas(ctx, name) {
  const { width, height, share } = CANVAS[name];
  const logo = await rasterize(ctx.sharp, staticSvg(ctx, "horizontal", "cyan"), {
    width: Math.round(width * share),
  });
  const canvas = ctx.sharp({ create: { width, height, channels: 4, background: BACKGROUND } });
  const png = await canvas
    .composite([{ input: logo, gravity: "center" }])
    .png({ compressionLevel: 9 })
    .toBuffer();
  await writeFileDeep(path.join(ctx.out, "png", "social", `${name}.png`), png);
}

export async function writeSocial(ctx) {
  await Promise.all([
    ...AVATARS.map((side) => writeAvatar(ctx, side)),
    ...Object.keys(CANVAS).map((name) => writeCanvas(ctx, name)),
  ]);
}
