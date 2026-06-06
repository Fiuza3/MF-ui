"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  RATIO_ALTURA_LOGO,
  RATIO_AVANCO_LOGO,
  RATIO_PADDING_LOGO,
} from "./Logo";
import { familias } from "../tokens/tipografia";

export type LogoAnimadoProps = {
  tamanho?: number;
  cor?: string;
  opacidadeColchetes?: number;
  compacto?: boolean;
  onClick?: () => void;
  label?: string;
  className?: string;
};

const SUAVE = [0.16, 1, 0.3, 1] as const;

export function LogoAnimado({
  tamanho = 24,
  cor = "var(--cyan)",
  opacidadeColchetes,
  compacto = false,
  onClick,
  label = "MF Desenvolvimento",
  className,
}: LogoAnimadoProps) {
  const reduzido = useReducedMotion();
  const cw = tamanho * RATIO_AVANCO_LOGO;
  const altura = tamanho * RATIO_ALTURA_LOGO;
  const padX = tamanho * RATIO_PADDING_LOGO;
  const larguraTotal = padX + cw * 5;
  const opColchetes = opacidadeColchetes ?? (compacto ? 0.28 : 0.58);

  // Um único <text> "<MF/>" (colchetes via <tspan> com opacidade): a fonte cuida
  // do espaçamento natural entre os glifos, igual ao logo original. Animação de
  // entrada aplicada ao texto inteiro.
  const entrar = reduzido
    ? {}
    : {
        initial: { opacity: 0, y: 5 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: SUAVE },
      };

  const svg = (
    <svg
      role="img"
      aria-label={label}
      viewBox={`0 0 ${larguraTotal} ${altura}`}
      height={altura}
      style={{ width: "auto", overflow: "visible" }}
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-[filter] duration-300 hover:[filter:drop-shadow(0_0_9px_var(--cyan-glow))] ${className ?? ""}`}
    >
      <motion.text
        {...entrar}
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
      </motion.text>
    </svg>
  );

  if (onClick) {
    return (
      <button
        type="button"
        aria-label={`${label} — MF Desenvolvimento`}
        onClick={onClick}
        className="group inline-flex items-center rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-cyan/70"
      >
        <span className="sr-only">{label}</span>
        {svg}
      </button>
    );
  }

  return svg;
}
