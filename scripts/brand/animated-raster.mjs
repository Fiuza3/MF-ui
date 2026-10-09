import { mkdir } from "node:fs/promises";
import path from "node:path";

const VARIANTS = ["horizontal", "symbol"];
const ANIMATIONS = ["assemble", "type", "draw", "pulse", "bounce"];
const TONE = "cyan";
const GIF_BACKGROUND = "#0B0F14";
const WEBP_FPS = 30;
const GIF_FPS = 20;
const HOLD_MS = 1200;
const HORIZONTAL_WIDTH = 640;
const SYMBOL_SIZE = 512;

/**
 * Instantes (ms) dos quadros de um arquivo. Mount segura o resultado final por
 * HOLD_MS; loop cobre exatamente um ciclo, sem repetir o quadro 0 no fim,
 * senão o laço "engasga" por um quadro.
 * @param {{ length: number, trigger: string }} timeline
 * @param {number} fps
 * @returns {{ times: number[], total: number }}
 */
export function frameTimes(timeline, fps) {
  const total = timeline.trigger === "mount" ? timeline.length + HOLD_MS : timeline.length;
  const step = 1000 / fps;
  const times = [];
  for (let t = 0; t < total - 1e-6; t += step) times.push(t);
  return { times, total };
}

/**
 * Atraso de cada quadro em ms inteiros, por diferença de instantes arredondados:
 * 1000/30 não é inteiro, e arredondar cada atraso sozinho deriva a duração total.
 * @param {number[]} times
 * @param {number} total
 * @returns {number[]}
 */
export function frameDelays(times, total) {
  return times.map((time, i) => Math.round(times[i + 1] ?? total) - Math.round(time));
}

/**
 * Funde quadros consecutivos idênticos somando os atrasos.
 * @param {{ data: Buffer, delay: number }[]} frames
 * @returns {{ data: Buffer, delay: number }[]}
 */
export function mergeIdenticalFrames(frames) {
  const merged = [];
  for (const frame of frames) {
    const last = merged[merged.length - 1];
    if (last && last.data.equals(frame.data)) last.delay += frame.delay;
    else merged.push({ data: frame.data, delay: frame.delay });
  }
  return merged;
}

/**
 * @param {string} variant
 * @param {{ width: number, height: number }} viewBox
 * @returns {{ width: number, height: number }}
 */
export function targetSize(variant, viewBox) {
  if (variant !== "horizontal") return { width: SYMBOL_SIZE, height: SYMBOL_SIZE };
  const height = Math.round((HORIZONTAL_WIDTH * viewBox.height) / viewBox.width);
  return { width: HORIZONTAL_WIDTH, height };
}

// Largura/altura no SVG fazem o librsvg rasterizar direto no tamanho final, sem reamostrar.
function svgAt(brand, options, timeMs, size) {
  const tree = brand.buildFrameTree(options, timeMs);
  tree.attrs.width = size.width;
  tree.attrs.height = size.height;
  return brand.serializeSvg(tree);
}

async function renderRaw({ sharp, svg, background }) {
  let image = sharp(Buffer.from(svg)).ensureAlpha();
  if (background) image = image.flatten({ background }).ensureAlpha();
  return image.raw().toBuffer();
}

async function renderFrames({ brand, sharp, options, times, timeline, size, background }) {
  const cache = new Map();
  const frames = [];
  for (const time of times) {
    const at = Math.min(time, timeline.length);
    if (!cache.has(at))
      cache.set(at, await renderRaw({ sharp, svg: svgAt(brand, options, at, size), background }));
    frames.push(cache.get(at));
  }
  return frames;
}
// Os quadros RGBA empilhados numa imagem alta + pageHeight: o sharp trata cada fatia como um quadro.
function animationOf({ sharp, frames, size }) {
  const raw = {
    width: size.width,
    height: size.height * frames.length,
    channels: 4,
    pageHeight: size.height,
  };
  return sharp(Buffer.concat(frames.map((frame) => frame.data)), { raw });
}

async function encode({ sharp, frames, size, format, file }) {
  const delay = frames.map((frame) => frame.delay);
  const image = animationOf({ sharp, frames, size });
  if (format === "gif") await image.gif({ loop: 0, delay }).toFile(file);
  else await image.webp({ loop: 0, delay, quality: 90 }).toFile(file);
}

async function buildFile(context, { format, fps, background }) {
  const { brand, sharp, options, timeline, size } = context;
  const { times, total } = frameTimes(timeline, fps);
  const rendered = await renderFrames({ brand, sharp, options, times, timeline, size, background });
  const delays = frameDelays(times, total);
  const merged = mergeIdenticalFrames(rendered.map((data, i) => ({ data, delay: delays[i] })));
  await encode({ sharp, frames: merged, size, format, file: context.file(format) });
}

async function writeOne({ brand, sharp, outDir, variant, animation }) {
  const options = { variant, tone: TONE, animation };
  const { layout, timeline } = brand.prepareAnimation(variant, animation);
  const size = targetSize(variant, layout.viewBox);
  const file = (format) => path.join(outDir, `${variant}-${animation}.${format}`);
  const context = { brand, sharp, options, timeline, size, file };
  await buildFile(context, { format: "webp", fps: WEBP_FPS, background: null });
  await buildFile(context, { format: "gif", fps: GIF_FPS, background: GIF_BACKGROUND });
}

/**
 * Gera `{variant}-{animation}.webp` (30 fps, transparente) e `.gif` (20 fps, fundo #0B0F14).
 * @param {{ brand: object, sharp: Function, outDir: string }} params
 */
export async function writeAnimatedRasters({ brand, sharp, outDir }) {
  await mkdir(outDir, { recursive: true });
  for (const variant of VARIANTS) {
    for (const animation of ANIMATIONS)
      await writeOne({ brand, sharp, outDir, variant, animation });
  }
}
