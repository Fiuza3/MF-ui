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

// src/index.ts
var index_exports = {};
__export(index_exports, {
  About: () => About,
  Accordion: () => Accordion,
  AccordionContent: () => AccordionContent,
  AccordionItem: () => AccordionItem,
  AccordionTrigger: () => AccordionTrigger,
  Badge: () => Badge,
  Button: () => Button,
  Card: () => Card,
  CardAction: () => CardAction,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  Contact: () => Contact,
  Dialog: () => Dialog,
  DialogClose: () => DialogClose,
  DialogContent: () => DialogContent,
  DialogDescription: () => DialogDescription,
  DialogFooter: () => DialogFooter,
  DialogHeader: () => DialogHeader,
  DialogOverlay: () => DialogOverlay,
  DialogPortal: () => DialogPortal,
  DialogTitle: () => DialogTitle,
  DialogTrigger: () => DialogTrigger,
  Footer: () => Footer,
  Hero: () => Hero,
  Input: () => Input,
  Label: () => Label,
  Logo: () => Logo,
  LogoAnimado: () => LogoAnimado,
  Navbar: () => Navbar,
  Process: () => Process,
  Projects: () => Projects,
  RATIO_ALTURA_LOGO: () => RATIO_ALTURA_LOGO,
  RATIO_AVANCO_LOGO: () => RATIO_AVANCO_LOGO,
  RATIO_PADDING_LOGO: () => RATIO_PADDING_LOGO,
  Separator: () => Separator,
  Services: () => Services,
  Sheet: () => Sheet,
  SheetClose: () => SheetClose,
  SheetContent: () => SheetContent,
  SheetDescription: () => SheetDescription,
  SheetFooter: () => SheetFooter,
  SheetHeader: () => SheetHeader,
  SheetTitle: () => SheetTitle,
  SheetTrigger: () => SheetTrigger,
  Stack: () => Stack,
  Testimonials: () => Testimonials,
  Textarea: () => Textarea,
  Tooltip: () => Tooltip,
  TooltipContent: () => TooltipContent,
  TooltipProvider: () => TooltipProvider,
  TooltipTrigger: () => TooltipTrigger,
  badgeVariants: () => badgeVariants,
  blinkMs: () => blinkMs,
  buttonVariants: () => buttonVariants,
  cn: () => cn,
  cores: () => cores,
  familias: () => familias,
  motionDurations: () => motionDurations,
  motionEase: () => motionEase,
  pesos: () => pesos
});
module.exports = __toCommonJS(index_exports);

// src/tokens/cores.ts
var cores = {
  fundo: "#0B0F14",
  superficie: "#141C26",
  superficieElevada: "#0F1520",
  borda: "#1E2A38",
  bordaForte: "#2A3B4D",
  textoPrimario: "#F7FAFC",
  textoSecundario: "#A0AEC0",
  textoSutil: "#5C6B7E",
  accent: "#3DF2E0",
  accentForte: "#5DF5E6",
  accentSutil: "rgba(61,242,224,0.1)",
  alerta: "#FFBD2E",
  erro: "#E40014"
};

// src/tokens/tipografia.ts
var familias = {
  sans: "var(--fonte-sans), system-ui, -apple-system, sans-serif",
  mono: "var(--fonte-mono), ui-monospace, SFMono-Regular, Menlo, monospace"
};
var pesos = {
  regular: 400,
  medio: 500,
  semibold: 600,
  bold: 700
};

// src/componentes/Logo.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var RATIO_AVANCO_LOGO = 13.2 / 22;
var RATIO_ALTURA_LOGO = 30 / 22;
var RATIO_PADDING_LOGO = 1 / 22;
function Logo({
  tamanho = 24,
  cor = "var(--cyan)",
  opacidadeColchetes,
  compacto = false,
  className
}) {
  const cw = tamanho * RATIO_AVANCO_LOGO;
  const altura = tamanho * RATIO_ALTURA_LOGO;
  const padX = tamanho * RATIO_PADDING_LOGO;
  const larguraTotal = padX + cw * 5;
  const opColchetes = opacidadeColchetes ?? (compacto ? 0.28 : 0.58);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    {
      role: "img",
      "aria-label": "MF Desenvolvimento",
      viewBox: `0 0 ${larguraTotal} ${altura}`,
      height: altura,
      style: { width: "auto", overflow: "visible" },
      xmlns: "http://www.w3.org/2000/svg",
      className,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "text",
        {
          x: padX,
          y: altura / 2,
          dominantBaseline: "central",
          fontFamily: familias.mono,
          fontWeight: 700,
          fontSize: tamanho,
          fill: cor,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tspan", { fillOpacity: opColchetes, children: "<" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tspan", { children: "MF" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tspan", { fillOpacity: opColchetes, children: "/>" })
          ]
        }
      )
    }
  );
}

// src/componentes/LogoAnimado.tsx
var import_framer_motion = require("framer-motion");
var import_jsx_runtime2 = require("react/jsx-runtime");
var SUAVE = [0.16, 1, 0.3, 1];
function LogoAnimado({
  tamanho = 24,
  cor = "var(--cyan)",
  opacidadeColchetes,
  compacto = false,
  onClick,
  label = "MF Desenvolvimento",
  className
}) {
  const reduzido = (0, import_framer_motion.useReducedMotion)();
  const cw = tamanho * RATIO_AVANCO_LOGO;
  const altura = tamanho * RATIO_ALTURA_LOGO;
  const padX = tamanho * RATIO_PADDING_LOGO;
  const larguraTotal = padX + cw * 5;
  const opColchetes = opacidadeColchetes ?? (compacto ? 0.28 : 0.58);
  const entrar = reduzido ? {} : {
    initial: { opacity: 0, y: 5 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: SUAVE }
  };
  const svg = /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "svg",
    {
      role: "img",
      "aria-label": label,
      viewBox: `0 0 ${larguraTotal} ${altura}`,
      height: altura,
      style: { width: "auto", overflow: "visible" },
      xmlns: "http://www.w3.org/2000/svg",
      className: `transition-[filter] duration-300 hover:[filter:drop-shadow(0_0_9px_var(--cyan-glow))] ${className ?? ""}`,
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        import_framer_motion.motion.text,
        {
          ...entrar,
          x: padX,
          y: altura / 2,
          dominantBaseline: "central",
          fontFamily: familias.mono,
          fontWeight: 700,
          fontSize: tamanho,
          fill: cor,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("tspan", { fillOpacity: opColchetes, children: "<" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("tspan", { children: "MF" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("tspan", { fillOpacity: opColchetes, children: "/>" })
          ]
        }
      )
    }
  );
  if (onClick) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "button",
      {
        type: "button",
        "aria-label": label,
        onClick,
        className: "group inline-flex items-center rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-cyan/70",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "sr-only", children: label }),
          svg
        ]
      }
    );
  }
  return svg;
}

