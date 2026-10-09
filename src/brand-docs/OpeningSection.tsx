import { BrandMarkAnimated } from "../componentes/BrandMarkAnimated";
import { INK, MUTED, ReplayButton, useReplay } from "./shared";

export function OpeningSection() {
  const [replayKey, replay] = useReplay();
  return (
    <header
      className="relative flex min-h-[78vh] flex-col items-center justify-center gap-10 overflow-hidden px-5 py-20 text-center"
      style={{ backgroundColor: INK }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 45%, color-mix(in srgb, var(--cyan) 10%, transparent), transparent 70%)",
        }}
      />
      <h1 className="sr-only">Manual da marca MF Desenvolvimento</h1>
      <div className="relative max-w-full">
        <BrandMarkAnimated
          animation="assemble"
          variant="horizontal"
          tone="cyan"
          height="clamp(72px, 16vw, 168px)"
          replayKey={replayKey}
          title="MF Desenvolvimento"
        />
      </div>
      <p className={`relative max-w-xl text-lg leading-relaxed ${MUTED}`}>
        Manual e aprovação da nova marca. Role para ver os usos, escolha o símbolo da aba do
        navegador e baixe os arquivos.
      </p>
      <div className="relative">
        <ReplayButton onClick={replay} />
      </div>
    </header>
  );
}
