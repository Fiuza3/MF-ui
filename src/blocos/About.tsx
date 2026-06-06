"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { motionEase } from "../lib/motion";

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
  const shouldAnimate = !useReducedMotion();

  return (
    <section
      id="sobre"
      aria-label="Sobre"
      className="relative overflow-hidden py-16 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" />

      <div className="w-full px-5 sm:px-8 lg:px-10 2xl:px-14">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.5fr)_minmax(360px,0.86fr)] lg:items-start 2xl:grid-cols-[minmax(0,1.7fr)_minmax(460px,0.8fr)]">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 28 } : {}}
            whileInView={shouldAnimate ? { opacity: 1, y: 0 } : {}}
            transition={
              shouldAnimate
                ? { duration: 0.74, ease: motionEase.expoOut }
                : { duration: 0 }
            }
            viewport={
              shouldAnimate ? { once: true, margin: "-80px" } : undefined
            }
          >
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.34em] text-cyan">
              {eyebrow}
            </p>

            <h2 className="text-[var(--text-h2)] font-black leading-[0.94] tracking-tight text-foreground">
              {title}
            </h2>

            <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]">
              {paragrafos.map((paragrafo, index) => (
                <motion.div
                  key={index}
                  initial={
                    shouldAnimate ? { opacity: 0, y: 18 } : {}
                  }
                  whileInView={
                    shouldAnimate ? { opacity: 1, y: 0 } : {}
                  }
                  transition={
                    shouldAnimate
                      ? {
                          delay: index * 0.06,
                          duration: 0.48,
                          ease: motionEase.powerOut,
                        }
                      : { duration: 0 }
                  }
                  viewport={
                    shouldAnimate ? { once: true, margin: "-80px" } : undefined
                  }
                  className="text-base leading-relaxed text-gray-text lg:text-lg"
                >
                  {paragrafo}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {slotLateral && (
            <motion.aside
              initial={shouldAnimate ? { opacity: 0, y: 40 } : {}}
              whileInView={shouldAnimate ? { opacity: 1, y: 0 } : {}}
              transition={
                shouldAnimate
                  ? { delay: 0.12, duration: 0.74, ease: motionEase.expoOut }
                  : { duration: 0 }
              }
              viewport={
                shouldAnimate ? { once: true, margin: "-80px" } : undefined
              }
              className="rounded border border-line bg-surface font-mono lg:sticky lg:top-28"
            >
              {slotLateral}
            </motion.aside>
          )}
        </div>
      </div>
    </section>
  );
}
