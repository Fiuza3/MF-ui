import { BRAND_TONES, BRAND_VARIANTS } from "../brand";
import { Section } from "./shared";

type FileLink = { href: string; label: string };

const LINK_CLASS =
  "inline-flex min-h-10 items-center rounded-md border border-line px-3 text-sm text-foreground transition-colors hover:border-cyan/60 hover:text-cyan focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan";

const SVG_LINKS: readonly FileLink[] = BRAND_VARIANTS.flatMap((variant) =>
  BRAND_TONES.map((tone) => ({ href: `/brand/svg/${variant}-${tone}.svg`, label: `${variant}-${tone}.svg` })),
);

// Site estático não lista pasta: cada conjunto sai como .zip gerado por scripts/brand/packages.mjs.
const PACKAGE_LINKS: readonly FileLink[] = [
  { href: "/brand/zip/mf-marca-completa.zip", label: "Pacote completo (.zip)" },
  { href: "/brand/zip/mf-marca-svg.zip", label: "Todos os SVG (.zip)" },
  { href: "/brand/zip/mf-marca-png.zip", label: "Todos os PNG, 16 a 1024px (.zip)" },
  { href: "/brand/zip/mf-marca-animada.zip", label: "Animados WebP e GIF (.zip)" },
];

const FAVICON_LINKS: readonly FileLink[] = [
  { href: "/brand/zip/mf-favicon-symbol-block.zip", label: "Favicon: Bloco (MF_)" },
  { href: "/brand/zip/mf-favicon-symbol-tag.zip", label: "Favicon: Tag (</>)" },
  { href: "/brand/zip/mf-favicon-symbol-cursor.zip", label: "Favicon: Cursor (<M>▮)" },
];

const SOCIAL_LINKS: readonly FileLink[] = [
  { href: "/brand/png/social/og-1200x630.png", label: "Card de compartilhamento 1200×630" },
  { href: "/brand/png/social/banner-1500x500.png", label: "Banner 1500×500" },
  { href: "/brand/png/social/avatar-400.png", label: "Avatar 400×400" },
  { href: "/brand/png/social/avatar-1080.png", label: "Avatar 1080×1080" },
  { href: "/brand/README.md", label: "README com as regras de uso" },
];

function LinkGroup({ title, links }: { title: string; links: readonly FileLink[] }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <ul className="m-0 mt-4 flex list-none flex-wrap gap-2 p-0">
        {links.map((link) => (
          <li key={link.href}>
            <a className={LINK_CLASS} href={link.href} download>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function DownloadsSection() {
  return (
    <Section id="downloads" title="Downloads" lead="Todos os arquivos da marca, prontos para baixar.">
      <div className="flex flex-col gap-12">
        <LinkGroup title="Pacotes" links={PACKAGE_LINKS} />
        <LinkGroup title="Pacote de favicon de cada símbolo" links={FAVICON_LINKS} />
        <LinkGroup title="Redes sociais e documentação" links={SOCIAL_LINKS} />
        <LinkGroup title="SVG por variante e tom" links={SVG_LINKS} />
      </div>
    </Section>
  );
}
