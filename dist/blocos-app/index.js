'use client'

"use strict";
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

// src/blocos-app/index.ts
var blocos_app_exports = {};
__export(blocos_app_exports, {
  AppShell: () => AppShell,
  CopyField: () => CopyField,
  DataTable: () => DataTable,
  EmptyState: () => EmptyState,
  FormField: () => FormField,
  PageHeader: () => PageHeader,
  StatCard: () => StatCard
});
module.exports = __toCommonJS(blocos_app_exports);

// src/blocos-app/AppShell.tsx
var React = __toESM(require("react"));
var import_lucide_react3 = require("lucide-react");

// src/lib/cn.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/primitivos/Button.tsx
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");

// src/primitivos/Spinner.tsx
var import_lucide_react = require("lucide-react");
var import_jsx_runtime = require("react/jsx-runtime");
function Spinner({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_lucide_react.Loader2Icon,
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
var import_jsx_runtime2 = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
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
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_react_slot.Slot,
      {
        "data-slot": "button",
        className: cn(buttonVariants({ variant, size, className })),
        ...estado,
        ...props,
        children
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "button",
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      disabled: disabled || loading,
      ...estado,
      ...props,
      children: [
        loading && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Spinner, {}),
        children
      ]
    }
  );
}

// src/primitivos/Sheet.tsx
var SheetPrimitive = __toESM(require("@radix-ui/react-dialog"));

// src/primitivos/OverlayClose.tsx
var DialogPrimitive = __toESM(require("@radix-ui/react-dialog"));
var import_lucide_react2 = require("lucide-react");
var import_jsx_runtime3 = require("react/jsx-runtime");
function OverlayClose({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    DialogPrimitive.Close,
    {
      "aria-label": "Fechar",
      className: cn(
        "text-muted-foreground absolute top-3 right-3 inline-flex size-8 items-center justify-center rounded-md transition-colors outline-none",
        "hover:bg-foreground/10 hover:text-foreground",
        "focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        className
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.XIcon, {})
    }
  );
}

// src/primitivos/Sheet.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function Sheet({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SheetPrimitive.Root, { "data-slot": "sheet", ...props });
}
function SheetTrigger({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SheetPrimitive.Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetPortal({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SheetPrimitive.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(SheetPortal, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SheetOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(OverlayClose, {})
        ]
      }
    )
  ] });
}
function SheetTitle({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    SheetPrimitive.Title,
    {
      "data-slot": "sheet-title",
      className: cn("text-foreground text-lg leading-none font-semibold", className),
      ...props
    }
  );
}

// src/blocos-app/AppShell.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function AppShell({ sidebar, topbar, children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: cn("bg-background text-foreground flex min-h-svh w-full", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "aside",
      {
        "data-slot": "app-shell-sidebar",
        className: "border-border bg-card sticky top-0 hidden h-svh w-64 shrink-0 overflow-y-auto border-r lg:block",
        children: sidebar
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
        "header",
        {
          "data-slot": "app-shell-topbar",
          className: "border-border bg-card/80 sticky top-0 z-40 flex h-14 items-center gap-2 border-b px-4 backdrop-blur lg:px-6",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(MenuMobile, { sidebar }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "flex min-w-0 flex-1 items-center", children: topbar })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("main", { "data-slot": "app-shell-content", className: "flex-1 overflow-x-clip", children })
    ] })
  ] });
}
function MenuMobile({ sidebar }) {
  const [aberto, setAberto] = React.useState(false);
  function fecharAoNavegar(event) {
    if (event.target instanceof Element && event.target.closest("a[href]")) setAberto(false);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Sheet, { open: aberto, onOpenChange: setAberto, children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SheetTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Button, { variant: "ghost", size: "icon", "aria-label": "Abrir menu", className: "-ml-2 lg:hidden", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react3.MenuIcon, {}) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      SheetContent,
      {
        side: "left",
        "aria-describedby": void 0,
        className: "bg-card w-64 gap-0 p-0",
        onClickCapture: fecharAoNavegar,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SheetTitle, { className: "sr-only", children: "Menu" }),
          sidebar
        ]
      }
    )
  ] });
}

