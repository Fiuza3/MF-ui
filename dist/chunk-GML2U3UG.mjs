import {
  cn
} from "./chunk-TE62FXIV.mjs";

// src/blocos/Hero.tsx
import { motion, useReducedMotion } from "framer-motion";

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
import { jsx, jsxs } from "react/jsx-runtime";
function Hero({
  eyebrow,
  headline,
  descricao,
  cta,
  stats,
  slotLateral,
  slotLateralLabel = "live process"
}) {
  const shouldAnimate = !useReducedMotion();
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "hero",
      "aria-label": "Introdu\xE7\xE3o",
      className: "hero-shell relative flex min-h-[100svh] overflow-hidden border-b border-line",
      children: [
        /* @__PURE__ */ jsx("div", { className: "hero-noise", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("div", { className: "hero-radial", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("div", { className: "hero-scanline", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex w-full flex-col justify-between px-5 pb-8 pt-28 sm:px-8 lg:px-10 lg:pt-32 2xl:px-14", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid flex-1 items-start gap-10 lg:grid-cols-[minmax(0,1.58fr)_minmax(380px,0.92fr)] lg:gap-14 2xl:grid-cols-[minmax(0,1.7fr)_minmax(460px,0.9fr)]", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(
                motion.p,
                {
                  initial: shouldAnimate ? { opacity: 0, y: 12 } : {},
                  animate: shouldAnimate ? { opacity: 1, y: 0 } : {},
                  transition: shouldAnimate ? { duration: 0.6, ease: motionEase.expoOut } : { duration: 0 },
                  className: "mb-7 max-w-md font-mono text-xs uppercase tracking-[0.32em] text-cyan",
                  children: eyebrow
                }
              ),
              headline,
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: shouldAnimate ? { opacity: 0, y: 20 } : {},
                  animate: shouldAnimate ? { opacity: 1, y: 0 } : {},
                  transition: shouldAnimate ? { delay: 0.3, duration: 0.7, ease: motionEase.expoOut } : { duration: 0 },
                  className: "mt-8 flex max-w-5xl flex-col gap-5 sm:flex-row sm:items-end sm:justify-between",
                  children: [
                    /* @__PURE__ */ jsx("p", { className: "max-w-2xl text-base leading-relaxed text-gray-text sm:text-lg", children: descricao }),
                    /* @__PURE__ */ jsxs(
                      "a",
                      {
                        href: cta.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "group inline-flex w-fit items-center gap-3 rounded border border-cyan bg-cyan px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-transparent hover:text-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70",
                        children: [
                          cta.label,
                          /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-background transition-colors group-hover:bg-cyan", "aria-hidden": "true" })
                        ]
                      }
                    )
                  ]
                }
              )
            ] }),
            slotLateral && /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: shouldAnimate ? { opacity: 0, y: 36, rotate: -1.5 } : {},
                animate: shouldAnimate ? { opacity: 1, y: 0, rotate: 0 } : {},
                transition: shouldAnimate ? { delay: 0.56, duration: 0.9, ease: motionEase.expoOut } : { duration: 0 },
                className: "relative lg:translate-y-16",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute -left-4 -top-4 hidden font-mono text-[10px] uppercase tracking-[0.25em] text-gray-text lg:block", children: slotLateralLabel }),
                  slotLateral
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: shouldAnimate ? { opacity: 0, y: 20 } : {},
              animate: shouldAnimate ? { opacity: 1, y: 0 } : {},
              transition: shouldAnimate ? { delay: 0.5, duration: 0.7, ease: motionEase.expoOut } : { duration: 0 },
              className: "mt-16 grid grid-cols-2 gap-5 border-t border-line pt-6 sm:grid-cols-4 lg:mt-24",
              children: stats.map((stat) => /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "font-mono text-3xl font-black text-foreground sm:text-4xl", children: stat.value }),
                /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs uppercase tracking-[0.18em] text-gray-text", children: stat.label })
              ] }, stat.label))
            }
          )
        ] })
      ]
    }
  );
}

