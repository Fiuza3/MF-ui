"use client";

import * as React from "react";
import type { LucideIcon } from "lucide-react";

import { cn } from "../lib/cn";

export type AnimatedIconAnimation = "draw" | "pulse" | "nudge" | "spin";
export type AnimatedIconTrigger = "hover" | "inview" | "always";

export type AnimatedIconProps = Omit<React.ComponentProps<"svg">, "children"> & {
  /**
   * Componente de ícone do Lucide. Por ser uma função, não atravessa a fronteira
   * Server → Client Component (erro de serialização no Next): use o AnimatedIcon
   * dentro de um client component ou crie um wrapper "use client".
   */
  icon: LucideIcon;
  animation?: AnimatedIconAnimation;
  /**
   * `hover` reage ao próprio hover, ao `:hover` e ao `:focus-within` de qualquer ancestral
   * `.group` (não só o mais próximo) e ao hover/foco de um `Button` do sistema.
   * `inview` com `draw` acima da dobra desenha após a hidratação — prefira abaixo da dobra.
   */
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
function useInViewActivation(alvo: SVGSVGElement | null, enabled: boolean) {
  const suporte = React.useSyncExternalStore(semAssinatura, lerSuporte, lerSuporteServidor);
  const [visto, setVisto] = React.useState(false);
  const observavel = enabled && suporte === "sim";

  React.useEffect(() => {
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
  }, [alvo, observavel]);

  return {
    armed: observavel,
    active: enabled && (visto || suporte === "nao"),
  };
}

const FORMAS = "path, circle, line, polyline, polygon, rect, ellipse";

// O Lucide não repassa props aos filhos; sem pathLength=100 o dasharray fixo do CSS
// cortaria o traço de paths maiores que 100 (o React não remove o atributo que não gerencia).
function useNormalizedPathLength(alvo: SVGSVGElement | null, enabled: boolean) {
  React.useLayoutEffect(() => {
    if (!enabled || !alvo) return;
    const formas = alvo.querySelectorAll(FORMAS);
    formas.forEach((forma) => forma.setAttribute("pathLength", "100"));
    return () => formas.forEach((forma) => forma.removeAttribute("pathLength"));
  }, [alvo, enabled]);
}

function atribuirRef(ref: React.Ref<SVGSVGElement> | undefined, no: SVGSVGElement | null) {
  if (typeof ref === "function") ref(no);
  else if (ref) ref.current = no;
}

function AnimatedIcon({
  icon: Icon,
  animation = "draw",
  trigger = "hover",
  size = 24,
  label,
  className,
  ref: refDoConsumidor,
  ...props
}: AnimatedIconProps) {
  // O nó vive em estado (não em useRef) para os efeitos re-rodarem quando a troca de
  // `icon` substitui o <svg>; e o ref do consumidor (Radix Slot injeta um) é composto,
  // senão o spread de props o sobrescreveria e o observer nunca observaria nada.
  const [no, setNo] = React.useState<SVGSVGElement | null>(null);
  const ref = React.useCallback(
    (alvo: SVGSVGElement | null) => {
      setNo(alvo);
      atribuirRef(refDoConsumidor, alvo);
    },
    [refDoConsumidor],
  );
  const { armed, active } = useInViewActivation(no, trigger === "inview");
  useNormalizedPathLength(no, animation === "draw");
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
