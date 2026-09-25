"use client";

import * as React from "react";
import { useState } from "react";
import { Reveal } from "../componentes/Reveal";
import { cn } from "../lib/cn";

export type StackGrupo = {
  categoria: string;
  itens: string[];
  /** optional sub-label shown as a CLI command in the detail panel */
  comando?: string;
  /** optional description shown in the detail panel */
  description?: string;
  /** Resposta do "explain --when-to-use" deste grupo. Sem ela, vale rotulos.explicacao. */
  explicacao?: string;
};

export type StackRotulos = {
  camada: string;
  ativo: string;
  explicar: string;
  explicacao: string;
};

const ROTULOS_PADRAO: StackRotulos = {
  camada: "layer",
  ativo: "active",
  explicar: "explain --when-to-use",
  explicacao:
    "uso essa camada quando ela diminui incerteza operacional, não para preencher logo em carrossel.",
};

export type StackProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: React.ReactNode;
  grupos: StackGrupo[];
  /** Rótulos da estética de terminal. O padrão é o texto do site da MF. */
  rotulos?: Partial<StackRotulos>;
};

export function Stack({ eyebrow, title, description, grupos, rotulos }: StackProps) {
  // Guarda a categoria, não o objeto: com grupos novos vindos do consumidor, o
  // painel mostrava o grupo antigo guardado no estado.
  const [categoriaAtiva, setCategoriaAtiva] = useState(grupos[0]?.categoria);
  const active = grupos.find((g) => g.categoria === categoriaAtiva) ?? grupos[0];
  const r = { ...ROTULOS_PADRAO, ...rotulos };
  if (!active) return null;

  return (
    <section
      id="stack"
      aria-label="Mapa técnico da stack"
      className="relative overflow-hidden border-t border-line py-16 lg:py-24"
    >
      <div className="w-full px-5 sm:px-8 lg:px-10 2xl:px-14">
        <Reveal margin="-80px" className="mb-10 lg:mb-12">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.34em] text-cyan">{eyebrow}</p>
          <h2 className="text-[length:var(--text-h2)] font-black leading-[0.96] tracking-tight text-foreground">
            {title}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-text">{description}</p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr] xl:grid-cols-[0.95fr_1.25fr]">
          <div className="grid content-start gap-3">
            {grupos.map((grupo, index) => {
              const selected = active.categoria === grupo.categoria;
              return (
                <Reveal
                  key={grupo.categoria}
                  as="button"
                  variant="left"
                  margin="-80px"
                  delayMs={index * 50}
                  type="button"
                  onClick={() => setCategoriaAtiva(grupo.categoria)}
                  onMouseEnter={() => setCategoriaAtiva(grupo.categoria)}
                  aria-pressed={selected}
                  className={cn(
                    "group grid gap-5 rounded border p-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 sm:grid-cols-[auto_1fr]",
                    selected
                      ? "border-cyan bg-cyan/10"
                      : "border-line bg-surface hover:border-cyan/50",
                  )}
                >
                  <span
                    className={cn(
                      "font-mono text-sm transition-colors",
                      selected ? "text-cyan" : "text-gray-text group-hover:text-cyan",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block text-2xl font-black tracking-tight text-foreground">
                      {grupo.categoria}
                    </span>
                    {grupo.comando && (
                      <span className="mt-2 block font-mono text-xs text-gray-text">
                        $ {grupo.comando}
                      </span>
                    )}
                  </span>
                </Reveal>
              );
            })}
          </div>

          <div className="rounded border border-line bg-surface p-5 lg:p-8">
            <div key={active.categoria} className="mf-entrada mf-entrada-up-suave">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan">
                    {r.camada} / {active.categoria.toLowerCase()}
                  </p>
                  <h3 className="mt-4 text-[clamp(2.2rem,5vw,5.8rem)] font-black leading-[0.9] tracking-tight text-foreground">
                    {active.categoria}
                  </h3>
                </div>
                <span className="hidden rounded border border-line px-3 py-1 font-mono text-xs text-gray-text sm:block">
                  {r.ativo}
                </span>
              </div>

              {active.description && (
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-text">
                  {active.description}
                </p>
              )}

              <div className="stack-map-grid mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {active.itens.map((item, index) => (
                  <div
                    key={item}
                    style={
                      {
                        "--mf-entrada-delay": `${index * 40}ms`,
                      } as React.CSSProperties
                    }
                    className="mf-entrada mf-entrada-up-suave group/item relative overflow-hidden rounded border border-line bg-background/55 p-4 font-mono transition-colors hover:border-cyan/60"
                  >
                    <span className="relative z-10 text-sm text-foreground">{item}</span>
                    <span
                      className="stack-chip-fill absolute inset-y-0 left-0 w-full origin-left scale-x-0 bg-cyan/10 transition-transform duration-500 group-hover/item:scale-x-100"
                      aria-hidden="true"
                    />
                  </div>
                ))}
              </div>

              {active.comando && (
                <div className="mt-8 border-t border-line pt-5 font-mono">
                  <p className="text-sm text-foreground">
                    <span className="text-cyan">$</span> {r.explicar}{" "}
                    {active.categoria.toLowerCase()}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-gray-text">
                    <span className="text-cyan/70">&gt;</span> {active.explicacao ?? r.explicacao}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
