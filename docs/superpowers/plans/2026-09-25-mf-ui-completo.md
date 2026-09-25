# MF-UI completo: 3.1.0, landing no Docs e adoção nos apps

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deixar o `@mf/ui` completo e publicado (3.1.0), com a landing do MF-UI-Docs feita com os próprios blocos, e os apps da MF consumindo a versão publicada em vez de pasta local.

**Architecture:** Quatro fases, cada uma entrega software funcionando sozinho. A Fase 1 é o pacote (tokens, componentes, CI de regressão, publicação). As fases 2 a 4 são consumidores: Docs (landing + catálogo), MFCash (piloto de adoção real) e MFGen/erp-mf (troca de dependência em worktree, sem tocar no trabalho em andamento).

**Tech Stack:** React 19, Radix UI, Tailwind v4, tsup, Vitest + Testing Library, Storybook 10, Playwright + axe-core (CI), Next.js 16 (consumidores), GitHub Packages.

**Spec:** decisões do Marcus em 2026-09-25 (conversa):

- A landing é o `app/page.tsx` do MF-UI-Docs, refeita com os blocos do `@mf/ui`. O catálogo continua em `/catalogo`, e o Storybook fica como ferramenta de desenvolvimento.
- Pendências aplicadas só onde não quebram: token `--success`, `--secondary` visível, `tom` no StatCard. O Hero continua recebendo o `<h1>` pronto. Versão 3.1.0.
- Ações externas autorizadas: publicar no GitHub Packages, fazer push e abrir PRs, trocar os apps pra versão publicada.
- Textos de terminal ("runtime summary", "contract mode"...) viram props, com o texto atual como padrão.

## Global Constraints

- Nada que quebre: nenhuma prop removida ou renomeada, nenhum export removido. Versão 3.1.0.
- Todo valor de cor vem de `globals.css`. Nada de hex, `rgb()` ou `text-white` em componente (os testes já barram).
- Todo bugfix ou feature tem teste que falha antes e passa depois (prova por reversão).
- Dependência nova de runtime só como `peerDependency` (padrão Radix do pacote). No MF-UI ela entra como devDependency.
- Commits: conventional commits em inglês no tipo e escopo, descrição em pt-BR, **sem `Co-Authored-By`** (regra global do Marcus).
- UI e comentários em pt-BR. Nomes de componentes em inglês (convenção do pacote).
- Não tocar no trabalho alheio em andamento:
  - o `size="xs"` pendente em `Button.tsx`/`Select.tsx`;
  - os 6 arquivos modificados do MFGen;
  - a branch `ultron/mvp` do erp-mf;
  - o `package.json` modificado do MF-UI-Docs (conferir antes de mexer).
- Nunca imprimir segredo em saída de comando (checar só a existência: `[ -n "$NPM_TOKEN" ]`).

## Review Focus

1. **Consumidor com Tailwind v4 e `@source` só em `src/`**: todo componente novo precisa renderizar estilizado sem CSS extra. É coberto pelo `css-entregue.test.ts` e pelo teste de regressão visual (Tarefa 1.8).
2. **Tema claro com o SO em modo escuro, e o inverso**: componente novo com `dark:` segue a classe. Coberto pela variante já corrigida e pelo axe rodando nos dois temas (1.8).
3. **Formulário com `react-hook-form` `register()`**: o `FormField` precisa repassar `ref`, `name` e `onChange` pro controle. Teste na Tarefa 1.5.
4. **App instalando do registry sem `NPM_TOKEN`**: o install falha com 401. A mensagem e o README precisam dizer o que fazer. Coberto pela doc da Tarefa 1.9 e pelo `.npmrc` das fases 2 a 4.
5. **Landing em 375px**: nenhum bloco pode estourar a largura. Coberto pelo teste de overflow da Tarefa 2.3.

---

## Fase 1 — `@mf/ui` 3.1.0 (repo MF-UI, branch `feat/v3.1` a partir de `chore/storybook`)

### Tarefa 1.1: tokens `--success` e `--secondary` visível

**Files:** Modify `src/tokens/globals.css`, `src/tokens/cores.ts`, `src/testes/contraste.test.ts`

