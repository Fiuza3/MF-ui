"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/primitivos/CssAnimatedIcon.tsx
var CssAnimatedIcon_exports = {};
__export(CssAnimatedIcon_exports, {
  CssAnimatedIcon: () => CssAnimatedIcon
});
module.exports = __toCommonJS(CssAnimatedIcon_exports);

// src/lib/cn.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/primitivos/CssAnimatedIcon.tsx
var import_jsx_runtime = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CssAnimatedIcon
});
//# sourceMappingURL=CssAnimatedIcon.js.map