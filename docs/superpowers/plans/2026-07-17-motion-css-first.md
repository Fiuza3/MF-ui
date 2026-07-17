# Motion CSS-First (MF-UI v2.5) — Plano de Implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** First paint nunca depende de hidratação — todo conteúdo dos blocos MF-UI nasce visível no SSR; animação de entrada vira enhancement em CSS puro, e reveal por scroll só esconde via JS pós-mount.

**Architecture:** Três camadas: (1) tokens de motion em CSS custom properties + keyframes em `src/tokens/utilitarios.css`; (2) componente `Reveal` (client) que aplica a classe de escondido SOMENTE depois do mount via IntersectionObserver — se o JS morrer, nada é escondido; (3) migração mecânica dos 8 blocos + Navbar/LogoAnimado, removendo framer-motion das entradas. framer-motion permanece apenas para interação (se sobrar uso real).

**Tech Stack:** React 19, TypeScript, tsup, vitest + @testing-library/react (jsdom), CSS custom properties, IntersectionObserver.

## Global Constraints

- Nunca SSR com `opacity:0` (inline, atributo SVG ou classe aplicada no render do servidor). Estado padrão = visível.
- `prefers-reduced-motion: reduce` desativa TODAS as animações de entrada (já existe gate global em utilitarios.css — as novas classes devem respeitá-lo).
- API pública dos blocos não muda (mesmas props) — release minor v2.5.0, sem breaking.
- Nenhum `any`; strict mode; comentários só de "porquê", em PT-BR; código em inglês.
- Commits: conventional, descrição em PT-BR sem acentos, SEM Co-Authored-By.
- Cada task: teste falhando primeiro (RED), implementação mínima (GREEN), commit.
- Easing canônico: `--mf-ease-expo-out: cubic-bezier(0.16, 1, 0.3, 1)` (equivale ao `motionEase.expoOut` atual).
- Rodar `npx vitest run` completo antes de cada commit; nada de suite quebrada.

## Estrutura de Arquivos

- Modify: `src/tokens/utilitarios.css` — tokens de motion + keyframes + classes `mf-entrada-*` e `mf-reveal`
- Create: `src/componentes/Reveal.tsx` — componente de reveal por scroll (esconde só pós-mount)
- Create: `src/testes/Reveal.test.tsx`
- Modify: `src/blocos/Hero.tsx`, `src/blocos/Services.tsx`, `src/blocos/About.tsx`, `src/blocos/Contact.tsx`, `src/blocos/Process.tsx`, `src/blocos/Projects.tsx`, `src/blocos/Stack.tsx`, `src/blocos/Testimonials.tsx`, `src/componentes/Navbar.tsx`, `src/componentes/LogoAnimado.tsx`
- Modify: `src/index.ts` (export do Reveal), `package.json` (versão)

---

### Task 1: Tokens de motion e classes de entrada em CSS

**Files:**
- Modify: `src/tokens/utilitarios.css`

**Interfaces:**
- Produces: custom properties `--mf-ease-expo-out`, `--mf-dur-entrada` (600ms), `--mf-dur-entrada-lenta` (900ms); keyframes `mf-fade-up`, `mf-fade-up-suave`, `mf-fade-left`, `mf-fade-scale`; classes `mf-entrada` (usa `--mf-entrada-anim`, `--mf-entrada-delay`), `mf-entrada-up`, `mf-entrada-up-suave`, `mf-entrada-left`, `mf-entrada-scale`; classes de reveal `mf-reveal-hidden`, `mf-reveal-visible` (consumidas pela Task 2).

- [ ] **Step 1: Adicionar o bloco de motion ao final de `src/tokens/utilitarios.css`**

