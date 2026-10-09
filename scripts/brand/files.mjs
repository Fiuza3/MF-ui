import { mkdir, readdir, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";

export async function resetDir(dir) {
  await rm(dir, { recursive: true, force: true });
  await mkdir(dir, { recursive: true });
}

export async function writeFileDeep(file, data) {
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, data);
}

export async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => (entry.isDirectory() ? walk(path.join(dir, entry.name)) : [path.join(dir, entry.name)])));
  return nested.flat();
}

/** Contagem e bytes por pasta de primeiro nível (e por subpasta de png/). */
export async function summarize(root) {
  const files = await walk(root);
  const sizes = await Promise.all(files.map(async (file) => (await stat(file)).size));
  const groups = new Map();
  files.forEach((file, index) => {
    const parts = path.relative(root, file).split(path.sep);
    const key = parts.length === 1 ? "(raiz)" : parts.slice(0, parts[0] === "png" && parts.length > 2 ? 2 : 1).join("/");
    const group = groups.get(key) ?? { count: 0, bytes: 0 };
    groups.set(key, { count: group.count + 1, bytes: group.bytes + sizes[index] });
  });
  return { groups, total: { count: files.length, bytes: sizes.reduce((sum, size) => sum + size, 0) } };
}
