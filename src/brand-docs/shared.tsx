import { BRAND_COLORS } from "../brand";
import { useState, type ReactNode } from "react";

export const INK = BRAND_COLORS.ink;
export const MUTED = "text-gray-text";

export function useReplay(): readonly [number, () => void] {
  const [key, setKey] = useState(0);
  return [key, () => setKey((current) => current + 1)] as const;
}

type ReplayButtonProps = { onClick: () => void; label?: string };

export function ReplayButton({ onClick, label = "Ver de novo" }: ReplayButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex min-h-10 items-center gap-2 rounded-md border border-cyan/40 px-4 text-sm font-medium text-cyan transition-colors hover:bg-cyan/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
    >
      {label}
    </button>
  );
}

type SectionProps = { id: string; title: string; lead: string; children: ReactNode };

export function Section({ id, title, lead, children }: SectionProps) {
  return (
    <section aria-labelledby={id} className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <h2 id={id} className="max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className={`mt-4 max-w-2xl text-base leading-relaxed ${MUTED}`}>{lead}</p>
      <div className="mt-12">{children}</div>
    </section>
  );
}