// src/componentes/Navbar.tsx
var import_react = require("react");
var import_framer_motion2 = require("framer-motion");
var import_jsx_runtime3 = require("react/jsx-runtime");
function Navbar({
  links = [],
  ctaHref,
  ctaLabel = "Fale comigo",
  onLogoClick
}) {
  const [isScrolled, setIsScrolled] = (0, import_react.useState)(false);
  const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
  const menuRef = (0, import_react.useRef)(null);
  const hamburgerRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    const handler = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  (0, import_react.useEffect)(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);
  const navClass = [
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
    isScrolled ? "border-b border-[var(--line)] bg-[var(--background)]/90 backdrop-blur-md" : "bg-transparent"
  ].join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("header", { className: navClass, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex w-full items-center justify-between px-5 py-4 sm:px-8 lg:px-10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        LogoAnimado,
        {
          compacto: isScrolled,
          onClick: onLogoClick ?? (() => window.scrollTo({ top: 0, behavior: "smooth" })),
          label: "Ir para o topo"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("nav", { "aria-label": "Navega\xE7\xE3o principal", className: "hidden md:flex items-center gap-8", children: [
        links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "a",
          {
            href: link.href,
            target: link.externo ? "_blank" : void 0,
            rel: link.externo ? "noopener noreferrer" : void 0,
            className: "rounded px-1 py-0.5 text-sm text-[var(--gray-text)] hover:text-[var(--foreground)] transition-colors font-mono tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)]/70",
            children: link.label
          },
          link.href
        )),
        ctaHref && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "a",
          {
            href: ctaHref,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "ml-2 rounded border border-[var(--cyan)] px-4 py-1.5 font-mono text-sm text-[var(--cyan)] hover:bg-[var(--cyan)] hover:text-[var(--background)] transition-all duration-200",
            children: ctaLabel
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        "button",
        {
          ref: hamburgerRef,
          "aria-label": menuOpen ? "Fechar menu" : "Abrir menu",
          "aria-expanded": menuOpen,
          onClick: () => setMenuOpen(!menuOpen),
          className: "flex flex-col gap-1.5 rounded p-2 md:hidden",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: `block h-px w-6 bg-[var(--foreground)] transition-all ${menuOpen ? "translate-y-2 rotate-45" : ""}` }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: `block h-px w-6 bg-[var(--foreground)] transition-all ${menuOpen ? "opacity-0" : ""}` }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: `block h-px w-6 bg-[var(--foreground)] transition-all ${menuOpen ? "-translate-y-2 -rotate-45" : ""}` })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_framer_motion2.AnimatePresence, { children: menuOpen && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      import_framer_motion2.motion.div,
      {
        ref: menuRef,
        initial: { opacity: 0, y: -16 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -16 },
        transition: { duration: 0.2 },
        className: "fixed inset-x-0 top-[65px] z-40 border-b border-[var(--line)] bg-[var(--background)]/95 backdrop-blur-md md:hidden",
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("nav", { "aria-label": "Menu mobile", className: "flex flex-col gap-1 px-6 py-6", children: [
          links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "a",
            {
              href: link.href,
              onClick: () => setMenuOpen(false),
              className: "rounded py-2 font-mono text-sm text-[var(--gray-text)] hover:text-[var(--foreground)] transition-colors",
              children: link.label
            },
            link.href
          )),
          ctaHref && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "a",
            {
              href: ctaHref,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "mt-4 rounded border border-[var(--cyan)] px-4 py-2 text-center font-mono text-sm text-[var(--cyan)] hover:bg-[var(--cyan)] hover:text-[var(--background)] transition-all",
              children: ctaLabel
            }
          )
        ] })
      }
    ) })
  ] });
}

// src/componentes/Footer.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function Footer({
  links = [],
  email,
  localizacao,
  nomeEmpresa = "MF Desenvolvimento",
  onLogoClick
}) {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "footer",
    {
      className: "relative overflow-hidden border-t border-[var(--line)] py-16 lg:py-24",
      "aria-label": "Rodap\xE9 do site",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--cyan)]/60 to-transparent" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "mb-8", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              LogoAnimado,
              {
                label: "Voltar ao topo",
                onClick: onLogoClick ?? (() => window.scrollTo({ top: 0, behavior: "smooth" }))
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "p",
              {
                "aria-hidden": "true",
                className: "select-none font-mono text-[clamp(5rem,24vw,24rem)] font-black leading-[0.76] tracking-tighter text-[var(--cyan)]/10",
                children: "<MF/>"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "grid gap-8 font-mono", children: [
            (email || localizacao) && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "rounded border border-[var(--line)] bg-[var(--surface)] p-5", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-[10px] uppercase tracking-[0.28em] text-[var(--gray-text)]", children: "runtime summary" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "mt-5 grid gap-3 text-sm", children: [
                localizacao && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { className: "flex items-center justify-between gap-4 border-b border-[var(--line)] pb-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-[var(--gray-text)]", children: "location" }),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-[var(--foreground)]", children: localizacao })
                ] }),
                email && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { className: "flex items-center justify-between gap-4", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-[var(--gray-text)]", children: "contact" }),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                    "a",
                    {
                      href: `mailto:${email}`,
                      className: "text-[var(--cyan)] hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)]/70",
                      children: email
                    }
                  )
                ] })
              ] })
            ] }),
            links.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("nav", { "aria-label": "Links do rodap\xE9", className: "flex flex-wrap gap-3", children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "a",
              {
                href: link.href,
                className: "rounded border border-[var(--line)] px-3 py-2 text-xs text-[var(--gray-text)] transition-colors hover:border-[var(--cyan)]/60 hover:text-[var(--foreground)]",
                children: link.label
              },
              link.href
            )) }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-col gap-3 border-t border-[var(--line)] pt-6 text-xs text-[var(--gray-text)] sm:flex-row sm:items-center sm:justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { children: [
                "\xA9 ",
                year,
                " ",
                nomeEmpresa
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-[var(--cyan)]", children: "$" }),
                " process.exit(0)"
              ] })
            ] })
          ] })
        ] }) })
      ]
    }
  );
}

// src/primitivos/Button.tsx
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");

