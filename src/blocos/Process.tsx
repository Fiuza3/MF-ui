"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { motionEase } from "../lib/motion";

export type ProcessStep = {
  numero: string;
  title: string;
  description: string;
  duracao?: string;
  commitLabel?: string;
  commitOutput?: string;
};

export type ProcessProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: React.ReactNode;
  steps: ProcessStep[];
};

function PipelineCard({
  step,
  index,
}: {
  step: ProcessStep;
  index: number;
}) {
  const shouldAnimate = !useReducedMotion();

  return (
    <motion.article
      initial={shouldAnimate ? { opacity: 0, y: 24 } : {}}
      whileInView={shouldAnimate ? { opacity: 1, y: 0 } : {}}
      transition={
        shouldAnimate
          ? { delay: index * 0.06, duration: 0.55, ease: motionEase.expoOut }
          : { duration: 0 }
      }
      viewport={shouldAnimate ? { once: true, margin: "-60px" } : undefined}
      className="group relative flex h-full flex-col overflow-hidden rounded border border-line bg-surface p-5 transition-colors hover:border-cyan/60 lg:p-6"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 0% 0%, rgba(61,242,224,0.07), transparent 52%)",
        }}
        aria-hidden="true"
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan">
            {step.numero}
          </p>
          {step.duracao && (
            <span className="shrink-0 rounded border border-line px-2 py-0.5 font-mono text-[10px] text-gray-text">
              {step.duracao}
            </span>
          )}
        </div>

        <h3 className="mt-3 text-[clamp(1.25rem,2.2vw,1.75rem)] font-black leading-[1.05] tracking-tight text-foreground">
          {step.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-text">
          {step.description}
        </p>

        {(step.commitLabel || step.commitOutput) && (
          <div className="mt-4 border-t border-line pt-3 font-mono">
            {step.commitLabel && (
              <p className="truncate text-xs text-foreground">
                <span className="text-cyan">$</span>{" "}
                {step.commitLabel}
              </p>
            )}
            {step.commitOutput && (
              <p className="mt-1 truncate text-[11px] text-gray-text">
                <span className="text-cyan/60">&gt;</span>{" "}
                {step.commitOutput}
              </p>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export function Process({ eyebrow, title, description, steps }: ProcessProps) {
  const shouldAnimate = !useReducedMotion();

  return (
    <section
      id="processo"
      aria-label="Processo de trabalho"
      className="relative overflow-hidden border-t border-line py-16 lg:py-24"
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
          className="mb-8 lg:mb-10"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.34em] text-cyan">
            {eyebrow}
          </p>
          <h2 className="text-[var(--text-h2)] font-black leading-[0.96] tracking-tight text-foreground">
            {title}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-text">
            {description}
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {steps.map((step, index) => (
            <PipelineCard key={step.numero} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
