import {
  About,
  Contact,
  Hero,
  Process,
  Projects,
  Services,
  Stack,
  Testimonials,
  blinkMs,
  motionDurations,
  motionEase
} from "./chunk-DFPWMPLS.mjs";
import {
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
  Input,
  Label,
  Separator,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  badgeVariants,
  buttonVariants
} from "./chunk-I4NYC33I.mjs";
import {
  cn
} from "./chunk-TE62FXIV.mjs";
import {
  cores,
  familias,
  pesos
} from "./chunk-Z5TNI3SI.mjs";

// src/componentes/Logo.tsx
import { jsx, jsxs } from "react/jsx-runtime";
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
  const textoBase = {
    dominantBaseline: "central",
    textAnchor: "middle",
    fontFamily: familias.mono,
    fontWeight: 700,
    fontSize: tamanho,
    fill: cor,
    y: altura / 2
  };
  const centro = (slot) => padX + cw * slot + cw / 2;
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      role: "img",
      "aria-label": "MF Desenvolvimento",
      viewBox: `0 0 ${larguraTotal} ${altura}`,
      height: altura,
      style: { width: "auto", overflow: "visible" },
      xmlns: "http://www.w3.org/2000/svg",
      className,
      children: [
        /* @__PURE__ */ jsx("text", { ...textoBase, x: centro(0), fillOpacity: opColchetes, children: "<" }),
        /* @__PURE__ */ jsx("text", { ...textoBase, x: centro(1), children: "M" }),
        /* @__PURE__ */ jsx("text", { ...textoBase, x: centro(2), children: "F" }),
        /* @__PURE__ */ jsx("text", { ...textoBase, x: centro(3), fillOpacity: opColchetes, children: "/" }),
        /* @__PURE__ */ jsx("text", { ...textoBase, x: centro(4), fillOpacity: opColchetes, children: ">" })
      ]
    }
  );
}

// src/componentes/LogoAnimado.tsx
import { motion, useReducedMotion } from "framer-motion";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
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
  const reduzido = useReducedMotion();
  const cw = tamanho * RATIO_AVANCO_LOGO;
  const altura = tamanho * RATIO_ALTURA_LOGO;
  const padX = tamanho * RATIO_PADDING_LOGO;
  const larguraTotal = padX + cw * 5;
  const opColchetes = opacidadeColchetes ?? (compacto ? 0.28 : 0.58);
  const base = {
    dominantBaseline: "central",
    textAnchor: "middle",
    fontFamily: familias.mono,
    fontWeight: 700,
    fontSize: tamanho,
    fill: cor,
    y: altura / 2
  };
  const centro = (slot) => padX + cw * slot + cw / 2;
  const entrar = (delay) => reduzido ? {} : {
    initial: { opacity: 0, y: 5 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.42, ease: SUAVE }
  };
  const svg = /* @__PURE__ */ jsxs2(
    "svg",
    {
      role: "img",
      "aria-label": label,
      viewBox: `0 0 ${larguraTotal} ${altura}`,
      height: altura,
      style: { width: "auto", overflow: "visible" },
      xmlns: "http://www.w3.org/2000/svg",
      className: `transition-[filter] duration-300 hover:[filter:drop-shadow(0_0_9px_var(--cyan-glow))] ${className ?? ""}`,
      children: [
        /* @__PURE__ */ jsx2(motion.text, { ...base, ...entrar(0), x: centro(0), fillOpacity: opColchetes, children: "<" }),
        /* @__PURE__ */ jsx2(motion.text, { ...base, ...entrar(0.08), x: centro(1), children: "M" }),
        /* @__PURE__ */ jsx2(motion.text, { ...base, ...entrar(0.1), x: centro(2), children: "F" }),
        /* @__PURE__ */ jsx2(motion.text, { ...base, ...entrar(0.16), x: centro(3), fillOpacity: opColchetes, children: "/" }),
        /* @__PURE__ */ jsx2(motion.text, { ...base, ...entrar(0.18), x: centro(4), fillOpacity: opColchetes, children: ">" })
      ]
    }
  );
  if (onClick) {
    return /* @__PURE__ */ jsxs2(
      "button",
      {
        type: "button",
        "aria-label": label,
        onClick,
        className: "group inline-flex items-center rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-cyan/70",
        children: [
          /* @__PURE__ */ jsx2("span", { className: "sr-only", children: label }),
          svg
        ]
      }
    );
  }
  return svg;
}

