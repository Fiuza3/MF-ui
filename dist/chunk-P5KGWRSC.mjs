'use client'

import {
  Button,
  Card,
  CardContent,
  Input,
  Label,
  PaginationControl,
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "./chunk-T3JPMASJ.mjs";
import {
  cn
} from "./chunk-ZTAXVNYF.mjs";

// src/blocos-app/AppShell.tsx
import * as React from "react";
import { MenuIcon } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
function AppShell({ sidebar, topbar, children, className, larguraSidebar = "w-64" }) {
  return /* @__PURE__ */ jsxs("div", { className: cn("bg-background text-foreground flex min-h-svh w-full", className), children: [
    /* @__PURE__ */ jsx(
      "aside",
      {
        "data-slot": "app-shell-sidebar",
        className: cn(
          "border-border bg-card sticky top-0 hidden h-svh shrink-0 overflow-y-auto border-r lg:block",
          larguraSidebar
        ),
        children: sidebar
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 flex-1 flex-col", children: [
      /* @__PURE__ */ jsxs(
        "header",
        {
          "data-slot": "app-shell-topbar",
          className: "border-border bg-card/80 sticky top-0 z-40 flex h-14 items-center gap-2 border-b px-4 backdrop-blur lg:px-6",
          children: [
            /* @__PURE__ */ jsx(MenuMobile, { sidebar }),
            /* @__PURE__ */ jsx("div", { className: "flex min-w-0 flex-1 items-center", children: topbar })
          ]
        }
      ),
      /* @__PURE__ */ jsx("main", { "data-slot": "app-shell-content", className: "flex-1 overflow-x-clip", children })
    ] })
  ] });
}
function MenuMobile({ sidebar }) {
  const [aberto, setAberto] = React.useState(false);
  function fecharAoNavegar(event) {
    if (event.target instanceof Element && event.target.closest("a[href]")) setAberto(false);
  }
  return /* @__PURE__ */ jsxs(Sheet, { open: aberto, onOpenChange: setAberto, children: [
    /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", "aria-label": "Abrir menu", className: "-ml-2 lg:hidden", children: /* @__PURE__ */ jsx(MenuIcon, {}) }) }),
    /* @__PURE__ */ jsxs(
      SheetContent,
      {
        side: "left",
        "aria-describedby": void 0,
        className: "bg-card w-64 gap-0 p-0",
        onClickCapture: fecharAoNavegar,
        children: [
          /* @__PURE__ */ jsx(SheetTitle, { className: "sr-only", children: "Menu" }),
          sidebar
        ]
      }
    )
  ] });
}

// src/blocos-app/EmptyState.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function EmptyState({ icon, title, description, action, className }) {
  return /* @__PURE__ */ jsxs2(
    "div",
    {
      "data-slot": "empty-state",
      role: "status",
      className: cn(
        "flex flex-col items-center justify-center gap-3 px-6 py-16 text-center",
        className
      ),
      children: [
        icon && /* @__PURE__ */ jsx2("div", { "data-slot": "empty-state-icon", className: "text-muted-foreground [&_svg]:size-10", children: icon }),
        /* @__PURE__ */ jsx2("p", { className: "text-foreground text-sm font-medium", children: title }),
        description && /* @__PURE__ */ jsx2("p", { className: "text-muted-foreground max-w-sm text-sm", children: description }),
        action && /* @__PURE__ */ jsx2("div", { className: "mt-2", children: action })
      ]
    }
  );
}

// src/blocos-app/DataTable.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs3("div", { "data-slot": "data-table", className: cn("flex flex-col gap-4", className), children: [
    /* @__PURE__ */ jsxs3(Table, { "aria-busy": loading || void 0, children: [
      /* @__PURE__ */ jsx3(TableHeader, { children: /* @__PURE__ */ jsx3(TableRow, { children: columns.map((coluna) => /* @__PURE__ */ jsx3(TableHead, { className: coluna.className, children: coluna.header }, coluna.key)) }) }),
      /* @__PURE__ */ jsxs3(TableBody, { children: [
        loading && Array.from({ length: loadingRowCount }, (_, index) => /* @__PURE__ */ jsx3(TableRow, { children: columns.map((coluna) => /* @__PURE__ */ jsx3(TableCell, { className: coluna.className, children: /* @__PURE__ */ jsx3(Skeleton, { className: "h-4 w-full max-w-40" }) }, coluna.key)) }, `skeleton-${index}`)),
        !loading && rows.map((row, index) => /* @__PURE__ */ jsx3(TableRow, { children: columns.map((coluna) => /* @__PURE__ */ jsx3(TableCell, { className: coluna.className, children: coluna.render(row) }, coluna.key)) }, getRowKey ? getRowKey(row, index) : index))
      ] })
    ] }),
    !loading && rows.length === 0 && emptyState && (isEmptyStateProps(emptyState) ? /* @__PURE__ */ jsx3(EmptyState, { ...emptyState }) : emptyState),
    mostrarPaginacao && /* @__PURE__ */ jsx3(PaginationControl, { page, totalPages, onPageChange })
  ] });
}