- [ ] Teste: `contraste.test.ts` ganha os pares `["--success-foreground", "--success", TEXTO_AA]` e `["--success", "--background", TEXTO_AA]`. Também ganha o teste de contraste não-textual `secondary` × `background` ≥ 1,5:1 nos dois temas (hoje é ~1,1:1).
- [ ] Rodar: falha, porque o token não existe e o secondary está abaixo.
- [ ] Implementar `--success`/`--success-foreground` no `:root,.dark` e no `.light`, com `--color-success*` no `@theme inline` e `sucesso`/`sucessoTexto` em `tokensDeCor`. Ajustar o `--secondary` do escuro até passar.
- [ ] Rodar `pnpm vitest run src/testes/contraste.test.ts src/testes/tokens*.ts` e ver tudo passar. Commit `feat(tokens): cor de sucesso e secondary visível no escuro`.

### Tarefa 1.2: StatCard `tom` e Toast `success` no token certo

**Interfaces:** `StatCardDelta = { value; direction?: "up"|"down"|"neutral"; tom?: "positivo"|"negativo"|"neutro" }`. A cor vem de `tom ?? tomPadrao[direction]` (up→positivo, down→negativo). A seta continua vindo de `direction`.

- [ ] Teste: `delta={{value:"+0,4pp", direction:"up", tom:"negativo"}}` deve renderizar a seta ↑ e a classe `text-destructive`. `up` sem tom deve usar `text-success`.
- [ ] Implementar e mudar o Toast `success` pra `border-success/40`. Commit `feat(stat-card): tom separado da direção para métrica invertida`.

### Tarefa 1.3: textos de terminal viram props

**Interfaces:**

- `Footer`: `rotulos?: Partial<{ resumo; local; cnpj; contato; saida }>`. Os padrões são os textos atuais.
- `Stack`: `rotulos?: Partial<{ camada; ativo; explicar; explicacao }>`, onde `explicacao` pode receber `(grupo) => ReactNode`.
- `Contact`: `rotulos?: Partial<{ legendaCta; legendaEmail; modo; modoValor; modoDescricao }>`.

- [ ] Teste por bloco: sem a prop, o texto atual aparece. Com a prop, o texto novo aparece e o antigo some.
- [ ] Implementar com `const r = { ...PADRAO, ...rotulos }`. Commit por bloco.

### Tarefa 1.4: anel de foco único

**Files:** `globals.css` (`@utility foco-anel`), todos os `.tsx` com `focus-visible:ring-*`.

- [ ] Teste em `classes-tailwind.test.ts`: nenhum `.tsx` de componente tem `focus-visible:ring-` fora de `foco-anel`. Os controles de formulário (`Input`/`Textarea`/`Select`/`Checkbox`/`Switch`) mantêm `focus-visible:border-ring`.
- [ ] Definir `@utility foco-anel { &:focus-visible { outline: none; box-shadow: 0 0 0 3px color-mix(in srgb, var(--ring) 50%, transparent); } }` e trocar as ocorrências. Commit `refactor(foco): um anel de foco para primitivos e blocos`.

### Tarefa 1.5: componentes novos

Cada um em `src/primitivos/<Nome>.tsx`, com teste em `src/testes/<Nome>.test.tsx`, story ao lado, export em `primitivos/index.ts` e entrada no README.

- **RadioGroup** (`@radix-ui/react-radio-group`): teste de seleção com teclado (setas).
- **Popover** (`@radix-ui/react-popover`): abre, fecha no Esc e devolve o foco.
- **Avatar** (`@radix-ui/react-avatar`): fallback com iniciais quando a imagem falha.
- **Progress** (`@radix-ui/react-progress`): `aria-valuenow` e a largura do indicador.
- **Alert**: variantes `default|success|warning|destructive`, com `role="alert"` só nas variantes de erro/aviso.
- **Spinner** + `Button` com `loading`: `aria-busy`, `disabled` e o spinner no lugar do ícone.
- **Combobox** (Popover + `cmdk`): filtra, seleciona com o teclado e mostra "Nenhum resultado".
- **Calendar/DatePicker** (`react-day-picker` v9, locale pt-BR): selecionar uma data chama `onChange`, e o botão mostra a data formatada em pt-BR.
- **FormField + react-hook-form**: teste provando que `register()` funciona (ref composto via Slot) e que o `error` vem de `formState.errors`. Só teste e story, sem componente novo (YAGNI).
- **Tokens de gráfico** `--chart-1..5` nos dois temas, com story usando `recharts` (devDep).
- Commit por componente.

