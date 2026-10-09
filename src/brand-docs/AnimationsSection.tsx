import { BrandMarkAnimated } from "../componentes/BrandMarkAnimated";
import { BrandMarkLive } from "../componentes/BrandMarkLive";
import type { BrandAnimation } from "../brand";
import { MUTED, ReplayButton, Section, useReplay } from "./shared";

type AnimationDoc = { animation: BrandAnimation; name: string; use: string };

const ANIMATION_DOCS: readonly AnimationDoc[] = [
  {
    animation: "assemble",
    name: "Montagem",
    use: "Entrada da página: as peças se encaixam uma a uma.",
  },
  {
    animation: "type",
    name: "Digitação",
    use: "Splash e vídeos curtos: o nome é escrito com um cursor.",
  },
  {
    animation: "draw",
    name: "Traço (assinatura)",
    use: "A animação assinatura da marca, aprovada: abertura de site, vídeo e fecho de apresentação. O contorno se desenha.",
  },
  {
    animation: "pulse",
    name: "Pulso (loop)",
    use: "Carregamento: repete sozinho enquanto algo está em andamento.",
  },
  {
    animation: "bounce",
    name: "Brincando (loop)",
    use: "Repouso vivo da logo na navegação: uma onda de pulos passa pelas letras.",
  },
  {
    animation: "spread",
    name: "Abertura (passe o mouse)",
    use: "Hover do logo da navegação: os colchetes se afastam.",
  },
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
          <BrandMarkAnimated
            animation={doc.animation}
            variant="horizontal"
            tone="cyan"
            height={44}
            replayKey={replayKey}
            decorative
          />
        </div>
        <div className="flex justify-center">
          <BrandMarkAnimated
            animation={doc.animation}
            variant="symbol"
            tone="cyan"
            height={64}
            replayKey={replayKey}
            decorative
          />
        </div>
      </div>
    </article>
  );
}

function LiveCard() {
  return (
    <article className="flex flex-col gap-6 rounded-xl border border-line bg-card p-6 lg:col-span-2">
      <header>
        <h3 className="text-lg font-semibold text-foreground">Logo viva (passe o mouse)</h3>
        <p className={`mt-1 max-w-xl text-sm ${MUTED}`}>
          É a logo da navegação: brinca em repouso e, no hover, se redesenha uma vez inteira antes
          de voltar a brincar.
        </p>
      </header>
      <div className="flex items-center justify-center gap-12 rounded-lg bg-background px-6 py-10">
        <BrandMarkLive variant="horizontal" tone="cyan" height={44} decorative />
        <BrandMarkLive variant="symbol" tone="cyan" height={64} decorative />
      </div>
    </article>
  );
}

export function AnimationsSection() {
  return (
    <Section
      id="animacoes"
      title="Animações"
      lead="Cada animação tem um lugar certo. Use no máximo uma por tela."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {ANIMATION_DOCS.map((doc) => (
          <AnimationCard key={doc.animation} doc={doc} />
        ))}
        <LiveCard />
      </div>
    </Section>
  );
}
