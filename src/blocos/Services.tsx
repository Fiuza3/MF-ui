"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { motionEase } from "../lib/motion";
import { cn } from "../lib/cn";

export type ServiceItem = {
  id: string;
  tag: string;
  title: string;
  description: string;
  items: string[];
  motif?: React.ReactNode;
};

export type ServicesProps = {
  eyebrow: string;
  titulo: React.ReactNode;
  descricao: React.ReactNode;
  services: ServiceItem[];
};

function ServiceCard({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) {
  const shouldAnimate = !useReducedMotion();
  const isWide = service.id === "apis";
  const isTall = service.id === "web-apps";

  return (
    <motion.article
      initial={shouldAnimate ? { opacity: 0, y: 28 } : {}}
      whileInView={shouldAnimate ? { opacity: 1, y: 0 } : {}}
      transition={
        shouldAnimate
          ? { delay: index * 0.08, duration: 0.64, ease: motionEase.expoOut }
          : { duration: 0 }
      }
      viewport={shouldAnimate ? { once: true, margin: "-70px" } : undefined}
      className={cn(
        "group relative min-h-[320px] overflow-hidden rounded border border-line bg-surface p-6 transition-colors duration-300 hover:border-cyan/60 sm:min-h-[360px] lg:p-8",
        isWide && "lg:col-span-2",
        isTall && "lg:row-span-2",
        index === 0 && "lg:-translate-y-10",
        index === 3 && "lg:translate-y-10",
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 24% 0%, rgba(61,242,224,0.08), transparent 46%)",
        }}
        aria-hidden="true"
      />

      <div className="relative flex h-full flex-col justify-between gap-8">
        <div>
          <div className="flex items-center justify-between gap-4">
            <span className="font-mono text-xs text-cyan">{service.tag}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-gray-text">
              {service.id}
            </span>
          </div>

          <h3 className="mt-5 text-[clamp(1.6rem,3vw,3.2rem)] font-black leading-none tracking-tight text-foreground">
            {service.title}
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-text lg:text-base">
            {service.description}
          </p>
        </div>

        {service.motif}

        <ul
          className="grid gap-2 sm:grid-cols-2"
          aria-label={`Itens de ${service.title}`}
        >
          {service.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-gray-text"
            >
              <span
                className="mt-0.5 font-mono text-cyan"
                aria-hidden="true"
              >
                /
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export function Services({
  eyebrow,
  titulo,
  descricao,
  services,
}: ServicesProps) {
  const shouldAnimate = !useReducedMotion();

  return (
    <section
      id="servicos"
      aria-label="Serviços"
      className="overflow-hidden border-t border-line py-24 lg:py-40"
    >
      <div className="w-full px-5 sm:px-8 lg:px-10 2xl:px-14">
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 22 } : {}}
          whileInView={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={
            shouldAnimate
              ? { duration: 0.68, ease: motionEase.expoOut }
              : { duration: 0 }
          }
          viewport={shouldAnimate ? { once: true, margin: "-60px" } : undefined}
          className="mb-14 max-w-2xl lg:mb-20"
        >
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.34em] text-cyan">
            {eyebrow}
          </p>
          <h2 className="text-[clamp(2.25rem,6vw,6.6rem)] font-black leading-[0.94] tracking-tight text-foreground">
            {titulo}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-text">
            {descricao}
          </p>
        </motion.div>

        <div className="grid auto-rows-fr gap-6 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
