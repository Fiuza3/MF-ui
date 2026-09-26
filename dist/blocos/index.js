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

// src/blocos/index.ts
var blocos_exports = {};
__export(blocos_exports, {
  About: () => About,
  Contact: () => Contact,
  Hero: () => Hero,
  Process: () => Process,
  Projects: () => Projects,
  Services: () => Services,
  Stack: () => Stack,
  Testimonials: () => Testimonials
});
module.exports = __toCommonJS(blocos_exports);

// src/lib/link-externo.ts
var URL_ABSOLUTA = /^https?:\/\//i;
function propsDeLink(href) {
  return URL_ABSOLUTA.test(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

// src/blocos/Hero.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Hero({ eyebrow, title, description, cta, stats, slot, slotLabel = "" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "section",
    {
      id: "hero",
      "aria-label": "Introdu\xE7\xE3o",
      className: "hero-shell relative flex min-h-[100svh] overflow-hidden border-b border-line",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-noise", "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-radial", "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-scanline", "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "relative z-10 flex w-full flex-col justify-between px-5 pb-8 pt-28 sm:px-8 lg:px-10 lg:pt-32 2xl:px-14", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "grid flex-1 items-start gap-10 lg:grid-cols-[minmax(0,1.58fr)_minmax(380px,0.92fr)] lg:gap-14 2xl:grid-cols-[minmax(0,1.7fr)_minmax(460px,0.9fr)]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "relative", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mf-entrada mf-entrada-up-suave mb-7 max-w-md font-mono text-xs uppercase tracking-[0.32em] text-cyan", children: eyebrow }),
              title,
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "div",
                {
                  style: { "--mf-entrada-delay": "300ms" },
                  className: "mf-entrada mf-entrada-up mt-8 flex max-w-5xl flex-col gap-5 sm:flex-row sm:items-end sm:justify-between",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "max-w-2xl text-base leading-relaxed text-gray-text sm:text-lg", children: description }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      "a",
                      {
                        href: cta.href,
                        ...propsDeLink(cta.href),
                        className: "group inline-flex w-fit shrink-0 items-center gap-3 whitespace-nowrap rounded border border-cyan bg-cyan px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-transparent hover:text-cyan focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
                        children: [
                          cta.label,
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            "span",
                            {
                              className: "h-px w-8 bg-background transition-colors group-hover:bg-cyan",
                              "aria-hidden": "true"
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              )
            ] }),
            slot && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "relative lg:translate-y-16", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              "div",
              {
                style: { "--mf-entrada-delay": "560ms" },
                className: "mf-entrada mf-entrada-up",
                children: [
                  slotLabel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-4 -top-4 hidden font-mono text-[10px] uppercase tracking-[0.25em] text-gray-text lg:block", children: slotLabel }),
                  slot
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              style: { "--mf-entrada-delay": "500ms" },
              className: "mf-entrada mf-entrada-up mt-16 grid grid-cols-2 gap-5 border-t border-line pt-6 sm:grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] lg:mt-24",
              children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "font-mono text-3xl font-black text-foreground sm:text-4xl", children: stat.value }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-2 text-xs uppercase tracking-[0.18em] text-gray-text", children: stat.label })
              ] }, stat.label))
            }
          )
        ] })
      ]
    }
  );
}

// src/componentes/Reveal.tsx
var React = __toESM(require("react"));
var import_jsx_runtime2 = require("react/jsx-runtime");
function Reveal({
  as = "div",
  variant = "up",
  delayMs = 0,
  margin = "-70px",
  className,
  children,
  ...rest
}) {
  const ref = React.useRef(null);
  const escondido = variant === "left" ? "mf-reveal-hidden-left" : "mf-reveal-hidden";
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof window.IntersectionObserver === "undefined") return;
    el.classList.add(escondido);
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          el.classList.remove(escondido);
          el.classList.add("mf-reveal-visible");
          observer.disconnect();
        }
      },
      { rootMargin: margin }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      el.classList.remove(escondido, "mf-reveal-visible");
    };
  }, [margin, escondido]);
  const Tag = as;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    Tag,
    {
      ref,
      className,
      style: delayMs ? { "--mf-entrada-delay": `${delayMs}ms` } : void 0,
      ...rest,
      children
    }
  );
}

