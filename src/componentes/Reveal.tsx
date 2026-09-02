"use client";

import * as React from "react";

export type RevealProps = {
  as?: keyof React.JSX.IntrinsicElements;
  variant?: "up" | "left";
  delayMs?: number;
  margin?: string;
  className?: string;
  children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLElement>, "className" | "children">;

/* O servidor renderiza SEM classe de escondido — se o JS nunca rodar,
   o conteudo continua visivel. Esconder e responsabilidade exclusiva
   do efeito pos-mount. */
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
  const [state, setState] = React.useState<"ssr" | "hidden" | "visible">("ssr");

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof window.IntersectionObserver === "undefined") return;

    setState("hidden");
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setState("visible");
          observer.disconnect();
        }
      },
      { rootMargin: margin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [margin]);

  const Tag = as as React.ElementType;
  const escondido = variant === "left" ? "mf-reveal-hidden-left" : "mf-reveal-hidden";
  const revealClass =
    state === "hidden" ? escondido : state === "visible" ? "mf-reveal-visible" : "";

  return (
    <Tag
      ref={ref}
      className={[className, revealClass].filter(Boolean).join(" ")}
      style={delayMs ? ({ "--mf-entrada-delay": `${delayMs}ms` } as React.CSSProperties) : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
