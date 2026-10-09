import { layoutBrand } from "../brand";
import { BrandMark } from "./BrandMark";

export type LogoProps = {
  tamanho?: number;
  cor?: string;
  opacidadeColchetes?: number;
  compacto?: boolean;
  className?: string;
};

/** @deprecated Eram da versão com fonte; o desenho vetorial não usa mais. Use BrandMark. */
export const RATIO_AVANCO_LOGO = 13.2 / 22;
/** @deprecated Eram da versão com fonte; o desenho vetorial não usa mais. Use BrandMark. */
export const RATIO_ALTURA_LOGO = 30 / 22;
/** @deprecated Eram da versão com fonte; o desenho vetorial não usa mais. Use BrandMark. */
export const RATIO_PADDING_LOGO = 1 / 22;

const VIEWBOX_HEIGHT = layoutBrand("horizontal").viewBox.height;

// `tamanho` era o corpo da fonte (1000 unidades/em): a altura do glifo continua
// proporcional a ele, então quem já usava Logo não vê a marca crescer ou encolher.
export const alturaDoLogo = (tamanho: number): number => (tamanho * VIEWBOX_HEIGHT) / 1000;

export const opacidadePadraoDosColchetes = (compacto: boolean): number => (compacto ? 0.28 : 0.58);

export function Logo({
  tamanho = 24,
  cor = "var(--cyan)",
  opacidadeColchetes,
  compacto = false,
  className,
}: LogoProps) {
  return (
    <BrandMark
      variant="horizontal"
      tone="cyan"
      color={cor}
      height={alturaDoLogo(tamanho)}
      bracketOpacity={opacidadeColchetes ?? opacidadePadraoDosColchetes(compacto)}
      className={className}
    />
  );
}