// src/blocos/Services.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function ServiceCard({ service, index }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    Reveal,
    {
      as: "article",
      margin: "-70px",
      delayMs: index * 80,
      className: "group relative min-h-[200px] overflow-hidden rounded border border-line bg-surface p-5 transition-colors duration-300 hover:border-cyan/60 lg:p-6",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "div",
          {
            className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            style: {
              background: "radial-gradient(circle at 24% 0%, color-mix(in srgb, var(--cyan) 8%, transparent), transparent 46%)"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "relative flex h-full flex-col justify-between gap-8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center justify-between gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "font-mono text-xs text-cyan", children: service.tag }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "font-mono text-[10px] uppercase tracking-[0.22em] text-gray-text", children: service.id })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: "mt-5 text-[clamp(1.6rem,3vw,3.2rem)] font-black leading-none tracking-tight text-foreground", children: service.title }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "mt-4 max-w-2xl text-sm leading-relaxed text-gray-text lg:text-base", children: service.description })
          ] }),
          service.motif,
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("ul", { className: "grid gap-2 sm:grid-cols-2", "aria-label": `Itens de ${service.title}`, children: service.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("li", { className: "flex items-start gap-2 text-sm text-gray-text", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "mt-0.5 font-mono text-cyan", "aria-hidden": "true", children: "/" }),
            item
          ] }, item)) })
        ] })
      ]
    }
  );
}
function Services({ eyebrow, title, description, services }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "section",
    {
      id: "servicos",
      "aria-label": "Servi\xE7os",
      className: "overflow-hidden border-t border-line py-16 lg:py-24",
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-16", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Reveal, { margin: "-60px", className: "mb-8 lg:mb-10", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "mb-4 font-mono text-xs uppercase tracking-[0.34em] text-cyan", children: eyebrow }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { className: "text-[length:var(--text-h2)] font-black leading-[0.96] tracking-tight text-foreground", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "mt-4 max-w-3xl text-base leading-relaxed text-gray-text", children: description })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3", children: services.map((service, i) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ServiceCard, { service, index: i }, service.id)) })
      ] })
    }
  );
}

// src/blocos/Projects.tsx
var import_react = require("react");
var import_lucide_react2 = require("lucide-react");

// src/primitivos/Dialog.tsx
var DialogPrimitive2 = __toESM(require("@radix-ui/react-dialog"));

// src/lib/cn.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/primitivos/OverlayClose.tsx
var DialogPrimitive = __toESM(require("@radix-ui/react-dialog"));
var import_lucide_react = require("lucide-react");
var import_jsx_runtime4 = require("react/jsx-runtime");
function OverlayClose({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react.XIcon, {})
    }
  );
}

