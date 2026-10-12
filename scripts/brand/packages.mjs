import { readFile } from "node:fs/promises";
import path from "node:path";
import { walk, writeFileDeep } from "./files.mjs";
import { encodeZip } from "./zip.mjs";

// Pastas não baixam em site estático (o Storybook publicado não lista diretório):
// cada conjunto vira um .zip com link direto na página da marca.
function packagesOf(out) {
  return [
    { file: "mf-marca-completa.zip", root: out },
    { file: "mf-marca-svg.zip", root: path.join(out, "svg") },
    { file: "mf-marca-png.zip", root: path.join(out, "png") },
    { file: "mf-marca-animada.zip", root: path.join(out, "animated") },
    { file: "mf-favicon.zip", root: path.join(out, "favicon") },
  ];
}

async function entriesUnder(root, skip) {
  const files = (await walk(root)).filter((file) => !file.startsWith(skip));
  return Promise.all(
    files.map(async (file) => ({ name: path.relative(root, file), data: await readFile(file) })),
  );
}

export async function writeZipPackages(out) {
  const zipDir = path.join(out, "zip");
  for (const pack of packagesOf(out)) {
    const entries = await entriesUnder(pack.root, zipDir);
    await writeFileDeep(path.join(zipDir, pack.file), encodeZip(entries));
  }
}
