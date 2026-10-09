import path from "node:path";
import { writeFileDeep } from "./files.mjs";

export const staticSvg = ({ brand }, variant, tone) =>
  brand.serializeSvg(brand.buildBrandTree({ variant, tone }));

const animatedSvg = ({ brand }, variant, animation) =>
  brand.serializeSvg(brand.buildAnimatedBrandTree({ variant, tone: "cyan", animation }));

export async function writeStaticSvgs(ctx) {
  const { brand, out } = ctx;
  const jobs = brand.BRAND_VARIANTS.flatMap((variant) =>
    brand.BRAND_TONES.map((tone) =>
      writeFileDeep(path.join(out, "svg", `${variant}-${tone}.svg`), staticSvg(ctx, variant, tone)),
    ),
  );
  await Promise.all(jobs);
}

export async function writeAnimatedSvgs(ctx) {
  const { brand, out } = ctx;
  const jobs = brand.BRAND_VARIANTS.flatMap((variant) =>
    brand.BRAND_ANIMATIONS.map((animation) =>
      writeFileDeep(
        path.join(out, "svg", "animated", `${variant}-${animation}.svg`),
        animatedSvg(ctx, variant, animation),
      ),
    ),
  );
  await Promise.all(jobs);
}
