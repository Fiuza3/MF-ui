"use client";

import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, PauseIcon, PlayIcon } from "lucide-react";
import { Reveal } from "../componentes/Reveal";
import { usePrefereMovimentoReduzido } from "../lib/movimento-reduzido";

const AUTOPLAY_MS = 5000;

export type Depoimento = {
  texto: string;
  autor: string;
  papel?: string;
  empresa?: string;
};

export type TestimonialsProps = {
  eyebrow: string;
  title: React.ReactNode;
  depoimentos: Depoimento[];
};

const BOTAO =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded border border-line text-gray-text transition-all hover:border-cyan hover:text-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70 [&_svg]:size-4";

/**
 * Pausado quando o usuário pediu, quando o ponteiro ou o foco estão no carrossel
 * e — até o usuário escolher — quando o sistema pede menos movimento.
 */
function useApresentacao(total: number) {
  const reduzido = usePrefereMovimentoReduzido();
  const [atual, setAtual] = useState(0);
  const [emUso, setEmUso] = useState(false);
  const [escolha, setEscolha] = useState<"tocar" | "pausar" | null>(null);
  const pausadoPeloUsuario = escolha ? escolha === "pausar" : reduzido;
  const tocando = !pausadoPeloUsuario && !emUso;

  const proximo = useCallback(() => setAtual((c) => (c + 1) % total), [total]);
  const anterior = useCallback(() => setAtual((c) => (c - 1 + total) % total), [total]);

  useEffect(() => {
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
    setEmUso,
  };
}

function Citacao({ depoimento }: { depoimento: Depoimento }) {
  return (
    <>
      <span
        aria-hidden="true"
        className="text-cyan font-mono text-6xl leading-none opacity-20 select-none"
      >
        &ldquo;
      </span>
      <p className="text-foreground mt-2 max-w-6xl text-lg leading-relaxed lg:text-xl">
        {depoimento.texto}
      </p>
      <footer className="mt-8 flex items-center gap-4">
        <div
          aria-hidden="true"
          className="border-line bg-surface-raised text-cyan flex h-10 w-10 shrink-0 items-center justify-center rounded border font-mono text-sm font-bold"
        >
          {depoimento.autor.charAt(0)}
        </div>
        <div className="min-w-0">
          <cite className="text-foreground font-semibold not-italic">{depoimento.autor}</cite>
          {(depoimento.papel || depoimento.empresa) && (
            <p className="text-gray-text text-sm">
              {[depoimento.papel, depoimento.empresa].filter(Boolean).join(" · ")}
            </p>
          )}
        </div>
      </footer>
    </>
  );
}

export function Testimonials({ eyebrow, title, depoimentos }: TestimonialsProps) {
  const apresentacao = useApresentacao(depoimentos.length);
  const { atual, tocando, setEmUso } = apresentacao;
  const depoimento = depoimentos[atual];

  return (
    <section
      id="depoimentos"
      aria-label="Depoimentos de clientes"
      className="border-line border-t py-16 lg:py-24"
    >
      <div className="w-full px-5 sm:px-8 lg:px-10 2xl:px-14">
        <Reveal margin="-60px" className="mb-8 lg:mb-10">
          <p className="text-cyan mb-4 font-mono text-xs tracking-[0.34em] uppercase">{eyebrow}</p>
          <h2 className="text-foreground text-[length:var(--text-h2)] leading-[0.96] font-black tracking-tight">
            {title}
          </h2>
        </Reveal>

        <div
          role="region"
          aria-label="Depoimentos de clientes"
          aria-roledescription="carrossel"
          onMouseEnter={() => setEmUso(true)}
          onMouseLeave={() => setEmUso(false)}
          onFocus={() => setEmUso(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) setEmUso(false);
          }}
          className="relative"
        >
          {/* Em autoplay a troca não é anunciada: seria um depoimento inteiro lido a cada 5s. */}
          <div aria-live={tocando ? "off" : "polite"} aria-atomic="true">
            <Reveal
              key={`${depoimento.autor}-${atual}`}
              as="blockquote"
              className="border-line bg-surface rounded border p-6 sm:p-10 lg:p-14"
            >
              <Citacao depoimento={depoimento} />
            </Reveal>
          </div>
          <Controles {...apresentacao} total={depoimentos.length} />
        </div>
      </div>
    </section>
  );
}

type ControlesProps = ReturnType<typeof useApresentacao> & { total: number };

function Controles({
  atual,
  setAtual,
  proximo,
  anterior,
  pausadoPeloUsuario,
  alternarPausa,
  total,
}: ControlesProps) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
      <button type="button" onClick={anterior} aria-label="Depoimento anterior" className={BOTAO}>
        <ChevronLeftIcon aria-hidden="true" />
      </button>
      <button type="button" onClick={proximo} aria-label="Próximo depoimento" className={BOTAO}>
        <ChevronRightIcon aria-hidden="true" />
      </button>
      <div className="flex gap-1.5" role="group" aria-label="Navegar depoimentos">
        {Array.from({ length: total }, (_, i) => (
          <button
            key={i}
            type="button"
            aria-current={i === atual}
            aria-label={`Ir para depoimento ${i + 1}`}
            onClick={() => setAtual(i)}
            className="focus-visible:ring-cyan/70 flex h-11 w-11 items-center justify-center rounded focus-visible:ring-2 focus-visible:outline-none"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                i === atual ? "bg-cyan h-1 w-6" : "bg-gray-text/50 hover:bg-gray-text h-1.5 w-1.5"
              }`}
            />
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={alternarPausa}
        aria-label={pausadoPeloUsuario ? "Retomar apresentação" : "Pausar apresentação"}
        className={BOTAO}
      >
        {pausadoPeloUsuario ? <PlayIcon aria-hidden="true" /> : <PauseIcon aria-hidden="true" />}
      </button>
      <span className="text-gray-text ml-auto shrink-0 font-mono text-xs whitespace-nowrap">
        {String(atual + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
    </div>
  );
}
