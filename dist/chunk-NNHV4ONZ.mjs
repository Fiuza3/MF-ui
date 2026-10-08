'use client'

import {
  OverlayClose,
  cn
} from "./chunk-ZTAXVNYF.mjs";

// src/primitivos/Button.tsx
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

// src/primitivos/Spinner.tsx
import { Loader2Icon } from "lucide-react";
import { jsx } from "react/jsx-runtime";
function Spinner({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Loader2Icon,
    {
      role: "status",
      "aria-label": "Carregando",
      "data-slot": "spinner",
      className: cn("size-4 animate-spin motion-reduce:animate-none", className),
      ...props
    }
  );
}

// src/primitivos/Button.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring focus-visible:ring-[3px] aria-invalid:not-focus-visible:ring-destructive/20 dark:aria-invalid:not-focus-visible:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive",
        outline: "border bg-background shadow-xs hover:bg-foreground/10 hover:text-foreground dark:bg-input/30 dark:border-input",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-foreground/10 hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        // xs/icon-xs existem para ferramenta densa (painel, admin), onde o sm
        // ainda empurra a linha da tabela. Fora desse contexto, use sm.
        xs: "h-7 rounded-md gap-1 px-2 text-xs has-[>svg]:px-1.5",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-7",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  disabled,
  children,
  ...props
}) {
  const estado = loading ? { "aria-busy": true, "aria-disabled": true } : {};
  if (asChild) {
    return /* @__PURE__ */ jsx2(
      Slot,
      {
        "data-slot": "button",
        className: cn(buttonVariants({ variant, size, className })),
        ...estado,
        ...props,
        children
      }
    );
  }
  return /* @__PURE__ */ jsxs(
    "button",
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      disabled: disabled || loading,
      ...estado,
      ...props,
      children: [
        loading && /* @__PURE__ */ jsx2(Spinner, {}),
        children
      ]
    }
  );
}

// src/primitivos/Card.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function CardAction({ className, ...props }) {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      "data-slot": "card-action",
      className: cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx3("div", { "data-slot": "card-content", className: cn("px-6", className), ...props });
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      "data-slot": "card-footer",
      className: cn("flex items-center px-6 [.border-t]:pt-6", className),
      ...props
    }
  );
}

// src/primitivos/Input.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx4(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:mr-3 file:inline-flex file:h-7 file:items-center file:rounded-sm file:border-0 file:bg-muted file:px-2 file:text-base file:font-medium md:file:text-sm disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring focus-visible:ring-[3px]",
        "aria-invalid:not-focus-visible:ring-destructive/20 dark:aria-invalid:not-focus-visible:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}