// src/blocos/Services.tsx
import { motion as motion2, useReducedMotion as useReducedMotion2 } from "framer-motion";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function ServiceCard({
  service,
  index
}) {
  const shouldAnimate = !useReducedMotion2();
  const isWide = service.id === "apis";
  const isTall = service.id === "web-apps";
  return /* @__PURE__ */ jsxs2(
    motion2.article,
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
        /* @__PURE__ */ jsx2(
          "div",
          {
            className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            style: {
              background: "radial-gradient(circle at 24% 0%, rgba(61,242,224,0.08), transparent 46%)"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxs2("div", { className: "relative flex h-full flex-col justify-between gap-8", children: [
          /* @__PURE__ */ jsxs2("div", { children: [
            /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-between gap-4", children: [
              /* @__PURE__ */ jsx2("span", { className: "font-mono text-xs text-cyan", children: service.tag }),
              /* @__PURE__ */ jsx2("span", { className: "font-mono text-[10px] uppercase tracking-[0.22em] text-gray-text", children: service.id })
            ] }),
            /* @__PURE__ */ jsx2("h3", { className: "mt-5 text-[clamp(1.6rem,3vw,3.2rem)] font-black leading-none tracking-tight text-foreground", children: service.title }),
            /* @__PURE__ */ jsx2("p", { className: "mt-4 max-w-2xl text-sm leading-relaxed text-gray-text lg:text-base", children: service.description })
          ] }),
          service.motif,
          /* @__PURE__ */ jsx2(
            "ul",
            {
              className: "grid gap-2 sm:grid-cols-2",
              "aria-label": `Itens de ${service.title}`,
              children: service.items.map((item) => /* @__PURE__ */ jsxs2(
                "li",
                {
                  className: "flex items-start gap-2 text-sm text-gray-text",
                  children: [
                    /* @__PURE__ */ jsx2(
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
  const shouldAnimate = !useReducedMotion2();
  return /* @__PURE__ */ jsx2(
    "section",
    {
      id: "servicos",
      "aria-label": "Servi\xE7os",
      className: "overflow-hidden border-t border-line py-16 lg:py-24",
      children: /* @__PURE__ */ jsxs2("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: [
        /* @__PURE__ */ jsxs2(
          motion2.div,
          {
            initial: shouldAnimate ? { opacity: 0, y: 22 } : {},
            whileInView: shouldAnimate ? { opacity: 1, y: 0 } : {},
            transition: shouldAnimate ? { duration: 0.68, ease: motionEase.expoOut } : { duration: 0 },
            viewport: shouldAnimate ? { once: true, margin: "-60px" } : void 0,
            className: "mb-10 max-w-2xl lg:mb-14",
            children: [
              /* @__PURE__ */ jsx2("p", { className: "mb-8 font-mono text-xs uppercase tracking-[0.34em] text-cyan", children: eyebrow }),
              /* @__PURE__ */ jsx2("h2", { className: "text-[clamp(2.25rem,6vw,6.6rem)] font-black leading-[0.94] tracking-tight text-foreground", children: titulo }),
              /* @__PURE__ */ jsx2("p", { className: "mt-6 max-w-xl text-base leading-relaxed text-gray-text", children: descricao })
            ]
          }
        ),
        /* @__PURE__ */ jsx2("div", { className: "grid gap-4 lg:grid-cols-3", children: services.map((service, i) => /* @__PURE__ */ jsx2(ServiceCard, { service, index: i }, service.id)) })
      ] })
    }
  );
}

// src/blocos/Projects.tsx
import { useState, useEffect, useRef } from "react";
import { motion as motion3, AnimatePresence, useReducedMotion as useReducedMotion3 } from "framer-motion";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function ProjectModal({
  project,
  onClose
}) {
  const closeRef = useRef(null);
  const dialogRef = useRef(null);
  useEffect(() => {
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
  return /* @__PURE__ */ jsx3(AnimatePresence, { children: /* @__PURE__ */ jsxs3(
    motion3.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-[80] flex items-center justify-center p-5",
      onMouseDown: onClose,
      children: [
        /* @__PURE__ */ jsx3(
          "div",
          {
            className: "absolute inset-0 bg-background/85 backdrop-blur-md",
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxs3(
          motion3.div,
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
              /* @__PURE__ */ jsx3(
                "button",
                {
                  ref: closeRef,
                  type: "button",
                  onClick: onClose,
                  "aria-label": "Fechar case",
                  className: "absolute right-4 top-4 rounded border border-line p-2 text-gray-text transition-colors hover:border-cyan hover:text-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70",
                  children: /* @__PURE__ */ jsx3("span", { "aria-hidden": "true", children: "\u2715" })
                }
              ),
              /* @__PURE__ */ jsxs3("p", { className: "font-mono text-xs uppercase tracking-[0.28em] text-cyan", children: [
                "case.log",
                project.ano ? ` / ${project.ano}` : ""
              ] }),
              /* @__PURE__ */ jsx3("h3", { className: "mt-4 max-w-2xl text-3xl font-black tracking-tight text-foreground lg:text-5xl", children: project.titulo }),
              project.descricao && /* @__PURE__ */ jsx3("p", { className: "mt-5 max-w-2xl text-base leading-relaxed text-gray-text", children: project.descricao }),
              (project.metrica || project.resultado) && /* @__PURE__ */ jsxs3("div", { className: "mt-8 grid gap-4 sm:grid-cols-2", children: [
                project.metrica && /* @__PURE__ */ jsxs3("div", { className: "rounded border border-line bg-background/50 p-4", children: [
                  /* @__PURE__ */ jsx3("p", { className: "font-mono text-[10px] uppercase tracking-[0.24em] text-gray-text", children: "metrica" }),
                  /* @__PURE__ */ jsx3("p", { className: "mt-3 font-mono text-xl text-cyan", children: project.metrica })
                ] }),
                project.resultado && /* @__PURE__ */ jsxs3("div", { className: "rounded border border-line bg-background/50 p-4", children: [
                  /* @__PURE__ */ jsx3("p", { className: "font-mono text-[10px] uppercase tracking-[0.24em] text-gray-text", children: "resultado" }),
                  /* @__PURE__ */ jsx3("p", { className: "mt-3 text-sm leading-relaxed text-foreground", children: project.resultado })
                ] })
              ] }),
              project.tags && project.tags.length > 0 && /* @__PURE__ */ jsx3("div", { className: "mt-6 flex flex-wrap gap-2", children: project.tags.map((tag) => /* @__PURE__ */ jsx3(
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
  const shouldAnimate = !useReducedMotion3();
  return /* @__PURE__ */ jsxs3(
    motion3.article,
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
        /* @__PURE__ */ jsxs3("div", { className: "grid gap-8 lg:grid-cols-[0.9fr_1.15fr] lg:items-start", children: [
          /* @__PURE__ */ jsxs3("div", { children: [
            /* @__PURE__ */ jsxs3("p", { className: "font-mono text-xs uppercase tracking-[0.28em] text-cyan", children: [
              "frame ",
              String(index + 1).padStart(2, "0"),
              project.ano ? ` / ${project.ano}` : ""
            ] }),
            /* @__PURE__ */ jsx3("h3", { className: "mt-5 max-w-2xl text-[clamp(2.2rem,5vw,5.8rem)] font-black leading-[0.88] tracking-tight text-foreground", children: project.titulo }),
            project.descricao && /* @__PURE__ */ jsx3("p", { className: "mt-6 max-w-xl text-base leading-relaxed text-gray-text", children: project.descricao })
          ] }),
          project.slotMockup && /* @__PURE__ */ jsx3(
            "div",
            {
              className: "project-mockup relative overflow-hidden rounded border border-line bg-background/70 p-4",
              "aria-hidden": "true",
              children: project.slotMockup
            }
          )
        ] }),
        /* @__PURE__ */ jsxs3("div", { className: "mt-8 grid gap-5 border-t border-line pt-6 md:grid-cols-[0.9fr_1fr_auto] md:items-end", children: [
          project.metrica && /* @__PURE__ */ jsxs3("div", { children: [
            /* @__PURE__ */ jsx3("p", { className: "font-mono text-[10px] uppercase tracking-[0.24em] text-gray-text", children: "metrica forte" }),
            /* @__PURE__ */ jsx3("p", { className: "mt-2 font-mono text-xl text-cyan lg:text-2xl", children: project.metrica })
          ] }),
          project.tags && project.tags.length > 0 && /* @__PURE__ */ jsxs3("div", { children: [
            /* @__PURE__ */ jsx3("p", { className: "font-mono text-[10px] uppercase tracking-[0.24em] text-gray-text", children: "stack" }),
            /* @__PURE__ */ jsx3("div", { className: "mt-2 flex flex-wrap gap-2", children: project.tags.map((tag) => /* @__PURE__ */ jsx3(
              "span",
              {
                className: "rounded border border-line px-2 py-1 font-mono text-xs text-gray-text",
                children: tag
              },
              tag
            )) })
          ] }),
          /* @__PURE__ */ jsx3(
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
  const shouldAnimate = !useReducedMotion3();
  const [selected, setSelected] = useState(null);
  const loopedProjects = [...projects, ...projects];
  return /* @__PURE__ */ jsxs3(
    "section",
    {
      id: "projetos",
      "aria-label": "Projetos",
      className: "relative overflow-hidden border-t border-line py-16 lg:py-24",
      children: [
        /* @__PURE__ */ jsx3("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: /* @__PURE__ */ jsxs3(
          motion3.div,
          {
            initial: shouldAnimate ? { opacity: 0, y: 24 } : {},
            whileInView: shouldAnimate ? { opacity: 1, y: 0 } : {},
            transition: shouldAnimate ? { duration: 0.7, ease: motionEase.expoOut } : { duration: 0 },
            viewport: shouldAnimate ? { once: true, margin: "-80px" } : void 0,
            className: "mb-16 max-w-2xl",
            children: [
              /* @__PURE__ */ jsx3("p", { className: "mb-8 font-mono text-xs uppercase tracking-[0.34em] text-cyan", children: eyebrow }),
              /* @__PURE__ */ jsx3("h2", { className: "text-[clamp(2.3rem,7vw,7.8rem)] font-black leading-[0.94] tracking-tight text-foreground", children: titulo }),
              /* @__PURE__ */ jsx3("p", { className: "mt-6 max-w-xl text-base leading-relaxed text-gray-text", children: descricao })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxs3("div", { className: "project-carousel relative overflow-hidden", children: [
          /* @__PURE__ */ jsx3(
            "div",
            {
              className: "project-carousel-track flex w-max gap-6 px-5 pb-4 sm:px-8 lg:px-10 2xl:px-14",
              "aria-label": "Sequencia de cases",
              children: loopedProjects.map((project, index) => /* @__PURE__ */ jsx3(
                "div",
                {
                  "aria-hidden": index >= projects.length ? true : void 0,
                  children: /* @__PURE__ */ jsx3(
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
          /* @__PURE__ */ jsx3(
            "div",
            {
              "aria-hidden": "true",
              className: "pointer-events-none absolute inset-y-0 left-0 hidden w-32 bg-gradient-to-r from-background to-transparent lg:block"
            }
          ),
          /* @__PURE__ */ jsx3(
            "div",
            {
              "aria-hidden": "true",
              className: "pointer-events-none absolute inset-y-0 right-0 hidden w-32 bg-gradient-to-l from-background to-transparent lg:block"
            }
          )
        ] }),
        selected && /* @__PURE__ */ jsx3(ProjectModal, { project: selected, onClose: () => setSelected(null) })
      ]
    }
  );
}

// src/blocos/Process.tsx
import { useRef as useRef2 } from "react";
import { motion as motion4, useReducedMotion as useReducedMotion4, useScroll, useTransform } from "framer-motion";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
function PipelineCard({
  step,
  index
}) {
  const shouldAnimate = !useReducedMotion4();
  const alignRight = index % 2 === 1;
  return /* @__PURE__ */ jsxs4(
    motion4.article,
    {
      initial: shouldAnimate ? { opacity: 0, y: 34, clipPath: "inset(18% 0 0 0)" } : {},
      whileInView: shouldAnimate ? { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" } : {},
      transition: shouldAnimate ? { duration: 0.7, ease: motionEase.expoOut } : { duration: 0 },
      viewport: shouldAnimate ? { once: true, margin: "-90px" } : void 0,
      className: `relative grid gap-5 lg:grid-cols-2 ${alignRight ? "" : "lg:[&>*]:col-start-1"}`,
      children: [
        /* @__PURE__ */ jsx4("div", { className: alignRight ? "lg:col-start-2" : "lg:col-start-1", children: /* @__PURE__ */ jsxs4("div", { className: "group relative overflow-hidden rounded border border-line bg-surface p-5 transition-colors hover:border-cyan/60 lg:p-6", children: [
          /* @__PURE__ */ jsx4(
            "div",
            {
              className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
              style: {
                background: "radial-gradient(circle at 0% 0%, rgba(61,242,224,0.08), transparent 48%)"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxs4("div", { className: "relative", children: [
            /* @__PURE__ */ jsxs4("div", { className: "flex flex-wrap items-start justify-between gap-x-4 gap-y-2", children: [
              /* @__PURE__ */ jsxs4("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxs4("p", { className: "font-mono text-xs uppercase tracking-[0.28em] text-cyan", children: [
                  "commit ",
                  step.numero
                ] }),
                /* @__PURE__ */ jsx4("h3", { className: "mt-4 text-[clamp(1.6rem,7vw,4.8rem)] font-black leading-[0.95] tracking-tight text-foreground", children: step.titulo })
              ] }),
              step.duracao && /* @__PURE__ */ jsx4("span", { className: "shrink-0 rounded border border-line px-3 py-1 font-mono text-xs text-gray-text", children: step.duracao })
            ] }),
            /* @__PURE__ */ jsx4("p", { className: "mt-6 max-w-2xl text-sm leading-relaxed text-gray-text sm:text-base", children: step.descricao }),
            (step.commitLabel || step.commitOutput) && /* @__PURE__ */ jsxs4("div", { className: "mt-5 border-t border-line pt-4 font-mono", children: [
              step.commitLabel && /* @__PURE__ */ jsxs4("p", { className: "break-words text-sm text-foreground", children: [
                /* @__PURE__ */ jsx4("span", { className: "text-cyan", children: "$" }),
                " git commit -m \u201C",
                step.commitLabel,
                "\u201D"
              ] }),
              step.commitOutput && /* @__PURE__ */ jsxs4("p", { className: "mt-2 break-words text-xs text-gray-text", children: [
                /* @__PURE__ */ jsx4("span", { className: "text-cyan/70", children: ">" }),
                " ",
                step.commitOutput
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx4(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute top-8 hidden h-4 w-4 rounded-full border border-cyan bg-background shadow-[0_0_28px_rgba(61,242,224,0.35)] lg:left-1/2 lg:block lg:-translate-x-1/2"
          }
        )
      ]
    }
  );
}
function Process({ eyebrow, titulo, descricao, steps }) {
  const shouldAnimate = !useReducedMotion4();
  const sectionRef = useRef2(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 70%"]
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return /* @__PURE__ */ jsx4(
    "section",
    {
      id: "processo",
      ref: sectionRef,
      "aria-label": "Processo de trabalho",
      className: "relative overflow-hidden border-t border-line py-16 lg:py-24",
      children: /* @__PURE__ */ jsxs4("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: [
        /* @__PURE__ */ jsxs4(
          motion4.div,
          {
            initial: shouldAnimate ? { opacity: 0, y: 24 } : {},
            whileInView: shouldAnimate ? { opacity: 1, y: 0 } : {},
            transition: shouldAnimate ? { duration: 0.7, ease: motionEase.expoOut } : { duration: 0 },
            viewport: shouldAnimate ? { once: true, margin: "-80px" } : void 0,
            className: "mb-12 max-w-2xl",
            children: [
              /* @__PURE__ */ jsx4("p", { className: "mb-8 font-mono text-xs uppercase tracking-[0.34em] text-cyan", children: eyebrow }),
              /* @__PURE__ */ jsx4("h2", { className: "text-[clamp(2.3rem,7vw,7.8rem)] font-black leading-[0.94] tracking-tight text-foreground", children: titulo }),
              /* @__PURE__ */ jsx4("p", { className: "mt-6 max-w-xl text-base leading-relaxed text-gray-text", children: descricao })
            ]
          }
        ),
        /* @__PURE__ */ jsxs4("div", { className: "process-pipeline relative", children: [
          /* @__PURE__ */ jsx4(
            "div",
            {
              "aria-hidden": "true",
              className: "absolute left-0 top-0 hidden h-full w-px bg-line lg:left-1/2 lg:block lg:-translate-x-1/2"
            }
          ),
          /* @__PURE__ */ jsx4(
            motion4.div,
            {
              "aria-hidden": "true",
              className: "absolute left-0 top-0 hidden h-full w-px origin-top bg-cyan lg:left-1/2 lg:block lg:-translate-x-1/2",
              style: { scaleY: shouldAnimate ? lineScale : 1 }
            }
          ),
          /* @__PURE__ */ jsx4("div", { className: "grid gap-5 lg:gap-7", children: steps.map((step, index) => /* @__PURE__ */ jsx4(PipelineCard, { step, index }, step.numero)) })
        ] })
      ] })
    }
  );
}

// src/blocos/Stack.tsx
import { useState as useState2 } from "react";
import { motion as motion5, AnimatePresence as AnimatePresence2, useReducedMotion as useReducedMotion5 } from "framer-motion";
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
function Stack({ eyebrow, titulo, descricao, grupos }) {
  const shouldAnimate = !useReducedMotion5();
  const [active, setActive] = useState2(grupos[0]);
  return /* @__PURE__ */ jsx5(
    "section",
    {
      id: "stack",
      "aria-label": "Mapa t\xE9cnico da stack",
      className: "relative overflow-hidden border-t border-line py-16 lg:py-24",
      children: /* @__PURE__ */ jsxs5("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: [
        /* @__PURE__ */ jsxs5(
          motion5.div,
          {
            initial: shouldAnimate ? { opacity: 0, y: 24 } : {},
            whileInView: shouldAnimate ? { opacity: 1, y: 0 } : {},
            transition: shouldAnimate ? { duration: 0.7, ease: motionEase.expoOut } : { duration: 0 },
            viewport: shouldAnimate ? { once: true, margin: "-80px" } : void 0,
            className: "mb-16 max-w-2xl",
            children: [
              /* @__PURE__ */ jsx5("p", { className: "mb-8 font-mono text-xs uppercase tracking-[0.34em] text-cyan", children: eyebrow }),
              /* @__PURE__ */ jsx5("h2", { className: "text-[clamp(2.3rem,7vw,7.8rem)] font-black leading-[0.94] tracking-tight text-foreground", children: titulo }),
              /* @__PURE__ */ jsx5("p", { className: "mt-6 max-w-xl text-base leading-relaxed text-gray-text", children: descricao })
            ]
          }
        ),
        /* @__PURE__ */ jsxs5("div", { className: "grid gap-6 lg:grid-cols-[1fr_1.15fr] xl:grid-cols-[0.95fr_1.25fr]", children: [
          /* @__PURE__ */ jsx5("div", { className: "grid gap-3", children: grupos.map((grupo, index) => {
            const selected = active.categoria === grupo.categoria;
            return /* @__PURE__ */ jsxs5(
              motion5.button,
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
                  /* @__PURE__ */ jsx5(
                    "span",
                    {
                      className: cn(
                        "font-mono text-sm transition-colors",
                        selected ? "text-cyan" : "text-gray-text group-hover:text-cyan"
                      ),
                      children: String(index + 1).padStart(2, "0")
                    }
                  ),
                  /* @__PURE__ */ jsxs5("span", { children: [
                    /* @__PURE__ */ jsx5("span", { className: "block text-2xl font-black tracking-tight text-foreground", children: grupo.categoria }),
                    grupo.comando && /* @__PURE__ */ jsxs5("span", { className: "mt-2 block font-mono text-xs text-gray-text", children: [
                      "$ ",
                      grupo.comando
                    ] })
                  ] })
                ]
              },
              grupo.categoria
            );
          }) }),
          /* @__PURE__ */ jsx5("div", { className: "rounded border border-line bg-surface p-5 lg:p-8", children: /* @__PURE__ */ jsx5(AnimatePresence2, { mode: "wait", children: /* @__PURE__ */ jsxs5(
            motion5.div,
            {
              initial: shouldAnimate ? { opacity: 0, y: 18, filter: "blur(8px)" } : {},
              animate: shouldAnimate ? { opacity: 1, y: 0, filter: "blur(0px)" } : {},
              exit: shouldAnimate ? { opacity: 0, y: -14, filter: "blur(8px)" } : {},
              transition: shouldAnimate ? { duration: 0.28, ease: motionEase.powerOut } : { duration: 0 },
              children: [
                /* @__PURE__ */ jsxs5("div", { className: "flex items-start justify-between gap-6", children: [
                  /* @__PURE__ */ jsxs5("div", { children: [
                    /* @__PURE__ */ jsxs5("p", { className: "font-mono text-xs uppercase tracking-[0.28em] text-cyan", children: [
                      "layer / ",
                      active.categoria.toLowerCase()
                    ] }),
                    /* @__PURE__ */ jsx5("h3", { className: "mt-4 text-[clamp(2.2rem,5vw,5.8rem)] font-black leading-[0.9] tracking-tight text-foreground", children: active.categoria })
                  ] }),
                  /* @__PURE__ */ jsx5("span", { className: "hidden rounded border border-line px-3 py-1 font-mono text-xs text-gray-text sm:block", children: "active" })
                ] }),
                active.descricao && /* @__PURE__ */ jsx5("p", { className: "mt-6 max-w-3xl text-base leading-relaxed text-gray-text", children: active.descricao }),
                /* @__PURE__ */ jsx5("div", { className: "stack-map-grid mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3", children: active.itens.map((item, index) => /* @__PURE__ */ jsxs5(
                  motion5.div,
                  {
                    initial: shouldAnimate ? { opacity: 0, y: 10 } : {},
                    animate: shouldAnimate ? { opacity: 1, y: 0 } : {},
                    transition: shouldAnimate ? { delay: index * 0.04, duration: 0.25 } : { duration: 0 },
                    className: "group/item relative overflow-hidden rounded border border-line bg-background/55 p-4 font-mono transition-colors hover:border-cyan/60",
                    children: [
                      /* @__PURE__ */ jsx5("span", { className: "relative z-10 text-sm text-foreground", children: item }),
                      /* @__PURE__ */ jsx5(
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
                active.comando && /* @__PURE__ */ jsxs5("div", { className: "mt-8 border-t border-line pt-5 font-mono", children: [
                  /* @__PURE__ */ jsxs5("p", { className: "text-sm text-foreground", children: [
                    /* @__PURE__ */ jsx5("span", { className: "text-cyan", children: "$" }),
                    " explain --when-to-use",
                    " ",
                    active.categoria.toLowerCase()
                  ] }),
                  /* @__PURE__ */ jsxs5("p", { className: "mt-2 text-xs leading-relaxed text-gray-text", children: [
                    /* @__PURE__ */ jsx5("span", { className: "text-cyan/70", children: ">" }),
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
import { useState as useState3, useEffect as useEffect2, useRef as useRef3, useCallback as useCallback2 } from "react";
import { motion as motion6, AnimatePresence as AnimatePresence3 } from "framer-motion";
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
var AUTOPLAY_MS = 5e3;
function Testimonials({
  eyebrow,
  titulo,
  depoimentos
}) {
  const [current, setCurrent] = useState3(0);
  const [paused, setPaused] = useState3(false);
  const [userPaused, setUserPaused] = useState3(false);
  const timerRef = useRef3(null);
  const next = useCallback2(() => {
    setCurrent((c) => (c + 1) % depoimentos.length);
  }, [depoimentos.length]);
  const prev = useCallback2(() => {
    setCurrent((c) => (c - 1 + depoimentos.length) % depoimentos.length);
  }, [depoimentos.length]);
  useEffect2(() => {
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
  return /* @__PURE__ */ jsx6(
    "section",
    {
      id: "depoimentos",
      "aria-label": "Depoimentos de clientes",
      className: "py-32 border-t border-line",
      children: /* @__PURE__ */ jsxs6("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: [
        /* @__PURE__ */ jsxs6(
          motion6.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            viewport: { once: true, margin: "-60px" },
            className: "mb-16",
            children: [
              /* @__PURE__ */ jsx6("p", { className: "font-mono text-sm text-cyan tracking-widest uppercase mb-4", children: eyebrow }),
              /* @__PURE__ */ jsx6("h2", { className: "text-3xl font-bold text-balance lg:text-4xl", children: titulo })
            ]
          }
        ),
        /* @__PURE__ */ jsxs6(
          "div",
          {
            role: "region",
            "aria-label": "Depoimentos de clientes",
            "aria-roledescription": "carrossel",
            onMouseEnter: () => setPaused(true),
            onMouseLeave: () => setPaused(false),
            className: "relative",
            children: [
              /* @__PURE__ */ jsx6("div", { "aria-live": "polite", "aria-atomic": "true", children: /* @__PURE__ */ jsx6(AnimatePresence3, { mode: "wait", children: /* @__PURE__ */ jsxs6(
                motion6.blockquote,
                {
                  initial: { opacity: 0, y: 16 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -16 },
                  transition: { duration: 0.4 },
                  className: "rounded border border-line bg-surface p-10 lg:p-14",
                  children: [
                    /* @__PURE__ */ jsx6(
                      "span",
                      {
                        "aria-hidden": "true",
                        className: "font-mono text-6xl text-cyan opacity-20 leading-none select-none",
                        children: "\u201C"
                      }
                    ),
                    /* @__PURE__ */ jsx6("p", { className: "mt-2 max-w-6xl text-lg leading-relaxed text-foreground lg:text-xl", children: t.texto }),
                    /* @__PURE__ */ jsxs6("footer", { className: "mt-8 flex items-center gap-4", children: [
                      /* @__PURE__ */ jsx6(
                        "div",
                        {
                          "aria-hidden": "true",
                          className: "flex h-10 w-10 items-center justify-center rounded border border-line bg-surface-raised font-mono text-sm font-bold text-cyan",
                          children: t.autor.charAt(0)
                        }
                      ),
                      /* @__PURE__ */ jsxs6("div", { children: [
                        /* @__PURE__ */ jsx6("cite", { className: "not-italic font-semibold text-foreground", children: t.autor }),
                        (t.papel || t.empresa) && /* @__PURE__ */ jsx6("p", { className: "text-sm text-gray-text", children: [t.papel, t.empresa].filter(Boolean).join(" \xB7 ") })
                      ] })
                    ] })
                  ]
                },
                `${t.autor}-${current}`
              ) }) }),
              /* @__PURE__ */ jsxs6("div", { className: "mt-6 flex items-center gap-4", children: [
                /* @__PURE__ */ jsx6(
                  "button",
                  {
                    onClick: prev,
                    "aria-label": "Depoimento anterior",
                    className: "flex h-11 w-11 items-center justify-center rounded border border-line text-gray-text hover:border-cyan hover:text-cyan transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70",
                    children: /* @__PURE__ */ jsx6("span", { "aria-hidden": "true", children: "\u2039" })
                  }
                ),
                /* @__PURE__ */ jsx6(
                  "button",
                  {
                    onClick: next,
                    "aria-label": "Pr\xF3ximo depoimento",
                    className: "flex h-11 w-11 items-center justify-center rounded border border-line text-gray-text hover:border-cyan hover:text-cyan transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70",
                    children: /* @__PURE__ */ jsx6("span", { "aria-hidden": "true", children: "\u203A" })
                  }
                ),
                /* @__PURE__ */ jsx6("div", { className: "flex gap-1.5", role: "tablist", "aria-label": "Navegar depoimentos", children: depoimentos.map((_, i) => /* @__PURE__ */ jsx6(
                  "button",
                  {
                    role: "tab",
                    "aria-selected": i === current,
                    "aria-label": `Ir para depoimento ${i + 1}`,
                    onClick: () => setCurrent(i),
                    className: "h-11 w-11 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70 rounded",
                    children: /* @__PURE__ */ jsx6(
                      "span",
                      {
                        className: `block rounded-full transition-all duration-300 ${i === current ? "h-1 w-6 bg-cyan" : "h-1.5 w-1.5 bg-line hover:bg-gray-text"}`
                      }
                    )
                  },
                  i
                )) }),
                /* @__PURE__ */ jsx6(
                  "button",
                  {
                    onClick: () => setUserPaused((p) => !p),
                    "aria-label": userPaused ? "Retomar apresenta\xE7\xE3o" : "Pausar apresenta\xE7\xE3o",
                    className: "flex h-11 w-11 items-center justify-center rounded border border-line text-gray-text hover:border-cyan hover:text-cyan transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70",
                    children: /* @__PURE__ */ jsx6("span", { "aria-hidden": "true", children: userPaused ? "\u25B6" : "\u23F8" })
                  }
                ),
                /* @__PURE__ */ jsxs6("span", { className: "ml-auto font-mono text-xs text-gray-text", children: [
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
import { motion as motion7, useReducedMotion as useReducedMotion6 } from "framer-motion";
import { jsx as jsx7, jsxs as jsxs7 } from "react/jsx-runtime";
function About({
  eyebrow,
  titulo,
  paragrafos,
  slotLateral
}) {
  const shouldAnimate = !useReducedMotion6();
  return /* @__PURE__ */ jsxs7(
    "section",
    {
      id: "sobre",
      "aria-label": "Sobre",
      className: "relative overflow-hidden py-16 lg:py-24",
      children: [
        /* @__PURE__ */ jsx7("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" }),
        /* @__PURE__ */ jsx7("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: /* @__PURE__ */ jsxs7("div", { className: "grid gap-14 lg:grid-cols-[minmax(0,1.5fr)_minmax(360px,0.86fr)] lg:items-start 2xl:grid-cols-[minmax(0,1.7fr)_minmax(460px,0.8fr)]", children: [
          /* @__PURE__ */ jsxs7(
            motion7.div,
            {
              initial: shouldAnimate ? { opacity: 0, y: 28 } : {},
              whileInView: shouldAnimate ? { opacity: 1, y: 0 } : {},
              transition: shouldAnimate ? { duration: 0.74, ease: motionEase.expoOut } : { duration: 0 },
              viewport: shouldAnimate ? { once: true, margin: "-80px" } : void 0,
              children: [
                /* @__PURE__ */ jsx7("p", { className: "mb-5 font-mono text-xs uppercase tracking-[0.34em] text-cyan", children: eyebrow }),
                /* @__PURE__ */ jsx7("h2", { className: "max-w-6xl text-[clamp(2.25rem,7vw,7.4rem)] font-black leading-[0.94] tracking-tight text-foreground", children: titulo }),
                /* @__PURE__ */ jsx7("div", { className: "mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]", children: paragrafos.map((paragrafo, index) => /* @__PURE__ */ jsx7(
                  motion7.div,
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
          slotLateral && /* @__PURE__ */ jsx7(
            motion7.aside,
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
import { motion as motion8, useReducedMotion as useReducedMotion7 } from "framer-motion";
import { jsx as jsx8, jsxs as jsxs8 } from "react/jsx-runtime";
function Contact({
  eyebrow,
  titulo,
  descricao,
  cta,
  email,
  slotFormulario
}) {
  const shouldAnimate = !useReducedMotion7();
  return /* @__PURE__ */ jsxs8(
    "section",
    {
      id: "contato",
      "aria-label": "Iniciar projeto",
      className: "relative overflow-hidden border-t border-line py-16 lg:py-24",
      children: [
        /* @__PURE__ */ jsx8("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" }),
        /* @__PURE__ */ jsxs8("div", { className: "w-full px-5 sm:px-8 lg:px-10 2xl:px-14", children: [
          /* @__PURE__ */ jsxs8(
            motion8.div,
            {
              initial: shouldAnimate ? { opacity: 0, y: 24 } : {},
              whileInView: shouldAnimate ? { opacity: 1, y: 0 } : {},
              transition: shouldAnimate ? { duration: 0.7, ease: motionEase.expoOut } : { duration: 0 },
              viewport: shouldAnimate ? { once: true, margin: "-80px" } : void 0,
              className: "mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.7fr]",
              children: [
                /* @__PURE__ */ jsx8("p", { className: "font-mono text-xs uppercase tracking-[0.34em] text-cyan", children: /* @__PURE__ */ jsx8("span", { lang: "en", children: eyebrow }) }),
                /* @__PURE__ */ jsxs8("div", { children: [
                  /* @__PURE__ */ jsx8("h2", { className: "max-w-6xl text-[clamp(2.3rem,7vw,7.8rem)] font-black leading-[0.94] tracking-tight text-foreground", children: titulo }),
                  /* @__PURE__ */ jsx8("p", { className: "mt-6 max-w-3xl text-base leading-relaxed text-gray-text", children: descricao })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs8("div", { className: "grid gap-10 lg:grid-cols-[0.72fr_1.55fr] lg:items-start 2xl:grid-cols-[0.58fr_1.7fr]", children: [
            /* @__PURE__ */ jsxs8(
              motion8.div,
              {
                initial: shouldAnimate ? { opacity: 0, y: 28 } : {},
                whileInView: shouldAnimate ? { opacity: 1, y: 0 } : {},
                transition: shouldAnimate ? { duration: 0.64, ease: motionEase.expoOut } : { duration: 0 },
                viewport: shouldAnimate ? { once: true, margin: "-80px" } : void 0,
                className: "grid gap-4",
                children: [
                  /* @__PURE__ */ jsxs8(
                    "a",
                    {
                      href: cta.href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "group flex items-center gap-4 rounded border border-line bg-surface p-5 transition-colors hover:border-cyan/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70",
                      children: [
                        /* @__PURE__ */ jsx8("span", { className: "flex h-11 w-11 items-center justify-center rounded border border-line bg-background text-gray-text transition-colors group-hover:border-cyan group-hover:text-cyan", children: /* @__PURE__ */ jsx8("span", { "aria-hidden": "true", children: "\u{1F4AC}" }) }),
                        /* @__PURE__ */ jsxs8("div", { children: [
                          /* @__PURE__ */ jsx8("p", { className: "font-mono text-sm text-foreground", children: cta.label }),
                          /* @__PURE__ */ jsx8("p", { className: "mt-1 text-xs text-gray-text", children: "para quando o escopo j\xE1 est\xE1 claro" })
                        ] })
                      ]
                    }
                  ),
                  email && /* @__PURE__ */ jsxs8(
                    "a",
                    {
                      href: `mailto:${email}`,
                      className: "group flex items-center gap-4 rounded border border-line bg-surface p-5 transition-colors hover:border-cyan/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70",
                      children: [
                        /* @__PURE__ */ jsx8("span", { className: "flex h-11 w-11 items-center justify-center rounded border border-line bg-background text-gray-text transition-colors group-hover:border-cyan group-hover:text-cyan", children: /* @__PURE__ */ jsx8("span", { "aria-hidden": "true", children: "\u2709" }) }),
                        /* @__PURE__ */ jsxs8("div", { children: [
                          /* @__PURE__ */ jsx8("p", { className: "font-mono text-sm text-foreground", children: email }),
                          /* @__PURE__ */ jsx8("p", { className: "mt-1 text-xs text-gray-text", children: "para materiais e projetos maiores" })
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs8("div", { className: "rounded border border-line bg-surface p-5 font-mono", children: [
                    /* @__PURE__ */ jsx8("p", { className: "text-[10px] uppercase tracking-[0.24em] text-gray-text", children: "contract mode" }),
                    /* @__PURE__ */ jsx8("p", { className: "mt-4 text-sm text-foreground", children: "PJ / NFS-e / remoto" }),
                    /* @__PURE__ */ jsx8("p", { className: "mt-2 text-xs leading-relaxed text-gray-text", children: "O objetivo \xE9 sair da primeira conversa com risco, escopo e pr\xF3ximo passo claros." })
                  ] })
                ]
              }
            ),
            slotFormulario && /* @__PURE__ */ jsx8(
              motion8.div,
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

export {
  motionDurations,
  motionEase,
  blinkMs,
  Hero,
  Services,
  Projects,
  Process,
  Stack,
  Testimonials,
  About,
  Contact
};
//# sourceMappingURL=chunk-GML2U3UG.mjs.map