// src/lib/cn.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/primitivos/Button.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// src/primitivos/Card.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function Card({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "div",
    {
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function CardAction({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "div",
    {
      "data-slot": "card-action",
      className: cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      ),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "div",
    {
      "data-slot": "card-footer",
      className: cn("flex items-center px-6 [.border-t]:pt-6", className),
      ...props
    }
  );
}

// src/primitivos/Badge.tsx
var import_react_slot2 = require("@radix-ui/react-slot");
var import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_runtime7 = require("react/jsx-runtime");
var badgeVariants = (0, import_class_variance_authority2.cva)(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? import_react_slot2.Slot : "span";
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    Comp,
    {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}

// src/primitivos/Input.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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

// src/primitivos/Textarea.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
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

// src/primitivos/Separator.tsx
var SeparatorPrimitive = __toESM(require("@radix-ui/react-separator"));
var import_jsx_runtime11 = require("react/jsx-runtime");
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    SeparatorPrimitive.Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}

// src/primitivos/Accordion.tsx
var AccordionPrimitive = __toESM(require("@radix-ui/react-accordion"));
var import_lucide_react = require("lucide-react");
var import_jsx_runtime12 = require("react/jsx-runtime");
function Accordion({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(AccordionPrimitive.Root, { "data-slot": "accordion", ...props });
}
function AccordionItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    AccordionPrimitive.Item,
    {
      "data-slot": "accordion-item",
      className: cn("border-b last:border-b-0", className),
      ...props
    }
  );
}
function AccordionTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
    AccordionPrimitive.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react.ChevronDownIcon, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function AccordionContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    AccordionPrimitive.Content,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: cn("pt-0 pb-4", className), children })
    }
  );
}

// src/primitivos/Dialog.tsx
var DialogPrimitive = __toESM(require("@radix-ui/react-dialog"));
var import_lucide_react2 = require("lucide-react");
var import_jsx_runtime13 = require("react/jsx-runtime");
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DialogPrimitive.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DialogPrimitive.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogClose({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DialogPrimitive.Close, { "data-slot": "dialog-close", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    DialogPrimitive.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DialogOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
      DialogPrimitive.Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
            DialogPrimitive.Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react2.XIcon, {}),
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogFooter({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    "div",
    {
      "data-slot": "dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    DialogPrimitive.Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
function DialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    DialogPrimitive.Description,
    {
      "data-slot": "dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}

// src/primitivos/Sheet.tsx
var SheetPrimitive = __toESM(require("@radix-ui/react-dialog"));
var import_lucide_react3 = require("lucide-react");
var import_jsx_runtime14 = require("react/jsx-runtime");
function Sheet({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(SheetPrimitive.Root, { "data-slot": "sheet", ...props });
}
function SheetTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(SheetPrimitive.Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetClose({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(SheetPrimitive.Close, { "data-slot": "sheet-close", ...props });
}
function SheetPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(SheetPrimitive.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(SheetPortal, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(SheetOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
      SheetPrimitive.Content,
      {
        "data-slot": "sheet-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(SheetPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react3.XIcon, { className: "size-4" }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    "div",
    {
      "data-slot": "sheet-header",
      className: cn("flex flex-col gap-1.5 p-4", className),
      ...props
    }
  );
}
function SheetFooter({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    "div",
    {
      "data-slot": "sheet-footer",
      className: cn("mt-auto flex flex-col gap-2 p-4", className),
      ...props
    }
  );
}
function SheetTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    SheetPrimitive.Title,
    {
      "data-slot": "sheet-title",
      className: cn("text-foreground font-semibold", className),
      ...props
    }
  );
}
function SheetDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    SheetPrimitive.Description,
    {
      "data-slot": "sheet-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}

// src/primitivos/Tooltip.tsx
var TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"));
var import_jsx_runtime15 = require("react/jsx-runtime");
function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    TooltipPrimitive.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration,
      ...props
    }
  );
}
function Tooltip({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props }) });
}
function TooltipTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(TooltipPrimitive.Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(TooltipPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
    TooltipPrimitive.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(TooltipPrimitive.Arrow, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}

// src/lib/motion.ts
var motionDurations = {
  micro: 0.24,
  reveal: 0.64,
  section: 0.9
};
var motionEase = {
  expoOut: [0.16, 1, 0.3, 1],
  powerOut: [0.22, 1, 0.36, 1],
  softInOut: [0.65, 0, 0.35, 1]
};
var blinkMs = 530;

// src/blocos/Hero.tsx
var import_framer_motion3 = require("framer-motion");
var import_jsx_runtime16 = require("react/jsx-runtime");
function Hero({
  eyebrow,
  headline,
  descricao,
  cta,
  stats,
  slotLateral,
  slotLateralLabel = "live process"
}) {
  const shouldAnimate = !(0, import_framer_motion3.useReducedMotion)();
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
    "section",
    {
      id: "hero",
      "aria-label": "Introdu\xE7\xE3o",
      className: "hero-shell relative flex min-h-[100svh] overflow-hidden border-b border-line",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "hero-noise", "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "hero-radial", "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "hero-scanline", "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "relative z-10 flex w-full flex-col justify-between px-5 pb-8 pt-28 sm:px-8 lg:px-10 lg:pt-32 2xl:px-14", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "grid flex-1 items-start gap-10 lg:grid-cols-[minmax(0,1.58fr)_minmax(380px,0.92fr)] lg:gap-14 2xl:grid-cols-[minmax(0,1.7fr)_minmax(460px,0.9fr)]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "relative", children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                import_framer_motion3.motion.p,
                {
                  initial: shouldAnimate ? { opacity: 0, y: 12 } : {},
                  animate: shouldAnimate ? { opacity: 1, y: 0 } : {},
                  transition: shouldAnimate ? { duration: 0.6, ease: motionEase.expoOut } : { duration: 0 },
                  className: "mb-7 max-w-md font-mono text-xs uppercase tracking-[0.32em] text-cyan",
                  children: eyebrow
                }
              ),
              headline,
              /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
                import_framer_motion3.motion.div,
                {
                  initial: shouldAnimate ? { opacity: 0, y: 20 } : {},
                  animate: shouldAnimate ? { opacity: 1, y: 0 } : {},
                  transition: shouldAnimate ? { delay: 0.3, duration: 0.7, ease: motionEase.expoOut } : { duration: 0 },
                  className: "mt-8 flex max-w-5xl flex-col gap-5 sm:flex-row sm:items-end sm:justify-between",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "max-w-2xl text-base leading-relaxed text-gray-text sm:text-lg", children: descricao }),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
                      "a",
                      {
                        href: cta.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "group inline-flex w-fit items-center gap-3 rounded border border-cyan bg-cyan px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-transparent hover:text-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70",
                        children: [
                          cta.label,
                          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "h-px w-8 bg-background transition-colors group-hover:bg-cyan", "aria-hidden": "true" })
                        ]
                      }
                    )
                  ]
                }
              )
            ] }),
            slotLateral && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
              import_framer_motion3.motion.div,
              {
                initial: shouldAnimate ? { opacity: 0, y: 36, rotate: -1.5 } : {},
                animate: shouldAnimate ? { opacity: 1, y: 0, rotate: 0 } : {},
                transition: shouldAnimate ? { delay: 0.56, duration: 0.9, ease: motionEase.expoOut } : { duration: 0 },
                className: "relative lg:translate-y-16",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "absolute -left-4 -top-4 hidden font-mono text-[10px] uppercase tracking-[0.25em] text-gray-text lg:block", children: slotLateralLabel }),
                  slotLateral
                ]
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            import_framer_motion3.motion.div,
            {
              initial: shouldAnimate ? { opacity: 0, y: 20 } : {},
              animate: shouldAnimate ? { opacity: 1, y: 0 } : {},
              transition: shouldAnimate ? { delay: 0.5, duration: 0.7, ease: motionEase.expoOut } : { duration: 0 },
              className: "mt-16 grid grid-cols-2 gap-5 border-t border-line pt-6 sm:grid-cols-4 lg:mt-24",
              children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "font-mono text-3xl font-black text-foreground sm:text-4xl", children: stat.value }),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "mt-2 text-xs uppercase tracking-[0.18em] text-gray-text", children: stat.label })
              ] }, stat.label))
            }
          )
        ] })
      ]
    }
  );
}

