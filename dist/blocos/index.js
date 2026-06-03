"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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

// src/blocos/Hero.tsx
var import_framer_motion = require("framer-motion");

// src/lib/motion.ts
var motionEase = {
  expoOut: [0.16, 1, 0.3, 1],
  powerOut: [0.22, 1, 0.36, 1],
  softInOut: [0.65, 0, 0.35, 1]
};

// src/blocos/Hero.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Hero({
  eyebrow,
  headline,
  descricao,
  cta,
  stats,
  slotLateral,
  slotLateralLabel = "live process"
}) {
  const shouldAnimate = !(0, import_framer_motion.useReducedMotion)();
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
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_framer_motion.motion.p,
                {
                  initial: shouldAnimate ? { opacity: 0, y: 12 } : {},
                  animate: shouldAnimate ? { opacity: 1, y: 0 } : {},
                  transition: shouldAnimate ? { duration: 0.6, ease: motionEase.expoOut } : { duration: 0 },
                  className: "mb-7 max-w-md font-mono text-xs uppercase tracking-[0.32em] text-cyan",
                  children: eyebrow
                }
              ),
              headline,
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                import_framer_motion.motion.div,
                {
                  initial: shouldAnimate ? { opacity: 0, y: 20 } : {},
                  animate: shouldAnimate ? { opacity: 1, y: 0 } : {},
                  transition: shouldAnimate ? { delay: 0.3, duration: 0.7, ease: motionEase.expoOut } : { duration: 0 },
                  className: "mt-8 flex max-w-5xl flex-col gap-5 sm:flex-row sm:items-end sm:justify-between",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "max-w-2xl text-base leading-relaxed text-gray-text sm:text-lg", children: descricao }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      "a",
                      {
                        href: cta.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "group inline-flex w-fit items-center gap-3 rounded border border-cyan bg-cyan px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-transparent hover:text-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70",
                        children: [
                          cta.label,
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-background transition-colors group-hover:bg-cyan", "aria-hidden": "true" })
                        ]
                      }
                    )
                  ]
                }
              )
            ] }),
            slotLateral && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              import_framer_motion.motion.div,
              {
                initial: shouldAnimate ? { opacity: 0, y: 36, rotate: -1.5 } : {},
                animate: shouldAnimate ? { opacity: 1, y: 0, rotate: 0 } : {},
                transition: shouldAnimate ? { delay: 0.56, duration: 0.9, ease: motionEase.expoOut } : { duration: 0 },
                className: "relative lg:translate-y-16",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-4 -top-4 hidden font-mono text-[10px] uppercase tracking-[0.25em] text-gray-text lg:block", children: slotLateralLabel }),
                  slotLateral
                ]
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_framer_motion.motion.div,
            {
              initial: shouldAnimate ? { opacity: 0, y: 20 } : {},
              animate: shouldAnimate ? { opacity: 1, y: 0 } : {},
              transition: shouldAnimate ? { delay: 0.5, duration: 0.7, ease: motionEase.expoOut } : { duration: 0 },
              className: "mt-16 grid grid-cols-2 gap-5 border-t border-line pt-6 sm:grid-cols-4 lg:mt-24",
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

// src/blocos/Services.tsx
var import_framer_motion2 = require("framer-motion");

// src/lib/cn.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/blocos/Services.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function ServiceCard({
  service,
  index
}) {
  const shouldAnimate = !(0, import_framer_motion2.useReducedMotion)();
  const isWide = service.id === "apis";
  const isTall = service.id === "web-apps";
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    import_framer_motion2.motion.article,
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
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "div",
          {
            className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            style: {
              background: "radial-gradient(circle at 24% 0%, rgba(61,242,224,0.08), transparent 46%)"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "relative flex h-full flex-col justify-between gap-8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex items-center justify-between gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "font-mono text-xs text-cyan", children: service.tag }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "font-mono text-[10px] uppercase tracking-[0.22em] text-gray-text", children: service.id })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: "mt-5 text-[clamp(1.6rem,3vw,3.2rem)] font-black leading-none tracking-tight text-foreground", children: service.title }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "mt-4 max-w-2xl text-sm leading-relaxed text-gray-text lg:text-base", children: service.description })
          ] }),
          service.motif,
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "ul",
            {
              className: "grid gap-2 sm:grid-cols-2",
              "aria-label": `Itens de ${service.title}`,
              children: service.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                "li",
                {
                  className: "flex items-start gap-2 text-sm text-gray-text",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
  const shouldAnimate = !(0, import_framer_motion2.useReducedMotion)();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "section",
    {
      id: "servicos",
      "aria-label": "Servi\xE7os",
      className: "overflow-hidden border-t border-line py-16 lg:py-24",
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          import_framer_motion2.motion.div,
          {
            initial: shouldAnimate ? { opacity: 0, y: 22 } : {},
            whileInView: shouldAnimate ? { opacity: 1, y: 0 } : {},
            transition: shouldAnimate ? { duration: 0.68, ease: motionEase.expoOut } : { duration: 0 },
            viewport: shouldAnimate ? { once: true, margin: "-60px" } : void 0,
            className: "mb-10 max-w-2xl lg:mb-14",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "mb-8 font-mono text-xs uppercase tracking-[0.34em] text-cyan", children: eyebrow }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { className: "text-[clamp(2.25rem,6vw,6.6rem)] font-black leading-[0.94] tracking-tight text-foreground", children: titulo }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "mt-6 max-w-xl text-base leading-relaxed text-gray-text", children: descricao })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "grid gap-4 lg:grid-cols-3", children: services.map((service, i) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ServiceCard, { service, index: i }, service.id)) })
      ] })
    }
  );
}

