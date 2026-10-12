import { useId } from "react";
import { buildBrandTree, type BrandTone, type BrandVariant } from "../brand";
import { renderBrandRoot } from "./brand-node";
import { rootOverrides } from "./brand-root";

export type BrandMarkProps = {
  variant?: BrandVariant;
  tone?: BrandTone;
  /** Altura em px (number) ou qualquer comprimento CSS; a largura segue o viewBox. */
  height?: number | string;
  /** Cor livre (ex.: "currentColor") no lugar do tom. */
  color?: string;
  title?: string;
  bracketOpacity?: number;
  /** Marca puramente visual: escondida do leitor de tela, sem role nem title. */
  decorative?: boolean;
  className?: string;
};

// Sem "use client": useId funciona em Server Components e gera o mesmo id no
// servidor e no cliente, então não há risco de hidratação.
// O prefixo evita colisão do id da máscara entre marcas vazadas na mesma página.
export function useBrandIdPrefix(): string {
  return `mf-brand-${useId().replace(/[^A-Za-z0-9_-]/g, "")}-`;
}

export function BrandMark({
  variant = "horizontal",
  tone = "cyan",
  height = 24,
  color,
  title,
  bracketOpacity,
  decorative = false,
  className,
}: BrandMarkProps) {
  const idPrefix = useBrandIdPrefix();
  const tree = buildBrandTree({ variant, tone, color, title, bracketOpacity, idPrefix });
  return renderBrandRoot(tree, rootOverrides({ tree, height, decorative, className }));
}