// src/blocos/Services.tsx
var import_framer_motion4 = require("framer-motion");
var import_jsx_runtime17 = require("react/jsx-runtime");
function ServiceCard({
  service,
  index
}) {
  const shouldAnimate = !(0, import_framer_motion4.useReducedMotion)();
  const isWide = service.id === "apis";
  const isTall = service.id === "web-apps";
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
    import_framer_motion4.motion.article,
    {
      initial: shouldAnimate ? { opacity: 0, y: 28 } : {},
      whileInView: shouldAnimate ? { opacity: 1, y: 0 } : {},
      transition: shouldAnimate ? { delay: index * 0.08, duration: 0.64, ease: motionEase.expoOut } : { duration: 0 },
      viewport: shouldAnimate ? { once: true, margin: "-70px" } : void 0,
      className: cn(
        "group relative min-h-[220px] overflow-hidden rounded border border-line bg-surface p-5 transition-colors duration-300 hover:border-cyan/60 sm:min-h-[260px] lg:p-6",
        isWide && "lg:col-span-2"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          "div",
          {
            className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            style: {
              background: "radial-gradient(circle at 24% 0%, rgba(61,242,224,0.08), transparent 46%)"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "relative flex h-full flex-col justify-between gap-8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "flex items-center justify-between gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "font-mono text-xs text-cyan", children: service.tag }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "font-mono text-[10px] uppercase tracking-[0.22em] text-gray-text", children: service.id })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h3", { className: "mt-5 text-[clamp(1.6rem,3vw,3.2rem)] font-black leading-none tracking-tight text-foreground", children: service.title }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "mt-4 max-w-2xl text-sm leading-relaxed text-gray-text lg:text-base", children: service.description })
          ] }),
          service.motif,
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
            "ul",
            {
              className: "grid gap-2 sm:grid-cols-2",
              "aria-label": `Itens de ${service.title}`,
              children: service.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
                "li",
                {
                  className: "flex items-start gap-2 text-sm text-gray-text",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                      "span",
                      {
                        className: "mt-0.5 font-mono text-cyan",
                        "aria-hidden": "true",
                        children: "/"
                      }
                    ),
                    item
                  ]
                },
                item
              ))
            }
          )
        ] })
      ]
    }
  );
}
function Services({
  eyebrow,
  titulo,
  descricao,
  services
}) {
  const shouldAnimate = !(0, import_framer_motion4.useReducedMotion)();
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    "section",
    {
      id: "servicos",
      "aria-label": "Servi\xE7os",
      className: "overflow-hidden border-t border-line py-16 lg:py-24",
      children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
          import_framer_motion4.motion.div,
          {
            initial: shouldAnimate ? { opacity: 0, y: 22 } : {},
            whileInView: shouldAnimate ? { opacity: 1, y: 0 } : {},
            transition: shouldAnimate ? { duration: 0.68, ease: motionEase.expoOut } : { duration: 0 },
            viewport: shouldAnimate ? { once: true, margin: "-60px" } : void 0,
            className: "mb-10 max-w-2xl lg:mb-14",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "mb-8 font-mono text-xs uppercase tracking-[0.34em] text-cyan", children: eyebrow }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h2", { className: "text-[clamp(2.25rem,6vw,6.6rem)] font-black leading-[0.94] tracking-tight text-foreground", children: titulo }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "mt-6 max-w-xl text-base leading-relaxed text-gray-text", children: descricao })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "grid gap-4 lg:grid-cols-3", children: services.map((service, i) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(ServiceCard, { service, index: i }, service.id)) })
      ] })
    }
  );
}

