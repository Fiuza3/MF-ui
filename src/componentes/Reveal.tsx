"use client";

import * as React from "react";

export type RevealProps = {
  as?: keyof React.JSX.IntrinsicElements;
  variant?: "up" | "left";
  delayMs?: number;
  margin?: string;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLElement>, "className" | "children">;

/* O servidor renderiza SEM classe de escondido — se o JS nunca rodar,
   o conteudo continua visivel. Esconder e responsabilidade exclusiva
   do efeito pos-mount.

   As classes entram e saem por classList, nao por estado: o efeito aqui
   sincroniza o DOM com um observer externo, e um setState no corpo do
   efeito custaria uma renderizacao em cascata a cada Reveal da pagina. */
export function Reveal({
  as = "div",
  variant = "up",
  delayMs = 0,
  margin = "-70px",
  className,
  children,
  ...rest
}: RevealProps) {
  const ref = React.useRef<HTMLElement | null>(null);
  const escondido = variant === "left" ? "mf-reveal-hidden-left" : "mf-reveal-hidden";

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof window.IntersectionObserver === "undefined") return;

    el.classList.add(escondido);

    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          el.classList.remove(escondido);
          el.classList.add("mf-reveal-visible");
          observer.disconnect();
        }
      },
      { rootMargin: margin },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      el.classList.remove(escondido, "mf-reveal-visible");
    };
  }, [margin, escondido]);

  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref}
      className={className}
      style={
        delayMs ? ({ "--mf-entrada-delay": `${delayMs}ms` } as React.CSSProperties) : undefined
      }
      {...rest}
    >
      {children}
    </Tag>
  );
}
