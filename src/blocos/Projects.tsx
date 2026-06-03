"use client";

import * as React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { motionEase } from "../lib/motion";

export type ProjectItem = {
  titulo: string;
  descricao?: string;
  tags?: string[];
  slotMockup?: React.ReactNode;
  href?: string;
  /** optional metadata shown in cards */
  ano?: number;
  categoria?: string;
  metrica?: string;
  resultado?: string;
};

export type ProjectsProps = {
  eyebrow: string;
  titulo: React.ReactNode;
  descricao: React.ReactNode;
  projects: ProjectItem[];
};

interface ModalProject {
  titulo: string;
  descricao?: string;
  tags?: string[];
  ano?: number;
  metrica?: string;
  resultado?: string;
}

function ProjectModal({
  project,
  onClose,
}: {
  project: ModalProject;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();

      if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
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

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[80] flex items-center justify-center p-5"
        onMouseDown={onClose}
      >
        <div
          className="absolute inset-0 bg-background/85 backdrop-blur-md"
          aria-hidden="true"
        />
        <motion.div
          ref={dialogRef}
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          transition={{ duration: 0.28 }}
          onMouseDown={(event) => event.stopPropagation()}
          className="relative z-10 w-full max-w-3xl rounded border border-line bg-surface p-6 shadow-2xl shadow-cyan/5 lg:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Case tecnico: ${project.titulo}`}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Fechar case"
            className="absolute right-4 top-4 rounded border border-line p-2 text-gray-text transition-colors hover:border-cyan hover:text-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70"
          >
            <span aria-hidden="true">✕</span>
          </button>

          <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan">
            case.log{project.ano ? ` / ${project.ano}` : ""}
          </p>
          <h3 className="mt-4 max-w-2xl text-3xl font-black tracking-tight text-foreground lg:text-5xl">
            {project.titulo}
          </h3>
          {project.descricao && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-text">
              {project.descricao}
            </p>
          )}

          {(project.metrica || project.resultado) && (
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {project.metrica && (
                <div className="rounded border border-line bg-background/50 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-gray-text">
                    metrica
                  </p>
                  <p className="mt-3 font-mono text-xl text-cyan">
                    {project.metrica}
                  </p>
                </div>
              )}
              {project.resultado && (
                <div className="rounded border border-line bg-background/50 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-gray-text">
                    resultado
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground">
                    {project.resultado}
                  </p>
                </div>
              )}
            </div>
          )}

          {project.tags && project.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-line px-2 py-1 font-mono text-xs text-gray-text"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectFrame({
  project,
  index,
  onOpen,
}: {
  project: ProjectItem;
  index: number;
  onOpen: (project: ProjectItem) => void;
}) {
  const shouldAnimate = !useReducedMotion();

  return (
    <motion.article
      initial={shouldAnimate ? { opacity: 0, y: 32 } : {}}
      whileInView={shouldAnimate ? { opacity: 1, y: 0 } : {}}
      transition={
        shouldAnimate
          ? {
              duration: 0.64,
              delay: index * 0.06,
              ease: motionEase.expoOut,
            }
          : { duration: 0 }
      }
      viewport={shouldAnimate ? { once: true, margin: "-80px" } : undefined}
      className="project-frame group flex min-h-[540px] w-[86vw] shrink-0 scroll-ml-5 flex-col justify-between rounded border border-line bg-surface p-5 transition-colors hover:border-cyan/60 sm:min-h-[620px] sm:w-[74vw] lg:w-[72vw] lg:p-8 xl:w-[64vw] 2xl:w-[54vw]"
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.15fr] lg:items-start">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan">
            frame {String(index + 1).padStart(2, "0")}
            {project.ano ? ` / ${project.ano}` : ""}
          </p>
          <h3 className="mt-5 max-w-2xl text-[clamp(2.2rem,5vw,5.8rem)] font-black leading-[0.88] tracking-tight text-foreground">
            {project.titulo}
          </h3>
          {project.descricao && (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-text">
              {project.descricao}
            </p>
          )}
        </div>

        {project.slotMockup && (
          <div
            className="project-mockup relative overflow-hidden rounded border border-line bg-background/70 p-4"
            aria-hidden="true"
          >
            {project.slotMockup}
          </div>
        )}
      </div>

      <div className="mt-8 grid gap-5 border-t border-line pt-6 md:grid-cols-[0.9fr_1fr_auto] md:items-end">
        {project.metrica && (
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-gray-text">
              metrica forte
            </p>
            <p className="mt-2 font-mono text-xl text-cyan lg:text-2xl">
              {project.metrica}
            </p>
          </div>
        )}
        {project.tags && project.tags.length > 0 && (
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-gray-text">
              stack
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-line px-2 py-1 font-mono text-xs text-gray-text"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="rounded border border-cyan px-4 py-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-cyan transition-colors hover:bg-cyan hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70"
        >
          abrir case
        </button>
      </div>
    </motion.article>
  );
}

export function Projects({
  eyebrow,
  titulo,
  descricao,
  projects,
}: ProjectsProps) {
  const shouldAnimate = !useReducedMotion();
  const [selected, setSelected] = useState<ProjectItem | null>(null);
  const loopedProjects = [...projects, ...projects];

  return (
    <section
      id="projetos"
      aria-label="Projetos"
      className="relative overflow-hidden border-t border-line py-24 lg:py-40"
    >
      <div className="w-full px-5 sm:px-8 lg:px-10 2xl:px-14">
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 24 } : {}}
          whileInView={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={
            shouldAnimate
              ? { duration: 0.7, ease: motionEase.expoOut }
              : { duration: 0 }
          }
          viewport={shouldAnimate ? { once: true, margin: "-80px" } : undefined}
          className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.7fr]"
        >
          <p className="font-mono text-xs uppercase tracking-[0.34em] text-cyan">
            {eyebrow}
          </p>
          <div>
            <h2 className="max-w-6xl text-[clamp(2.3rem,7vw,7.8rem)] font-black leading-[0.94] tracking-tight text-foreground">
              {titulo}
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-text">
              {descricao}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="project-carousel relative overflow-hidden">
        <div
          className="project-carousel-track flex w-max gap-6 px-5 pb-4 sm:px-8 lg:px-10 2xl:px-14"
          aria-label="Sequencia de cases"
        >
          {loopedProjects.map((project, index) => (
            <div
              key={`${project.titulo}-${index}`}
              aria-hidden={index >= projects.length ? true : undefined}
            >
              <ProjectFrame
                project={project}
                index={index % projects.length}
                onOpen={setSelected}
              />
            </div>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 hidden w-32 bg-gradient-to-r from-background to-transparent lg:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-32 bg-gradient-to-l from-background to-transparent lg:block"
        />
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