```css
/* Motion CSS-first: entrada anima por keyframe (compositor, sem JS).
   O estado inicial escondido vive DENTRO do keyframe — se a animação
   não rodar (browser antigo, reduced motion), o elemento fica visível. */
:root {
  --mf-ease-expo-out: cubic-bezier(0.16, 1, 0.3, 1);
  --mf-dur-entrada: 600ms;
  --mf-dur-entrada-lenta: 900ms;
}

@keyframes mf-fade-up {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: none; }
}

@keyframes mf-fade-up-suave {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: none; }
}

@keyframes mf-fade-left {
  from { opacity: 0; transform: translateX(-18px); }
  to { opacity: 1; transform: none; }
}

@keyframes mf-fade-scale {
  from { opacity: 0; transform: translateY(24px) scale(0.96); }
  to { opacity: 1; transform: none; }
}

.mf-entrada-up { --mf-entrada-anim: mf-fade-up; }
.mf-entrada-up-suave { --mf-entrada-anim: mf-fade-up-suave; }
.mf-entrada-left { --mf-entrada-anim: mf-fade-left; }
.mf-entrada-scale { --mf-entrada-anim: mf-fade-scale; }

.mf-entrada {
  animation: var(--mf-entrada-anim, mf-fade-up) var(--mf-dur-entrada)
    var(--mf-ease-expo-out) var(--mf-entrada-delay, 0ms) both;
}

/* Reveal por scroll: as classes só são aplicadas pelo Reveal.tsx DEPOIS
   do mount — nunca no HTML do servidor. */
.mf-reveal-hidden {
  opacity: 0;
  transform: translateY(24px);
}

.mf-reveal-visible {
  opacity: 1;
  transform: none;
  transition: opacity var(--mf-dur-entrada) var(--mf-ease-expo-out)
      var(--mf-entrada-delay, 0ms),
    transform var(--mf-dur-entrada) var(--mf-ease-expo-out)
      var(--mf-entrada-delay, 0ms);
}

@media (prefers-reduced-motion: reduce) {
  .mf-entrada {
    animation: none;
  }

  .mf-reveal-hidden {
    opacity: 1;
    transform: none;
  }
}
```

- [ ] **Step 2: Verificar que o build compila e o CSS sai no dist**

Run: `pnpm build && grep -c "mf-fade-up" dist/tokens/utilitarios.css 2>/dev/null || grep -rc "mf-fade-up" dist | grep -v ":0"`
Expected: contagem >= 1 em algum arquivo css do dist (conferir como o tsup/exports empacota o css; o arquivo é exportado como `@mf/ui/utilitarios.css`)

- [ ] **Step 3: Commit**

```bash
git add src/tokens/utilitarios.css dist
git commit -m "feat(tokens): tokens de motion e keyframes de entrada CSS-first"
```

---

### Task 2: Componente Reveal (esconde só depois do mount)

**Files:**
- Create: `src/componentes/Reveal.tsx`
- Test: `src/testes/Reveal.test.tsx`
- Modify: `src/index.ts` (adicionar `export { Reveal } from "./componentes/Reveal";` e `export type { RevealProps } from "./componentes/Reveal";` junto aos exports existentes)

**Interfaces:**
- Consumes: classes `mf-reveal-hidden` / `mf-reveal-visible` e `--mf-entrada-delay` (Task 1).
- Produces: `Reveal` com props `{ as?: keyof React.JSX.IntrinsicElements; delayMs?: number; margin?: string; className?: string; children: React.ReactNode }` — TODAS as tasks de migração de blocos dependem desta assinatura exata.

- [ ] **Step 1: Escrever os testes que falham**

```tsx
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, act } from "@testing-library/react";
import { Reveal } from "../componentes/Reveal";

type ObserverCallback = (entries: { isIntersecting: boolean }[]) => void;

let observerCallback: ObserverCallback | null = null;
const observe = vi.fn();
const disconnect = vi.fn();

beforeEach(() => {
  observerCallback = null;
  observe.mockClear();
  disconnect.mockClear();
  window.IntersectionObserver = vi.fn((cb: ObserverCallback) => {
    observerCallback = cb;
    return { observe, disconnect, unobserve: vi.fn(), takeRecords: vi.fn() };
  }) as unknown as typeof IntersectionObserver;
});

describe("Reveal", () => {
  it("esconde o conteudo apos o mount e revela na intersecao", () => {
    render(<Reveal data-testid="alvo">conteudo</Reveal>);
    const el = screen.getByText("conteudo");
    expect(el.className).toContain("mf-reveal-hidden");
    act(() => observerCallback?.([{ isIntersecting: true }]));
    expect(el.className).toContain("mf-reveal-visible");
    expect(el.className).not.toContain("mf-reveal-hidden");
  });

  it("aplica delay como custom property", () => {
    render(<Reveal delayMs={120}>conteudo</Reveal>);
    const el = screen.getByText("conteudo");
    expect(el.style.getPropertyValue("--mf-entrada-delay")).toBe("120ms");
  });

  it("renderiza a tag pedida em as", () => {
    render(<Reveal as="article">conteudo</Reveal>);
    expect(screen.getByText("conteudo").tagName).toBe("ARTICLE");
  });
});
```

