'use client'

import {
  About,
  Contact,
  Hero,
  Process,
  Projects,
  Reveal,
  Services,
  Stack,
  Testimonials,
  propsDeLink
} from "./chunk-XZIMKAVG.mjs";
import {
  AppShell,
  CopyField,
  DataTable,
  EmptyState,
  FormField,
  PageHeader,
  StatCard
} from "./chunk-UR2UXN57.mjs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AnimatedIcon,
  Badge,
  Checkbox,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Separator,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  ToastAction,
  ToastClose,
  ToastComponentProvider,
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  badgeVariants,
  toastVariants,
  useToast
} from "./chunk-JFVZUKHL.mjs";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger
} from "./chunk-65233P6I.mjs";
import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Pagination,
  PaginationContent,
  PaginationControl,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Skeleton,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  buttonVariants
} from "./chunk-NNHV4ONZ.mjs";
import {
  cn
} from "./chunk-ZTAXVNYF.mjs";
import {
  cores,
  curvas,
  duracoes,
  familias,
  pesos,
  tokensDeCor,
  tokensDeMotion
} from "./chunk-IVHAI5QT.mjs";

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
  return /* @__PURE__ */ jsx(
    "svg",
    {
      role: "img",
      "aria-label": "MF Desenvolvimento",
      viewBox: `0 0 ${larguraTotal} ${altura}`,
      height: altura,
      style: { width: "auto", overflow: "visible" },
      xmlns: "http://www.w3.org/2000/svg",
      className,
      children: /* @__PURE__ */ jsxs(
        "text",
        {
          x: padX,
          y: altura / 2,
          dominantBaseline: "central",
          fontFamily: familias.logo,
          fontWeight: 700,
          fontSize: tamanho,
          fill: cor,
          children: [
            /* @__PURE__ */ jsx("tspan", { fillOpacity: opColchetes, children: "<" }),
            /* @__PURE__ */ jsx("tspan", { children: "MF" }),
            /* @__PURE__ */ jsx("tspan", { fillOpacity: opColchetes, children: "/>" })
          ]
        }
      )
    }
  );
}

// src/componentes/LogoAnimado.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var MARCA = "MF Desenvolvimento";
function LogoAnimado({
  tamanho = 24,
  cor = "var(--cyan)",
  opacidadeColchetes,
  compacto = false,
  onClick,
  label = MARCA,
  className
}) {
  const cw = tamanho * RATIO_AVANCO_LOGO;
  const altura = tamanho * RATIO_ALTURA_LOGO;
  const padX = tamanho * RATIO_PADDING_LOGO;
  const larguraTotal = padX + cw * 5;
  const opColchetes = opacidadeColchetes ?? (compacto ? 0.28 : 0.58);
  const svg = /* @__PURE__ */ jsx2(
    "svg",
    {
      role: "img",
      "aria-label": label,
      viewBox: `0 0 ${larguraTotal} ${altura}`,
      height: altura,
      style: { width: "auto", overflow: "visible" },
      xmlns: "http://www.w3.org/2000/svg",
      className: `transition-[filter] duration-300 ${onClick ? "group-hover/logo:[filter:drop-shadow(0_0_9px_var(--cyan-glow))]" : ""} ${className ?? ""}`,
      children: /* @__PURE__ */ jsxs2(
        "text",
        {
          className: "mf-entrada mf-entrada-fade",
          x: padX,
          y: altura / 2,
          dominantBaseline: "central",
          fontFamily: familias.logo,
          fontWeight: 700,
          fontSize: tamanho,
          fill: cor,
          children: [
            /* @__PURE__ */ jsx2("tspan", { fillOpacity: opColchetes, children: "<" }),
            /* @__PURE__ */ jsx2("tspan", { children: "MF" }),
            /* @__PURE__ */ jsx2("tspan", { fillOpacity: opColchetes, children: "/>" })
          ]
        }
      )
    }
  );
  if (onClick) {
    return /* @__PURE__ */ jsx2(
      "button",
      {
        type: "button",
        "aria-label": label === MARCA ? MARCA : `${label} \u2014 ${MARCA}`,
        onClick,
        className: "group/logo inline-flex items-center rounded-sm outline-none focus-visible:ring-[3px] focus-visible:ring-ring",
        children: svg
      }
    );
  }
  return svg;
}

// src/componentes/Navbar.tsx
import { useEffect, useId, useRef, useState } from "react";

// src/lib/comportamento-de-scroll.ts
function comportamentoDeScroll() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

