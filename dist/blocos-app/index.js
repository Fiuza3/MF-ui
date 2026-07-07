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

// src/lib/cn.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/blocos-app/AppShell.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function AppShell({ sidebar, topbar, children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: cn("bg-background text-foreground flex min-h-svh w-full", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "aside",
      {
        "data-slot": "app-shell-sidebar",
        className: "border-border bg-card hidden w-64 shrink-0 border-r lg:block",
        children: sidebar
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "header",
        {
          "data-slot": "app-shell-topbar",
          className: "border-border bg-card/80 sticky top-0 z-40 border-b backdrop-blur",
          children: topbar
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { "data-slot": "app-shell-content", className: "flex-1 overflow-x-hidden", children })
    ] })
  ] });
}

// src/primitivos/Table.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Table({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { "data-slot": "table-wrapper", className: "relative w-full overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "table",
    {
      "data-slot": "table",
      className: cn("w-full caption-bottom text-sm", className),
      ...props
    }
  ) });
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "thead",
    {
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b", className),
      ...props
    }
  );
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  );
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "td",
    {
      "data-slot": "table-cell",
      className: cn(
        "px-3 py-3 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}

// src/primitivos/Skeleton.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("bg-accent/10 animate-pulse rounded-md", className),
      ...props
    }
  );
}

// src/primitivos/Pagination.tsx
var import_lucide_react = require("lucide-react");
var import_jsx_runtime4 = require("react/jsx-runtime");
function Pagination({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "ul",
    {
      "data-slot": "pagination-content",
      className: cn("flex flex-row items-center gap-1", className),
      ...props
    }
  );
}
function PaginationItem({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { "data-slot": "pagination-item", ...props });
}
function PaginationLink({ className, isActive, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "button",
    {
      type: "button",
      "aria-current": isActive ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": isActive,
      className: cn(
        "inline-flex size-9 items-center justify-center rounded-md text-sm font-medium transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    PaginationLink,
    {
      "aria-label": "P\xE1gina anterior",
      className: cn("gap-1 px-2.5", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react.ChevronLeftIcon, { className: "size-4" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "hidden sm:inline", children: "Anterior" })
      ]
    }
  );
}
function PaginationNext({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    PaginationLink,
    {
      "aria-label": "Pr\xF3xima p\xE1gina",
      className: cn("gap-1 px-2.5", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "hidden sm:inline", children: "Pr\xF3xima" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react.ChevronRightIcon, { className: "size-4" })
      ]
    }
  );
}
function PaginationEllipsis({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "span",
    {
      "aria-hidden": "true",
      "data-slot": "pagination-ellipsis",
      className: cn("flex size-9 items-center justify-center", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react.MoreHorizontalIcon, { className: "size-4" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "sr-only", children: "Mais p\xE1ginas" })
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
function PaginationControl({ page, totalPages, onPageChange, className }) {
  if (totalPages <= 1) return null;
  const paginasVisiveis = gerarPaginasVisiveis(page, totalPages);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Pagination, { className, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(PaginationContent, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      PaginationPrevious,
      {
        disabled: page <= 1,
        onClick: () => onPageChange(page - 1)
      }
    ) }),
    paginasVisiveis.map(
      (p, index) => p === "ellipsis" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(PaginationEllipsis, {}) }, `ellipsis-${index}`) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(PaginationLink, { isActive: p === page, onClick: () => onPageChange(p), children: p }) }, p)
    ),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      PaginationNext,
      {
        disabled: page >= totalPages,
        onClick: () => onPageChange(page + 1)
      }
    ) })
  ] }) });
}

// src/blocos-app/EmptyState.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function EmptyState({ icon, title, description, action, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "div",
    {
      "data-slot": "empty-state",
      role: "status",
      className: cn(
        "flex flex-col items-center justify-center gap-3 px-6 py-16 text-center",
        className
      ),
      children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { "data-slot": "empty-state-icon", className: "text-muted-foreground [&_svg]:size-10", children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "text-foreground text-sm font-medium", children: title }),
        description && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "text-muted-foreground max-w-sm text-sm", children: description }),
        action && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "mt-2", children: action })
      ]
    }
  );
}