- [ ] **Step 2: Rodar e ver falhar**

Run: `npx vitest run src/testes/Reveal.test.tsx`
Expected: FAIL — módulo `../componentes/Reveal` não existe

- [ ] **Step 3: Implementar o Reveal**

```tsx
"use client";

import * as React from "react";

export type RevealProps = {
  as?: keyof React.JSX.IntrinsicElements;
  delayMs?: number;
  margin?: string;
  className?: string;
  children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLElement>, "className" | "children">;

/* O servidor renderiza SEM classe de escondido — se o JS nunca rodar,
   o conteudo continua visivel. Esconder e responsabilidade exclusiva
   do efeito pos-mount. */
export function Reveal({
  as = "div",
  delayMs = 0,
  margin = "-70px",
  className,
  children,
  ...rest
}: RevealProps) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [state, setState] = React.useState<"ssr" | "hidden" | "visible">("ssr");

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") return;

    setState("hidden");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setState("visible");
          observer.disconnect();
        }
      },
      { rootMargin: margin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [margin]);

  const Tag = as as React.ElementType;
  const revealClass =
    state === "hidden" ? "mf-reveal-hidden" : state === "visible" ? "mf-reveal-visible" : "";

  return (
    <Tag
      ref={ref}
      className={[className, revealClass].filter(Boolean).join(" ")}
      style={delayMs ? ({ "--mf-entrada-delay": `${delayMs}ms` } as React.CSSProperties) : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
```

- [ ] **Step 4: Rodar os testes e ver passar**

Run: `npx vitest run src/testes/Reveal.test.tsx`
Expected: PASS (3 testes). Atenção: o primeiro teste depende do `setState("hidden")` no efeito — em jsdom o efeito roda no render da testing-library.

- [ ] **Step 5: Exportar no index e rodar a suite inteira**

Run: `npx vitest run`
Expected: tudo verde

- [ ] **Step 6: Commit**

```bash
git add src/componentes/Reveal.tsx src/testes/Reveal.test.tsx src/index.ts
git commit -m "feat(componentes): Reveal com esconder pos-mount via IntersectionObserver"
```

---

### Task 3: Hero sem framer-motion (entrada CSS pura)

**Files:**
- Modify: `src/blocos/Hero.tsx` (elementos motion nas linhas ~46, ~57, ~80, ~94)
- Test: `src/testes/Hero.test.tsx` (já existe — adicionar caso)

**Interfaces:**
- Consumes: classes `mf-entrada`, `mf-entrada-up`, `mf-entrada-up-suave` e `--mf-entrada-delay` (Task 1).
- Produces: Hero com a MESMA API pública (`HeroProps` inalterada).

- [ ] **Step 1: Teste que falha — Hero não pode SSR conteúdo escondido**

Adicionar em `src/testes/Hero.test.tsx`:

```tsx
it("nao renderiza nenhum elemento com opacity 0 no primeiro paint", () => {
  const { container } = render(
    <Hero
      eyebrow="eyebrow"
      title={<h1>titulo</h1>}
      description="descricao"
      cta={{ label: "cta", href: "#" }}
      stats={[{ value: "1", label: "stat" }]}
    />
  );
  const escondidos = [...container.querySelectorAll<HTMLElement>("[style]")].filter((el) =>
    (el.getAttribute("style") ?? "").includes("opacity:0")
  );
  expect(escondidos).toHaveLength(0);
});
```