// src/primitivos/Table.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function Table({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { "data-slot": "table-wrapper", className: "relative w-full overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "table",
    {
      "data-slot": "table",
      className: cn("w-full caption-bottom text-sm", className),
      ...props
    }
  ) });
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("thead", { "data-slot": "table-header", className: cn("[&_tr]:border-b", className), ...props });
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  );
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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

// src/primitivos/Skeleton.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("bg-foreground/10 animate-pulse rounded-md", className),
      ...props
    }
  );
}

// src/primitivos/Pagination.tsx
var import_lucide_react4 = require("lucide-react");
var import_jsx_runtime8 = require("react/jsx-runtime");
function Pagination({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "ul",
    {
      "data-slot": "pagination-content",
      className: cn("flex flex-row items-center gap-1", className),
      ...props
    }
  );
}
function PaginationItem({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { "data-slot": "pagination-item", ...props });
}
function PaginationLink({ className, isActive, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "button",
    {
      type: "button",
      "aria-current": isActive ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": isActive,
      className: cn(
        "inline-flex h-9 min-w-9 items-center justify-center rounded-md px-2 text-sm font-medium tabular-nums transition-colors",
        "hover:bg-foreground/10 hover:text-foreground",
        "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "disabled:pointer-events-none disabled:opacity-50",
        isActive && "bg-primary text-primary-foreground hover:bg-primary/90",
        className
      ),
      ...props
    }
  );
}
function PaginationPrevious({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    PaginationLink,
    {
      "aria-label": "P\xE1gina anterior",
      className: cn("gap-1 px-2.5", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_lucide_react4.ChevronLeftIcon, { className: "size-4" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "hidden sm:inline", children: "Anterior" })
      ]
    }
  );
}
function PaginationNext({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    PaginationLink,
    {
      "aria-label": "Pr\xF3xima p\xE1gina",
      className: cn("gap-1 px-2.5", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "hidden sm:inline", children: "Pr\xF3xima" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_lucide_react4.ChevronRightIcon, { className: "size-4" })
      ]
    }
  );
}
function PaginationEllipsis({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    "span",
    {
      "aria-hidden": "true",
      "data-slot": "pagination-ellipsis",
      className: cn("flex h-9 min-w-9 items-center justify-center", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_lucide_react4.MoreHorizontalIcon, { className: "size-4" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "sr-only", children: "Mais p\xE1ginas" })
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Pagination, { className, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(PaginationContent, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(PaginationPrevious, { disabled: page <= 1, onClick: () => onPageChange(page - 1) }) }),
    montarItens(page, totalPages).map(
      (item) => item.tipo === "elipse" ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(PaginationItem, { className: CLASSE_POR_ONDE[item.onde], children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(PaginationEllipsis, {}) }, item.chave) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(PaginationItem, { className: CLASSE_POR_ONDE[item.onde], children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        PaginationLink,
        {
          isActive: item.pagina === page,
          onClick: () => onPageChange(item.pagina),
          children: item.pagina
        }
      ) }, item.pagina)
    ),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(PaginationNext, { disabled: page >= totalPages, onClick: () => onPageChange(page + 1) }) })
  ] }) });
}

// src/blocos-app/EmptyState.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function EmptyState({ icon, title, description, action, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    "div",
    {
      "data-slot": "empty-state",
      role: "status",
      className: cn(
        "flex flex-col items-center justify-center gap-3 px-6 py-16 text-center",
        className
      ),
      children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { "data-slot": "empty-state-icon", className: "text-muted-foreground [&_svg]:size-10", children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-foreground text-sm font-medium", children: title }),
        description && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-muted-foreground max-w-sm text-sm", children: description }),
        action && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "mt-2", children: action })
      ]
    }
  );
}

