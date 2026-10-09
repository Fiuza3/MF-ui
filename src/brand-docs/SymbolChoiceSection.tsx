import { Section } from "./shared";
import { AppIcons, BrowserTabs, SizeLadder, type Candidate } from "./SymbolPreviews";

type CandidateDoc = { variant: Candidate; name: string; glyphs: string; pros: string; cons: string };

const CANDIDATES: readonly CandidateDoc[] = [
  {
    variant: "symbol-block",
    name: "Bloco",
    glyphs: "MF_",
    pros: "Lê as iniciais na hora e carrega o cursor do terminal. É o que mais conversa com o nome.",
    cons: "Em 16 px o cursor vira um ponto e as duas letras ficam apertadas.",
  },
  {
    variant: "symbol-tag",
    name: "Tag",
    glyphs: "</>",
    pros: "Formas grandes e simples: é o mais legível em 16 px e diz \"código\" sem explicação.",
    cons: "Não tem o MF. Qualquer desenvolvedor poderia usar o mesmo sinal, então é o menos original.",
  },
  {
    variant: "symbol-cursor",
    name: "Cursor",
    glyphs: "<M>▮",
    pros: "É o único que junta colchetes, o M e o cursor: parece a marca completa em miniatura.",
    cons: "Quatro elementos num quadrado pequeno. Em 16 px o M perde o detalhe.",
  },
];

function CandidateCard({ doc }: { doc: CandidateDoc }) {
  return (
    <article className="flex flex-col gap-8 rounded-xl border border-line bg-card p-6">
      <header>
        <h3 className="text-xl font-semibold text-foreground">
          {doc.name} <span className="ml-2 font-mono text-base font-normal text-cyan">{doc.glyphs}</span>
        </h3>
      </header>
      <BrowserTabs variant={doc.variant} />
      <AppIcons variant={doc.variant} />
      <SizeLadder variant={doc.variant} />
      <dl className="m-0 flex flex-col gap-3 text-sm leading-relaxed text-gray-text">
        <div>
          <dt className="font-medium text-foreground">A favor</dt>
          <dd className="m-0">{doc.pros}</dd>
        </div>
        <div>
          <dt className="font-medium text-foreground">Contra</dt>
          <dd className="m-0">{doc.cons}</dd>
        </div>
      </dl>
    </article>
  );
}

export function SymbolChoiceSection() {
  return (
    <Section
      id="simbolo"
      title="Qual destes vai para a aba do navegador?"
      lead="Três candidatos, vistos no tamanho em que serão usados de verdade. Não julgue pela versão ampliada: olhe o favicon de 16 px na aba."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {CANDIDATES.map((doc) => (
          <CandidateCard key={doc.variant} doc={doc} />
        ))}
      </div>
      <p className="mt-8 max-w-2xl text-base text-foreground">
        Responda com o nome: Bloco, Tag ou Cursor. O escolhido vira o favicon, o ícone do app e o avatar das redes.
      </p>
    </Section>
  );
}
