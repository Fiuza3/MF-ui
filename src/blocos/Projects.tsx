"use client";

import * as React from "react";
import { useRef, useState, type RefObject } from "react";
import { ArrowUpRightIcon, PauseIcon, PlayIcon } from "lucide-react";
import { Reveal } from "../componentes/Reveal";
import { propsDeLink } from "../lib/link-externo";
import { usePrefereMovimentoReduzido } from "../lib/movimento-reduzido";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "../primitivos/Dialog";

export type ProjectItem = {
  title: string;
  description?: string;
  tags?: string[];
  mockup?: React.ReactNode;
  /** Link do projeto no ar — vira "ver projeto" no card. */
  href?: string;
  ano?: number;
  categoria?: string;
  metrica?: string;
  resultado?: string;
};

export type ProjectsProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: React.ReactNode;
  projects: ProjectItem[];
};

const ROTULO = "font-mono text-xs uppercase tracking-[0.2em] text-gray-text";
const TAG = "rounded border border-line px-2 py-1 font-mono text-xs text-gray-text";
const FOCO = "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring";

type BotaoDePausaProps = { pausado: boolean; onAlternar: () => void };

// Rótulo fixo + aria-pressed (padrão APG de toggle): trocar o rótulo junto com o estado faria o leitor
// de tela dizer "Retomar, pressionado", o oposto do que acontece. Só o ícone alterna.
// Oculto onde o carrossel já não anima (toque e movimento reduzido: classe no CSS; reduzido também não renderiza).
function BotaoDePausa({ pausado, onAlternar }: BotaoDePausaProps) {
  const Icone = pausado ? PlayIcon : PauseIcon;
  return (
    <button
      type="button"
      aria-pressed={pausado}
      aria-label="Pausar carrossel"
      onClick={onAlternar}
      className={`project-carousel-pausa border-line text-gray-text hover:border-cyan hover:text-cyan inline-flex size-11 shrink-0 items-center justify-center rounded border transition-colors max-md:hidden ${FOCO}`}
    >
      <Icone aria-hidden="true" className="size-4" />
    </button>
  );
}

function rotuloDoFrame(project: ProjectItem, index: number): string {
  return [`frame ${String(index + 1).padStart(2, "0")}`, project.ano, project.categoria]
    .filter(Boolean)
    .join(" / ");
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className={TAG}>
          {tag}
        </span>
      ))}
    </div>
  );
}

function Metrica({ rotulo, valor }: { rotulo: string; valor: string }) {
  return (
    <div className="border-line bg-background/50 rounded border p-4">
      <p className={ROTULO}>{rotulo}</p>
      <p className="text-cyan mt-3 font-mono text-xl">{valor}</p>
    </div>
  );
}

// Sem DialogTrigger o Radix não sabe quem abriu o case: a origem vem de fora
// para o foco voltar ao "abrir case" ao fechar.
function CaseTecnico({
  project,
  origem,
}: {
  project: ProjectItem;
  origem: RefObject<HTMLElement | null>;
}) {
  return (
    <DialogContent
      onCloseAutoFocus={(evento) => {
        evento.preventDefault();
        origem.current?.focus();
      }}
      className="bg-surface border-line rounded p-6 sm:max-w-3xl lg:p-8"
    >
      <div className="pr-10">
        <p className="text-cyan font-mono text-xs tracking-[0.28em] uppercase">
          case.log{project.ano ? ` / ${project.ano}` : ""}
        </p>
        <DialogTitle className="text-foreground mt-4 max-w-2xl text-3xl leading-none font-black tracking-tight lg:text-5xl">
          {project.title}
        </DialogTitle>
      </div>
      {project.description && (
        <DialogDescription className="text-gray-text max-w-2xl text-base leading-relaxed">
          {project.description}
        </DialogDescription>
      )}
      {(project.metrica || project.resultado) && (
        <div className="mt-2 grid gap-4 sm:grid-cols-2">
          {project.metrica && <Metrica rotulo="métrica" valor={project.metrica} />}
          {project.resultado && (
            <div className="border-line bg-background/50 rounded border p-4">
              <p className={ROTULO}>resultado</p>
              <p className="text-foreground mt-3 text-sm leading-relaxed">{project.resultado}</p>
            </div>
          )}
        </div>
      )}
      {project.tags && project.tags.length > 0 && <Tags tags={project.tags} />}
    </DialogContent>
  );
}

type FrameProps = { project: ProjectItem; index: number; onOpen: (project: ProjectItem) => void };