// src/blocos/Projects.tsx
var import_react = require("react");
var import_framer_motion3 = require("framer-motion");
var import_jsx_runtime3 = require("react/jsx-runtime");
function ProjectModal({
  project,
  onClose
}) {
  const closeRef = (0, import_react.useRef)(null);
  const dialogRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_framer_motion3.AnimatePresence, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    import_framer_motion3.motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-[80] flex items-center justify-center p-5",
      onMouseDown: onClose,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "div",
          {
            className: "absolute inset-0 bg-background/85 backdrop-blur-md",
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          import_framer_motion3.motion.div,
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
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "button",
                {
                  ref: closeRef,
                  type: "button",
                  onClick: onClose,
                  "aria-label": "Fechar case",
                  className: "absolute right-4 top-4 rounded border border-line p-2 text-gray-text transition-colors hover:border-cyan hover:text-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70",
                  children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { "aria-hidden": "true", children: "\u2715" })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("p", { className: "font-mono text-xs uppercase tracking-[0.28em] text-cyan", children: [
                "case.log",
                project.ano ? ` / ${project.ano}` : ""
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: "mt-4 max-w-2xl text-3xl font-black tracking-tight text-foreground lg:text-5xl", children: project.titulo }),
              project.descricao && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "mt-5 max-w-2xl text-base leading-relaxed text-gray-text", children: project.descricao }),
              (project.metrica || project.resultado) && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "mt-8 grid gap-4 sm:grid-cols-2", children: [
                project.metrica && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "rounded border border-line bg-background/50 p-4", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "font-mono text-[10px] uppercase tracking-[0.24em] text-gray-text", children: "metrica" }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "mt-3 font-mono text-xl text-cyan", children: project.metrica })
                ] }),
                project.resultado && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "rounded border border-line bg-background/50 p-4", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "font-mono text-[10px] uppercase tracking-[0.24em] text-gray-text", children: "resultado" }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "mt-3 text-sm leading-relaxed text-foreground", children: project.resultado })
                ] })
              ] }),
              project.tags && project.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "mt-6 flex flex-wrap gap-2", children: project.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
  const shouldAnimate = !(0, import_framer_motion3.useReducedMotion)();
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    import_framer_motion3.motion.article,
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
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "grid gap-8 lg:grid-cols-[0.9fr_1.15fr] lg:items-start", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("p", { className: "font-mono text-xs uppercase tracking-[0.28em] text-cyan", children: [
              "frame ",
              String(index + 1).padStart(2, "0"),
              project.ano ? ` / ${project.ano}` : ""
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: "mt-5 max-w-2xl text-[clamp(2.2rem,5vw,5.8rem)] font-black leading-[0.88] tracking-tight text-foreground", children: project.titulo }),
            project.descricao && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "mt-6 max-w-xl text-base leading-relaxed text-gray-text", children: project.descricao })
          ] }),
          project.slotMockup && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "div",
            {
              className: "project-mockup relative overflow-hidden rounded border border-line bg-background/70 p-4",
              "aria-hidden": "true",
              children: project.slotMockup
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "mt-8 grid gap-5 border-t border-line pt-6 md:grid-cols-[0.9fr_1fr_auto] md:items-end", children: [
          project.metrica && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "font-mono text-[10px] uppercase tracking-[0.24em] text-gray-text", children: "metrica forte" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "mt-2 font-mono text-xl text-cyan lg:text-2xl", children: project.metrica })
          ] }),
          project.tags && project.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "font-mono text-[10px] uppercase tracking-[0.24em] text-gray-text", children: "stack" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "mt-2 flex flex-wrap gap-2", children: project.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "span",
              {
                className: "rounded border border-line px-2 py-1 font-mono text-xs text-gray-text",
                children: tag
              },
              tag
            )) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
  const shouldAnimate = !(0, import_framer_motion3.useReducedMotion)();
  const [selected, setSelected] = (0, import_react.useState)(null);
  const loopedProjects = [...projects, ...projects];
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "section",
    {
      id: "projetos",
      "aria-label": "Projetos",
      className: "relative overflow-hidden border-t border-line py-16 lg:py-24",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          import_framer_motion3.motion.div,
          {
            initial: shouldAnimate ? { opacity: 0, y: 24 } : {},
            whileInView: shouldAnimate ? { opacity: 1, y: 0 } : {},
            transition: shouldAnimate ? { duration: 0.7, ease: motionEase.expoOut } : { duration: 0 },
            viewport: shouldAnimate ? { once: true, margin: "-80px" } : void 0,
            className: "mb-16 max-w-2xl",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "mb-8 font-mono text-xs uppercase tracking-[0.34em] text-cyan", children: eyebrow }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { className: "text-[clamp(2.3rem,7vw,7.8rem)] font-black leading-[0.94] tracking-tight text-foreground", children: titulo }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "mt-6 max-w-xl text-base leading-relaxed text-gray-text", children: descricao })
            ]
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "project-carousel relative overflow-hidden", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "div",
            {
              className: "project-carousel-track flex w-max gap-6 px-5 pb-4 sm:px-8 lg:px-10 2xl:px-14",
              "aria-label": "Sequencia de cases",
              children: loopedProjects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "div",
                {
                  "aria-hidden": index >= projects.length ? true : void 0,
                  children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "div",
            {
              "aria-hidden": "true",
              className: "pointer-events-none absolute inset-y-0 left-0 hidden w-32 bg-gradient-to-r from-background to-transparent lg:block"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "div",
            {
              "aria-hidden": "true",
              className: "pointer-events-none absolute inset-y-0 right-0 hidden w-32 bg-gradient-to-l from-background to-transparent lg:block"
            }
          )
        ] }),
        selected && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ProjectModal, { project: selected, onClose: () => setSelected(null) })
      ]
    }
  );
}

