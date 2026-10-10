'use client'

"use strict";
"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/primitivos/AnimatedIcon.tsx
var AnimatedIcon_exports = {};
__export(AnimatedIcon_exports, {
  AnimatedIcon: () => AnimatedIcon
});
module.exports = __toCommonJS(AnimatedIcon_exports);
var React = __toESM(require("react"));

// src/lib/cn.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/primitivos/AnimatedIcon.tsx
var import_jsx_runtime = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AnimatedIcon
});
//# sourceMappingURL=AnimatedIcon.js.map