// src/blocos/Projects.tsx
var import_react2 = require("react");
var import_framer_motion5 = require("framer-motion");
var import_jsx_runtime18 = require("react/jsx-runtime");
function ProjectModal({
  project,
  onClose
}) {
  const closeRef = (0, import_react2.useRef)(null);
  const dialogRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first || !last) return;
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    window.setTimeout(() => closeRef.current?.focus(), 30);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_framer_motion5.AnimatePresence, { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
    import_framer_motion5.motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-[80] flex items-center justify-center p-5",
      onMouseDown: onClose,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
          "div",
          {
            className: "absolute inset-0 bg-background/85 backdrop-blur-md",
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
          import_framer_motion5.motion.div,
          {
            ref: dialogRef,
            initial: { opacity: 0, y: 24, scale: 0.96 },
            animate: { opacity: 1, y: 0, scale: 1 },
            exit: { opacity: 0, y: 24, scale: 0.96 },
            transition: { duration: 0.28 },
            onMouseDown: (event) => event.stopPropagation(),
            className: "relative z-10 w-full max-w-3xl rounded border border-line bg-surface p-6 shadow-2xl shadow-cyan/5 lg:p-8",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": `Case tecnico: ${project.titulo}`,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
                "button",
                {
                  ref: closeRef,
                  type: "button",
                  onClick: onClose,
                  "aria-label": "Fechar case",
                  className: "absolute right-4 top-4 rounded border border-line p-2 text-gray-text transition-colors hover:border-cyan hover:text-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70",
                  children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { "aria-hidden": "true", children: "\u2715" })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("p", { className: "font-mono text-xs uppercase tracking-[0.28em] text-cyan", children: [
                "case.log",
                project.ano ? ` / ${project.ano}` : ""
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h3", { className: "mt-4 max-w-2xl text-3xl font-black tracking-tight text-foreground lg:text-5xl", children: project.titulo }),
              project.descricao && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "mt-5 max-w-2xl text-base leading-relaxed text-gray-text", children: project.descricao }),
              (project.metrica || project.resultado) && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "mt-8 grid gap-4 sm:grid-cols-2", children: [
                project.metrica && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "rounded border border-line bg-background/50 p-4", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "font-mono text-[10px] uppercase tracking-[0.24em] text-gray-text", children: "metrica" }),
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "mt-3 font-mono text-xl text-cyan", children: project.metrica })
                ] }),
                project.resultado && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "rounded border border-line bg-background/50 p-4", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "font-mono text-[10px] uppercase tracking-[0.24em] text-gray-text", children: "resultado" }),
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "mt-3 text-sm leading-relaxed text-foreground", children: project.resultado })
                ] })
              ] }),
              project.tags && project.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "mt-6 flex flex-wrap gap-2", children: project.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
                "span",
                {
                  className: "rounded border border-line px-2 py-1 font-mono text-xs text-gray-text",
                  children: tag
                },
                tag
              )) })
            ]
          }
        )
      ]
    }
  ) });
}
function ProjectFrame({
  project,
  index,
  onOpen
}) {
  const shouldAnimate = !(0, import_framer_motion5.useReducedMotion)();
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
    import_framer_motion5.motion.article,
    {
      initial: shouldAnimate ? { opacity: 0, y: 32 } : {},
      whileInView: shouldAnimate ? { opacity: 1, y: 0 } : {},
      transition: shouldAnimate ? {
        duration: 0.64,
        delay: index * 0.06,
        ease: motionEase.expoOut
      } : { duration: 0 },
      viewport: shouldAnimate ? { once: true, margin: "-80px" } : void 0,
      className: "project-frame group flex min-h-[540px] w-[86vw] shrink-0 scroll-ml-5 flex-col justify-between rounded border border-line bg-surface p-5 transition-colors hover:border-cyan/60 sm:min-h-[620px] sm:w-[74vw] lg:w-[72vw] lg:p-8 xl:w-[64vw] 2xl:w-[54vw]",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "grid gap-8 lg:grid-cols-[0.9fr_1.15fr] lg:items-start", children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("p", { className: "font-mono text-xs uppercase tracking-[0.28em] text-cyan", children: [
              "frame ",
              String(index + 1).padStart(2, "0"),
              project.ano ? ` / ${project.ano}` : ""
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h3", { className: "mt-5 max-w-2xl text-[clamp(2.2rem,5vw,5.8rem)] font-black leading-[0.88] tracking-tight text-foreground", children: project.titulo }),
            project.descricao && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "mt-6 max-w-xl text-base leading-relaxed text-gray-text", children: project.descricao })
          ] }),
          project.slotMockup && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            "div",
            {
              className: "project-mockup relative overflow-hidden rounded border border-line bg-background/70 p-4",
              "aria-hidden": "true",
              children: project.slotMockup
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "mt-8 grid gap-5 border-t border-line pt-6 md:grid-cols-[0.9fr_1fr_auto] md:items-end", children: [
          project.metrica && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "font-mono text-[10px] uppercase tracking-[0.24em] text-gray-text", children: "metrica forte" }),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "mt-2 font-mono text-xl text-cyan lg:text-2xl", children: project.metrica })
          ] }),
          project.tags && project.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "font-mono text-[10px] uppercase tracking-[0.24em] text-gray-text", children: "stack" }),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "mt-2 flex flex-wrap gap-2", children: project.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
              "span",
              {
                className: "rounded border border-line px-2 py-1 font-mono text-xs text-gray-text",
                children: tag
              },
              tag
            )) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            "button",
            {
              type: "button",
              onClick: () => onOpen(project),
              className: "rounded border border-cyan px-4 py-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-cyan transition-colors hover:bg-cyan hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70",
              children: "abrir case"
            }
          )
        ] })
      ]
    }
  );
}
function Projects({
  eyebrow,
  titulo,
  descricao,
  projects
}) {
  const shouldAnimate = !(0, import_framer_motion5.useReducedMotion)();
  const [selected, setSelected] = (0, import_react2.useState)(null);
  const loopedProjects = [...projects, ...projects];
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
    "section",
    {
      id: "projetos",
      "aria-label": "Projetos",
      className: "relative overflow-hidden border-t border-line py-16 lg:py-24",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
          import_framer_motion5.motion.div,
          {
            initial: shouldAnimate ? { opacity: 0, y: 24 } : {},
            whileInView: shouldAnimate ? { opacity: 1, y: 0 } : {},
            transition: shouldAnimate ? { duration: 0.7, ease: motionEase.expoOut } : { duration: 0 },
            viewport: shouldAnimate ? { once: true, margin: "-80px" } : void 0,
            className: "mb-16 max-w-2xl",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "mb-8 font-mono text-xs uppercase tracking-[0.34em] text-cyan", children: eyebrow }),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h2", { className: "text-[clamp(2.3rem,7vw,7.8rem)] font-black leading-[0.94] tracking-tight text-foreground", children: titulo }),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "mt-6 max-w-xl text-base leading-relaxed text-gray-text", children: descricao })
            ]
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "project-carousel relative overflow-hidden", children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            "div",
            {
              className: "project-carousel-track flex w-max gap-6 px-5 pb-4 sm:px-8 lg:px-10 2xl:px-14",
              "aria-label": "Sequencia de cases",
              children: loopedProjects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
                "div",
                {
                  "aria-hidden": index >= projects.length ? true : void 0,
                  children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
                    ProjectFrame,
                    {
                      project,
                      index: index % projects.length,
                      onOpen: setSelected
                    }
                  )
                },
                `${project.titulo}-${index}`
              ))
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            "div",
            {
              "aria-hidden": "true",
              className: "pointer-events-none absolute inset-y-0 left-0 hidden w-32 bg-gradient-to-r from-background to-transparent lg:block"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            "div",
            {
              "aria-hidden": "true",
              className: "pointer-events-none absolute inset-y-0 right-0 hidden w-32 bg-gradient-to-l from-background to-transparent lg:block"
            }
          )
        ] }),
        selected && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ProjectModal, { project: selected, onClose: () => setSelected(null) })
      ]
    }
  );
}