// src/blocos-app/DataTable.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
function isEmptyStateProps(value) {
  return typeof value === "object" && value !== null && "title" in value;
}
function DataTable({
  columns,
  rows,
  getRowKey,
  loading = false,
  loadingRowCount = 5,
  emptyState,
  page,
  totalPages,
  onPageChange,
  className
}) {
  const mostrarPaginacao = !loading && page !== void 0 && totalPages !== void 0 && onPageChange;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { "data-slot": "data-table", className: cn("flex flex-col gap-4", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(Table, { "aria-busy": loading || void 0, children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(TableRow, { children: columns.map((coluna) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(TableHead, { className: coluna.className, children: coluna.header }, coluna.key)) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(TableBody, { children: [
        loading && Array.from({ length: loadingRowCount }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(TableRow, { children: columns.map((coluna) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(TableCell, { className: coluna.className, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Skeleton, { className: "h-4 w-full max-w-40" }) }, coluna.key)) }, `skeleton-${index}`)),
        !loading && rows.map((row, index) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(TableRow, { children: columns.map((coluna) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(TableCell, { className: coluna.className, children: coluna.render(row) }, coluna.key)) }, getRowKey ? getRowKey(row, index) : index))
      ] })
    ] }),
    !loading && rows.length === 0 && emptyState && (isEmptyStateProps(emptyState) ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(EmptyState, { ...emptyState }) : emptyState),
    mostrarPaginacao && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(PaginationControl, { page, totalPages, onPageChange })
  ] });
}

// src/blocos-app/StatCard.tsx
var import_lucide_react5 = require("lucide-react");

// src/primitivos/Card.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
function Card({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { "data-slot": "card-content", className: cn("px-6", className), ...props });
}

// src/blocos-app/StatCard.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
var tomPorDirecao = {
  up: "positivo",
  down: "negativo",
  neutral: "neutro"
};
var corPorTom = {
  positivo: "text-success",
  negativo: "text-destructive",
  neutro: "text-muted-foreground"
};
var setaPorDirecao = {
  up: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react5.ArrowUpRightIcon, { "aria-hidden": "true" }),
  down: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react5.ArrowDownRightIcon, { "aria-hidden": "true" }),
  neutral: null
};
function StatCard({ label, value, icon, delta, className }) {
  const direcao = delta?.direction ?? "neutral";
  const tom = delta?.tom ?? tomPorDirecao[direcao];
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Card, { className: cn("gap-1 py-5", className), children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(CardContent, { className: "flex items-start justify-between gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex min-w-0 flex-col gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-muted-foreground text-xs font-medium uppercase tracking-wide", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-foreground text-2xl font-semibold tabular-nums", children: value }),
      delta && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
        "p",
        {
          "data-direction": direcao,
          className: cn(
            "inline-flex items-center gap-0.5 text-xs font-medium [&_svg]:size-3.5 [&_svg]:shrink-0",
            corPorTom[tom]
          ),
          children: [
            setaPorDirecao[direcao],
            delta.value
          ]
        }
      )
    ] }),
    icon && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "div",
      {
        "data-slot": "stat-card-icon",
        className: "bg-accent/10 text-accent flex size-9 shrink-0 items-center justify-center rounded-md [&_svg]:size-4.5",
        children: icon
      }
    )
  ] }) });
}

// src/blocos-app/PageHeader.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
function PageHeader({ title, breadcrumb, actions, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
    "div",
    {
      "data-slot": "page-header",
      className: cn(
        "flex flex-col gap-4 border-b border-border px-4 py-5 lg:px-6 sm:flex-row sm:items-center sm:justify-between",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex min-w-0 flex-col gap-1.5", children: [
          breadcrumb && breadcrumb.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("nav", { "aria-label": "Trilha de navega\xE7\xE3o", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("ol", { className: "text-muted-foreground flex flex-wrap items-center gap-1.5 text-xs", children: breadcrumb.map((item, index) => {
            const isLast = index === breadcrumb.length - 1;
            return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("li", { className: "flex items-center gap-1.5", children: [
              item.href && !isLast ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                "a",
                {
                  href: item.href,
                  className: "hover:text-foreground focus-visible:ring-ring/50 inline-flex min-h-6 items-center rounded-sm transition-colors outline-none focus-visible:ring-[3px]",
                  children: item.label
                }
              ) : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                "span",
                {
                  "aria-current": isLast ? "page" : void 0,
                  className: isLast ? "text-foreground" : void 0,
                  children: item.label
                }
              ),
              !isLast && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { "aria-hidden": "true", children: "/" })
            ] }, index);
          }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h1", { className: "text-foreground text-xl font-semibold text-balance sm:truncate", children: title })
        ] }),
        actions && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { "data-slot": "page-header-actions", className: "flex shrink-0 flex-wrap items-center gap-2", children: actions })
      ]
    }
  );
}

