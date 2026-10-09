import path from "node:path";
import { writeFileDeep } from "./files.mjs";
import { fullBleedSvg, maskableSvg, pinnedTabSvg } from "./full-bleed.mjs";
import { encodeIco } from "./ico.mjs";
import { rasterize, squareTarget } from "./raster.mjs";
import { staticSvg } from "./svg-files.mjs";

const FAVICON_VARIANTS = ["symbol-block", "symbol-tag", "symbol-cursor"];
const ICO_SIZES = [16, 32, 48];
const THEME = "#0B0F14";

const MANIFEST = {
  name: "MF Desenvolvimento",
  short_name: "MF",
  theme_color: THEME,
  background_color: THEME,
  display: "standalone",
  icons: [
    { src: "icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
    { src: "icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    { src: "icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
  ],
};

const HEAD_HTML = `<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="${THEME}">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="${THEME}">
`;

async function writeIco(ctx, dir, variant) {
  const svg = staticSvg(ctx, variant, "cyan");
  const images = await Promise.all(
    ICO_SIZES.map(async (size) => ({
      size,
      png: await rasterize(ctx.sharp, svg, squareTarget(size)),
    })),
  );
  await writeFileDeep(path.join(dir, "favicon.ico"), encodeIco(images));
}

async function writeAppIcons(ctx, dir, variant) {
  const { brand, sharp } = ctx;
  const rounded = staticSvg(ctx, variant, "cyan");
  const icons = [
    ["apple-touch-icon.png", fullBleedSvg(brand, variant), 180],
    ["icon-192.png", rounded, 192],
    ["icon-512.png", rounded, 512],
    ["icon-maskable-512.png", maskableSvg(brand, variant), 512],
  ];
  await Promise.all(
    icons.map(async ([name, svg, size]) =>
      writeFileDeep(path.join(dir, name), await rasterize(sharp, svg, squareTarget(size))),
    ),
  );
}

async function writeFaviconSet(ctx, variant) {
  const dir = path.join(ctx.out, "favicon", variant);
  await Promise.all([
    writeIco(ctx, dir, variant),
    writeAppIcons(ctx, dir, variant),
    writeFileDeep(path.join(dir, "icon.svg"), staticSvg(ctx, variant, "cyan")),
    writeFileDeep(path.join(dir, "safari-pinned-tab.svg"), pinnedTabSvg(ctx.brand, variant)),
    writeFileDeep(path.join(dir, "site.webmanifest"), `${JSON.stringify(MANIFEST, null, 2)}\n`),
    writeFileDeep(path.join(dir, "head.html"), HEAD_HTML),
  ]);
}

export async function writeFavicons(ctx) {
  await Promise.all(FAVICON_VARIANTS.map((variant) => writeFaviconSet(ctx, variant)));
}
