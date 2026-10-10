import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { LucideIcon } from 'lucide-react';

type AnimatedIconAnimation = "draw" | "pulse" | "nudge" | "spin";
type AnimatedIconTrigger = "hover" | "inview" | "always";
type AnimatedIconProps = Omit<React.ComponentProps<"svg">, "children"> & {
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
declare function AnimatedIcon({ icon: Icon, animation, trigger, size, label, className, ref: refDoConsumidor, ...props }: AnimatedIconProps): react_jsx_runtime.JSX.Element;

export { AnimatedIcon, type AnimatedIconAnimation, type AnimatedIconProps, type AnimatedIconTrigger };
