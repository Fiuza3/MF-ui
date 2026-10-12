import { MUTED, Section } from "./shared";
import { AppIcons, BrowserTabs, SizeLadder } from "./SymbolPreviews";

export function SymbolSection() {
  return (
    <Section
      id="simbolo"
      title="Símbolo"
      lead="O MF no bloco escuro é o símbolo da marca: favicon, ícone de app e avatar das redes. Abaixo, nos tamanhos em que ele aparece de verdade."
    >
      <article className="flex flex-col gap-8 rounded-xl border border-line bg-card p-6 sm:p-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <BrowserTabs />
          <AppIcons />
        </div>
        <SizeLadder />
        <p className={`m-0 max-w-2xl text-base leading-relaxed ${MUTED}`}>
          Por que ele: as iniciais continuam legíveis em 16 px, onde um símbolo com mais elementos
          viraria mancha, e conversam direto com o nome da marca.
        </p>
      </article>
    </Section>
  );
}