// src/primitivos/Label.tsx
import * as LabelPrimitive from "@radix-ui/react-label";
import { jsx as jsx5 } from "react/jsx-runtime";
function Label({ className, ...props }) {
  return /* @__PURE__ */ jsx5(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}

// src/primitivos/Sheet.tsx
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
function Sheet({ ...props }) {
  return /* @__PURE__ */ jsx6(SheetPrimitive.Root, { "data-slot": "sheet", ...props });
}
function SheetTrigger({ ...props }) {
  return /* @__PURE__ */ jsx6(SheetPrimitive.Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetClose({ ...props }) {
  return /* @__PURE__ */ jsx6(SheetPrimitive.Close, { "data-slot": "sheet-close", ...props });
}
function SheetPortal({ ...props }) {
  return /* @__PURE__ */ jsx6(SheetPrimitive.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx6(
    SheetPrimitive.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}) {
  return /* @__PURE__ */ jsxs2(SheetPortal, { children: [
    /* @__PURE__ */ jsx6(SheetOverlay, {}),
    /* @__PURE__ */ jsxs2(
      SheetPrimitive.Content,
      {
        "data-slot": "sheet-content",
        className: cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 overflow-y-auto shadow-lg [&_[data-slot=sheet-header]]:pr-12 transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto max-h-[85dvh] border-b",
          side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto max-h-[85dvh] border-t",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsx6(OverlayClose, {})
        ]
      }
    )
  ] });
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx6("div", { "data-slot": "sheet-header", className: cn("flex flex-col gap-2 p-4", className), ...props });
}
function SheetFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx6(
    "div",
    {
      "data-slot": "sheet-footer",
      className: cn("mt-auto flex flex-col gap-2 p-4", className),
      ...props
    }
  );
}
function SheetTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx6(
    SheetPrimitive.Title,
    {
      "data-slot": "sheet-title",
      className: cn("text-foreground text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
function SheetDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx6(
    SheetPrimitive.Description,
    {
      "data-slot": "sheet-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}

// src/primitivos/Skeleton.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx7(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("bg-foreground/10 animate-pulse rounded-md", className),
      ...props
    }
  );
}

// src/primitivos/Table.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
function Table({ className, ...props }) {
  return /* @__PURE__ */ jsx8("div", { "data-slot": "table-wrapper", className: "relative w-full overflow-x-auto", children: /* @__PURE__ */ jsx8(
    "table",
    {
      "data-slot": "table",
      className: cn("w-full caption-bottom text-sm", className),
      ...props
    }
  ) });
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx8("thead", { "data-slot": "table-header", className: cn("[&_tr]:border-b", className), ...props });
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsx8(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  );
}
function TableFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx8(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: cn("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className),
      ...props
    }
  );
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ jsx8(
    "tr",
    {
      "data-slot": "table-row",
      className: cn(
        "border-b border-border hover:bg-surface-raised/50 data-[state=selected]:bg-muted transition-colors",
        className
      ),
      ...props
    }
  );
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ jsx8(
    "th",
    {
      "data-slot": "table-head",
      className: cn(
        "text-muted-foreground h-10 px-3 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ jsx8(
    "td",
    {
      "data-slot": "table-cell",
      className: cn(
        "px-3 py-3 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function TableCaption({ className, ...props }) {
  return /* @__PURE__ */ jsx8(
    "caption",
    {
      "data-slot": "table-caption",
      className: cn("text-muted-foreground mt-4 text-sm", className),
      ...props
    }
  );
}

// src/primitivos/Pagination.tsx
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from "lucide-react";
import { jsx as jsx9, jsxs as jsxs3 } from "react/jsx-runtime";
function Pagination({ className, ...props }) {
  return /* @__PURE__ */ jsx9(
    "nav",
    {
      "aria-label": "Pagina\xE7\xE3o",
      "data-slot": "pagination",
      className: cn("mx-auto flex w-full justify-center", className),
      ...props
    }
  );
}
function PaginationContent({ className, ...props }) {
  return /* @__PURE__ */ jsx9(
    "ul",
    {
      "data-slot": "pagination-content",
      className: cn("flex flex-row items-center gap-1", className),
      ...props
    }
  );
}
function PaginationItem({ ...props }) {
  return /* @__PURE__ */ jsx9("li", { "data-slot": "pagination-item", ...props });
}
function PaginationLink({ className, isActive, ...props }) {
  return /* @__PURE__ */ jsx9(
    "button",
    {
      type: "button",
      "aria-current": isActive ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": isActive,
      className: cn(
        "inline-flex h-9 min-w-9 items-center justify-center rounded-md px-2 text-sm font-medium tabular-nums transition-colors",
        "hover:bg-foreground/10 hover:text-foreground",
        "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring",
        "disabled:pointer-events-none disabled:opacity-50",
        isActive && "bg-primary text-primary-foreground hover:bg-primary/90",
        className
      ),
      ...props
    }
  );
}
function PaginationPrevious({ className, ...props }) {
  return /* @__PURE__ */ jsxs3(
    PaginationLink,
    {
      "aria-label": "P\xE1gina anterior",
      className: cn("gap-1 px-2.5", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx9(ChevronLeftIcon, { className: "size-4" }),
        /* @__PURE__ */ jsx9("span", { className: "hidden sm:inline", children: "Anterior" })
      ]
    }
  );
}
function PaginationNext({ className, ...props }) {
  return /* @__PURE__ */ jsxs3(
    PaginationLink,
    {
      "aria-label": "Pr\xF3xima p\xE1gina",
      className: cn("gap-1 px-2.5", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx9("span", { className: "hidden sm:inline", children: "Pr\xF3xima" }),
        /* @__PURE__ */ jsx9(ChevronRightIcon, { className: "size-4" })
      ]
    }
  );
}
function PaginationEllipsis({ className, ...props }) {
  return /* @__PURE__ */ jsxs3(
    "span",
    {
      "aria-hidden": "true",
      "data-slot": "pagination-ellipsis",
      className: cn("flex h-9 min-w-9 items-center justify-center", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx9(MoreHorizontalIcon, { className: "size-4" }),
        /* @__PURE__ */ jsx9("span", { className: "sr-only", children: "Mais p\xE1ginas" })
      ]
    }
  );
}
function gerarPaginasVisiveis(paginaAtual, totalPaginas) {
  const MAX_VISIVEIS = 7;
  if (totalPaginas <= MAX_VISIVEIS) {
    return Array.from({ length: totalPaginas }, (_, i) => i + 1);
  }
  const paginas = [1];
  const inicio = Math.max(2, paginaAtual - 1);
  const fim = Math.min(totalPaginas - 1, paginaAtual + 1);
  if (inicio > 2) paginas.push("ellipsis");
  for (let p = inicio; p <= fim; p++) paginas.push(p);
  if (fim < totalPaginas - 1) paginas.push("ellipsis");
  paginas.push(totalPaginas);
  return paginas;
}
var CLASSE_POR_ONDE = {
  sempre: void 0,
  desktop: "hidden sm:block",
  mobile: "sm:hidden"
};
var MAX_PAGINAS_NO_MOBILE = 5;
function montarItens(paginaAtual, totalPaginas) {
  const lista = gerarPaginasVisiveis(paginaAtual, totalPaginas);
  const cabeTudo = lista.length <= MAX_PAGINAS_NO_MOBILE;
  const noMobile = /* @__PURE__ */ new Set([1, paginaAtual, totalPaginas]);
  const itens = [];
  let ultimaNoMobile = 0;
  for (const p of lista) {
    if (p === "ellipsis") {
      itens.push({
        tipo: "elipse",
        chave: `e${itens.length}`,
        onde: cabeTudo ? "sempre" : "desktop"
      });
    } else if (cabeTudo || !noMobile.has(p)) {
      itens.push({ tipo: "pagina", pagina: p, onde: cabeTudo ? "sempre" : "desktop" });
    } else {
      if (ultimaNoMobile && p > ultimaNoMobile + 1) marcarElipseNoMobile(itens, ultimaNoMobile);
      itens.push({ tipo: "pagina", pagina: p, onde: "sempre" });
      ultimaNoMobile = p;
    }
  }
  return itens;
}
function marcarElipseNoMobile(itens, desde) {
  const inicio = itens.findIndex((i) => i.tipo === "pagina" && i.pagina === desde) + 1;
  const elipse = itens.slice(inicio).find((i) => i.tipo === "elipse");
  if (elipse) {
    elipse.onde = "sempre";
    return;
  }
  itens.push({ tipo: "elipse", chave: `m${desde}`, onde: "mobile" });
}
function PaginationControl({ page, totalPages, onPageChange, className }) {
  if (totalPages <= 1) return null;
  return /* @__PURE__ */ jsx9(Pagination, { className, children: /* @__PURE__ */ jsxs3(PaginationContent, { children: [
    /* @__PURE__ */ jsx9(PaginationItem, { children: /* @__PURE__ */ jsx9(PaginationPrevious, { disabled: page <= 1, onClick: () => onPageChange(page - 1) }) }),
    montarItens(page, totalPages).map(
      (item) => item.tipo === "elipse" ? /* @__PURE__ */ jsx9(PaginationItem, { className: CLASSE_POR_ONDE[item.onde], children: /* @__PURE__ */ jsx9(PaginationEllipsis, {}) }, item.chave) : /* @__PURE__ */ jsx9(PaginationItem, { className: CLASSE_POR_ONDE[item.onde], children: /* @__PURE__ */ jsx9(
        PaginationLink,
        {
          isActive: item.pagina === page,
          onClick: () => onPageChange(item.pagina),
          children: item.pagina
        }
      ) }, item.pagina)
    ),
    /* @__PURE__ */ jsx9(PaginationItem, { children: /* @__PURE__ */ jsx9(PaginationNext, { disabled: page >= totalPages, onClick: () => onPageChange(page + 1) }) })
  ] }) });
}

export {
  buttonVariants,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
  Input,
  Label,
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  Skeleton,
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  PaginationControl
};
//# sourceMappingURL=chunk-NNHV4ONZ.mjs.map