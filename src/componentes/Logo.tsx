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
  cor = "var(--cyan)",
  opacidadeColchetes,
  compacto = false,
  className,
}: LogoProps) {
  const cw = tamanho * RATIO_AVANCO_LOGO;
  const altura = tamanho * RATIO_ALTURA_LOGO;
  const padX = tamanho * RATIO_PADDING_LOGO;
  // Um único <text> "<MF/>": a fonte cuida do espaçamento natural entre os
  // glifos (como no logo original). Os colchetes ganham opacidade via <tspan>.
  const larguraTotal = padX + cw * 5;
  const opColchetes = opacidadeColchetes ?? (compacto ? 0.28 : 0.58);

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
      <text
        x={padX}
        y={altura / 2}
        dominantBaseline="central"
        fontFamily={familias.mono}
        fontWeight={700}
        fontSize={tamanho}
        fill={cor}
      >
        <tspan fillOpacity={opColchetes}>{"<"}</tspan>
        <tspan>MF</tspan>
        <tspan fillOpacity={opColchetes}>{"/>"}</tspan>
      </text>
    </svg>
  );
}
