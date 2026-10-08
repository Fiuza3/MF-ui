"use client";

import * as React from "react";
import type { LucideIcon } from "lucide-react";

import { cn } from "../lib/cn";

export type AnimatedIconAnimation = "draw" | "pulse" | "nudge" | "spin";
export type AnimatedIconTrigger = "hover" | "inview" | "always";

export type AnimatedIconProps = Omit<React.ComponentProps<"svg">, "children"> & {
  icon: LucideIcon;
  animation?: AnimatedIconAnimation;
  trigger?: AnimatedIconTrigger;
  size?: number;
  label?: string;
};

type SuporteObserver = "servidor" | "sim" | "nao";

const semAssinatura = () => () => {};
const lerSuporte = (): SuporteObserver =>
  typeof IntersectionObserver === "undefined" ? "nao" : "sim";
const lerSuporteServidor = (): SuporteObserver => "servidor";

// O estado inicial "não desenhado" só existe depois que o JS arma o ícone:
// sem JS, antes da hidratação ou sem IntersectionObserver, o traço aparece completo.
// useSyncExternalStore (e não setState em effect) evita um render extra e o flash
// de ícone ativo no HTML do servidor.
function useInViewActivation(ref: React.RefObject<SVGSVGElement | null>, enabled: boolean) {
  const suporte = React.useSyncExternalStore(semAssinatura, lerSuporte, lerSuporteServidor);
  const [visto, setVisto] = React.useState(false);
  const observavel = enabled && suporte === "sim";

  React.useEffect(() => {
    const alvo = ref.current;
    if (!observavel || !alvo) return;
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada?.isIntersecting) return;
        setVisto(true);
        observador.disconnect();
      },
      { threshold: 0.4 },
    );
    observador.observe(alvo);
    return () => observador.disconnect();
  }, [ref, observavel]);

  return {
    armed: observavel,
    active: enabled && (visto || suporte === "nao"),
  };
}

const FORMAS = "path, circle, line, polyline, polygon, rect, ellipse";

// O Lucide não repassa props aos filhos; sem pathLength=100 o dasharray fixo do CSS
// cortaria o traço de paths maiores que 100 (o React não remove o atributo que não gerencia).
function useNormalizedPathLength(ref: React.RefObject<SVGSVGElement | null>, enabled: boolean) {
  React.useLayoutEffect(() => {
    if (!enabled) return;
    const formas = ref.current?.querySelectorAll(FORMAS);
    formas?.forEach((forma) => forma.setAttribute("pathLength", "100"));
    return () => formas?.forEach((forma) => forma.removeAttribute("pathLength"));
  }, [ref, enabled]);
}

function AnimatedIcon({
  icon: Icon,
  animation = "draw",
  trigger = "hover",
  size = 24,
  label,
  className,
  ...props
}: AnimatedIconProps) {
  const ref = React.useRef<SVGSVGElement>(null);
  const { armed, active } = useInViewActivation(ref, trigger === "inview");
  useNormalizedPathLength(ref, animation === "draw");
  const acessivel = label ? { role: "img", "aria-label": label } : { "aria-hidden": true as const };

  return (
    <Icon
      ref={ref}
      size={size}
      data-slot="animated-icon"
      data-anim={animation}
      data-trigger={trigger}
      data-armed={armed ? "true" : undefined}
      data-active={active ? "true" : undefined}
      className={cn("mf-anim-icon", className)}
      {...acessivel}
      {...props}
    />
  );
}

export { AnimatedIcon };