// src/blocos-app/FormField.tsx
var React2 = __toESM(require("react"));
var import_react_slot2 = require("@radix-ui/react-slot");

// src/primitivos/Label.tsx
var LabelPrimitive = __toESM(require("@radix-ui/react-label"));
var import_jsx_runtime14 = require("react/jsx-runtime");
function Label({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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

// src/blocos-app/FormField.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
function FormField({ label, error, children, className, htmlFor }) {
  const idGerado = React2.useId();
  const controlId = htmlFor ?? idGerado;
  const errorId = `${controlId}-error`;
  const propsDoControle = {
    id: controlId,
    "aria-invalid": error ? true : void 0,
    "aria-describedby": error ? errorId : void 0
  };
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { "data-slot": "form-field", className: cn("flex flex-col gap-1.5", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Label, { htmlFor: controlId, children: label }),
    React2.isValidElement(children) ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react_slot2.Slot, { ...propsDoControle, children }) : children,
    error && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { id: errorId, role: "alert", className: "text-destructive text-xs font-medium", children: error })
  ] });
}

// src/blocos-app/CopyField.tsx
var React3 = __toESM(require("react"));
var import_lucide_react6 = require("lucide-react");

// src/primitivos/Input.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:mr-3 file:inline-flex file:h-7 file:items-center file:rounded-sm file:border-0 file:bg-muted file:px-2 file:text-base file:font-medium md:file:text-sm disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}

// src/blocos-app/CopyField.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
var MENSAGEM = {
  ocioso: "",
  copiado: "Copiado",
  falhou: "N\xE3o foi poss\xEDvel copiar. O valor est\xE1 selecionado: copie manualmente."
};
async function copiarTexto(texto) {
  try {
    await navigator.clipboard.writeText(texto);
    return true;
  } catch {
    return false;
  }
}
function CopyField({ value, label, className, feedbackDurationMs = 2e3 }) {
  const [estado, setEstado] = React3.useState("ocioso");
  const inputRef = React3.useRef(null);
  const timerRef = React3.useRef(void 0);
  const inputId = React3.useId();
  React3.useEffect(() => () => window.clearTimeout(timerRef.current), []);
  async function copiarValor() {
    window.clearTimeout(timerRef.current);
    const copiou = await copiarTexto(value);
    if (!copiou) inputRef.current?.select();
    setEstado(copiou ? "copiado" : "falhou");
    timerRef.current = window.setTimeout(() => setEstado("ocioso"), feedbackDurationMs);
  }
  const copiado = estado === "copiado";
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { "data-slot": "copy-field", className: cn("flex flex-col gap-1.5", className), children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Label, { htmlFor: inputId, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Input, { ref: inputRef, id: inputId, readOnly: true, value, className: "font-mono" }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        Button,
        {
          type: "button",
          variant: "outline",
          size: "icon",
          "aria-label": copiado ? "Valor copiado" : "Copiar valor",
          onClick: copiarValor,
          children: copiado ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react6.CheckIcon, { className: "text-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react6.CopyIcon, {})
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "p",
      {
        role: "status",
        className: estado === "falhou" ? "text-muted-foreground text-xs" : "sr-only",
        children: MENSAGEM[estado]
      }
    )
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppShell,
  CopyField,
  DataTable,
  EmptyState,
  FormField,
  PageHeader,
  StatCard
});
//# sourceMappingURL=index.js.map