Run: `npx vitest run src/testes/Hero.test.tsx`
Expected: FAIL — framer-motion SSRa `opacity:0` inline nos 4 wrappers

- [ ] **Step 2: Migrar o Hero**

Trocar os 4 wrappers `motion.p`/`motion.div` por elementos comuns com classes de entrada. Remover `import { motion, useReducedMotion }` e `motionEase`. Delays replicam os atuais (0 / 300ms / 560ms / 500ms):

```tsx
// eyebrow (era motion.p com y:12):
<p
  className="mf-entrada mf-entrada-up-suave mb-7 max-w-md font-mono text-xs uppercase tracking-[0.32em] text-cyan"
>
  {eyebrow}
</p>

// descricao + cta (era motion.div com y:20, delay 0.3):
<div
  style={{ "--mf-entrada-delay": "300ms" } as React.CSSProperties}
  className="mf-entrada mf-entrada-up mt-8 flex max-w-5xl flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
>

// slot (era motion.div com y:36 rotate, delay 0.56 — a rotacao sai; ganho nao paga custo):
<div
  style={{ "--mf-entrada-delay": "560ms" } as React.CSSProperties}
  className="mf-entrada mf-entrada-up relative lg:translate-y-16"
>

// stats (era motion.div com y:20, delay 0.5):
<div
  style={{ "--mf-entrada-delay": "500ms" } as React.CSSProperties}
  className="mf-entrada mf-entrada-up mt-16 grid grid-cols-2 gap-5 border-t border-line pt-6 sm:grid-cols-4 lg:mt-24"
>
```

Atenção: `mf-entrada` usa `transform` no keyframe com `both` — o `lg:translate-y-16` do slot é sobrescrito durante a animação e volta ao terminar? NÃO volta: `both` mantém o último frame (`transform: none`), matando o `translate-y-16` permanente. Para o slot, usar wrapper interno: o wrapper externo mantém `relative lg:translate-y-16`, e um `<div className="mf-entrada mf-entrada-up" style={delay}>` interno faz a entrada.

- [ ] **Step 3: Rodar os testes**

Run: `npx vitest run src/testes/Hero.test.tsx && npx vitest run`
Expected: PASS, suite inteira verde

- [ ] **Step 4: Conferir que Hero não referencia mais framer**

Run: `grep -c "framer-motion" src/blocos/Hero.tsx`
Expected: 0

- [ ] **Step 5: Commit**

```bash
git add src/blocos/Hero.tsx src/testes/Hero.test.tsx
git commit -m "refactor(blocos): Hero com entrada CSS pura, sem dependencia de hidratacao"
```

---

### Task 4: Services migrado para Reveal (padrão de referência)

**Files:**
- Modify: `src/blocos/Services.tsx` (motion.article linha ~33, motion.div linha ~111)
- Test: `src/testes/Services.test.tsx` (existe — adicionar o mesmo caso anti-`opacity:0` da Task 3, trocando o render para o Services com props mínimas)

**Interfaces:**
- Consumes: `Reveal` (Task 2) — `import { Reveal } from "../componentes/Reveal";`

- [ ] **Step 1: Teste que falha** — mesmo padrão da Task 3 Step 1 aplicado ao Services (SSR sem `opacity:0`).

Run: `npx vitest run src/testes/Services.test.tsx`
Expected: FAIL

- [ ] **Step 2: Migrar — receita mecânica (vale para TODOS os blocos)**

Antes (padrão atual):

```tsx
<motion.article
  initial={shouldAnimate ? { opacity: 0, y: 28 } : {}}
  whileInView={shouldAnimate ? { opacity: 1, y: 0 } : {}}
  transition={...}
  viewport={shouldAnimate ? { once: true, margin: "-70px" } : undefined}
  className="..."
>
```

Depois:

```tsx
<Reveal as="article" margin="-70px" delayMs={0} className="...">
```

Mapa de conversão: `initial.y` positivo → padrão (up, já no CSS); `transition.delay` (segundos) → `delayMs` (ms); `viewport.margin` → `margin`; `shouldAnimate`/`useReducedMotion` some (o Reveal já respeita reduced-motion); fechamento `</motion.X>` → `</Reveal>`. Remover imports de framer que ficarem órfãos.

