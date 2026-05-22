import { cores } from "../tokens/cores";
import { familias } from "../tokens/tipografia";

export type LogoProps = {
  tamanho?: number;
  cor?: string;
  opacidadeColchetes?: number;
  compacto?: boolean;
  className?: string;
};

export const RATIO_AVANCO_LOGO = 13.2 / 22;
export const RATIO_ALTURA_LOGO = 30 / 22;
export const RATIO_PADDING_LOGO = 1 / 22;

export function Logo({
  tamanho = 24,
  cor = cores.accent,
  opacidadeColchetes,
  compacto = false,
  className,
}: LogoProps) {
  const cw = tamanho * RATIO_AVANCO_LOGO;
  const altura = tamanho * RATIO_ALTURA_LOGO;
  const padX = tamanho * RATIO_PADDING_LOGO;
  const larguraTotal = padX + cw * 5;
  const opColchetes = opacidadeColchetes ?? (compacto ? 0.28 : 0.58);

  const textoBase = {
    dominantBaseline: "central" as const,
    fontFamily: familias.mono,
    fontWeight: 700,
    fontSize: tamanho,
    fill: cor,
    y: altura / 2,
  };

  return (
    <svg
      role="img"
      aria-label="MF Desenvolvimento"
      viewBox={`0 0 ${larguraTotal} ${altura}`}
      height={altura}
      style={{ width: "auto", overflow: "visible" }}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <text {...textoBase} x={padX} fillOpacity={opColchetes}>{"<"}</text>
      <text {...textoBase} x={padX + cw}>MF</text>
      <text {...textoBase} x={padX + cw * 3} fillOpacity={opColchetes}>{"/>"}</text>
    </svg>
  );
}