// src/blocos/Process.tsx
var import_framer_motion6 = require("framer-motion");
var import_jsx_runtime19 = require("react/jsx-runtime");
function PipelineCard({
  step,
  index
}) {
  const shouldAnimate = !(0, import_framer_motion6.useReducedMotion)();
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
    import_framer_motion6.motion.article,
    {
      initial: shouldAnimate ? { opacity: 0, y: 24 } : {},
      whileInView: shouldAnimate ? { opacity: 1, y: 0 } : {},
      transition: shouldAnimate ? { delay: index * 0.06, duration: 0.55, ease: motionEase.expoOut } : { duration: 0 },
      viewport: shouldAnimate ? { once: true, margin: "-60px" } : void 0,
      className: "group relative flex h-full flex-col overflow-hidden rounded border border-line bg-surface p-5 transition-colors hover:border-cyan/60 lg:p-6",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          "div",
          {
            className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            style: {
              background: "radial-gradient(circle at 0% 0%, rgba(61,242,224,0.07), transparent 52%)"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "relative flex h-full flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "font-mono text-xs uppercase tracking-[0.28em] text-cyan", children: step.numero }),
            step.duracao && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "shrink-0 rounded border border-line px-2 py-0.5 font-mono text-[10px] text-gray-text", children: step.duracao })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h3", { className: "mt-3 text-[clamp(1.25rem,2.2vw,1.75rem)] font-black leading-[1.05] tracking-tight text-foreground", children: step.titulo }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "mt-3 flex-1 text-sm leading-relaxed text-gray-text", children: step.descricao }),
          (step.commitLabel || step.commitOutput) && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "mt-4 border-t border-line pt-3 font-mono", children: [
            step.commitLabel && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { className: "truncate text-xs text-foreground", children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "text-cyan", children: "$" }),
              " ",
              step.commitLabel
            ] }),
            step.commitOutput && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { className: "mt-1 truncate text-[11px] text-gray-text", children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "text-cyan/60", children: ">" }),
              " ",
              step.commitOutput
            ] })
          ] })
        ] })
      ]
    }
  );
}
function Process({ eyebrow, titulo, descricao, steps }) {
  const shouldAnimate = !(0, import_framer_motion6.useReducedMotion)();
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    "section",
    {
      id: "processo",
      "aria-label": "Processo de trabalho",
      className: "relative overflow-hidden border-t border-line py-16 lg:py-24",
      children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
          import_framer_motion6.motion.div,
          {
            initial: shouldAnimate ? { opacity: 0, y: 24 } : {},
            whileInView: shouldAnimate ? { opacity: 1, y: 0 } : {},
            transition: shouldAnimate ? { duration: 0.7, ease: motionEase.expoOut } : { duration: 0 },
            viewport: shouldAnimate ? { once: true, margin: "-80px" } : void 0,
            className: "mb-10 max-w-2xl",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "mb-6 font-mono text-xs uppercase tracking-[0.34em] text-cyan", children: eyebrow }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h2", { className: "text-[clamp(2.3rem,7vw,7.8rem)] font-black leading-[0.94] tracking-tight text-foreground", children: titulo }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "mt-5 max-w-xl text-base leading-relaxed text-gray-text", children: descricao })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5", children: steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(PipelineCard, { step, index }, step.numero)) })
      ] })
    }
  );
}

// src/blocos/Stack.tsx
var import_react3 = require("react");
var import_framer_motion7 = require("framer-motion");
var import_jsx_runtime20 = require("react/jsx-runtime");
function Stack({ eyebrow, titulo, descricao, grupos }) {
  const shouldAnimate = !(0, import_framer_motion7.useReducedMotion)();
  const [active, setActive] = (0, import_react3.useState)(grupos[0]);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    "section",
    {
      id: "stack",
      "aria-label": "Mapa t\xE9cnico da stack",
      className: "relative overflow-hidden border-t border-line py-16 lg:py-24",
      children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
          import_framer_motion7.motion.div,
          {
            initial: shouldAnimate ? { opacity: 0, y: 24 } : {},
            whileInView: shouldAnimate ? { opacity: 1, y: 0 } : {},
            transition: shouldAnimate ? { duration: 0.7, ease: motionEase.expoOut } : { duration: 0 },
            viewport: shouldAnimate ? { once: true, margin: "-80px" } : void 0,
            className: "mb-16 max-w-2xl",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "mb-8 font-mono text-xs uppercase tracking-[0.34em] text-cyan", children: eyebrow }),
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h2", { className: "text-[clamp(2.3rem,7vw,7.8rem)] font-black leading-[0.94] tracking-tight text-foreground", children: titulo }),
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "mt-6 max-w-xl text-base leading-relaxed text-gray-text", children: descricao })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "grid gap-6 lg:grid-cols-[1fr_1.15fr] xl:grid-cols-[0.95fr_1.25fr]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "grid gap-3", children: grupos.map((grupo, index) => {
            const selected = active.categoria === grupo.categoria;
            return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
              import_framer_motion7.motion.button,
              {
                type: "button",
                initial: shouldAnimate ? { opacity: 0, x: -18 } : {},
                whileInView: shouldAnimate ? { opacity: 1, x: 0 } : {},
                transition: shouldAnimate ? {
                  delay: index * 0.05,
                  duration: 0.48,
                  ease: motionEase.expoOut
                } : { duration: 0 },
                viewport: shouldAnimate ? { once: true, margin: "-80px" } : void 0,
                onClick: () => setActive(grupo),
                onMouseEnter: () => setActive(grupo),
                "aria-pressed": selected,
                className: cn(
                  "group grid gap-5 rounded border p-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70 sm:grid-cols-[auto_1fr]",
                  selected ? "border-cyan bg-cyan/10" : "border-line bg-surface hover:border-cyan/50"
                ),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                    "span",
                    {
                      className: cn(
                        "font-mono text-sm transition-colors",
                        selected ? "text-cyan" : "text-gray-text group-hover:text-cyan"
                      ),
                      children: String(index + 1).padStart(2, "0")
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("span", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "block text-2xl font-black tracking-tight text-foreground", children: grupo.categoria }),
                    grupo.comando && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("span", { className: "mt-2 block font-mono text-xs text-gray-text", children: [
                      "$ ",
                      grupo.comando
                    ] })
                  ] })
                ]
              },
              grupo.categoria
            );
          }) }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "rounded border border-line bg-surface p-5 lg:p-8", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_framer_motion7.AnimatePresence, { mode: "wait", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
            import_framer_motion7.motion.div,
            {
              initial: shouldAnimate ? { opacity: 0, y: 18, filter: "blur(8px)" } : {},
              animate: shouldAnimate ? { opacity: 1, y: 0, filter: "blur(0px)" } : {},
              exit: shouldAnimate ? { opacity: 0, y: -14, filter: "blur(8px)" } : {},
              transition: shouldAnimate ? { duration: 0.28, ease: motionEase.powerOut } : { duration: 0 },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex items-start justify-between gap-6", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("p", { className: "font-mono text-xs uppercase tracking-[0.28em] text-cyan", children: [
                      "layer / ",
                      active.categoria.toLowerCase()
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h3", { className: "mt-4 text-[clamp(2.2rem,5vw,5.8rem)] font-black leading-[0.9] tracking-tight text-foreground", children: active.categoria })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "hidden rounded border border-line px-3 py-1 font-mono text-xs text-gray-text sm:block", children: "active" })
                ] }),
                active.descricao && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "mt-6 max-w-3xl text-base leading-relaxed text-gray-text", children: active.descricao }),
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "stack-map-grid mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3", children: active.itens.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
                  import_framer_motion7.motion.div,
                  {
                    initial: shouldAnimate ? { opacity: 0, y: 10 } : {},
                    animate: shouldAnimate ? { opacity: 1, y: 0 } : {},
                    transition: shouldAnimate ? { delay: index * 0.04, duration: 0.25 } : { duration: 0 },
                    className: "group/item relative overflow-hidden rounded border border-line bg-background/55 p-4 font-mono transition-colors hover:border-cyan/60",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "relative z-10 text-sm text-foreground", children: item }),
                      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                        "span",
                        {
                          className: "stack-chip-fill absolute inset-y-0 left-0 w-full origin-left scale-x-0 bg-cyan/10 transition-transform duration-500 group-hover/item:scale-x-100",
                          "aria-hidden": "true"
                        }
                      )
                    ]
                  },
                  item
                )) }),
                active.comando && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "mt-8 border-t border-line pt-5 font-mono", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("p", { className: "text-sm text-foreground", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "text-cyan", children: "$" }),
                    " explain --when-to-use",
                    " ",
                    active.categoria.toLowerCase()
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("p", { className: "mt-2 text-xs leading-relaxed text-gray-text", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "text-cyan/70", children: ">" }),
                    " uso essa camada quando ela diminui incerteza operacional, n\xE3o para preencher logo em carrossel."
                  ] })
                ] })
              ]
            },
            active.categoria
          ) }) })
        ] })
      ] })
    }
  );
}