- [ ] **Step 3: Rodar testes + suite**

Run: `npx vitest run`
Expected: verde; `grep -c "framer-motion" src/blocos/Services.tsx` → 0

- [ ] **Step 4: Commit**

```bash
git add src/blocos/Services.tsx src/testes/Services.test.tsx
git commit -m "refactor(blocos): Services com Reveal, conteudo visivel sem JS"
```

---

### Tasks 5–10: Demais blocos (um commit por bloco, receita da Task 4)

Para cada bloco: (a) adicionar o teste anti-`opacity:0` no arquivo de teste correspondente em `src/testes/`, ver falhar; (b) aplicar a receita da Task 4 Step 2; (c) `npx vitest run` verde + grep framer = 0 no arquivo; (d) commit `refactor(blocos): <Nome> com Reveal, conteudo visivel sem JS`.

- [ ] **Task 5 — About** (`src/blocos/About.tsx`, motion.div linhas ~32 e ~54; segundo tem initial condicional — conferir eixo e delay ao converter)
- [ ] **Task 6 — Contact** (`src/blocos/Contact.tsx`, motion.div linhas ~35 e ~58)
- [ ] **Task 7 — Process** (`src/blocos/Process.tsx`, motion.article linha ~33, motion.div linha ~104)
- [ ] **Task 8 — Projects** (`src/blocos/Projects.tsx`, motion.div linhas ~78 e ~89; o segundo usa `scale: 0.96` → `className` adicional `mf-entrada-scale`? NÃO — em reveal o esconder é do Reveal; criar variante `mf-reveal-hidden-scale { opacity:0; transform: translateY(24px) scale(0.96) }` na Task 1 SE quiser manter o scale, senão aceitar o padrão up. Decisão: aceitar o padrão up — menos variantes, diferença imperceptível. Atenção: este arquivo NÃO usa `shouldAnimate` — initial incondicional; a conversão remove isso de graça)
- [ ] **Task 9 — Stack** (`src/blocos/Stack.tsx`, motion.div linha ~36, motion.button linha ~63 com `x: -18` → precisa de reveal horizontal: adicionar em `utilitarios.css` a variante `mf-reveal-hidden-left { opacity: 0; transform: translateX(-18px); }` e prop `variant?: "up" | "left"` no Reveal que escolhe a classe de hidden — incluir teste da variante em `Reveal.test.tsx`)
- [ ] **Task 10 — Testimonials** (`src/blocos/Testimonials.tsx`, motion.div linha ~60, motion.blockquote linha ~85; sem guard `shouldAnimate` — mesma nota da Task 8)

---

### Task 11: Navbar e LogoAnimado sem framer nas entradas

**Files:**
- Modify: `src/componentes/Navbar.tsx` (motion.div linha ~103, `initial={{ opacity: 0, y: -16 }}` — entrada de topo: keyframe novo `mf-fade-down { from { opacity:0; transform: translateY(-16px) } }` em utilitarios.css + classe `mf-entrada-down`, aplicar `mf-entrada mf-entrada-down`)
- Modify: `src/componentes/LogoAnimado.tsx` (motion.text linha ~60 — é O logo que hoje SSRa `opacity="0"` como atributo SVG; trocar por `<text>` comum com classe `mf-entrada` — animation funciona em SVG text — e keyframe de fade simples `mf-fade { from { opacity: 0 } }`)
- Test: adicionar casos anti-`opacity:0`/anti-`opacity="0"` em `src/testes/LogoAnimado.test.tsx` (existe) cobrindo style inline E atributo SVG

- [ ] Teste RED → migração → suite verde → `git commit -m "refactor(componentes): Navbar e LogoAnimado com entrada CSS"`

---

### Task 12: Auditoria final de framer-motion

