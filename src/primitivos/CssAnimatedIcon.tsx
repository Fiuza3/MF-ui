import type * as React from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "../lib/cn";

/** O que o CSS anima sozinho. `draw` precisa de JS (normaliza o pathLength) e fica no AnimatedIcon. */
export type CssAnimatedIconAnimation = "pulse" | "nudge" | "spin";

/** `inview` precisa de IntersectionObserver e fica no AnimatedIcon. */
export type CssAnimatedIconTrigger = "hover" | "always";

export type CssAnimatedIconProps = Omit<React.ComponentProps<"svg">, "children" | "ref"> & {
  icon: LucideIcon;
  animation: CssAnimatedIconAnimation;
  trigger?: CssAnimatedIconTrigger;
  size?: number;
  label?: string;
};

// Mesma marcação e mesmo animated-icon.css do AnimatedIcon, sem hooks e sem
// "use client": roda em Server Component e não acrescenta JS ao navegador. No
// site, o AnimatedIcon de um ícone de hover custava 9 KB gzip em TODA rota,
// porque o Turbopack sobe o client component compartilhado para o layout.
function CssAnimatedIcon({
  icon: Icon,
  animation,
  trigger = "hover",
  size = 24,
  label,
  className,
  ...props
}: CssAnimatedIconProps) {
  const acessivel = label ? { role: "img", "aria-label": label } : { "aria-hidden": true as const };

  return (
    <Icon
      size={size}
      data-slot="animated-icon"
      data-anim={animation}
      data-trigger={trigger}
      className={cn("mf-anim-icon", className)}
      {...acessivel}
      {...props}
    />
  );
}

export { CssAnimatedIcon };
