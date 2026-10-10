import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { LucideIcon } from 'lucide-react';

/** O que o CSS anima sozinho. `draw` precisa de JS (normaliza o pathLength) e fica no AnimatedIcon. */
type CssAnimatedIconAnimation = "pulse" | "nudge" | "spin";
/** `inview` precisa de IntersectionObserver e fica no AnimatedIcon. */
type CssAnimatedIconTrigger = "hover" | "always";
type CssAnimatedIconProps = Omit<React.ComponentProps<"svg">, "children" | "ref"> & {
    icon: LucideIcon;
    animation: CssAnimatedIconAnimation;
    trigger?: CssAnimatedIconTrigger;
    size?: number;
    label?: string;
};
declare function CssAnimatedIcon({ icon: Icon, animation, trigger, size, label, className, ...props }: CssAnimatedIconProps): react_jsx_runtime.JSX.Element;

export { CssAnimatedIcon, type CssAnimatedIconAnimation, type CssAnimatedIconProps, type CssAnimatedIconTrigger };
