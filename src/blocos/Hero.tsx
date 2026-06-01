"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { motionEase } from "../lib/motion";

export type HeroStat = {
  value: React.ReactNode;
  label: string;
};

export type HeroProps = {
  eyebrow: string;
  headline: React.ReactNode;
  descricao: React.ReactNode;
  cta: { label: string; href: string };
  stats: HeroStat[];
  slotLateral?: React.ReactNode;
  slotLateralLabel?: string;
};

export function Hero({
  eyebrow,
  headline,
  descricao,
  cta,
  stats,
  slotLateral,
  slotLateralLabel = "live process",
}: HeroProps) {
  const shouldAnimate = !useReducedMotion();

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
            <motion.p
              initial={shouldAnimate ? { opacity: 0, y: 12 } : {}}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
              transition={shouldAnimate ? { duration: 0.6, ease: motionEase.expoOut } : { duration: 0 }}
              className="mb-7 max-w-md font-mono text-xs uppercase tracking-[0.32em] text-cyan"
            >
              {eyebrow}
            </motion.p>

            {headline}

            <motion.div
              initial={shouldAnimate ? { opacity: 0, y: 20 } : {}}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
              transition={shouldAnimate ? { delay: 0.3, duration: 0.7, ease: motionEase.expoOut } : { duration: 0 }}
              className="mt-8 flex max-w-5xl flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
            >
              <p className="max-w-2xl text-base leading-relaxed text-gray-text sm:text-lg">
                {descricao}
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
            </motion.div>
          </div>

          {slotLateral && (
            <motion.div
              initial={shouldAnimate ? { opacity: 0, y: 36, rotate: -1.5 } : {}}
              animate={shouldAnimate ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={shouldAnimate ? { delay: 0.56, duration: 0.9, ease: motionEase.expoOut } : { duration: 0 }}
              className="relative lg:translate-y-16"
            >
              <div className="absolute -left-4 -top-4 hidden font-mono text-[10px] uppercase tracking-[0.25em] text-gray-text lg:block">
                {slotLateralLabel}
              </div>
              {slotLateral}
            </motion.div>
          )}
        </div>

        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : {}}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={shouldAnimate ? { delay: 0.5, duration: 0.7, ease: motionEase.expoOut } : { duration: 0 }}
          className="mt-16 grid grid-cols-2 gap-5 border-t border-line pt-6 sm:grid-cols-4 lg:mt-24"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-mono text-3xl font-black text-foreground sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-gray-text">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