// src/primitivos/Dialog.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function Dialog({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogPrimitive2.Root, { "data-slot": "dialog", ...props });
}
function DialogPortal({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogPrimitive2.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    DialogPrimitive2.Overlay,
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      DialogPrimitive2.Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid max-h-[calc(100dvh-2rem)] w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 overflow-y-auto rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          showCloseButton && "[&_[data-slot=dialog-header]]:px-8 sm:[&_[data-slot=dialog-header]]:pl-0",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(OverlayClose, {})
        ]
      }
    )
  ] });
}
function DialogTitle({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    DialogPrimitive2.Title,
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    DialogPrimitive2.Description,
    {
      "data-slot": "dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}

// src/blocos/Projects.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var ROTULO = "font-mono text-[10px] uppercase tracking-[0.24em] text-gray-text";
var TAG = "rounded border border-line px-2 py-1 font-mono text-xs text-gray-text";
var FOCO = "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50";
function rotuloDoFrame(project, index) {
  return [`frame ${String(index + 1).padStart(2, "0")}`, project.ano, project.categoria].filter(Boolean).join(" / ");
}
function Tags({ tags }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "flex flex-wrap gap-2", children: tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TAG, children: tag }, tag)) });
}
function Metrica({ rotulo, valor }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "border-line bg-background/50 rounded border p-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: ROTULO, children: rotulo }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-cyan mt-3 font-mono text-xl", children: valor })
  ] });
}
function CaseTecnico({
  project,
  origem
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    DialogContent,
    {
      onCloseAutoFocus: (evento) => {
        evento.preventDefault();
        origem.current?.focus();
      },
      className: "bg-surface border-line rounded p-6 sm:max-w-3xl lg:p-8",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "pr-10", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("p", { className: "text-cyan font-mono text-xs tracking-[0.28em] uppercase", children: [
            "case.log",
            project.ano ? ` / ${project.ano}` : ""
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(DialogTitle, { className: "text-foreground mt-4 max-w-2xl text-3xl leading-none font-black tracking-tight lg:text-5xl", children: project.title })
        ] }),
        project.description && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(DialogDescription, { className: "text-gray-text max-w-2xl text-base leading-relaxed", children: project.description }),
        (project.metrica || project.resultado) && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "mt-2 grid gap-4 sm:grid-cols-2", children: [
          project.metrica && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Metrica, { rotulo: "m\xE9trica", valor: project.metrica }),
          project.resultado && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "border-line bg-background/50 rounded border p-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: ROTULO, children: "resultado" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-foreground mt-3 text-sm leading-relaxed", children: project.resultado })
          ] })
        ] }),
        project.tags && project.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Tags, { tags: project.tags })
      ]
    }
  );
}
function ProjectFrame({ project, index, onOpen }) {
  const altura = project.mockup ? "min-h-[540px] sm:min-h-[620px]" : "";
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    Reveal,
    {
      as: "article",
      margin: "-80px",
      delayMs: index * 60,
      className: `project-frame group border-line bg-surface hover:border-cyan/60 flex w-[88vw] shrink-0 scroll-ml-5 flex-col justify-between rounded border p-5 transition-colors sm:w-[76vw] lg:w-[56vw] lg:p-8 xl:w-[52vw] 2xl:w-[44vw] ${altura}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "grid gap-8 lg:grid-cols-[0.9fr_1.15fr] lg:items-start", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-cyan font-mono text-xs tracking-[0.28em] uppercase", children: rotuloDoFrame(project, index) }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { className: "text-foreground mt-5 max-w-2xl text-[clamp(2.2rem,5vw,5.8rem)] leading-[0.88] font-black tracking-tight", children: project.title }),
            project.description && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-gray-text mt-6 max-w-xl text-base leading-relaxed", children: project.description })
          ] }),
          project.mockup && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            "div",
            {
              className: "project-mockup border-line bg-background/70 relative overflow-hidden rounded border p-4",
              "aria-hidden": "true",
              children: project.mockup
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(RodapeDoFrame, { project, onOpen })
      ]
    }
  );
}
function RodapeDoFrame({ project, onOpen }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "border-line mt-8 grid gap-5 border-t pt-6 md:grid-cols-[0.9fr_1fr_auto] md:items-end", children: [
    project.metrica && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: ROTULO, children: "m\xE9trica forte" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-cyan mt-2 font-mono text-xl lg:text-2xl", children: project.metrica })
    ] }),
    project.tags && project.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: `${ROTULO} mb-2`, children: "stack" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Tags, { tags: project.tags })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex flex-wrap gap-2 md:col-start-3 md:justify-end", children: [
      project.href && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
        "a",
        {
          href: project.href,
          ...propsDeLink(project.href),
          className: `border-line text-gray-text hover:border-cyan hover:text-cyan inline-flex items-center gap-1.5 rounded border px-4 py-3 font-mono text-xs font-bold tracking-[0.18em] uppercase transition-colors ${FOCO}`,
          children: [
            "ver projeto ",
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react2.ArrowUpRightIcon, { className: "size-3.5", "aria-hidden": "true" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        "button",
        {
          type: "button",
          onClick: () => onOpen(project),
          className: `border-cyan text-cyan hover:bg-cyan hover:text-background rounded border px-4 py-3 font-mono text-xs font-bold tracking-[0.18em] uppercase transition-colors ${FOCO}`,
          children: "abrir case"
        }
      )
    ] })
  ] });
}
function Projects({ eyebrow, title, description, projects }) {
  const [selected, setSelected] = (0, import_react.useState)(null);
  const origemRef = (0, import_react.useRef)(null);
  const abrir = (project) => {
    origemRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setSelected(project);
  };
  const loopedProjects = [...projects, ...projects];
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    "section",
    {
      id: "projetos",
      "aria-label": "Projetos",
      className: "border-line relative overflow-hidden border-t py-16 lg:py-24",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Reveal, { margin: "-80px", className: "mb-8 lg:mb-10", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-cyan mb-4 font-mono text-xs tracking-[0.34em] uppercase", children: eyebrow }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { className: "text-foreground text-[length:var(--text-h2)] leading-[0.96] font-black tracking-tight", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-gray-text mt-4 max-w-3xl text-base leading-relaxed", children: description })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "project-carousel relative overflow-hidden", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            "div",
            {
              role: "group",
              "aria-roledescription": "carrossel",
              "aria-label": "Sequ\xEAncia de cases",
              className: "project-carousel-track flex w-max gap-4 px-5 pb-4 sm:px-8 lg:px-10 2xl:px-14",
              children: loopedProjects.map((project, index) => {
                const isClone = index >= projects.length;
                return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                  "div",
                  {
                    "data-testid": isClone ? "project-clone" : "project-item",
                    ...isClone ? { inert: true } : {},
                    children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ProjectFrame, { project, index: index % projects.length, onOpen: abrir })
                  },
                  `${project.title}-${index}`
                );
              })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            "div",
            {
              "aria-hidden": "true",
              className: "from-background pointer-events-none absolute inset-y-0 left-0 hidden w-10 bg-gradient-to-r to-transparent lg:block 2xl:w-14"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            "div",
            {
              "aria-hidden": "true",
              className: "from-background pointer-events-none absolute inset-y-0 right-0 hidden w-32 bg-gradient-to-l to-transparent lg:block"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Dialog, { open: selected !== null, onOpenChange: (aberto) => !aberto && setSelected(null), children: selected && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CaseTecnico, { project: selected, origem: origemRef }) })
      ]
    }
  );
}

// src/blocos/Process.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function PipelineCard({ step, index }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    Reveal,
    {
      as: "article",
      margin: "-60px",
      delayMs: index * 60,
      className: "group relative flex h-full flex-col overflow-hidden rounded border border-line bg-surface p-5 transition-colors hover:border-cyan/60 lg:p-6",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "div",
          {
            className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            style: {
              background: "radial-gradient(circle at 0% 0%, color-mix(in srgb, var(--cyan) 7%, transparent), transparent 52%)"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "relative flex h-full flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "font-mono text-xs uppercase tracking-[0.28em] text-cyan", children: step.numero }),
            step.duracao && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "shrink-0 rounded border border-line px-2 py-0.5 font-mono text-[10px] text-gray-text", children: step.duracao })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: "mt-3 text-[clamp(1.25rem,2.2vw,1.75rem)] font-black leading-[1.05] tracking-tight text-foreground", children: step.title }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "mt-3 flex-1 text-sm leading-relaxed text-gray-text", children: step.description }),
          (step.commitLabel || step.commitOutput) && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "mt-4 border-t border-line pt-3 font-mono", children: [
            step.commitLabel && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { className: "truncate text-xs text-foreground", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "text-cyan", children: "$" }),
              " ",
              step.commitLabel
            ] }),
            step.commitOutput && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { className: "mt-1 truncate text-[11px] text-gray-text", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "text-cyan/60", children: ">" }),
              " ",
              step.commitOutput
            ] })
          ] })
        ] })
      ]
    }
  );
}
function Process({ eyebrow, title, description, steps }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "section",
    {
      id: "processo",
      "aria-label": "Processo de trabalho",
      className: "relative overflow-hidden border-t border-line py-16 lg:py-24",
      children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Reveal, { margin: "-80px", className: "mb-8 lg:mb-10", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "mb-4 font-mono text-xs uppercase tracking-[0.34em] text-cyan", children: eyebrow }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { className: "text-[length:var(--text-h2)] font-black leading-[0.96] tracking-tight text-foreground", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "mt-4 max-w-3xl text-base leading-relaxed text-gray-text", children: description })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(14rem,1fr))]", children: steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(PipelineCard, { step, index }, step.numero)) })
      ] })
    }
  );
}

// src/blocos/Stack.tsx
var import_react2 = require("react");
var import_jsx_runtime8 = require("react/jsx-runtime");
var ROTULOS_PADRAO = {
  camada: "layer",
  ativo: "active",
  explicar: "explain --when-to-use",
  explicacao: "uso essa camada quando ela diminui incerteza operacional, n\xE3o para preencher logo em carrossel."
};
function Stack({ eyebrow, title, description, grupos, rotulos }) {
  const [categoriaAtiva, setCategoriaAtiva] = (0, import_react2.useState)(grupos[0]?.categoria);
  const active = grupos.find((g) => g.categoria === categoriaAtiva) ?? grupos[0];
  const r = { ...ROTULOS_PADRAO, ...rotulos };
  if (!active) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "section",
    {
      id: "stack",
      "aria-label": "Mapa t\xE9cnico da stack",
      className: "relative overflow-hidden border-t border-line py-16 lg:py-24",
      children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(Reveal, { margin: "-80px", className: "mb-10 lg:mb-12", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "mb-4 font-mono text-xs uppercase tracking-[0.34em] text-cyan", children: eyebrow }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { className: "text-[length:var(--text-h2)] font-black leading-[0.96] tracking-tight text-foreground", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "mt-4 max-w-3xl text-base leading-relaxed text-gray-text", children: description })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "grid gap-6 lg:grid-cols-[1fr_1.15fr] xl:grid-cols-[0.95fr_1.25fr]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "grid content-start gap-3", children: grupos.map((grupo, index) => {
            const selected = active.categoria === grupo.categoria;
            return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
              Reveal,
              {
                as: "button",
                variant: "left",
                margin: "-80px",
                delayMs: index * 50,
                type: "button",
                onClick: () => setCategoriaAtiva(grupo.categoria),
                onMouseEnter: () => setCategoriaAtiva(grupo.categoria),
                "aria-pressed": selected,
                className: cn(
                  "group grid gap-5 rounded border p-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 sm:grid-cols-[auto_1fr]",
                  selected ? "border-cyan bg-cyan/10" : "border-line bg-surface hover:border-cyan/50"
                ),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                    "span",
                    {
                      className: cn(
                        "font-mono text-sm transition-colors",
                        selected ? "text-cyan" : "text-gray-text group-hover:text-cyan"
                      ),
                      children: String(index + 1).padStart(2, "0")
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "block text-2xl font-black tracking-tight text-foreground", children: grupo.categoria }),
                    grupo.comando && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { className: "mt-2 block font-mono text-xs text-gray-text", children: [
                      "$ ",
                      grupo.comando
                    ] })
                  ] })
                ]
              },
              grupo.categoria
            );
          }) }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "rounded border border-line bg-surface p-5 lg:p-8", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "mf-entrada mf-entrada-up-suave", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex items-start justify-between gap-6", children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("p", { className: "font-mono text-xs uppercase tracking-[0.28em] text-cyan", children: [
                  r.camada,
                  " / ",
                  active.categoria.toLowerCase()
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "mt-4 text-[clamp(2.2rem,5vw,5.8rem)] font-black leading-[0.9] tracking-tight text-foreground", children: active.categoria })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "hidden rounded border border-line px-3 py-1 font-mono text-xs text-gray-text sm:block", children: r.ativo })
            ] }),
            active.description && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "mt-6 max-w-3xl text-base leading-relaxed text-gray-text", children: active.description }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "stack-map-grid mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3", children: active.itens.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
              "div",
              {
                style: {
                  "--mf-entrada-delay": `${index * 40}ms`
                },
                className: "mf-entrada mf-entrada-up-suave group/item relative overflow-hidden rounded border border-line bg-background/55 p-4 font-mono transition-colors hover:border-cyan/60",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "relative z-10 text-sm text-foreground", children: item }),
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
            active.comando && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "mt-8 border-t border-line pt-5 font-mono", children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("p", { className: "text-sm text-foreground", children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "text-cyan", children: "$" }),
                " ",
                r.explicar,
                " ",
                active.categoria.toLowerCase()
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("p", { className: "mt-2 text-xs leading-relaxed text-gray-text", children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "text-cyan/70", children: ">" }),
                " ",
                active.explicacao ?? r.explicacao
              ] })
            ] })
          ] }, active.categoria) })
        ] })
      ] })
    }
  );
}

// src/blocos/Testimonials.tsx
var import_react4 = require("react");
var import_lucide_react3 = require("lucide-react");

// src/lib/movimento-reduzido.ts
var import_react3 = require("react");
var CONSULTA = "(prefers-reduced-motion: reduce)";
function assinar(avisar) {
  const lista = window.matchMedia(CONSULTA);
  lista.addEventListener("change", avisar);
  return () => lista.removeEventListener("change", avisar);
}
function usePrefereMovimentoReduzido() {
  return (0, import_react3.useSyncExternalStore)(
    assinar,
    () => window.matchMedia(CONSULTA).matches,
    () => false
  );
}

// src/blocos/Testimonials.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var AUTOPLAY_MS = 5e3;
var BOTAO = "flex h-11 w-11 shrink-0 items-center justify-center rounded border border-line text-gray-text transition-all hover:border-cyan hover:text-cyan focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 [&_svg]:size-4";
function useApresentacao(total) {
  const reduzido = usePrefereMovimentoReduzido();
  const [atual, setAtual] = (0, import_react4.useState)(0);
  const [emUso, setEmUso] = (0, import_react4.useState)(false);
  const [escolha, setEscolha] = (0, import_react4.useState)(null);
  const pausadoPeloUsuario = escolha ? escolha === "pausar" : reduzido;
  const tocando = !pausadoPeloUsuario && !emUso;
  const proximo = (0, import_react4.useCallback)(() => setAtual((c) => (c + 1) % total), [total]);
  const anterior = (0, import_react4.useCallback)(() => setAtual((c) => (c - 1 + total) % total), [total]);
  (0, import_react4.useEffect)(() => {
    if (!tocando) return;
    const timer = setInterval(proximo, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [tocando, proximo]);
  const alternarPausa = () => setEscolha(pausadoPeloUsuario ? "tocar" : "pausar");
  return {
    atual,
    setAtual,
    proximo,
    anterior,
    tocando,
    pausadoPeloUsuario,
    alternarPausa,
    setEmUso
  };
}
function Citacao({ depoimento }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "span",
      {
        "aria-hidden": "true",
        className: "text-cyan font-mono text-6xl leading-none opacity-20 select-none",
        children: "\u201C"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-foreground mt-2 max-w-6xl text-lg leading-relaxed lg:text-xl", children: depoimento.texto }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("footer", { className: "mt-8 flex items-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        "div",
        {
          "aria-hidden": "true",
          className: "border-line bg-surface-raised text-cyan flex h-10 w-10 shrink-0 items-center justify-center rounded border font-mono text-sm font-bold",
          children: depoimento.autor.charAt(0)
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "min-w-0", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("cite", { className: "text-foreground font-semibold not-italic", children: depoimento.autor }),
        (depoimento.papel || depoimento.empresa) && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-gray-text text-sm", children: [depoimento.papel, depoimento.empresa].filter(Boolean).join(" \xB7 ") })
      ] })
    ] })
  ] });
}
function Testimonials({ eyebrow, title, depoimentos }) {
  const apresentacao = useApresentacao(depoimentos.length);
  const { atual, tocando, setEmUso } = apresentacao;
  const depoimento = depoimentos[atual];
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "section",
    {
      id: "depoimentos",
      "aria-label": "Depoimentos de clientes",
      className: "border-line border-t py-16 lg:py-24",
      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Reveal, { margin: "-60px", className: "mb-8 lg:mb-10", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-cyan mb-4 font-mono text-xs tracking-[0.34em] uppercase", children: eyebrow }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h2", { className: "text-foreground text-[length:var(--text-h2)] leading-[0.96] font-black tracking-tight", children: title })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
          "div",
          {
            role: "region",
            "aria-label": "Depoimentos de clientes",
            "aria-roledescription": "carrossel",
            onMouseEnter: () => setEmUso(true),
            onMouseLeave: () => setEmUso(false),
            onFocus: () => setEmUso(true),
            onBlur: (e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) setEmUso(false);
            },
            className: "relative",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { "aria-live": tocando ? "off" : "polite", "aria-atomic": "true", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                Reveal,
                {
                  as: "blockquote",
                  className: "border-line bg-surface rounded border p-6 sm:p-10 lg:p-14",
                  children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Citacao, { depoimento })
                },
                `${depoimento.autor}-${atual}`
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Controles, { ...apresentacao, total: depoimentos.length })
            ]
          }
        )
      ] })
    }
  );
}
function Controles({
  atual,
  setAtual,
  proximo,
  anterior,
  pausadoPeloUsuario,
  alternarPausa,
  total
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "mt-6 flex flex-wrap items-center gap-x-4 gap-y-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { type: "button", onClick: anterior, "aria-label": "Depoimento anterior", className: BOTAO, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.ChevronLeftIcon, { "aria-hidden": "true" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { type: "button", onClick: proximo, "aria-label": "Pr\xF3ximo depoimento", className: BOTAO, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.ChevronRightIcon, { "aria-hidden": "true" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "flex gap-1.5", role: "group", "aria-label": "Navegar depoimentos", children: Array.from({ length: total }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "button",
      {
        type: "button",
        "aria-current": i === atual,
        "aria-label": `Ir para depoimento ${i + 1}`,
        onClick: () => setAtual(i),
        className: "focus-visible:ring-ring/50 flex h-11 w-11 items-center justify-center rounded focus-visible:ring-[3px] focus-visible:outline-none",
        children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "span",
          {
            className: `block rounded-full transition-all duration-300 ${i === atual ? "bg-cyan h-1 w-6" : "bg-gray-text/50 hover:bg-gray-text h-1.5 w-1.5"}`
          }
        )
      },
      i
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "button",
      {
        type: "button",
        onClick: alternarPausa,
        "aria-label": pausadoPeloUsuario ? "Retomar apresenta\xE7\xE3o" : "Pausar apresenta\xE7\xE3o",
        className: BOTAO,
        children: pausadoPeloUsuario ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.PlayIcon, { "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.PauseIcon, { "aria-hidden": "true" })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { className: "text-gray-text ml-auto shrink-0 font-mono text-xs whitespace-nowrap", children: [
      String(atual + 1).padStart(2, "0"),
      " / ",
      String(total).padStart(2, "0")
    ] })
  ] });
}

// src/blocos/About.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
function About({ eyebrow, title, paragrafos, slotLateral }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("section", { id: "sobre", "aria-label": "Sobre", className: "relative overflow-hidden py-16 lg:py-24", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "grid gap-14 lg:grid-cols-[minmax(0,1.5fr)_minmax(360px,0.86fr)] lg:items-start 2xl:grid-cols-[minmax(0,1.7fr)_minmax(460px,0.8fr)]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(Reveal, { as: "div", margin: "-80px", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "mb-5 font-mono text-xs uppercase tracking-[0.34em] text-cyan", children: eyebrow }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { className: "text-[length:var(--text-h2)] font-black leading-[0.94] tracking-tight text-foreground", children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]", children: paragrafos.map((paragrafo, index) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          Reveal,
          {
            as: "div",
            margin: "-80px",
            delayMs: index * 60,
            className: "text-base leading-relaxed text-gray-text lg:text-lg",
            children: paragrafo
          },
          index
        )) })
      ] }),
      slotLateral && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        Reveal,
        {
          as: "aside",
          margin: "-80px",
          delayMs: 120,
          className: "rounded border border-line bg-surface font-mono lg:sticky lg:top-28",
          children: slotLateral
        }
      )
    ] }) })
  ] });
}

// src/blocos/Contact.tsx
var import_lucide_react4 = require("lucide-react");
var import_jsx_runtime11 = require("react/jsx-runtime");
var ROTULOS_PADRAO2 = {
  legendaCta: "para quando o escopo j\xE1 est\xE1 claro",
  legendaEmail: "para materiais e projetos maiores",
  modo: "contract mode",
  modoValor: "PJ / NFS-e / remoto",
  modoDescricao: "O objetivo \xE9 sair da primeira conversa com risco, escopo e pr\xF3ximo passo claros."
};
function Contact({
  eyebrow,
  title,
  description,
  cta,
  email,
  slotFormulario,
  rotulos
}) {
  const r = { ...ROTULOS_PADRAO2, ...rotulos };
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    "section",
    {
      id: "contato",
      "aria-label": "Iniciar projeto",
      className: "relative overflow-hidden border-t border-line py-16 lg:py-24",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Reveal, { as: "div", margin: "-80px", className: "mb-10 lg:mb-12", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "mb-4 font-mono text-xs uppercase tracking-[0.34em] text-cyan", children: eyebrow }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: "text-[length:var(--text-h2)] font-black leading-[0.96] tracking-tight text-foreground", children: title }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "mt-4 max-w-3xl text-base leading-relaxed text-gray-text", children: description })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.55fr)] lg:items-start 2xl:grid-cols-[minmax(0,0.58fr)_minmax(0,1.7fr)]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Reveal, { as: "div", margin: "-80px", className: "grid min-w-0 gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
                "a",
                {
                  href: cta.href,
                  ...propsDeLink(cta.href),
                  className: "group flex items-center gap-4 rounded border border-line bg-surface p-5 transition-colors hover:border-cyan/60 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded border border-line bg-background text-gray-text transition-colors group-hover:border-cyan group-hover:text-cyan", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react4.MessageCircleIcon, { className: "size-4", "aria-hidden": "true" }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "font-mono text-sm text-foreground", children: cta.label }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "mt-1 text-xs text-gray-text", children: r.legendaCta })
                    ] })
                  ]
                }
              ),
              email && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
                "a",
                {
                  href: `mailto:${email}`,
                  className: "group flex items-center gap-4 rounded border border-line bg-surface p-5 transition-colors hover:border-cyan/60 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded border border-line bg-background text-gray-text transition-colors group-hover:border-cyan group-hover:text-cyan", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react4.MailIcon, { className: "size-4", "aria-hidden": "true" }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "font-mono text-sm text-foreground [overflow-wrap:anywhere]", children: email }),
                      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "mt-1 text-xs text-gray-text", children: r.legendaEmail })
                    ] })
                  ]
                }
              ),
              r.modoValor && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "rounded border border-line bg-surface p-5 font-mono", children: [
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-[10px] uppercase tracking-[0.24em] text-gray-text", children: r.modo }),
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "mt-4 text-sm text-foreground", children: r.modoValor }),
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "mt-2 text-xs leading-relaxed text-gray-text", children: r.modoDescricao })
              ] })
            ] }),
            slotFormulario && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Reveal, { as: "div", margin: "-80px", delayMs: 80, className: "min-w-0", children: slotFormulario })
          ] })
        ] })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  About,
  Contact,
  Hero,
  Process,
  Projects,
  Services,
  Stack,
  Testimonials
});
//# sourceMappingURL=index.js.map