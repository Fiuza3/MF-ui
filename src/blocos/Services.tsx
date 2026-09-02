"use client";

import * as React from "react";
import { Reveal } from "../componentes/Reveal";

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
  title: React.ReactNode;
  description: React.ReactNode;
  services: ServiceItem[];
};

function ServiceCard({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) {
  return (
    <Reveal
      as="article"
      margin="-70px"
      delayMs={index * 80}
      className="group relative min-h-[200px] overflow-hidden rounded border border-line bg-surface p-5 transition-colors duration-300 hover:border-cyan/60 lg:p-6"
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
    </Reveal>
  );
}

export function Services({
  eyebrow,
  title,
  description,
  services,
}: ServicesProps) {
  return (
    <section
      id="servicos"
      aria-label="Serviços"
      className="overflow-hidden border-t border-line py-16 lg:py-24"
    >
      <div className="w-full px-5 sm:px-8 lg:px-10 2xl:px-16">
        <Reveal margin="-60px" className="mb-8 lg:mb-10">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.34em] text-cyan">{eyebrow}</p>
          <h2 className="text-[var(--text-h2)] font-black leading-[0.96] tracking-tight text-foreground">{title}</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-text">{description}</p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