// src/blocos-app/DataTable.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
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
  const mostrarPaginacao = page !== void 0 && totalPages !== void 0 && onPageChange;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { "data-slot": "data-table", className: cn("flex flex-col gap-4", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Table, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(TableRow, { children: columns.map((coluna) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(TableHead, { className: coluna.className, children: coluna.header }, coluna.key)) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(TableBody, { children: [
        loading && Array.from({ length: loadingRowCount }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(TableRow, { children: columns.map((coluna) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Skeleton, { className: "h-4 w-full max-w-40" }) }, coluna.key)) }, `skeleton-${index}`)),
        !loading && rows.map((row, index) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(TableRow, { children: columns.map((coluna) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(TableCell, { className: coluna.className, children: coluna.render(row) }, coluna.key)) }, getRowKey ? getRowKey(row, index) : index))
      ] })
    ] }),
    !loading && rows.length === 0 && emptyState && (isEmptyStateProps(emptyState) ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(EmptyState, { ...emptyState }) : emptyState),
    mostrarPaginacao && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(PaginationControl, { page, totalPages, onPageChange })
  ] });
}

// src/primitivos/Card.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function Card({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}

// src/blocos-app/StatCard.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var deltaCorPorDirecao = {
  up: "text-primary",
  down: "text-destructive",
  neutral: "text-muted-foreground"
};
function StatCard({ label, value, icon, delta, className }) {
  const direcao = delta?.direction ?? "neutral";
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Card, { className: cn("gap-1 py-5", className), children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(CardContent, { className: "flex items-start justify-between gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex min-w-0 flex-col gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-muted-foreground text-xs font-medium uppercase tracking-wide", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-foreground text-2xl font-semibold tabular-nums", children: value }),
      delta && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: cn("text-xs font-medium", deltaCorPorDirecao[direcao]), children: delta.value })
    ] }),
    icon && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
var import_jsx_runtime9 = require("react/jsx-runtime");
function PageHeader({ title, breadcrumb, actions, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    "div",
    {
      "data-slot": "page-header",
      className: cn(
        "flex flex-col gap-4 border-b border-border px-6 py-5 sm:flex-row sm:items-center sm:justify-between",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex min-w-0 flex-col gap-1.5", children: [
          breadcrumb && breadcrumb.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("nav", { "aria-label": "Breadcrumb", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("ol", { className: "text-muted-foreground flex flex-wrap items-center gap-1.5 text-xs", children: breadcrumb.map((item, index) => {
            const isLast = index === breadcrumb.length - 1;
            return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("li", { className: "flex items-center gap-1.5", children: [
              item.href && !isLast ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("a", { href: item.href, className: "hover:text-foreground transition-colors", children: item.label }) : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "span",
                {
                  "aria-current": isLast ? "page" : void 0,
                  className: isLast ? "text-foreground" : void 0,
                  children: item.label
                }
              ),
              !isLast && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { "aria-hidden": "true", children: "/" })
            ] }, index);
          }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h1", { className: "text-foreground truncate text-xl font-semibold", children: title })
        ] }),
        actions && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { "data-slot": "page-header-actions", className: "flex shrink-0 items-center gap-2", children: actions })
      ]
    }
  );
}

// src/primitivos/Label.tsx
var LabelPrimitive = __toESM(require("@radix-ui/react-label"));
var import_jsx_runtime10 = require("react/jsx-runtime");
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
var import_jsx_runtime11 = require("react/jsx-runtime");
function FormField({ label, error, children, className, htmlFor }) {
  const errorId = htmlFor ? `${htmlFor}-error` : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { "data-slot": "form-field", className: cn("flex flex-col gap-1.5", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Label, { htmlFor, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      "div",
      {
        "aria-invalid": Boolean(error),
        "aria-describedby": error ? errorId : void 0,
        children
      }
    ),
    error && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { id: errorId, role: "alert", className: "text-destructive text-xs font-medium", children: error })
  ] });
}

// src/blocos-app/CopyField.tsx
var React = __toESM(require("react"));
var import_lucide_react2 = require("lucide-react");

// src/primitivos/Button.tsx
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");
var import_jsx_runtime12 = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
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
  ...props
}) {
  const Comp = asChild ? import_react_slot.Slot : "button";
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// src/primitivos/Input.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}

// src/blocos-app/CopyField.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
function CopyField({ value, label, className, feedbackDurationMs = 2e3 }) {
  const [copiado, setCopiado] = React.useState(false);
  const inputId = React.useId();
  async function copiarValor() {
    await navigator.clipboard.writeText(value);
    setCopiado(true);
    window.setTimeout(() => setCopiado(false), feedbackDurationMs);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { "data-slot": "copy-field", className: cn("flex flex-col gap-1.5", className), children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Label, { htmlFor: inputId, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Input, { id: inputId, readOnly: true, value, className: "font-mono" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        Button,
        {
          type: "button",
          variant: "outline",
          size: "icon",
          "aria-label": copiado ? "Valor copiado" : "Copiar valor",
          onClick: copiarValor,
          children: copiado ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react2.CheckIcon, { className: "text-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react2.CopyIcon, {})
        }
      )
    ] })
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