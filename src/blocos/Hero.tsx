"use client";

import * as React from "react";

export type HeroStat = {
  value: React.ReactNode;
  label: string;
};

export type HeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: React.ReactNode;
  cta: { label: string; href: string };
  stats: HeroStat[];
  slot?: React.ReactNode;
  slotLabel?: string;
};

export function Hero({
  eyebrow,
  title,
  description,
  cta,
  stats,
  slot,
  slotLabel = "live process",
}: HeroProps) {
  return (
    <section
      id="hero"
      aria-label="Introdução"
      className="hero-shell relative flex min-h-[100svh] overflow-hidden border-b border-line"
    >
      <div className="hero-noise" aria-hidden="true" />
      <div className="hero-radial" aria-hidden="true" />
      <div className="hero-scanline" aria-hidden="true" />

      <div className="relative z-10 flex w-full flex-col justify-between px-5 pb-8 pt-28 sm:px-8 lg:px-10 lg:pt-32 2xl:px-14">
        <div className="grid flex-1 items-start gap-10 lg:grid-cols-[minmax(0,1.58fr)_minmax(380px,0.92fr)] lg:gap-14 2xl:grid-cols-[minmax(0,1.7fr)_minmax(460px,0.9fr)]">
          <div className="relative">
            <p className="mf-entrada mf-entrada-up-suave mb-7 max-w-md font-mono text-xs uppercase tracking-[0.32em] text-cyan">
              {eyebrow}
            </p>

            {title}

            <div
              style={{ "--mf-entrada-delay": "300ms" } as React.CSSProperties}
              className="mf-entrada mf-entrada-up mt-8 flex max-w-5xl flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
            >
              <p className="max-w-2xl text-base leading-relaxed text-gray-text sm:text-lg">
                {description}
              </p>

              <a
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit items-center gap-3 rounded border border-cyan bg-cyan px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-transparent hover:text-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70"
              >
                {cta.label}
                <span className="h-px w-8 bg-background transition-colors group-hover:bg-cyan" aria-hidden="true" />
              </a>
            </div>
          </div>

          {slot && (
            <div className="relative lg:translate-y-16">
              <div
                style={{ "--mf-entrada-delay": "560ms" } as React.CSSProperties}
                className="mf-entrada mf-entrada-up"
              >
                <div className="absolute -left-4 -top-4 hidden font-mono text-[10px] uppercase tracking-[0.25em] text-gray-text lg:block">
                  {slotLabel}
                </div>
                {slot}
              </div>
            </div>
          )}
        </div>

        <div
          style={{ "--mf-entrada-delay": "500ms" } as React.CSSProperties}
          className="mf-entrada mf-entrada-up mt-16 grid grid-cols-2 gap-5 border-t border-line pt-6 sm:grid-cols-4 lg:mt-24"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-mono text-3xl font-black text-foreground sm:text-4xl">{stat.value}</div>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-gray-text">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
