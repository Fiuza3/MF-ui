import { BrandMark } from "../componentes/BrandMark";
import type { BrandVariant } from "../brand";
import { INK } from "./shared";

export type Candidate = "symbol-block" | "symbol-tag" | "symbol-cursor";

// Cores do Chrome, em classes do Tailwind: é a moldura de terceiro, não token da marca.
type TabTheme = { label: string; bar: string; tab: string };

const TAB_THEMES: readonly TabTheme[] = [
  { label: "Navegador claro", bar: "bg-neutral-300", tab: "bg-white text-neutral-900" },
  { label: "Navegador escuro", bar: "bg-neutral-900", tab: "bg-neutral-700 text-neutral-200" },
];

function BrowserTab({ theme, variant }: { theme: TabTheme; variant: BrandVariant }) {
  return (
    <figure className="m-0">
      <div className={`flex items-end rounded-t-lg px-2 pt-2 ${theme.bar}`}>
        <div
          className={`flex min-w-0 max-w-[260px] items-center gap-2 rounded-t-lg px-3 py-2 ${theme.tab}`}
        >
          <BrandMark variant={variant} tone="cyan" height={16} decorative />
          <span className="truncate text-xs">MF Desenvolvimento — Sites e sistemas</span>
        </div>
      </div>
      <figcaption className="mt-2 text-xs text-gray-text">
        {theme.label}, favicon em 16 px reais
      </figcaption>
    </figure>
  );
}

export function BrowserTabs({ variant }: { variant: BrandVariant }) {
  return (
    <div className="flex flex-col gap-4">
      {TAB_THEMES.map((theme) => (
        <BrowserTab key={theme.label} theme={theme} variant={variant} />
      ))}
    </div>
  );
}

function IconFrame({
  size,
  shape,
  variant,
}: {
  size: number;
  shape: string;
  variant: BrandVariant;
}) {
  const inner = shape === "rounded-full" ? size * 0.8 : size;
  return (
    <div
      className={`flex shrink-0 items-center justify-center overflow-hidden ${shape}`}
      style={{
        width: size,
        height: size,
        backgroundColor: INK,
        boxShadow: "0 0 0 1px color-mix(in srgb, var(--foreground) 12%, transparent)",
      }}
    >
      <BrandMark variant={variant} tone="cyan" height={inner} decorative />
    </div>
  );
}

export function AppIcons({ variant }: { variant: BrandVariant }) {
  return (
    <div className="flex items-start gap-8">
      <figure className="m-0 flex w-[76px] flex-col items-center gap-2">
        <IconFrame size={60} shape="rounded-[22%]" variant={variant} />
        <figcaption className="text-center text-xs text-foreground">MF Dev</figcaption>
        <span className="text-center text-xs text-gray-text">iPhone, 60 px</span>
      </figure>
      <figure className="m-0 flex w-[76px] flex-col items-center gap-2">
        <IconFrame size={48} shape="rounded-full" variant={variant} />
        <figcaption className="text-center text-xs text-foreground">MF Dev</figcaption>
        <span className="text-center text-xs text-gray-text">Android, 48 px</span>
      </figure>
    </div>
  );
}

const LADDER = [16, 32, 48, 64, 128] as const;

export function SizeLadder({ variant }: { variant: BrandVariant }) {
  return (
    // Quebra de linha: 16+32+48+64+128 px com os espaços passam da largura do card.
    <ul className="m-0 flex list-none flex-wrap items-end gap-x-4 gap-y-3 p-0">
      {LADDER.map((size) => (
        <li key={size} className="flex flex-col items-center gap-2">
          <BrandMark variant={variant} tone="cyan" height={size} decorative />
          <span className="text-xs text-gray-text">{size}</span>
        </li>
      ))}
    </ul>
  );
}