function ProjectFrame({ project, index, onOpen }: FrameProps) {
  // min-h só com mockup: sem ele, min-h + justify-between abria ~250px vazios no meio.
  const altura = project.mockup ? "min-h-[540px] sm:min-h-[620px]" : "";
  return (
    <Reveal
      as="article"
      margin="-80px"
      delayMs={index * 60}
      className={`project-frame group border-line bg-surface hover:border-cyan/60 flex w-[88vw] shrink-0 scroll-ml-5 flex-col justify-between rounded border p-5 transition-colors sm:w-[76vw] lg:w-[56vw] lg:p-8 xl:w-[52vw] 2xl:w-[44vw] ${altura}`}
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.15fr] lg:items-start">
        <div>
          <p className="text-cyan font-mono text-xs tracking-[0.28em] uppercase">
            {rotuloDoFrame(project, index)}
          </p>
          <h3 className="text-foreground mt-5 max-w-2xl text-[clamp(2.2rem,5vw,5.8rem)] leading-[0.88] font-black tracking-tight">
            {project.title}
          </h3>
          {project.description && (
            <p className="text-gray-text mt-6 max-w-xl text-base leading-relaxed">
              {project.description}
            </p>
          )}
        </div>
        {project.mockup && (
          <div
            className="project-mockup border-line bg-background/70 relative overflow-hidden rounded border p-4"
            aria-hidden="true"
          >
            {project.mockup}
          </div>
        )}
      </div>
      <RodapeDoFrame project={project} onOpen={onOpen} />
    </Reveal>
  );
}

function RodapeDoFrame({ project, onOpen }: Omit<FrameProps, "index">) {
  return (
    <div className="border-line mt-8 grid gap-5 border-t pt-6 md:grid-cols-[0.9fr_1fr_auto] md:items-end">
      {project.metrica && (
        <div>
          <p className={ROTULO}>métrica forte</p>
          <p className="text-cyan mt-2 font-mono text-xl lg:text-2xl">{project.metrica}</p>
        </div>
      )}
      {project.tags && project.tags.length > 0 && (
        <div>
          <p className={`${ROTULO} mb-2`}>stack</p>
          <Tags tags={project.tags} />
        </div>
      )}
      <div className="flex flex-wrap gap-2 md:col-start-3 md:justify-end">
        {project.href && (
          <a
            href={project.href}
            {...propsDeLink(project.href)}
            className={`border-line text-gray-text hover:border-cyan hover:text-cyan inline-flex items-center gap-1.5 rounded border px-4 min-h-11 py-3 font-mono text-xs font-bold tracking-[0.18em] uppercase transition-colors ${FOCO}`}
          >
            ver projeto <ArrowUpRightIcon className="size-3.5" aria-hidden="true" />
          </a>
        )}
        <button
          type="button"
          onClick={() => onOpen(project)}
          className={`border-cyan text-cyan hover:bg-cyan hover:text-background inline-flex min-h-11 items-center justify-center rounded border px-4 py-3 font-mono text-xs font-bold tracking-[0.18em] uppercase transition-colors ${FOCO}`}
        >
          abrir case
        </button>
      </div>
    </div>
  );
}

export function Projects({ eyebrow, title, description, projects }: ProjectsProps) {
  const [selected, setSelected] = useState<ProjectItem | null>(null);
  const origemRef = useRef<HTMLElement | null>(null);
  const abrir = (project: ProjectItem) => {
    origemRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setSelected(project);
  };
  const [pausado, setPausado] = useState(false);
  const movimentoReduzido = usePrefereMovimentoReduzido();
  const loopedProjects = [...projects, ...projects];

  return (
    <section
      id="projetos"
      aria-label="Projetos"
      className="border-line relative overflow-hidden border-t py-16 lg:py-24"
    >
      <div className="w-full px-5 sm:px-8 lg:px-10 2xl:px-14">
        <Reveal margin="-80px" className="mb-8 flex items-end justify-between gap-6 lg:mb-10">
          <div className="min-w-0 flex-1">
            <p className="text-cyan mb-4 font-mono text-xs tracking-[0.34em] uppercase">{eyebrow}</p>
            <h2 className="text-foreground text-[length:var(--text-h2)] leading-[0.96] font-black tracking-tight">
              {title}
            </h2>
            <p className="text-gray-text mt-4 max-w-3xl text-base leading-relaxed">{description}</p>
          </div>
          {!movimentoReduzido && (
            <BotaoDePausa pausado={pausado} onAlternar={() => setPausado((p) => !p)} />
          )}
        </Reveal>
      </div>

      <div className="project-carousel relative overflow-hidden" data-paused={pausado}>
        <div
          role="group"
          aria-roledescription="carrossel"
          aria-label="Sequência de cases"
          className="project-carousel-track flex w-max gap-4 px-5 pb-4 sm:px-8 lg:px-10 2xl:px-14"
        >
          {loopedProjects.map((project, index) => {
            const isClone = index >= projects.length;
            return (
              <div
                key={`${project.title}-${index}`}
                data-testid={isClone ? "project-clone" : "project-item"}
                {...(isClone ? { inert: true } : {})}
              >
                <ProjectFrame project={project} index={index % projects.length} onOpen={abrir} />
              </div>
            );
          })}
        </div>

        {/* Fade esquerdo do tamanho do padding: suaviza o card que sai sem cobrir o que está parado. */}
        <div
          aria-hidden="true"
          className="from-background pointer-events-none absolute inset-y-0 left-0 hidden w-10 bg-gradient-to-r to-transparent lg:block 2xl:w-14"
        />
        <div
          aria-hidden="true"
          className="from-background pointer-events-none absolute inset-y-0 right-0 hidden w-32 bg-gradient-to-l to-transparent lg:block"
        />
      </div>

      <Dialog open={selected !== null} onOpenChange={(aberto) => !aberto && setSelected(null)}>
        {selected && <CaseTecnico project={selected} origem={origemRef} />}
      </Dialog>
    </section>
  );
}