// src/componentes/Navbar.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var FOCO = "focus-visible:ring-ring focus-visible:ring-[3px] focus-visible:outline-none";
function propsDoLinkDeMenu(link) {
  return link.externo ? { target: "_blank", rel: "noopener noreferrer" } : {};
}
function Navbar({
  links = [],
  ctaHref,
  ctaLabel = "Fale comigo",
  acoes,
  logoLabel = "Ir para o topo",
  onLogoClick
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const hamburgerRef = useRef(null);
  const menuId = useId();
  useScrollado(setIsScrolled);
  useFecharMenu({ aberto: menuOpen, setAberto: setMenuOpen, headerRef, hamburgerRef });
  return /* @__PURE__ */ jsxs3(
    "header",
    {
      ref: headerRef,
      className: `fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${isScrolled || menuOpen ? "border-line bg-background/90 border-b backdrop-blur-md" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxs3("div", { className: "flex w-full items-center justify-between px-5 py-4 sm:px-8 lg:px-10", children: [
          /* @__PURE__ */ jsx3(
            LogoAnimado,
            {
              compacto: isScrolled,
              onClick: onLogoClick ?? (() => window.scrollTo({ top: 0, behavior: comportamentoDeScroll() })),
              label: logoLabel
            }
          ),
          /* @__PURE__ */ jsx3(NavDesktop, { links, ctaHref, ctaLabel, acoes }),
          /* @__PURE__ */ jsx3(
            Hamburguer,
            {
              ref: hamburgerRef,
              aberto: menuOpen,
              controla: menuId,
              alternar: () => setMenuOpen(!menuOpen)
            }
          )
        ] }),
        menuOpen && /* @__PURE__ */ jsx3(
          NavMobile,
          {
            id: menuId,
            links,
            ctaHref,
            ctaLabel,
            acoes,
            fechar: () => setMenuOpen(false)
          }
        )
      ]
    }
  );
}
function useScrollado(setIsScrolled) {
  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [setIsScrolled]);
}
function useFecharMenu({ aberto, setAberto, headerRef, hamburgerRef }) {
  useEffect(() => {
    if (!aberto) return;
    const fechar = () => setAberto(false);
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      fechar();
      hamburgerRef.current?.focus();
    };
    const onPointer = (e) => {
      if (e.target instanceof Node && !headerRef.current?.contains(e.target)) fechar();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [aberto, setAberto, headerRef, hamburgerRef]);
}
function NavDesktop({ links, ctaHref, ctaLabel, acoes }) {
  return /* @__PURE__ */ jsxs3("nav", { "aria-label": "Navega\xE7\xE3o principal", className: "hidden items-center gap-8 md:flex", children: [
    links.map((link) => /* @__PURE__ */ jsx3(
      "a",
      {
        href: link.href,
        ...propsDoLinkDeMenu(link),
        className: `text-gray-text hover:text-foreground rounded px-1 py-0.5 font-mono text-sm tracking-wide transition-colors ${FOCO}`,
        children: link.label
      },
      link.href
    )),
    acoes && /* @__PURE__ */ jsx3("div", { className: "flex items-center gap-2", children: acoes }),
    ctaHref && /* @__PURE__ */ jsx3(
      "a",
      {
        href: ctaHref,
        ...propsDeLink(ctaHref),
        className: `border-cyan text-cyan hover:bg-cyan hover:text-background ml-2 rounded border px-4 py-1.5 font-mono text-sm transition-all duration-200 ${FOCO}`,
        children: ctaLabel
      }
    )
  ] });
}
function NavMobile({
  id,
  links,
  ctaHref,
  ctaLabel,
  acoes,
  fechar
}) {
  return /* @__PURE__ */ jsx3("div", { className: "mf-entrada mf-entrada-down border-line bg-background absolute inset-x-0 top-full border-b md:hidden", children: /* @__PURE__ */ jsxs3("nav", { id, "aria-label": "Menu mobile", className: "flex flex-col gap-1 px-6 py-6", children: [
    links.map((link) => /* @__PURE__ */ jsx3(
      "a",
      {
        href: link.href,
        ...propsDoLinkDeMenu(link),
        onClick: fechar,
        className: `text-gray-text hover:text-foreground flex min-h-11 items-center rounded py-2 font-mono text-sm transition-colors ${FOCO}`,
        children: link.label
      },
      link.href
    )),
    ctaHref && /* @__PURE__ */ jsx3(
      "a",
      {
        href: ctaHref,
        ...propsDeLink(ctaHref),
        onClick: fechar,
        className: `border-cyan text-cyan hover:bg-cyan hover:text-background mt-4 flex min-h-11 items-center justify-center rounded border px-4 py-2 text-center font-mono text-sm transition-all ${FOCO}`,
        children: ctaLabel
      }
    ),
    acoes && /* @__PURE__ */ jsx3("div", { className: "mt-4 flex items-center gap-2", children: acoes })
  ] }) });
}
function Hamburguer({ ref, aberto, controla, alternar }) {
  const barra = "bg-foreground block h-px w-6 transition-all";
  return /* @__PURE__ */ jsxs3(
    "button",
    {
      ref,
      type: "button",
      "aria-label": aberto ? "Fechar menu" : "Abrir menu",
      "aria-expanded": aberto,
      "aria-controls": controla,
      onClick: alternar,
      className: `flex size-11 flex-col items-center justify-center gap-1.5 rounded md:hidden ${FOCO}`,
      children: [
        /* @__PURE__ */ jsx3("span", { className: `${barra} ${aberto ? "translate-y-[7px] rotate-45" : ""}` }),
        /* @__PURE__ */ jsx3("span", { className: `${barra} ${aberto ? "opacity-0" : ""}` }),
        /* @__PURE__ */ jsx3("span", { className: `${barra} ${aberto ? "-translate-y-[7px] -rotate-45" : ""}` })
      ]
    }
  );
}

// src/componentes/Footer.tsx
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var ROTULOS_PADRAO = {
  resumo: "runtime summary",
  local: "location",
  cnpj: "cnpj",
  contato: "contact",
  saida: "process.exit(0)"
};
function Footer({
  links = [],
  email,
  localizacao,
  cnpj,
  nomeEmpresa = "MF Desenvolvimento",
  onLogoClick,
  rotulos
}) {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const r = { ...ROTULOS_PADRAO, ...rotulos };
  return /* @__PURE__ */ jsxs4(
    "footer",
    {
      className: "relative overflow-hidden border-t border-line py-16 lg:py-24",
      "aria-label": "Rodap\xE9 do site",
      children: [
        /* @__PURE__ */ jsx4("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" }),
        /* @__PURE__ */ jsx4("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: /* @__PURE__ */ jsxs4("div", { className: "grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:items-end", children: [
          /* @__PURE__ */ jsxs4("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsx4("div", { className: "mb-8", children: /* @__PURE__ */ jsx4(
              LogoAnimado,
              {
                label: "Voltar ao topo",
                onClick: onLogoClick ?? (() => window.scrollTo({ top: 0, behavior: comportamentoDeScroll() }))
              }
            ) }),
            /* @__PURE__ */ jsx4(
              "svg",
              {
                "aria-hidden": "true",
                focusable: "false",
                overflow: "visible",
                viewBox: "0 0 280 90",
                className: "w-full max-w-[67.2rem] select-none",
                children: /* @__PURE__ */ jsx4(
                  "text",
                  {
                    x: "0",
                    y: "77",
                    className: "fill-cyan/10 font-mono font-black",
                    fontSize: "100",
                    letterSpacing: "-5",
                    children: "<MF/>"
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ jsxs4("div", { className: "grid min-w-0 gap-8 font-mono", children: [
            (email || localizacao || cnpj) && /* @__PURE__ */ jsxs4("div", { className: "rounded border border-line bg-surface p-5", children: [
              /* @__PURE__ */ jsx4("p", { className: "text-xs uppercase tracking-[0.2em] text-gray-text", children: r.resumo }),
              /* @__PURE__ */ jsxs4("div", { className: "mt-5 grid gap-3 text-sm", children: [
                localizacao && /* @__PURE__ */ jsxs4("p", { className: "flex items-baseline justify-between gap-4 border-b border-line pb-2", children: [
                  /* @__PURE__ */ jsx4("span", { className: "text-gray-text shrink-0", children: r.local }),
                  /* @__PURE__ */ jsx4("span", { className: "text-foreground min-w-0 text-right [overflow-wrap:anywhere]", children: localizacao })
                ] }),
                cnpj && /* @__PURE__ */ jsxs4("p", { className: "flex items-baseline justify-between gap-4 border-b border-line pb-2", children: [
                  /* @__PURE__ */ jsx4("span", { className: "text-gray-text shrink-0", children: r.cnpj }),
                  /* @__PURE__ */ jsx4("span", { className: "text-foreground min-w-0 text-right [overflow-wrap:anywhere]", children: cnpj })
                ] }),
                email && /* @__PURE__ */ jsxs4("p", { className: "flex items-baseline justify-between gap-4", children: [
                  /* @__PURE__ */ jsx4("span", { className: "text-gray-text shrink-0", children: r.contato }),
                  /* @__PURE__ */ jsx4(
                    "a",
                    {
                      href: `mailto:${email}`,
                      className: "text-cyan hover:text-foreground focus-visible:ring-ring min-w-0 rounded-sm text-right [overflow-wrap:anywhere] focus-visible:ring-[3px] focus-visible:outline-none",
                      children: email
                    }
                  )
                ] })
              ] })
            ] }),
            links.length > 0 && /* @__PURE__ */ jsx4("nav", { "aria-label": "Links do rodap\xE9", className: "flex flex-wrap gap-x-3 gap-y-1.5", children: links.map((link) => /* @__PURE__ */ jsx4(
              "a",
              {
                href: link.href,
                className: "border-line text-gray-text hover:border-cyan/60 hover:text-foreground focus-visible:ring-ring inline-flex min-h-11 items-center rounded border px-3 py-2 text-xs transition-colors focus-visible:ring-[3px] focus-visible:outline-none",
                children: link.label
              },
              link.href
            )) }),
            /* @__PURE__ */ jsxs4("div", { className: "flex flex-col gap-3 border-line text-gray-text border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between", children: [
              /* @__PURE__ */ jsxs4("p", { children: [
                "\xA9 ",
                year,
                " ",
                nomeEmpresa
              ] }),
              /* @__PURE__ */ jsxs4("p", { children: [
                /* @__PURE__ */ jsx4("span", { className: "text-cyan", children: "$" }),
                " ",
                r.saida
              ] })
            ] })
          ] })
        ] }) })
      ]
    }
  );
}

// src/componentes/NodeNetwork.tsx
import * as React from "react";

// src/lib/token.ts
function lerToken(el, token, fallback) {
  const estilo = getComputedStyle(el);
  const valor = estilo.getPropertyValue(token).trim();
  if (valor) return valor;
  if (fallback) return fallback;
  return estilo.color?.trim() || "transparent";
}

// src/componentes/NodeNetwork.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
function lerCor(el, override) {
  return override ?? lerToken(el, tokensDeCor.primaria);
}
function NodeNetwork({
  count = 52,
  maxDistance = 160,
  speed = 0.45,
  color,
  className
}) {
  const canvasRef = React.useRef(null);
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const el = canvas;
    const ctx = context;
    const reduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let corAtual = lerCor(el, color);
    let largura = 0;
    let altura = 0;
    let animId = 0;
    const nodes = [];
    function resize() {
      const dpr = window.devicePixelRatio || 1;
      largura = el.offsetWidth;
      altura = el.offsetHeight;
      el.width = largura * dpr;
      el.height = altura * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes.length = 0;
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * largura,
          y: Math.random() * altura,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed
        });
      }
      if (reduzido) desenhar();
    }
    function mover() {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0) n.x = largura;
        else if (n.x > largura) n.x = 0;
        if (n.y < 0) n.y = altura;
        else if (n.y > altura) n.y = 0;
      }
    }
    function desenharLigacoes() {
      ctx.strokeStyle = corAtual;
      ctx.lineWidth = 0.8;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist >= maxDistance) continue;
          ctx.globalAlpha = (1 - dist / maxDistance) * 0.28;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }
    function desenharNos() {
      ctx.fillStyle = corAtual;
      ctx.globalAlpha = 0.55;
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
    function desenhar() {
      ctx.clearRect(0, 0, largura, altura);
      desenharLigacoes();
      desenharNos();
    }
    function tick() {
      mover();
      desenhar();
      animId = requestAnimationFrame(tick);
    }
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    resize();
    const mo = new MutationObserver(() => {
      corAtual = lerCor(el, color);
      if (reduzido) desenhar();
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    if (!reduzido) animId = requestAnimationFrame(tick);
    return () => {
      ro.disconnect();
      mo.disconnect();
      if (animId) cancelAnimationFrame(animId);
    };
  }, [count, maxDistance, speed, color]);
  return /* @__PURE__ */ jsx5(
    "canvas",
    {
      ref: canvasRef,
      "aria-hidden": "true",
      className,
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none"
      }
    }
  );
}
export {
  About,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AnimatedIcon,
  AppShell,
  Badge,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Contact,
  CopyField,
  DataTable,
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
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  EmptyState,
  Footer,
  FormField,
  Hero,
  Input,
  Label,
  Logo,
  LogoAnimado,
  Navbar,
  NodeNetwork,
  PageHeader,
  Pagination,
  PaginationContent,
  PaginationControl,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Process,
  Projects,
  RATIO_ALTURA_LOGO,
  RATIO_AVANCO_LOGO,
  RATIO_PADDING_LOGO,
  Reveal,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
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
  Skeleton,
  Stack,
  StatCard,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Testimonials,
  Textarea,
  ToastRoot as Toast,
  ToastAction,
  ToastClose,
  ToastComponentProvider,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  badgeVariants,
  buttonVariants,
  cn,
  cores,
  curvas,
  duracoes,
  familias,
  lerToken,
  pesos,
  toastVariants,
  tokensDeCor,
  tokensDeMotion,
  useToast
};
//# sourceMappingURL=index.mjs.map