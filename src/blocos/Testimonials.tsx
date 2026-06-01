"use client";

import * as React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AUTOPLAY_MS = 5000;

export type Depoimento = {
  texto: string;
  autor: string;
  papel?: string;
  empresa?: string;
};

export type TestimonialsProps = {
  eyebrow: string;
  titulo: React.ReactNode;
  depoimentos: Depoimento[];
};

export function Testimonials({
  eyebrow,
  titulo,
  depoimentos,
}: TestimonialsProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % depoimentos.length);
  }, [depoimentos.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + depoimentos.length) % depoimentos.length);
  }, [depoimentos.length]);

  useEffect(() => {
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

  return (
    <section
      id="depoimentos"
      aria-label="Depoimentos de clientes"
      className="py-32 border-t border-line"
    >
      <div className="w-full px-5 sm:px-8 lg:px-10 2xl:px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-cyan tracking-widest uppercase mb-4">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-bold text-balance lg:text-4xl">
            {titulo}
          </h2>
        </motion.div>

        <div
          role="region"
          aria-label="Depoimentos de clientes"
          aria-roledescription="carrossel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative"
        >
          <div aria-live="polite" aria-atomic="true">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={`${t.autor}-${current}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="rounded border border-line bg-surface p-10 lg:p-14"
              >
                <span
                  aria-hidden="true"
                  className="font-mono text-6xl text-cyan opacity-20 leading-none select-none"
                >
                  &ldquo;
                </span>

                <p className="mt-2 max-w-6xl text-lg leading-relaxed text-foreground lg:text-xl">
                  {t.texto}
                </p>

                <footer className="mt-8 flex items-center gap-4">
                  <div
                    aria-hidden="true"
                    className="flex h-10 w-10 items-center justify-center rounded border border-line bg-surface-raised font-mono text-sm font-bold text-cyan"
                  >
                    {t.autor.charAt(0)}
                  </div>
                  <div>
                    <cite className="not-italic font-semibold text-foreground">
                      {t.autor}
                    </cite>
                    {(t.papel || t.empresa) && (
                      <p className="text-sm text-gray-text">
                        {[t.papel, t.empresa].filter(Boolean).join(" · ")}
                      </p>
                    )}
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <button
              onClick={prev}
              aria-label="Depoimento anterior"
              className="flex h-11 w-11 items-center justify-center rounded border border-line text-gray-text hover:border-cyan hover:text-cyan transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70"
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              onClick={next}
              aria-label="Próximo depoimento"
              className="flex h-11 w-11 items-center justify-center rounded border border-line text-gray-text hover:border-cyan hover:text-cyan transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70"
            >
              <span aria-hidden="true">›</span>
            </button>

            <div className="flex gap-1.5" role="tablist" aria-label="Navegar depoimentos">
              {depoimentos.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  onClick={() => setCurrent(i)}
                  className="h-11 w-11 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70 rounded"
                >
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      i === current
                        ? "h-1 w-6 bg-cyan"
                        : "h-1.5 w-1.5 bg-line hover:bg-gray-text"
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={() => setUserPaused((p) => !p)}
              aria-label={
                userPaused ? "Retomar apresentação" : "Pausar apresentação"
              }
              className="flex h-11 w-11 items-center justify-center rounded border border-line text-gray-text hover:border-cyan hover:text-cyan transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70"
            >
              <span aria-hidden="true">{userPaused ? "▶" : "⏸"}</span>
            </button>
            <span className="ml-auto font-mono text-xs text-gray-text">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(depoimentos.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
