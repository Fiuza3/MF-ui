import { BrandMarkAnimated } from "../componentes/BrandMarkAnimated";
import type { BrandAnimation } from "../brand";
import { MUTED, ReplayButton, Section, useReplay } from "./shared";

type AnimationDoc = { animation: BrandAnimation; name: string; use: string };

const ANIMATION_DOCS: readonly AnimationDoc[] = [
  { animation: "assemble", name: "Montagem", use: "Entrada da página: as peças se encaixam uma a uma." },
  { animation: "type", name: "Digitação", use: "Splash e vídeos curtos: o nome é escrito com um cursor." },
  { animation: "draw", name: "Traço", use: "Assinatura de vídeo e fecho de apresentação: o contorno se desenha." },
  { animation: "pulse", name: "Pulso (loop)", use: "Carregamento: repete sozinho enquanto algo está em andamento." },
  { animation: "spread", name: "Abertura (passe o mouse)", use: "Hover do logo da navegação: os colchetes se afastam." },
];

function AnimationCard({ doc }: { doc: AnimationDoc }) {
  const [replayKey, replay] = useReplay();
  return (
    <article className="flex flex-col gap-6 rounded-xl border border-line bg-card p-6">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{doc.name}</h3>
          <p className={`mt-1 max-w-md text-sm ${MUTED}`}>{doc.use}</p>
        </div>
        <ReplayButton onClick={replay} />
      </header>
      <div className="grid grid-cols-1 items-center gap-8 rounded-lg bg-background px-6 py-10 sm:grid-cols-[2fr_1fr]">
        <div className="flex justify-center">
          <BrandMarkAnimated animation={doc.animation} variant="horizontal" tone="cyan" height={44} replayKey={replayKey} decorative />
        </div>
        <div className="flex justify-center">
          <BrandMarkAnimated animation={doc.animation} variant="symbol-block" tone="cyan" height={64} replayKey={replayKey} decorative />
        </div>
      </div>
    </article>
  );
}

export function AnimationsSection() {
  return (
    <Section id="animacoes" title="Animações" lead="Cada animação tem um lugar certo. Use no máximo uma por tela.">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {ANIMATION_DOCS.map((doc) => (
          <AnimationCard key={doc.animation} doc={doc} />
        ))}
      </div>
    </Section>
  );
}