// src/blocos/Process.tsx
var import_framer_motion4 = require("framer-motion");
var import_jsx_runtime4 = require("react/jsx-runtime");
function PipelineCard({
  step,
  index
}) {
  const shouldAnimate = !(0, import_framer_motion4.useReducedMotion)();
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    import_framer_motion4.motion.article,
    {
      initial: shouldAnimate ? { opacity: 0, y: 24 } : {},
      whileInView: shouldAnimate ? { opacity: 1, y: 0 } : {},
      transition: shouldAnimate ? { delay: index * 0.06, duration: 0.55, ease: motionEase.expoOut } : { duration: 0 },
      viewport: shouldAnimate ? { once: true, margin: "-60px" } : void 0,
      className: "group relative flex h-full flex-col overflow-hidden rounded border border-line bg-surface p-5 transition-colors hover:border-cyan/60 lg:p-6",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "div",
          {
            className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            style: {
              background: "radial-gradient(circle at 0% 0%, rgba(61,242,224,0.07), transparent 52%)"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "relative flex h-full flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "font-mono text-xs uppercase tracking-[0.28em] text-cyan", children: step.numero }),
            step.duracao && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "shrink-0 rounded border border-line px-2 py-0.5 font-mono text-[10px] text-gray-text", children: step.duracao })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h3", { className: "mt-3 text-[clamp(1.25rem,2.2vw,1.75rem)] font-black leading-[1.05] tracking-tight text-foreground", children: step.titulo }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "mt-3 flex-1 text-sm leading-relaxed text-gray-text", children: step.descricao }),
          (step.commitLabel || step.commitOutput) && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "mt-4 border-t border-line pt-3 font-mono", children: [
            step.commitLabel && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { className: "truncate text-xs text-foreground", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-cyan", children: "$" }),
              " ",
              step.commitLabel
            ] }),
            step.commitOutput && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { className: "mt-1 truncate text-[11px] text-gray-text", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-cyan/60", children: ">" }),
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
  const shouldAnimate = !(0, import_framer_motion4.useReducedMotion)();
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "section",
    {
      id: "processo",
      "aria-label": "Processo de trabalho",
      className: "relative overflow-hidden border-t border-line py-16 lg:py-24",
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          import_framer_motion4.motion.div,
          {
            initial: shouldAnimate ? { opacity: 0, y: 24 } : {},
            whileInView: shouldAnimate ? { opacity: 1, y: 0 } : {},
            transition: shouldAnimate ? { duration: 0.7, ease: motionEase.expoOut } : { duration: 0 },
            viewport: shouldAnimate ? { once: true, margin: "-80px" } : void 0,
            className: "mb-10 max-w-2xl",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "mb-6 font-mono text-xs uppercase tracking-[0.34em] text-cyan", children: eyebrow }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { className: "text-[clamp(2.3rem,7vw,7.8rem)] font-black leading-[0.94] tracking-tight text-foreground", children: titulo }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "mt-5 max-w-xl text-base leading-relaxed text-gray-text", children: descricao })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5", children: steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(PipelineCard, { step, index }, step.numero)) })
      ] })
    }
  );
}