// src/componentes/Navbar.tsx
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion as motion2 } from "framer-motion";
import { Fragment, jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function Navbar({
  links = [],
  ctaHref,
  ctaLabel = "Fale comigo",
  onLogoClick
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs3(Fragment, { children: [
    /* @__PURE__ */ jsx3("header", { className: navClass, children: /* @__PURE__ */ jsxs3("div", { className: "flex w-full items-center justify-between px-5 py-4 sm:px-8 lg:px-10", children: [
      /* @__PURE__ */ jsx3(
        LogoAnimado,
        {
          compacto: isScrolled,
          onClick: onLogoClick ?? (() => window.scrollTo({ top: 0, behavior: "smooth" })),
          label: "Ir para o topo"
        }
      ),
      /* @__PURE__ */ jsxs3("nav", { "aria-label": "Navega\xE7\xE3o principal", className: "hidden md:flex items-center gap-8", children: [
        links.map((link) => /* @__PURE__ */ jsx3(
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
        ctaHref && /* @__PURE__ */ jsx3(
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
      /* @__PURE__ */ jsxs3(
        "button",
        {
          ref: hamburgerRef,
          "aria-label": menuOpen ? "Fechar menu" : "Abrir menu",
          "aria-expanded": menuOpen,
          onClick: () => setMenuOpen(!menuOpen),
          className: "flex flex-col gap-1.5 rounded p-2 md:hidden",
          children: [
            /* @__PURE__ */ jsx3("span", { className: `block h-px w-6 bg-[var(--foreground)] transition-all ${menuOpen ? "translate-y-2 rotate-45" : ""}` }),
            /* @__PURE__ */ jsx3("span", { className: `block h-px w-6 bg-[var(--foreground)] transition-all ${menuOpen ? "opacity-0" : ""}` }),
            /* @__PURE__ */ jsx3("span", { className: `block h-px w-6 bg-[var(--foreground)] transition-all ${menuOpen ? "-translate-y-2 -rotate-45" : ""}` })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx3(AnimatePresence, { children: menuOpen && /* @__PURE__ */ jsx3(
      motion2.div,
      {
        ref: menuRef,
        initial: { opacity: 0, y: -16 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -16 },
        transition: { duration: 0.2 },
        className: "fixed inset-x-0 top-[65px] z-40 border-b border-[var(--line)] bg-[var(--background)]/95 backdrop-blur-md md:hidden",
        children: /* @__PURE__ */ jsxs3("nav", { "aria-label": "Menu mobile", className: "flex flex-col gap-1 px-6 py-6", children: [
          links.map((link) => /* @__PURE__ */ jsx3(
            "a",
            {
              href: link.href,
              onClick: () => setMenuOpen(false),
              className: "rounded py-2 font-mono text-sm text-[var(--gray-text)] hover:text-[var(--foreground)] transition-colors",
              children: link.label
            },
            link.href
          )),
          ctaHref && /* @__PURE__ */ jsx3(
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
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
function Footer({
  links = [],
  email,
  localizacao,
  nomeEmpresa = "MF Desenvolvimento",
  onLogoClick
}) {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxs4(
    "footer",
    {
      className: "relative overflow-hidden border-t border-[var(--line)] py-16 lg:py-24",
      "aria-label": "Rodap\xE9 do site",
      children: [
        /* @__PURE__ */ jsx4("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--cyan)]/60 to-transparent" }),
        /* @__PURE__ */ jsx4("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: /* @__PURE__ */ jsxs4("div", { className: "grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end", children: [
          /* @__PURE__ */ jsxs4("div", { children: [
            /* @__PURE__ */ jsx4("div", { className: "mb-8", children: /* @__PURE__ */ jsx4(
              LogoAnimado,
              {
                label: "Voltar ao topo",
                onClick: onLogoClick ?? (() => window.scrollTo({ top: 0, behavior: "smooth" }))
              }
            ) }),
            /* @__PURE__ */ jsx4(
              "p",
              {
                "aria-hidden": "true",
                className: "select-none font-mono text-[clamp(5rem,24vw,24rem)] font-black leading-[0.76] tracking-tighter text-[var(--cyan)]/10",
                children: "<MF/>"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs4("div", { className: "grid gap-8 font-mono", children: [
            (email || localizacao) && /* @__PURE__ */ jsxs4("div", { className: "rounded border border-[var(--line)] bg-[var(--surface)] p-5", children: [
              /* @__PURE__ */ jsx4("p", { className: "text-[10px] uppercase tracking-[0.28em] text-[var(--gray-text)]", children: "runtime summary" }),
              /* @__PURE__ */ jsxs4("div", { className: "mt-5 grid gap-3 text-sm", children: [
                localizacao && /* @__PURE__ */ jsxs4("p", { className: "flex items-center justify-between gap-4 border-b border-[var(--line)] pb-2", children: [
                  /* @__PURE__ */ jsx4("span", { className: "text-[var(--gray-text)]", children: "location" }),
                  /* @__PURE__ */ jsx4("span", { className: "text-[var(--foreground)]", children: localizacao })
                ] }),
                email && /* @__PURE__ */ jsxs4("p", { className: "flex items-center justify-between gap-4", children: [
                  /* @__PURE__ */ jsx4("span", { className: "text-[var(--gray-text)]", children: "contact" }),
                  /* @__PURE__ */ jsx4(
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
            links.length > 0 && /* @__PURE__ */ jsx4("nav", { "aria-label": "Links do rodap\xE9", className: "flex flex-wrap gap-3", children: links.map((link) => /* @__PURE__ */ jsx4(
              "a",
              {
                href: link.href,
                className: "rounded border border-[var(--line)] px-3 py-2 text-xs text-[var(--gray-text)] transition-colors hover:border-[var(--cyan)]/60 hover:text-[var(--foreground)]",
                children: link.label
              },
              link.href
            )) }),
            /* @__PURE__ */ jsxs4("div", { className: "flex flex-col gap-3 border-t border-[var(--line)] pt-6 text-xs text-[var(--gray-text)] sm:flex-row sm:items-center sm:justify-between", children: [
              /* @__PURE__ */ jsxs4("p", { children: [
                "\xA9 ",
                year,
                " ",
                nomeEmpresa
              ] }),
              /* @__PURE__ */ jsxs4("p", { children: [
                /* @__PURE__ */ jsx4("span", { className: "text-[var(--cyan)]", children: "$" }),
                " process.exit(0)"
              ] })
            ] })
          ] })
        ] }) })
      ]
    }
  );
}
export {
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
};
//# sourceMappingURL=index.mjs.map