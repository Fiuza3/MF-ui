import * as React from "react";
import { Loader2Icon } from "lucide-react";

import { cn } from "../lib/cn";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Carregando"
      data-slot="spinner"
      className={cn("size-4 animate-spin motion-reduce:animate-none", className)}
      {...props}
    />
  );
}

export { Spinner };
