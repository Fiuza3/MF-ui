import type { CSSProperties } from "react";
import { BrandMark } from "../componentes/BrandMark";
import { layoutBrand } from "../brand";
import { MUTED, Section } from "./shared";

const MARK_HEIGHT = 96;
const M_HEIGHT_UNITS = 710;

// A área de proteção usa a altura da letra M como medida; derivar do layout evita
// que o desenho diverga se o viewBox da marca mudar.
function protectionMargin(): number {
  const { viewBox } = layoutBrand("horizontal");
  return (M_HEIGHT_UNITS / viewBox.height) * MARK_HEIGHT;
}

// A largura da marca segue o viewBox; para travar 80 px de largura, deriva-se a altura.
function heightForWidth(width: number): number {
  const { viewBox } = layoutBrand("horizontal");
  return (width * viewBox.height) / viewBox.width;
}

function ProtectionArea() {
  const margin = protectionMargin();
  const dashed = "1.5px dashed color-mix(in srgb, var(--cyan) 70%, transparent)";
  return (
    <figure className="m-0">
      <div className="overflow-x-auto">
        <div className="relative inline-block" style={{ padding: margin, border: dashed }}>
          <BrandMark variant="horizontal" tone="cyan" height={MARK_HEIGHT} decorative />
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 flex items-center justify-center font-mono text-xs text-cyan"
            style={{ width: margin, height: margin, borderRight: dashed, borderBottom: dashed }}
          >
            M
          </span>
        </div>
      </div>
      <figcaption className={`mt-3 max-w-md text-sm ${MUTED}`}>
        Deixe livre, em volta da marca, o espaço de uma letra M. Nada de texto, borda ou imagem dentro da linha tracejada.
      </figcaption>
    </figure>
  );
}

function MinimumSizes() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-foreground">Tamanho mínimo</h3>
      <div className="flex flex-wrap items-end gap-10">
        <div className="flex flex-col gap-2">
          <BrandMark variant="horizontal" tone="cyan" height={heightForWidth(80)} decorative />
          <span className={`text-xs ${MUTED}`}>Horizontal: 80 px de largura</span>
        </div>
        <div className="flex flex-col gap-2">
          <BrandMark variant="symbol-block" tone="cyan" height={16} decorative />
          <span className={`text-xs ${MUTED}`}>Símbolo: 16 px</span>
        </div>
      </div>
    </div>
  );
}

type Mistake = { label: string; style: CSSProperties; color?: string };

const MISTAKES: readonly Mistake[] = [
  { label: "Distorcer ou esticar", style: { transform: "scale(1.5, 0.65)", transformOrigin: "left center" } },
  { label: "Recolorir fora dos tons", style: {}, color: "var(--warning)" },
  { label: "Aplicar sombra ou brilho", style: { filter: "drop-shadow(3px 4px 3px var(--background)) drop-shadow(0 0 8px var(--warning))" } },
];

function Mistakes() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-foreground">Não faça</h3>
      <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-3">
        {MISTAKES.map((mistake) => (
          <li key={mistake.label} className="flex flex-col gap-3 rounded-lg border border-destructive/40 bg-card p-4">
            <div className="flex h-16 items-center overflow-hidden">
              <div style={mistake.style}>
                <BrandMark variant="horizontal" tone="cyan" height={24} color={mistake.color} decorative />
              </div>
            </div>
            <span className="text-sm text-destructive">Não: {mistake.label.toLowerCase()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ConstructionSection() {
  return (
    <Section id="construcao" title="Construção e uso" lead="Três regras que mantêm a marca reconhecível em qualquer lugar.">
      <div className="flex flex-col gap-16">
        <ProtectionArea />
        <MinimumSizes />
        <Mistakes />
      </div>
    </Section>
  );
}
