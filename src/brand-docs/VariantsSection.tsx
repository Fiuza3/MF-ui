import { BrandMark } from "../componentes/BrandMark";
import { BRAND_COLORS as C } from "../brand";
import { BRAND_VARIANTS, GLYPHS, layoutBrand, type BrandTone, type BrandVariant } from "../brand";
import { Section } from "./shared";

type ToneDoc = { tone: BrandTone; name: string; use: string; background: string; dark: boolean };

const TONE_DOCS: readonly ToneDoc[] = [
  {
    tone: "cyan",
    name: "Ciano",
    use: "Padrão em fundo escuro. Colchetes mais suaves, o MF em destaque.",
    background: C.ink,
    dark: true,
  },
  {
    tone: "light",
    name: "Claro",
    use: "Fundo escuro quando o MF precisa de mais peso: branco com colchetes ciano.",
    background: C.ink,
    dark: true,
  },
  {
    tone: "ink",
    name: "Tinta",
    use: "Fundo claro. Tinta com colchetes em teal, que mantém o contraste.",
    background: C.paper,
    dark: false,
  },
  {
    tone: "solid-black",
    name: "Preto chapado",
    use: "Uma cor só: carimbo, gravação, fax, impressão em preto e branco.",
    background: C.white,
    dark: false,
  },
  {
    tone: "solid-white",
    name: "Branco chapado",
    use: "Uma cor só sobre fundo escuro ou foto: gravação, bordado, vinil.",
    background: C.ink,
    dark: true,
  },
];

// Mesma altura de maiúscula para as variantes de texto: o viewBox da horizontal
// inclui a barra, que sobe e desce além do M, e com altura igual ela parecia menor.
const CAP_PX = 40;
const SYMBOL_PX = 72;
const CAP_UNITS = GLYPHS.M.box.y2 - GLYPHS.M.box.y1;

function heightFor(variant: BrandVariant): number {
  const layout = layoutBrand(variant);
  if (layout.tile) return SYMBOL_PX;
  return Math.round((CAP_PX * layout.viewBox.height) / CAP_UNITS);
}

const VARIANT_NAMES: Record<BrandVariant, string> = {
  horizontal: "Horizontal",
  monogram: "Monograma",
  "symbol-block": "Símbolo bloco",
  "symbol-tag": "Símbolo tag",
  "symbol-cursor": "Símbolo cursor",
};

function ToneRow({ doc }: { doc: ToneDoc }) {
  const caption = doc.dark ? "text-gray-text" : "text-slate-600";
  const border = doc.dark ? "border-line" : "border-slate-200";
  return (
    <div
      className={`overflow-hidden rounded-xl border ${border}`}
      style={{ backgroundColor: doc.background }}
    >
      <div className="p-6 sm:p-8">
        <h3 className={`text-lg font-semibold ${doc.dark ? "text-foreground" : "text-background"}`}>
          {doc.name}
        </h3>
        <p className={`mt-1 max-w-xl text-sm ${caption}`}>{doc.use}</p>
        <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {BRAND_VARIANTS.map((variant) => (
            <li key={variant} className="flex flex-col items-start gap-3">
              <div className="flex h-16 items-center">
                <BrandMark
                  variant={variant}
                  tone={doc.tone}
                  height={heightFor(variant)}
                  decorative
                />
              </div>
              <span className={`text-xs ${caption}`}>{VARIANT_NAMES[variant]}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function VariantsSection() {
  return (
    <Section
      id="variantes"
      title="Variantes e tons"
      lead="Cinco formas, cinco tons. Cada tom aparece sobre o fundo para o qual foi feito."
    >
      <div className="flex flex-col gap-6">
        {TONE_DOCS.map((doc) => (
          <ToneRow key={doc.tone} doc={doc} />
        ))}
      </div>
    </Section>
  );
}
