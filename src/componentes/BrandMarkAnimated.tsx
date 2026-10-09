import { Fragment } from "react";
import { buildAnimatedBrandTree, type BrandAnimation, type BrandTone, type BrandVariant } from "../brand";
import { useBrandIdPrefix, type BrandMarkProps } from "./BrandMark";
import { renderBrandRoot } from "./brand-node";
import { rootOverrides } from "./brand-root";

export type BrandMarkAnimatedProps = Pick<BrandMarkProps, "height" | "color" | "title" | "decorative" | "className" | "bracketOpacity"> & {
  animation?: BrandAnimation;
  variant?: BrandVariant;
  tone?: BrandTone;
  /** Mudar este valor remonta o svg e reinicia a animação CSS. */
  replayKey?: string | number;
};

// A animação é CSS puro dentro do próprio svg: sem JS a marca já aparece, e
// nada depende de hidratação.
export function BrandMarkAnimated({
  animation = "assemble",
  variant = "horizontal",
  tone = "cyan",
  height = 24,
  color,
  title,
  bracketOpacity,
  decorative = false,
  replayKey,
  className,
}: BrandMarkAnimatedProps) {
  const idPrefix = useBrandIdPrefix();
  const tree = buildAnimatedBrandTree({ variant, tone, animation, color, title, bracketOpacity, idPrefix });
  const svg = renderBrandRoot(tree, rootOverrides({ tree, height, decorative, className }));
  return <Fragment key={replayKey}>{svg}</Fragment>;
}
