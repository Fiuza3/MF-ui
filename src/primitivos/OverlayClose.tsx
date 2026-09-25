"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

import { cn } from "../lib/cn";

/** X de canto do Dialog e do Sheet — os dois são o mesmo primitivo Radix. */
function OverlayClose({ className }: { className?: string }) {
  return (
    <DialogPrimitive.Close
      aria-label="Fechar"
      className={cn(
        "text-muted-foreground absolute top-3 right-3 inline-flex size-8 items-center justify-center rounded-md transition-colors outline-none",
        "hover:bg-foreground/10 hover:text-foreground",
        "focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        className,
      )}
    >
      <XIcon />
    </DialogPrimitive.Close>
  );
}

export { OverlayClose };
