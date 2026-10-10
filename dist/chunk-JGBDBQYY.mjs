import {
  cn
} from "./chunk-TE62FXIV.mjs";

// src/primitivos/CssAnimatedIcon.tsx
import { jsx } from "react/jsx-runtime";
function CssAnimatedIcon({
  icon: Icon,
  animation,
  trigger = "hover",
  size = 24,
  label,
  className,
  ...props
}) {
  const acessivel = label ? { role: "img", "aria-label": label } : { "aria-hidden": true };
  return /* @__PURE__ */ jsx(
    Icon,
    {
      size,
      "data-slot": "animated-icon",
      "data-anim": animation,
      "data-trigger": trigger,
      className: cn("mf-anim-icon", className),
      ...acessivel,
      ...props
    }
  );
}

export {
  CssAnimatedIcon
};
//# sourceMappingURL=chunk-JGBDBQYY.mjs.map