// src/blocos/Stack.tsx
var import_react2 = require("react");
var import_framer_motion5 = require("framer-motion");
var import_jsx_runtime5 = require("react/jsx-runtime");
function Stack({ eyebrow, titulo, descricao, grupos }) {
  const shouldAnimate = !(0, import_framer_motion5.useReducedMotion)();
  const [active, setActive] = (0, import_react2.useState)(grupos[0]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "section",
    {
      id: "stack",
      "aria-label": "Mapa t\xE9cnico da stack",
      className: "relative overflow-hidden border-t border-line py-16 lg:py-24",
      children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
          import_framer_motion5.motion.div,
          {
            initial: shouldAnimate ? { opacity: 0, y: 24 } : {},
            whileInView: shouldAnimate ? { opacity: 1, y: 0 } : {},
            transition: shouldAnimate ? { duration: 0.7, ease: motionEase.expoOut } : { duration: 0 },
            viewport: shouldAnimate ? { once: true, margin: "-80px" } : void 0,
            className: "mb-16 max-w-2xl",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "mb-8 font-mono text-xs uppercase tracking-[0.34em] text-cyan", children: eyebrow }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "text-[clamp(2.3rem,7vw,7.8rem)] font-black leading-[0.94] tracking-tight text-foreground", children: titulo }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "mt-6 max-w-xl text-base leading-relaxed text-gray-text", children: descricao })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "grid gap-6 lg:grid-cols-[1fr_1.15fr] xl:grid-cols-[0.95fr_1.25fr]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "grid gap-3", children: grupos.map((grupo, index) => {
            const selected = active.categoria === grupo.categoria;
            return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
              import_framer_motion5.motion.button,
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
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                    "span",
                    {
                      className: cn(
                        "font-mono text-sm transition-colors",
                        selected ? "text-cyan" : "text-gray-text group-hover:text-cyan"
                      ),
                      children: String(index + 1).padStart(2, "0")
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("span", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "block text-2xl font-black tracking-tight text-foreground", children: grupo.categoria }),
                    grupo.comando && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("span", { className: "mt-2 block font-mono text-xs text-gray-text", children: [
                      "$ ",
                      grupo.comando
                    ] })
                  ] })
                ]
              },
              grupo.categoria
            );
          }) }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "rounded border border-line bg-surface p-5 lg:p-8", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_framer_motion5.AnimatePresence, { mode: "wait", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
            import_framer_motion5.motion.div,
            {
              initial: shouldAnimate ? { opacity: 0, y: 18, filter: "blur(8px)" } : {},
              animate: shouldAnimate ? { opacity: 1, y: 0, filter: "blur(0px)" } : {},
              exit: shouldAnimate ? { opacity: 0, y: -14, filter: "blur(8px)" } : {},
              transition: shouldAnimate ? { duration: 0.28, ease: motionEase.powerOut } : { duration: 0 },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex items-start justify-between gap-6", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { className: "font-mono text-xs uppercase tracking-[0.28em] text-cyan", children: [
                      "layer / ",
                      active.categoria.toLowerCase()
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { className: "mt-4 text-[clamp(2.2rem,5vw,5.8rem)] font-black leading-[0.9] tracking-tight text-foreground", children: active.categoria })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "hidden rounded border border-line px-3 py-1 font-mono text-xs text-gray-text sm:block", children: "active" })
                ] }),
                active.descricao && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "mt-6 max-w-3xl text-base leading-relaxed text-gray-text", children: active.descricao }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "stack-map-grid mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3", children: active.itens.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
                  import_framer_motion5.motion.div,
                  {
                    initial: shouldAnimate ? { opacity: 0, y: 10 } : {},
                    animate: shouldAnimate ? { opacity: 1, y: 0 } : {},
                    transition: shouldAnimate ? { delay: index * 0.04, duration: 0.25 } : { duration: 0 },
                    className: "group/item relative overflow-hidden rounded border border-line bg-background/55 p-4 font-mono transition-colors hover:border-cyan/60",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "relative z-10 text-sm text-foreground", children: item }),
                      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
                active.comando && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mt-8 border-t border-line pt-5 font-mono", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { className: "text-sm text-foreground", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "text-cyan", children: "$" }),
                    " explain --when-to-use",
                    " ",
                    active.categoria.toLowerCase()
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { className: "mt-2 text-xs leading-relaxed text-gray-text", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "text-cyan/70", children: ">" }),
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
var import_react3 = require("react");
var import_framer_motion6 = require("framer-motion");
var import_jsx_runtime6 = require("react/jsx-runtime");
var AUTOPLAY_MS = 5e3;
function Testimonials({
  eyebrow,
  titulo,
  depoimentos
}) {
  const [current, setCurrent] = (0, import_react3.useState)(0);
  const [paused, setPaused] = (0, import_react3.useState)(false);
  const [userPaused, setUserPaused] = (0, import_react3.useState)(false);
  const timerRef = (0, import_react3.useRef)(null);
  const next = (0, import_react3.useCallback)(() => {
    setCurrent((c) => (c + 1) % depoimentos.length);
  }, [depoimentos.length]);
  const prev = (0, import_react3.useCallback)(() => {
    setCurrent((c) => (c - 1 + depoimentos.length) % depoimentos.length);
  }, [depoimentos.length]);
  (0, import_react3.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "section",
    {
      id: "depoimentos",
      "aria-label": "Depoimentos de clientes",
      className: "py-32 border-t border-line",
      children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
          import_framer_motion6.motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            viewport: { once: true, margin: "-60px" },
            className: "mb-16",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "font-mono text-sm text-cyan tracking-widest uppercase mb-4", children: eyebrow }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { className: "text-3xl font-bold text-balance lg:text-4xl", children: titulo })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
          "div",
          {
            role: "region",
            "aria-label": "Depoimentos de clientes",
            "aria-roledescription": "carrossel",
            onMouseEnter: () => setPaused(true),
            onMouseLeave: () => setPaused(false),
            className: "relative",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { "aria-live": "polite", "aria-atomic": "true", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_framer_motion6.AnimatePresence, { mode: "wait", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
                import_framer_motion6.motion.blockquote,
                {
                  initial: { opacity: 0, y: 16 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -16 },
                  transition: { duration: 0.4 },
                  className: "rounded border border-line bg-surface p-10 lg:p-14",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                      "span",
                      {
                        "aria-hidden": "true",
                        className: "font-mono text-6xl text-cyan opacity-20 leading-none select-none",
                        children: "\u201C"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "mt-2 max-w-6xl text-lg leading-relaxed text-foreground lg:text-xl", children: t.texto }),
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("footer", { className: "mt-8 flex items-center gap-4", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                        "div",
                        {
                          "aria-hidden": "true",
                          className: "flex h-10 w-10 items-center justify-center rounded border border-line bg-surface-raised font-mono text-sm font-bold text-cyan",
                          children: t.autor.charAt(0)
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
                        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("cite", { className: "not-italic font-semibold text-foreground", children: t.autor }),
                        (t.papel || t.empresa) && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-sm text-gray-text", children: [t.papel, t.empresa].filter(Boolean).join(" \xB7 ") })
                      ] })
                    ] })
                  ]
                },
                `${t.autor}-${current}`
              ) }) }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "mt-6 flex items-center gap-4", children: [
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                  "button",
                  {
                    onClick: prev,
                    "aria-label": "Depoimento anterior",
                    className: "flex h-11 w-11 items-center justify-center rounded border border-line text-gray-text hover:border-cyan hover:text-cyan transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70",
                    children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { "aria-hidden": "true", children: "\u2039" })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                  "button",
                  {
                    onClick: next,
                    "aria-label": "Pr\xF3ximo depoimento",
                    className: "flex h-11 w-11 items-center justify-center rounded border border-line text-gray-text hover:border-cyan hover:text-cyan transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70",
                    children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { "aria-hidden": "true", children: "\u203A" })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "flex gap-1.5", role: "tablist", "aria-label": "Navegar depoimentos", children: depoimentos.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                  "button",
                  {
                    role: "tab",
                    "aria-selected": i === current,
                    "aria-label": `Ir para depoimento ${i + 1}`,
                    onClick: () => setCurrent(i),
                    className: "h-11 w-11 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70 rounded",
                    children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                      "span",
                      {
                        className: `block rounded-full transition-all duration-300 ${i === current ? "h-1 w-6 bg-cyan" : "h-1.5 w-1.5 bg-line hover:bg-gray-text"}`
                      }
                    )
                  },
                  i
                )) }),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                  "button",
                  {
                    onClick: () => setUserPaused((p) => !p),
                    "aria-label": userPaused ? "Retomar apresenta\xE7\xE3o" : "Pausar apresenta\xE7\xE3o",
                    className: "flex h-11 w-11 items-center justify-center rounded border border-line text-gray-text hover:border-cyan hover:text-cyan transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70",
                    children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { "aria-hidden": "true", children: userPaused ? "\u25B6" : "\u23F8" })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: "ml-auto font-mono text-xs text-gray-text", children: [
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
var import_framer_motion7 = require("framer-motion");
var import_jsx_runtime7 = require("react/jsx-runtime");
function About({
  eyebrow,
  titulo,
  paragrafos,
  slotLateral
}) {
  const shouldAnimate = !(0, import_framer_motion7.useReducedMotion)();
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    "section",
    {
      id: "sobre",
      "aria-label": "Sobre",
      className: "relative overflow-hidden py-16 lg:py-24",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "grid gap-14 lg:grid-cols-[minmax(0,1.5fr)_minmax(360px,0.86fr)] lg:items-start 2xl:grid-cols-[minmax(0,1.7fr)_minmax(460px,0.8fr)]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
            import_framer_motion7.motion.div,
            {
              initial: shouldAnimate ? { opacity: 0, y: 28 } : {},
              whileInView: shouldAnimate ? { opacity: 1, y: 0 } : {},
              transition: shouldAnimate ? { duration: 0.74, ease: motionEase.expoOut } : { duration: 0 },
              viewport: shouldAnimate ? { once: true, margin: "-80px" } : void 0,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "mb-5 font-mono text-xs uppercase tracking-[0.34em] text-cyan", children: eyebrow }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { className: "max-w-6xl text-[clamp(2.25rem,7vw,7.4rem)] font-black leading-[0.94] tracking-tight text-foreground", children: titulo }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]", children: paragrafos.map((paragrafo, index) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                  import_framer_motion7.motion.div,
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
          slotLateral && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_framer_motion7.motion.aside,
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
var import_framer_motion8 = require("framer-motion");
var import_jsx_runtime8 = require("react/jsx-runtime");
function Contact({
  eyebrow,
  titulo,
  descricao,
  cta,
  email,
  slotFormulario
}) {
  const shouldAnimate = !(0, import_framer_motion8.useReducedMotion)();
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    "section",
    {
      id: "contato",
      "aria-label": "Iniciar projeto",
      className: "relative overflow-hidden border-t border-line py-16 lg:py-24",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
            import_framer_motion8.motion.div,
            {
              initial: shouldAnimate ? { opacity: 0, y: 24 } : {},
              whileInView: shouldAnimate ? { opacity: 1, y: 0 } : {},
              transition: shouldAnimate ? { duration: 0.7, ease: motionEase.expoOut } : { duration: 0 },
              viewport: shouldAnimate ? { once: true, margin: "-80px" } : void 0,
              className: "mb-12 max-w-2xl",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "mb-8 font-mono text-xs uppercase tracking-[0.34em] text-cyan", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { lang: "en", children: eyebrow }) }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { className: "text-[clamp(2.3rem,7vw,7.8rem)] font-black leading-[0.94] tracking-tight text-foreground", children: titulo }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "mt-6 max-w-xl text-base leading-relaxed text-gray-text", children: descricao })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "grid gap-10 lg:grid-cols-[0.72fr_1.55fr] lg:items-start 2xl:grid-cols-[0.58fr_1.7fr]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
              import_framer_motion8.motion.div,
              {
                initial: shouldAnimate ? { opacity: 0, y: 28 } : {},
                whileInView: shouldAnimate ? { opacity: 1, y: 0 } : {},
                transition: shouldAnimate ? { duration: 0.64, ease: motionEase.expoOut } : { duration: 0 },
                viewport: shouldAnimate ? { once: true, margin: "-80px" } : void 0,
                className: "grid gap-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
                    "a",
                    {
                      href: cta.href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "group flex items-center gap-4 rounded border border-line bg-surface p-5 transition-colors hover:border-cyan/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "flex h-11 w-11 items-center justify-center rounded border border-line bg-background text-gray-text transition-colors group-hover:border-cyan group-hover:text-cyan", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { "aria-hidden": "true", children: "\u{1F4AC}" }) }),
                        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "font-mono text-sm text-foreground", children: cta.label }),
                          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "mt-1 text-xs text-gray-text", children: "para quando o escopo j\xE1 est\xE1 claro" })
                        ] })
                      ]
                    }
                  ),
                  email && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
                    "a",
                    {
                      href: `mailto:${email}`,
                      className: "group flex items-center gap-4 rounded border border-line bg-surface p-5 transition-colors hover:border-cyan/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "flex h-11 w-11 items-center justify-center rounded border border-line bg-background text-gray-text transition-colors group-hover:border-cyan group-hover:text-cyan", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { "aria-hidden": "true", children: "\u2709" }) }),
                        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "font-mono text-sm text-foreground", children: email }),
                          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "mt-1 text-xs text-gray-text", children: "para materiais e projetos maiores" })
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "rounded border border-line bg-surface p-5 font-mono", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-[10px] uppercase tracking-[0.24em] text-gray-text", children: "contract mode" }),
                    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "mt-4 text-sm text-foreground", children: "PJ / NFS-e / remoto" }),
                    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "mt-2 text-xs leading-relaxed text-gray-text", children: "O objetivo \xE9 sair da primeira conversa com risco, escopo e pr\xF3ximo passo claros." })
                  ] })
                ]
              }
            ),
            slotFormulario && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
              import_framer_motion8.motion.div,
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
  Contact,
  Hero,
  Process,
  Projects,
  Services,
  Stack,
  Testimonials
});
//# sourceMappingURL=index.js.map