### Tarefa 1.6: `SelectTrigger` com transição

Só depois que o dono decidir o `size="xs"` pendente (a linha é a mesma). Se ainda estiver pendente na hora do release, fica pra 3.1.1.

### Tarefa 1.7: stories e catálogo

Story pra cada componente novo, incluindo o exemplo de formulário com `react-hook-form` + `zod`. `pnpm build-storybook` tem que passar.

### Tarefa 1.8: regressão visual e a11y no CI

**Files:** Create `testes-visuais/verificar.mjs`, `.github/workflows/ci.yml` (job `storybook`).

- [ ] Script: sobe o `storybook-static` e, pra cada story em 375 e 1280 × dark e light, abre a página e roda três checagens: sem overflow horizontal, sem erro de console e `axe-core` sem violação `serious`/`critical`. Sai com código 1 e lista os problemas.
- [ ] Rodar local; corrigir o que ele achar. Commit `test(visual): overflow, console e axe em todas as stories`.

### Tarefa 1.9: release 3.1.0

- [ ] CHANGELOG `[3.1.0]`, versão no `package.json`, `pnpm build` (dist), README (componentes novos, `.npmrc`, erro 401).
- [ ] Push, PR `feat/v3.1` → `master`, CI verde, merge, tag `v3.1.0` → workflow Publish.
- [ ] Verificar a publicação: `npm view @fiuza3/mf-ui@3.1.0 version --registry=https://npm.pkg.github.com`.

## Fase 2 — MF-UI-Docs (landing + catálogo + deploy)

### Tarefa 2.1: repo remoto e dependência publicada

- [ ] Conferir o `package.json` modificado (é trabalho de quem?). Commitar só se for continuação óbvia; senão, perguntar.
- [ ] `gh repo create Fiuza3/MF-UI-Docs --private --source . --push`.
- [ ] `.npmrc` com `${NPM_TOKEN}`, e `@mf/ui` = `npm:@fiuza3/mf-ui@3.1.0`. Testes e build passando.

### Tarefa 2.2: landing com os blocos

`app/page.tsx` com Navbar, Hero, Services, Stack, Process, Projects, Testimonials, About, Contact e Footer. O conteúdo apresenta o próprio design system (o que é, primitivos, blocos, tokens, como instalar). Os `Projects` são os apps reais da MF que usam o pacote. As skills `frontend-design` e `ui-ux-pro-max` são obrigatórias pela regra global.

### Tarefa 2.3: registro do catálogo com os componentes novos e teste de overflow da landing em 375

### Tarefa 2.4: deploy na Vercel (CLI se logado; senão, passo a passo pro Marcus)

## Fase 3 — MFCash (piloto de adoção)

- [ ] 3.1 Branch `feat/mf-ui-3-1`, dependência do registry, `.npmrc` e `@source` em `src/`. Build passando.
- [ ] 3.2 `transaction-modal` e `edit-transaction-modal` passam a usar `Dialog`: teste de abrir, fechar no Esc e foco devolvido.
- [ ] 3.3 `transaction-table` passa a usar `DataTable`: mesmas colunas, loading, vazio.
- [ ] 3.4 `transaction-form` com `FormField` + `Input`/`Select` do pacote: validação zod mostrando erro no controle.
- [ ] 3.5 Gráficos com os tokens `--chart-*`.
- [ ] 3.6 Sem remote hoje: criar repo privado e fazer push, se o Marcus confirmar no fim. Senão, commits locais.

## Fase 4 — MFGen e erp-mf

- [ ] Worktree a partir da branch principal de cada um, dependência pelo registry, `.npmrc`, `scripts/prepare-mfui.mjs` do MFGen revisto (existe só por causa do `file:`?), build e testes.
- [ ] PR (MFGen tem remote). erp-mf sem remote fica com commit local na branch.
