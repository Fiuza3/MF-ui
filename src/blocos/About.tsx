"use client";

import * as React from "react";
import { Reveal } from "../componentes/Reveal";

export type AboutProps = {
  eyebrow: string;
  title: React.ReactNode;
  paragrafos: React.ReactNode[];
  slotLateral?: React.ReactNode;
};

export function About({
  eyebrow,
  title,
  paragrafos,
  slotLateral,
}: AboutProps) {
  return (
    <section
      id="sobre"
      aria-label="Sobre"
      className="relative overflow-hidden py-16 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" />

      <div className="w-full px-5 sm:px-8 lg:px-10 2xl:px-14">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.5fr)_minmax(360px,0.86fr)] lg:items-start 2xl:grid-cols-[minmax(0,1.7fr)_minmax(460px,0.8fr)]">
          <Reveal as="div" margin="-80px">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.34em] text-cyan">
              {eyebrow}
            </p>

            <h2 className="text-[var(--text-h2)] font-black leading-[0.94] tracking-tight text-foreground">
              {title}
            </h2>

            <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]">
              {paragrafos.map((paragrafo, index) => (
                <Reveal
                  key={index}
                  as="div"
                  margin="-80px"
                  delayMs={index * 60}
                  className="text-base leading-relaxed text-gray-text lg:text-lg"
                >
                  {paragrafo}
                </Reveal>
              ))}
            </div>
          </Reveal>

          {slotLateral && (
            <Reveal
              as="aside"
              margin="-80px"
              delayMs={120}
              className="rounded border border-line bg-surface font-mono lg:sticky lg:top-28"
            >
              {slotLateral}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