- [ ] Run: `grep -rln "framer-motion" src --include="*.tsx"`
Expected: vazio, OU somente arquivos com uso de interação real (drag/gesto/layout). Para cada sobra, justificar em uma linha no commit ou migrar.
- [ ] Se vazio: remover `framer-motion` de `peerDependencies`/`external` no `tsup.config.ts` e `package.json` — MAS conferir antes se `blocos-app/` usa (`grep -rln "framer-motion" src/blocos-app`). Se usar, manter a dependência e só registrar a pendência no plano de blocos-app.
- [ ] `pnpm build && npx vitest run` verde
- [ ] `git commit -m "chore: remove framer-motion das entradas (permanece apenas em interacao)"`

---

### Task 13: Release v2.5.0

- [ ] `npm pkg set version=2.5.0 && pnpm build`
- [ ] Conferir dist: `grep -rl "'use client'" dist | wc -l` >= 9 e `grep -rc "mf-entrada" dist | grep -v ":0"` retorna >= 1
- [ ] `git add package.json dist && git commit -m "chore(release): v2.5.0" && git tag v2.5.0 && git push origin master v2.5.0`

---

### Task 14 (repo do SITE): consumir v2.5.0 e migrar componentes locais

**Files (em `Site MFDesenvolvimento`):**
- Modify: `package.json` — `"@mf/ui": "github:Fiuza3/mf-ui#v2.5.0"` (salto 2.0.2 → 2.5.0 puxa v2.1–v2.4: primitivos novos, blocos-app, logo font subset — exige revisão visual, ver Step 3)
- Modify: `components/motion/split-headline.tsx` — letras com `motion.span initial opacity:0` → spans comuns com `mf-entrada` + `--mf-entrada-delay` incremental por letra (`index * 40`ms); manter o efeito de digitação do estado `typed` porque o fallback SSR já contém o texto completo (`useState(TYPED)`) — comportamento atual já é seguro, só as letras animadas precisam migrar
- Modify: `components/motion/count-up-stat.tsx` — garantir que o valor final SSRa como texto (verificar; se SSR já mostra o número, só remover initial escondido se houver)
- Test: `pnpm build` + servidor local + `failsafe-test.mjs http://localhost:3111/`

- [ ] Bump + install + build
- [ ] Migrar split-headline/count-up conforme acima
- [ ] **Step 3 — revisão visual obrigatória**: screenshots Playwright (home desktop 1440px e mobile 390px, topo e rodapé) comparados com produção atual; qualquer regressão visual do salto 2.0→2.5 é bloqueante e vira decisão do Marcus
- [ ] `SCRATCH=... node failsafe-test.mjs http://localhost:3111/` → PASS
- [ ] Commit `feat(ui): atualiza @mf/ui para v2.5.0 com motion CSS-first` + push + validar produção com o mesmo teste

---

### Task 15 (repo do SITE): remover o failsafe — a prova final

Só depois da Task 14 verificada em produção.

**Files:**
- Modify: `app/globals.css` — remover o bloco `mf-hydration-failsafe` (keyframe + seletores)
- Delete: `components/hydration-mark.tsx`; remover import/uso em `app/layout.tsx`

- [ ] Remover failsafe e HydrationMark
- [ ] Build + servidor local + `failsafe-test.mjs http://localhost:3111/`
Expected: **PASS SEM o failsafe** — JS OFF com 0 elementos escondidos porque a arquitetura agora nasce visível. Se falhar, algum bloco/componente ainda esconde no SSR: o teste diz qual (hiddenCount > 0) — corrigir na origem, NÃO devolver o failsafe.
- [ ] Commit `refactor: remove failsafe de hidratacao, obsoleto com motion CSS-first` + push + rodar `failsafe-test.mjs https://mfdesenvolvimento.online/` na produção

---

## Self-Review (feito na escrita)

- Cobertura: tokens (T1), mecanismo reveal (T2), 8 blocos (T3–T10), componentes (T11), limpeza de dep (T12), release (T13), consumo + prova no site (T14–T15). O objetivo do spec (first paint sem hidratação) tem verificação executável em T15.
- Tipos: `RevealProps` definido em T2 é o consumido em T4–T10; variante `left` adicionada em T9 exige extensão do tipo (`variant?: "up" | "left"`) — declarada explicitamente em T9.
- Sem placeholders: receitas de conversão têm antes/depois completos; blocos individuais referenciam a receita da T4 com linhas e particularidades próprias de cada arquivo.
