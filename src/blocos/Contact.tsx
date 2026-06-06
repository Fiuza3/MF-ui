"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { motionEase } from "../lib/motion";

export type ContactProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: React.ReactNode;
  cta: { label: string; href: string };
  email?: string;
  slotFormulario?: React.ReactNode;
};

export function Contact({
  eyebrow,
  title,
  description,
  cta,
  email,
  slotFormulario,
}: ContactProps) {
  const shouldAnimate = !useReducedMotion();

  return (
    <section
      id="contato"
      aria-label="Iniciar projeto"
      className="relative overflow-hidden border-t border-line py-16 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" />

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
          className="mb-10 lg:mb-12"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.34em] text-cyan">
            <span lang="en">{eyebrow}</span>
          </p>
          <h2 className="text-[var(--text-h2)] font-black leading-[0.96] tracking-tight text-foreground">
            {title}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-text">
            {description}
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.55fr] lg:items-start 2xl:grid-cols-[0.58fr_1.7fr]">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 28 } : {}}
            whileInView={shouldAnimate ? { opacity: 1, y: 0 } : {}}
            transition={
              shouldAnimate
                ? { duration: 0.64, ease: motionEase.expoOut }
                : { duration: 0 }
            }
            viewport={
              shouldAnimate ? { once: true, margin: "-80px" } : undefined
            }
            className="grid gap-4"
          >
            <a
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded border border-line bg-surface p-5 transition-colors hover:border-cyan/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded border border-line bg-background text-gray-text transition-colors group-hover:border-cyan group-hover:text-cyan">
                <span aria-hidden="true">💬</span>
              </span>
              <div>
                <p className="font-mono text-sm text-foreground">{cta.label}</p>
                <p className="mt-1 text-xs text-gray-text">
                  para quando o escopo já está claro
                </p>
              </div>
            </a>

            {email && (
              <a
                href={`mailto:${email}`}
                className="group flex items-center gap-4 rounded border border-line bg-surface p-5 transition-colors hover:border-cyan/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded border border-line bg-background text-gray-text transition-colors group-hover:border-cyan group-hover:text-cyan">
                  <span aria-hidden="true">✉</span>
                </span>
                <div>
                  <p className="font-mono text-sm text-foreground">{email}</p>
                  <p className="mt-1 text-xs text-gray-text">
                    para materiais e projetos maiores
                  </p>
                </div>
              </a>
            )}

            <div className="rounded border border-line bg-surface p-5 font-mono">
              <p className="text-[10px] uppercase tracking-[0.24em] text-gray-text">
                contract mode
              </p>
              <p className="mt-4 text-sm text-foreground">PJ / NFS-e / remoto</p>
              <p className="mt-2 text-xs leading-relaxed text-gray-text">
                O objetivo é sair da primeira conversa com risco, escopo e
                próximo passo claros.
              </p>
            </div>
          </motion.div>

          {slotFormulario && (
            <motion.div
              initial={shouldAnimate ? { opacity: 0, y: 36 } : {}}
              whileInView={shouldAnimate ? { opacity: 1, y: 0 } : {}}
              transition={
                shouldAnimate
                  ? { delay: 0.08, duration: 0.7, ease: motionEase.expoOut }
                  : { duration: 0 }
              }
              viewport={
                shouldAnimate ? { once: true, margin: "-80px" } : undefined
              }
            >
              {slotFormulario}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
