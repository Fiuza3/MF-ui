import { Section } from "./shared";
import { BRAND_COLORS as C } from "../brand";

type Swatch = { hex: string; name: string; use: string; text: string };

const SWATCHES: readonly Swatch[] = [
  { hex: C.cyan, name: "Ciano", use: "Cor da marca em fundo escuro: colchetes e cursor.", text: C.ink },
  { hex: C.ink, name: "Tinta", use: "Fundo escuro e letras em fundo claro.", text: C.ice },
  { hex: C.teal, name: "Teal", use: "No lugar do ciano em fundo claro (contraste 5,6:1).", text: C.white },
  { hex: C.ice, name: "Gelo", use: "As letras MF no tom claro, sobre fundo escuro.", text: C.ink },
  { hex: C.paper, name: "Papel", use: "Fundo claro para o tom Tinta e para o ícone claro.", text: C.ink },
];

export function ColorsSection() {
  return (
    <Section id="cores" title="Cores" lead="Cinco cores fixas, em hex, para que arquivos fora do site não troquem o tom.">
      <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-5">
        {SWATCHES.map((swatch) => (
          <li key={swatch.hex} className="overflow-hidden rounded-xl border border-line bg-card">
            <div className="flex h-28 items-end p-4 font-mono text-sm font-medium" style={{ backgroundColor: swatch.hex, color: swatch.text }}>
              {swatch.hex}
            </div>
            <div className="p-4">
              <h3 className="text-base font-semibold text-foreground">{swatch.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-text">{swatch.use}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
