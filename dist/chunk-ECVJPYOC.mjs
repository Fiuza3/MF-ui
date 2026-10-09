'use client'

import {
  cn
} from "./chunk-TE62FXIV.mjs";

// src/primitivos/AnimatedIcon.tsx
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var semAssinatura = () => () => {
};
var lerSuporte = () => typeof IntersectionObserver === "undefined" ? "nao" : "sim";
var lerSuporteServidor = () => "servidor";
function useInViewActivation(alvo, enabled) {
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
      { threshold: 0.4 }
    );
    observador.observe(alvo);
    return () => observador.disconnect();
  }, [alvo, observavel]);
  return {
    armed: observavel,
    active: enabled && (visto || suporte === "nao")
  };
}
var FORMAS = "path, circle, line, polyline, polygon, rect, ellipse";
function useNormalizedPathLength(alvo, enabled) {
  React.useLayoutEffect(() => {
    if (!enabled || !alvo) return;
    const formas = alvo.querySelectorAll(FORMAS);
    formas.forEach((forma) => forma.setAttribute("pathLength", "100"));
    return () => formas.forEach((forma) => forma.removeAttribute("pathLength"));
  }, [alvo, enabled]);
}
function atribuirRef(ref, no) {
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
}) {
  const [no, setNo] = React.useState(null);
  const ref = React.useCallback(
    (alvo) => {
      setNo(alvo);
      atribuirRef(refDoConsumidor, alvo);
    },
    [refDoConsumidor]
  );
  const { armed, active } = useInViewActivation(no, trigger === "inview");
  useNormalizedPathLength(no, animation === "draw");
  const acessivel = label ? { role: "img", "aria-label": label } : { "aria-hidden": true };
  return /* @__PURE__ */ jsx(
    Icon,
    {
      ref,
      size,
      "data-slot": "animated-icon",
      "data-anim": animation,
      "data-trigger": trigger,
      "data-armed": armed ? "true" : void 0,
      "data-active": active ? "true" : void 0,
      className: cn("mf-anim-icon", className),
      ...acessivel,
      ...props
    }
  );
}

export {
  AnimatedIcon
};
//# sourceMappingURL=chunk-ECVJPYOC.mjs.map