"use client";

import { alturaDoLogo, opacidadePadraoDosColchetes } from "./Logo";
import { BrandMarkAnimated } from "./BrandMarkAnimated";

export type LogoAnimadoProps = {
  tamanho?: number;
  cor?: string;
  opacidadeColchetes?: number;
  compacto?: boolean;
  onClick?: () => void;
  label?: string;
  className?: string;
};

const MARCA = "MF Desenvolvimento";

export function LogoAnimado({
  tamanho = 24,
  cor = "var(--cyan)",
  opacidadeColchetes,
  compacto = false,
  onClick,
  label = MARCA,
  className,
}: LogoAnimadoProps) {
  const brilho = onClick ? "group-hover/logo:[filter:drop-shadow(0_0_9px_var(--cyan-glow))]" : "";
  const svg = (
    <BrandMarkAnimated
      animation="assemble"
      color={cor}
      height={alturaDoLogo(tamanho)}
      title={label}
      bracketOpacity={opacidadeColchetes ?? opacidadePadraoDosColchetes(compacto)}
      className={`transition-[filter] duration-300 ${brilho} ${className ?? ""}`}
    />
  );

  if (onClick) {
    return (
      <button
        type="button"
        aria-label={label === MARCA ? MARCA : `${label} — ${MARCA}`}
        onClick={onClick}
        className="group/logo inline-flex items-center rounded-sm outline-none focus-visible:ring-[3px] focus-visible:ring-ring"
      >
        {svg}
      </button>
    );
  }

  return svg;
}
