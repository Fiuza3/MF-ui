import { existsSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { writeFavicons } from "./favicon.mjs";
import { resetDir, summarize } from "./files.mjs";
import { loadBrand } from "./load-brand.mjs";
import { writeZipPackages } from "./packages.mjs";
import { writePngSets } from "./png-sets.mjs";
import { writeSocial } from "./social.mjs";
import { writeAnimatedSvgs, writeStaticSvgs } from "./svg-files.mjs";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "brand");
const README = path.join(OUT, "README.md");
const ANIMATED_RASTER = path.join(ROOT, "scripts/brand/animated-raster.mjs");

async function writeAnimatedRasters(ctx) {
  if (!existsSync(ANIMATED_RASTER)) return;
  const module = await import(pathToFileURL(ANIMATED_RASTER).href);
  await module.writeAnimatedRasters({ brand: ctx.brand, sharp: ctx.sharp, outDir: path.join(OUT, "animated") });
}

// O README é escrito à mão e vive dentro de brand/: sobrevive à limpeza.
async function resetKeepingReadme() {
  const readme = existsSync(README) ? await readFile(README) : null;
  await resetDir(OUT);
  if (readme) await writeFile(README, readme);
}

function formatBytes(bytes) {
  return bytes > 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${(bytes / 1024).toFixed(1)} KB`;
}

async function printSummary() {
  const { groups, total } = await summarize(OUT);
  const line = (name, group) => `${name.padEnd(28)} ${String(group.count).padStart(4)} arquivos  ${formatBytes(group.bytes)}\n`;
  for (const [name, group] of [...groups].sort(([a], [b]) => a.localeCompare(b))) process.stdout.write(line(name, group));
  process.stdout.write(line("TOTAL", total));
}

async function main() {
  const [brand, sharpModule] = await Promise.all([loadBrand(ROOT), import("sharp")]);
  const ctx = { brand, sharp: sharpModule.default, out: OUT };
  await resetKeepingReadme();
  await writeStaticSvgs(ctx);
  await writeAnimatedSvgs(ctx);
  await writePngSets(ctx);
  await writeSocial(ctx);
  await writeFavicons(ctx);
  await writeAnimatedRasters(ctx);
  await writeZipPackages(OUT);
  await printSummary();
}

main().then(
  () => process.exit(0),
  (error) => {
    process.stderr.write(`${error.stack ?? error}\n`);
    process.exit(1);
  },
);
