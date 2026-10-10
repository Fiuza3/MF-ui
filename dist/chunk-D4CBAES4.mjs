'use client'

import {
  cn
} from "./chunk-TE62FXIV.mjs";

// src/primitivos/OverlayClose.tsx
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { jsx } from "react/jsx-runtime";
function OverlayClose({ className }) {
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Close,
    {
      "aria-label": "Fechar",
      className: cn(
        "text-muted-foreground absolute top-3 right-3 inline-flex size-8 items-center justify-center rounded-md transition-colors outline-none",
        "hover:bg-foreground/10 hover:text-foreground",
        "focus-visible:ring-ring focus-visible:ring-[3px]",
        "disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        className
      ),
      children: /* @__PURE__ */ jsx(XIcon, {})
    }
  );
}

export {
  OverlayClose
};
//# sourceMappingURL=chunk-D4CBAES4.mjs.map