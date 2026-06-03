"use client";

import * as React from "react";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { motionEase } from "../lib/motion";

export type ProcessStep = {
  numero: string;
  titulo: string;
  descricao: string;
  duracao?: string;
  commitLabel?: string;
  commitOutput?: string;
};

export type ProcessProps = {
  eyebrow: string;
  titulo: React.ReactNode;
  descricao: React.ReactNode;
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
  const alignRight = index % 2 === 1;

  return (
    <motion.article
      initial={
        shouldAnimate
          ? { opacity: 0, y: 34, clipPath: "inset(18% 0 0 0)" }
          : {}
      }
      whileInView={
        shouldAnimate
          ? { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }
          : {}
      }
      transition={
        shouldAnimate
          ? { duration: 0.7, ease: motionEase.expoOut }
          : { duration: 0 }
      }
      viewport={shouldAnimate ? { once: true, margin: "-90px" } : undefined}
      className={`relative grid gap-5 lg:grid-cols-2 ${alignRight ? "" : "lg:[&>*]:col-start-1"}`}
    >
      <div className={alignRight ? "lg:col-start-2" : "lg:col-start-1"}>
        <div className="group relative overflow-hidden rounded border border-line bg-surface p-5 transition-colors hover:border-cyan/60 sm:p-6 lg:p-8">
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(circle at 0% 0%, rgba(61,242,224,0.08), transparent 48%)",
            }}
            aria-hidden="true"
          />

          <div className="relative">
            <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
              <div className="min-w-0">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan">
                  commit {step.numero}
                </p>
                <h3 className="mt-4 text-[clamp(1.6rem,7vw,4.8rem)] font-black leading-[0.95] tracking-tight text-foreground">
                  {step.titulo}
                </h3>
              </div>
              {step.duracao && (
                <span className="shrink-0 rounded border border-line px-3 py-1 font-mono text-xs text-gray-text">
                  {step.duracao}
                </span>
              )}
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-gray-text sm:text-base">
              {step.descricao}
            </p>

            {(step.commitLabel || step.commitOutput) && (
              <div className="mt-8 border-t border-line pt-5 font-mono">
                {step.commitLabel && (
                  <p className="break-words text-sm text-foreground">
                    <span className="text-cyan">$</span> git commit -m &ldquo;
                    {step.commitLabel}&rdquo;
                  </p>
                )}
                {step.commitOutput && (
                  <p className="mt-2 break-words text-xs text-gray-text">
                    <span className="text-cyan/70">&gt;</span>{" "}
                    {step.commitOutput}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute top-8 hidden h-4 w-4 rounded-full border border-cyan bg-background shadow-[0_0_28px_rgba(61,242,224,0.35)] lg:left-1/2 lg:block lg:-translate-x-1/2"
      />
    </motion.article>
  );
}

export function Process({ eyebrow, titulo, descricao, steps }: ProcessProps) {
  const shouldAnimate = !useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 70%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="processo"
      ref={sectionRef}
      aria-label="Processo de trabalho"
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
          className="mb-20 max-w-2xl"
        >
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.34em] text-cyan">
            {eyebrow}
          </p>
          <h2 className="text-[clamp(2.3rem,7vw,7.8rem)] font-black leading-[0.94] tracking-tight text-foreground">
            {titulo}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-text">
            {descricao}
          </p>
        </motion.div>

        <div className="process-pipeline relative">
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 hidden h-full w-px bg-line lg:left-1/2 lg:block lg:-translate-x-1/2"
          />
          <motion.div
            aria-hidden="true"
            className="absolute left-0 top-0 hidden h-full w-px origin-top bg-cyan lg:left-1/2 lg:block lg:-translate-x-1/2"
            style={{ scaleY: shouldAnimate ? lineScale : 1 }}
          />

          <div className="grid gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <PipelineCard key={step.numero} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