// src/blocos/Testimonials.tsx
var import_react4 = require("react");
var import_framer_motion8 = require("framer-motion");
var import_jsx_runtime21 = require("react/jsx-runtime");
var AUTOPLAY_MS = 5e3;
function Testimonials({
  eyebrow,
  titulo,
  depoimentos
}) {
  const [current, setCurrent] = (0, import_react4.useState)(0);
  const [paused, setPaused] = (0, import_react4.useState)(false);
  const [userPaused, setUserPaused] = (0, import_react4.useState)(false);
  const timerRef = (0, import_react4.useRef)(null);
  const next = (0, import_react4.useCallback)(() => {
    setCurrent((c) => (c + 1) % depoimentos.length);
  }, [depoimentos.length]);
  const prev = (0, import_react4.useCallback)(() => {
    setCurrent((c) => (c - 1 + depoimentos.length) % depoimentos.length);
  }, [depoimentos.length]);
  (0, import_react4.useEffect)(() => {
    if (paused || userPaused) return;
    timerRef.current = setInterval(next, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [paused, userPaused, next]);
  const t = depoimentos[current];
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    "section",
    {
      id: "depoimentos",
      "aria-label": "Depoimentos de clientes",
      className: "py-32 border-t border-line",
      children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
          import_framer_motion8.motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            viewport: { once: true, margin: "-60px" },
            className: "mb-16",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "font-mono text-sm text-cyan tracking-widest uppercase mb-4", children: eyebrow }),
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("h2", { className: "text-3xl font-bold text-balance lg:text-4xl", children: titulo })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
          "div",
          {
            role: "region",
            "aria-label": "Depoimentos de clientes",
            "aria-roledescription": "carrossel",
            onMouseEnter: () => setPaused(true),
            onMouseLeave: () => setPaused(false),
            className: "relative",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { "aria-live": "polite", "aria-atomic": "true", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_framer_motion8.AnimatePresence, { mode: "wait", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
                import_framer_motion8.motion.blockquote,
                {
                  initial: { opacity: 0, y: 16 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -16 },
                  transition: { duration: 0.4 },
                  className: "rounded border border-line bg-surface p-10 lg:p-14",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                      "span",
                      {
                        "aria-hidden": "true",
                        className: "font-mono text-6xl text-cyan opacity-20 leading-none select-none",
                        children: "\u201C"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "mt-2 max-w-6xl text-lg leading-relaxed text-foreground lg:text-xl", children: t.texto }),
                    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("footer", { className: "mt-8 flex items-center gap-4", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                        "div",
                        {
                          "aria-hidden": "true",
                          className: "flex h-10 w-10 items-center justify-center rounded border border-line bg-surface-raised font-mono text-sm font-bold text-cyan",
                          children: t.autor.charAt(0)
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { children: [
                        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("cite", { className: "not-italic font-semibold text-foreground", children: t.autor }),
                        (t.papel || t.empresa) && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "text-sm text-gray-text", children: [t.papel, t.empresa].filter(Boolean).join(" \xB7 ") })
                      ] })
                    ] })
                  ]
                },
                `${t.autor}-${current}`
              ) }) }),
              /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "mt-6 flex items-center gap-4", children: [
                /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                  "button",
                  {
                    onClick: prev,
                    "aria-label": "Depoimento anterior",
                    className: "flex h-11 w-11 items-center justify-center rounded border border-line text-gray-text hover:border-cyan hover:text-cyan transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70",
                    children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { "aria-hidden": "true", children: "\u2039" })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                  "button",
                  {
                    onClick: next,
                    "aria-label": "Pr\xF3ximo depoimento",
                    className: "flex h-11 w-11 items-center justify-center rounded border border-line text-gray-text hover:border-cyan hover:text-cyan transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70",
                    children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { "aria-hidden": "true", children: "\u203A" })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "flex gap-1.5", role: "tablist", "aria-label": "Navegar depoimentos", children: depoimentos.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                  "button",
                  {
                    role: "tab",
                    "aria-selected": i === current,
                    "aria-label": `Ir para depoimento ${i + 1}`,
                    onClick: () => setCurrent(i),
                    className: "h-11 w-11 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70 rounded",
                    children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                      "span",
                      {
                        className: `block rounded-full transition-all duration-300 ${i === current ? "h-1 w-6 bg-cyan" : "h-1.5 w-1.5 bg-line hover:bg-gray-text"}`
                      }
                    )
                  },
                  i
                )) }),
                /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                  "button",
                  {
                    onClick: () => setUserPaused((p) => !p),
                    "aria-label": userPaused ? "Retomar apresenta\xE7\xE3o" : "Pausar apresenta\xE7\xE3o",
                    className: "flex h-11 w-11 items-center justify-center rounded border border-line text-gray-text hover:border-cyan hover:text-cyan transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70",
                    children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { "aria-hidden": "true", children: userPaused ? "\u25B6" : "\u23F8" })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("span", { className: "ml-auto font-mono text-xs text-gray-text", children: [
                  String(current + 1).padStart(2, "0"),
                  " /",
                  " ",
                  String(depoimentos.length).padStart(2, "0")
                ] })
              ] })
            ]
          }
        )
      ] })
    }
  );
}