// src/blocos-app/StatCard.tsx
import { ArrowDownRightIcon, ArrowUpRightIcon } from "lucide-react";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
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
  up: /* @__PURE__ */ jsx4(ArrowUpRightIcon, { "aria-hidden": "true" }),
  down: /* @__PURE__ */ jsx4(ArrowDownRightIcon, { "aria-hidden": "true" }),
  neutral: null
};
function StatCard({ label, value, icon, delta, className }) {
  const direcao = delta?.direction ?? "neutral";
  const tom = delta?.tom ?? tomPorDirecao[direcao];
  return /* @__PURE__ */ jsx4(Card, { className: cn("gap-1 py-5", className), children: /* @__PURE__ */ jsxs4(CardContent, { className: "flex items-start justify-between gap-3", children: [
    /* @__PURE__ */ jsxs4("div", { className: "flex min-w-0 flex-col gap-1", children: [
      /* @__PURE__ */ jsx4("p", { className: "text-muted-foreground text-xs font-medium uppercase tracking-wide", children: label }),
      /* @__PURE__ */ jsx4("p", { className: "text-foreground text-2xl font-semibold tabular-nums", children: value }),
      delta && /* @__PURE__ */ jsxs4(
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
    icon && /* @__PURE__ */ jsx4(
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
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
function PageHeader({ title, breadcrumb, actions, className }) {
  return /* @__PURE__ */ jsxs5(
    "div",
    {
      "data-slot": "page-header",
      className: cn(
        "flex flex-col gap-4 border-b border-border px-4 py-5 lg:px-6 sm:flex-row sm:items-center sm:justify-between",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs5("div", { className: "flex min-w-0 flex-col gap-1.5", children: [
          breadcrumb && breadcrumb.length > 0 && /* @__PURE__ */ jsx5("nav", { "aria-label": "Trilha de navega\xE7\xE3o", children: /* @__PURE__ */ jsx5("ol", { className: "text-muted-foreground flex flex-wrap items-center gap-1.5 text-xs", children: breadcrumb.map((item, index) => {
            const isLast = index === breadcrumb.length - 1;
            return /* @__PURE__ */ jsxs5("li", { className: "flex items-center gap-1.5", children: [
              item.href && !isLast ? /* @__PURE__ */ jsx5(
                "a",
                {
                  href: item.href,
                  className: "hover:text-foreground focus-visible:ring-ring inline-flex min-h-6 items-center rounded-sm transition-colors outline-none focus-visible:ring-[3px]",
                  children: item.label
                }
              ) : /* @__PURE__ */ jsx5(
                "span",
                {
                  "aria-current": isLast ? "page" : void 0,
                  className: isLast ? "text-foreground" : void 0,
                  children: item.label
                }
              ),
              !isLast && /* @__PURE__ */ jsx5("span", { "aria-hidden": "true", children: "/" })
            ] }, index);
          }) }) }),
          /* @__PURE__ */ jsx5("h1", { className: "text-foreground text-xl font-semibold text-balance sm:truncate", children: title })
        ] }),
        actions && /* @__PURE__ */ jsx5("div", { "data-slot": "page-header-actions", className: "flex shrink-0 flex-wrap items-center gap-2", children: actions })
      ]
    }
  );
}

// src/blocos-app/FormField.tsx
import * as React2 from "react";
import { Slot } from "@radix-ui/react-slot";
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
function FormField({ label, error, children, className, htmlFor }) {
  const idGerado = React2.useId();
  const controlId = htmlFor ?? idGerado;
  const errorId = `${controlId}-error`;
  const propsDoControle = {
    id: controlId,
    "aria-invalid": error ? true : void 0,
    "aria-describedby": error ? errorId : void 0
  };
  return /* @__PURE__ */ jsxs6("div", { "data-slot": "form-field", className: cn("flex flex-col gap-1.5", className), children: [
    /* @__PURE__ */ jsx6(Label, { htmlFor: controlId, children: label }),
    React2.isValidElement(children) ? /* @__PURE__ */ jsx6(Slot, { ...propsDoControle, children }) : children,
    error && /* @__PURE__ */ jsx6("p", { id: errorId, role: "alert", className: "text-destructive text-xs font-medium", children: error })
  ] });
}

// src/blocos-app/CopyField.tsx
import * as React3 from "react";
import { CheckIcon, CopyIcon } from "lucide-react";
import { jsx as jsx7, jsxs as jsxs7 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs7("div", { "data-slot": "copy-field", className: cn("flex flex-col gap-1.5", className), children: [
    label && /* @__PURE__ */ jsx7(Label, { htmlFor: inputId, children: label }),
    /* @__PURE__ */ jsxs7("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx7(Input, { ref: inputRef, id: inputId, readOnly: true, value, className: "font-mono" }),
      /* @__PURE__ */ jsx7(
        Button,
        {
          type: "button",
          variant: "outline",
          size: "icon",
          "aria-label": copiado ? "Valor copiado" : "Copiar valor",
          onClick: copiarValor,
          children: copiado ? /* @__PURE__ */ jsx7(CheckIcon, { className: "text-primary" }) : /* @__PURE__ */ jsx7(CopyIcon, {})
        }
      )
    ] }),
    /* @__PURE__ */ jsx7(
      "p",
      {
        role: "status",
        className: estado === "falhou" ? "text-muted-foreground text-xs" : "sr-only",
        children: MENSAGEM[estado]
      }
    )
  ] });
}

export {
  AppShell,
  EmptyState,
  DataTable,
  StatCard,
  PageHeader,
  FormField,
  CopyField
};
//# sourceMappingURL=chunk-P5KGWRSC.mjs.map