// src/blocos/About.tsx
var import_framer_motion9 = require("framer-motion");
var import_jsx_runtime22 = require("react/jsx-runtime");
function About({
  eyebrow,
  titulo,
  paragrafos,
  slotLateral
}) {
  const shouldAnimate = !(0, import_framer_motion9.useReducedMotion)();
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
    "section",
    {
      id: "sobre",
      "aria-label": "Sobre",
      className: "relative overflow-hidden py-16 lg:py-24",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "grid gap-14 lg:grid-cols-[minmax(0,1.5fr)_minmax(360px,0.86fr)] lg:items-start 2xl:grid-cols-[minmax(0,1.7fr)_minmax(460px,0.8fr)]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
            import_framer_motion9.motion.div,
            {
              initial: shouldAnimate ? { opacity: 0, y: 28 } : {},
              whileInView: shouldAnimate ? { opacity: 1, y: 0 } : {},
              transition: shouldAnimate ? { duration: 0.74, ease: motionEase.expoOut } : { duration: 0 },
              viewport: shouldAnimate ? { once: true, margin: "-80px" } : void 0,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "mb-5 font-mono text-xs uppercase tracking-[0.34em] text-cyan", children: eyebrow }),
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h2", { className: "max-w-6xl text-[clamp(2.25rem,7vw,7.4rem)] font-black leading-[0.94] tracking-tight text-foreground", children: titulo }),
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]", children: paragrafos.map((paragrafo, index) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
                  import_framer_motion9.motion.div,
                  {
                    initial: shouldAnimate ? { opacity: 0, y: 18 } : {},
                    whileInView: shouldAnimate ? { opacity: 1, y: 0 } : {},
                    transition: shouldAnimate ? {
                      delay: index * 0.06,
                      duration: 0.48,
                      ease: motionEase.powerOut
                    } : { duration: 0 },
                    viewport: shouldAnimate ? { once: true, margin: "-80px" } : void 0,
                    className: "text-base leading-relaxed text-gray-text lg:text-lg",
                    children: paragrafo
                  },
                  index
                )) })
              ]
            }
          ),
          slotLateral && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
            import_framer_motion9.motion.aside,
            {
              initial: shouldAnimate ? { opacity: 0, y: 40 } : {},
              whileInView: shouldAnimate ? { opacity: 1, y: 0 } : {},
              transition: shouldAnimate ? { delay: 0.12, duration: 0.74, ease: motionEase.expoOut } : { duration: 0 },
              viewport: shouldAnimate ? { once: true, margin: "-80px" } : void 0,
              className: "rounded border border-line bg-surface font-mono lg:sticky lg:top-28",
              children: slotLateral
            }
          )
        ] }) })
      ]
    }
  );
}

// src/blocos/Contact.tsx
var import_framer_motion10 = require("framer-motion");
var import_jsx_runtime23 = require("react/jsx-runtime");
function Contact({
  eyebrow,
  titulo,
  descricao,
  cta,
  email,
  slotFormulario
}) {
  const shouldAnimate = !(0, import_framer_motion10.useReducedMotion)();
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
    "section",
    {
      id: "contato",
      "aria-label": "Iniciar projeto",
      className: "relative overflow-hidden border-t border-line py-16 lg:py-24",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
            import_framer_motion10.motion.div,
            {
              initial: shouldAnimate ? { opacity: 0, y: 24 } : {},
              whileInView: shouldAnimate ? { opacity: 1, y: 0 } : {},
              transition: shouldAnimate ? { duration: 0.7, ease: motionEase.expoOut } : { duration: 0 },
              viewport: shouldAnimate ? { once: true, margin: "-80px" } : void 0,
              className: "mb-12 max-w-2xl",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "mb-8 font-mono text-xs uppercase tracking-[0.34em] text-cyan", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { lang: "en", children: eyebrow }) }),
                /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h2", { className: "text-[clamp(2.3rem,7vw,7.8rem)] font-black leading-[0.94] tracking-tight text-foreground", children: titulo }),
                /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "mt-6 max-w-xl text-base leading-relaxed text-gray-text", children: descricao })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "grid gap-10 lg:grid-cols-[0.72fr_1.55fr] lg:items-start 2xl:grid-cols-[0.58fr_1.7fr]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
              import_framer_motion10.motion.div,
              {
                initial: shouldAnimate ? { opacity: 0, y: 28 } : {},
                whileInView: shouldAnimate ? { opacity: 1, y: 0 } : {},
                transition: shouldAnimate ? { duration: 0.64, ease: motionEase.expoOut } : { duration: 0 },
                viewport: shouldAnimate ? { once: true, margin: "-80px" } : void 0,
                className: "grid gap-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
                    "a",
                    {
                      href: cta.href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "group flex items-center gap-4 rounded border border-line bg-surface p-5 transition-colors hover:border-cyan/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "flex h-11 w-11 items-center justify-center rounded border border-line bg-background text-gray-text transition-colors group-hover:border-cyan group-hover:text-cyan", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { "aria-hidden": "true", children: "\u{1F4AC}" }) }),
                        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "font-mono text-sm text-foreground", children: cta.label }),
                          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "mt-1 text-xs text-gray-text", children: "para quando o escopo j\xE1 est\xE1 claro" })
                        ] })
                      ]
                    }
                  ),
                  email && /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
                    "a",
                    {
                      href: `mailto:${email}`,
                      className: "group flex items-center gap-4 rounded border border-line bg-surface p-5 transition-colors hover:border-cyan/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "flex h-11 w-11 items-center justify-center rounded border border-line bg-background text-gray-text transition-colors group-hover:border-cyan group-hover:text-cyan", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { "aria-hidden": "true", children: "\u2709" }) }),
                        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "font-mono text-sm text-foreground", children: email }),
                          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "mt-1 text-xs text-gray-text", children: "para materiais e projetos maiores" })
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "rounded border border-line bg-surface p-5 font-mono", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "text-[10px] uppercase tracking-[0.24em] text-gray-text", children: "contract mode" }),
                    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "mt-4 text-sm text-foreground", children: "PJ / NFS-e / remoto" }),
                    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "mt-2 text-xs leading-relaxed text-gray-text", children: "O objetivo \xE9 sair da primeira conversa com risco, escopo e pr\xF3ximo passo claros." })
                  ] })
                ]
              }
            ),
            slotFormulario && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
              import_framer_motion10.motion.div,
              {
                initial: shouldAnimate ? { opacity: 0, y: 36 } : {},
                whileInView: shouldAnimate ? { opacity: 1, y: 0 } : {},
                transition: shouldAnimate ? { delay: 0.08, duration: 0.7, ease: motionEase.expoOut } : { duration: 0 },
                viewport: shouldAnimate ? { once: true, margin: "-80px" } : void 0,
                children: slotFormulario
              }
            )
          ] })
        ] })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  About,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Contact,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  Footer,
  Hero,
  Input,
  Label,
  Logo,
  LogoAnimado,
  Navbar,
  Process,
  Projects,
  RATIO_ALTURA_LOGO,
  RATIO_AVANCO_LOGO,
  RATIO_PADDING_LOGO,
  Separator,
  Services,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Stack,
  Testimonials,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  badgeVariants,
  blinkMs,
  buttonVariants,
  cn,
  cores,
  familias,
  motionDurations,
  motionEase,
  pesos
});
//# sourceMappingURL=index.js.map