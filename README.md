<div align="center">
# `@mf/ui`
 
**Design system da MF Desenvolvimento.**
Tokens, primitivos e blocos de seção reutilizáveis — extraídos do site
[mfdesenvolvimento.online](https://mfdesenvolvimento.online) e prontos para qualquer projeto React.
 
[![versão](https://img.shields.io/badge/versão-2.4.0-FF6B00?style=flat-square)](https://github.com/Fiuza3/MF-ui/tags)
[![React](https://img.shields.io/badge/React-19+-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Radix UI](https://img.shields.io/badge/Radix_UI-primitivos-161618?style=flat-square)](https://www.radix-ui.com)
 
</div>
---
 
## O que é
 
`@mf/ui` é a **fonte única de verdade visual** da MF Desenvolvimento. Em vez de recriar botão,
card, hero e navbar em cada projeto novo, todos consomem este pacote — e uma mudança de token
se propaga para todos eles com um bump de versão.
 
O pacote entrega três camadas:
 
| Camada | O que é | Exemplos |
| --- | --- | --- |
| **Tokens** | Cores, tipografia e curvas de motion, em CSS e em TS | `cores`, `familias`, `pesos`, `motionEase` |
| **Primitivos** | Componentes de UI atômicos, acessíveis (Radix + CVA) | `Button`, `Dialog`, `Table`, `Toast` |
| **Blocos** | Seções inteiras de página, 100% dirigidas por props | `Hero`, `Services`, `AppShell`, `DataTable` |
 
### Princípios
 
- **Blocos não sabem de nada.** Recebem todo o conteúdo por props/slots — nenhum bloco importa
  dados, rotas ou subcomponentes de um projeto específico. É isso que os torna reutilizáveis.
- **Tema por variável CSS.** Escuro e claro trocam valores das mesmas variáveis; nenhum
  componente precisa de código condicional.
- **Zero build no consumidor.** `dist/` é versionado no git, então instalar via `github:` já
  entrega o pacote compilado.
- **Nomenclatura em português.** Pastas e tokens em pt-BR (`primitivos`, `blocos`, `cores`);
  nomes de componentes em inglês, como manda o ecossistema React.
---
 
## Instalação
 
```bash
pnpm add github:Fiuza3/MF-ui#v2.4.0
```
 
> Sempre fixe uma **tag**. `#master` funciona, mas quebra builds sem aviso.
 
### Peer dependencies
 
Instale no projeto consumidor:
 
```bash
pnpm add react react-dom lucide-react \
  @radix-ui/react-accordion @radix-ui/react-checkbox @radix-ui/react-dialog \
  @radix-ui/react-dropdown-menu @radix-ui/react-label @radix-ui/react-select \
  @radix-ui/react-separator @radix-ui/react-slot @radix-ui/react-switch \
  @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-tooltip
```
 
| Peer | Versão mínima |
| --- | --- |
| `react` / `react-dom` | `>=19` |
| `lucide-react` | `>=0.400` |
| `@radix-ui/*` (12 pacotes) | ver tabela acima |
 
O pacote traz internamente `clsx`, `tailwind-merge` e `class-variance-authority` — você não
precisa instalá-los.
 
### CSS global (Tailwind v4)
 
```css
@import "@mf/ui/globals.css";      /* tokens + temas .dark / .light */
@import "@mf/ui/utilitarios.css";  /* dot-grid, noise, glow, scrollbar, marquee */
```
 
---
 
## Uso
 
```tsx
import { Button, Card, Hero, Navbar, Footer } from "@mf/ui";
```
 
### Exports granulares
 
Importe do subpath quando quiser um bundle menor ou evitar React (caso de `tokens`):
 
| Subpath | Conteúdo |
| --- | --- |
| `@mf/ui` | tudo (tokens TS, primitivos, blocos, marca, `cn`, motion) |
| `@mf/ui/primitivos` | componentes atômicos |
| `@mf/ui/blocos` | seções de landing page |
| `@mf/ui/blocos-app` | blocos de painel interno |
| `@mf/ui/tokens` | `cores`, `familias`, `pesos` — sem React |
| `@mf/ui/globals.css` | variáveis de tema + `@theme inline` |
| `@mf/ui/utilitarios.css` | utilitários CSS genéricos |
 
---
 
## Catálogo
 
### Primitivos — `@mf/ui/primitivos`
 
`Button` · `Card` · `Badge` · `Input` · `Textarea` · `Label` · `Separator` · `Accordion` ·
`Dialog` · `Sheet` · `Tooltip` · `Select` · `Checkbox` · `Switch` · `Tabs` · `Skeleton` ·
`Table` · `Pagination` · `DropdownMenu` · `Toast`
 
`Button` e `Badge` também exportam suas variantes CVA (`buttonVariants`, `badgeVariants`) para
compor estilos em outros elementos. `Card` é composicional: `CardHeader`, `CardTitle`,
`CardDescription`, `CardAction`, `CardContent`, `CardFooter`.
 
### Blocos de site — `@mf/ui/blocos`
 
| Bloco | Para quê | Tipos auxiliares |
| --- | --- | --- |
| `Hero` | topo da landing, com stats e slot livre | `HeroStat` |
| `Services` | grade de serviços | `ServiceItem` |
| `Projects` | portfólio / cases | `ProjectItem` |
| `Process` | etapas do método de trabalho | `ProcessStep` |
| `Stack` | tecnologias agrupadas | `StackGrupo` |
| `Testimonials` | depoimentos | `Depoimento` |
| `About` | seção institucional | — |
| `Contact` | CTA final e canais | — |
 
### Blocos de aplicação — `@mf/ui/blocos-app`
 
| Bloco | Para quê | Tipos auxiliares |
| --- | --- | --- |
| `AppShell` | casca de painel (sidebar + topbar + conteúdo) | — |
| `PageHeader` | título, breadcrumb e ações da página | `PageHeaderBreadcrumbItem` |
| `DataTable` | tabela com colunas declarativas | `DataTableColumn` |
| `StatCard` | métrica com variação | `StatCardDelta` |
| `FormField` | label + controle + erro | — |
| `CopyField` | valor somente-leitura com copiar | — |
| `EmptyState` | estado vazio ilustrado | — |
 
### Marca e utilidades — `@mf/ui`
 
`Logo` · `LogoAnimado` · `Navbar` · `Footer` · `Reveal` · `cn()` ·
`motionEase` / `motionDurations` / `blinkMs` · constantes de proporção do logo
(`RATIO_AVANCO_LOGO`, `RATIO_ALTURA_LOGO`, `RATIO_PADDING_LOGO`).
 
---
 
## Exemplo
 
Todo bloco é dirigido por props — nenhum dado vem de dentro do pacote:
 
```tsx
import { Hero } from "@mf/ui/blocos";
 
<Hero
  eyebrow="boot / build / ship"
  title={<MinhaHeadline />}
  description="Diagnóstico antes do código."
  cta={{ label: "iniciar projeto", href: "https://wa.me/..." }}
  stats={[{ value: "8+", label: "anos" }]}
  slot={<MeuTerminal />}
/>
```
 
---
 
## Temas
 
O tema **escuro é o padrão** (`:root` / `.dark`). Para o tema claro (creme + laranja), adicione
a classe `light` no `<html>` — por exemplo via `next-themes`. As mesmas variáveis CSS trocam de
valor; nenhum componente muda.
 
Tokens de cor disponíveis em `@mf/ui/tokens`:
 
```
fundo · superficie · superficieElevada · borda · bordaForte
textoPrimario · textoSecundario · textoSutil
accent · accentForte · accentSutil
alerta · erro
```
 
Os valores do tema claro vivem em `src/tokens/globals.css` (bloco `.light`) e são um ponto de
partida creme/laranja — refináveis direto no navegador.
 
---
 
## Desenvolvimento
 
| Comando | O que faz |
| --- | --- |
| `pnpm build` | compila com `tsup` e regenera `dist/` |
| `pnpm dev` | build em watch |
| `pnpm test` | roda a suíte Vitest |
| `pnpm test:watch` | Vitest em watch |
 
**Editando o DS enquanto vê num projeto:** use link local — no projeto consumidor,
`pnpm link ../mf-ui`.
**Em produção / outros projetos:** use a dep `github:` apontando para uma tag.
 
### Publicando uma versão
 
`dist/` é versionado, então o release é um commit + uma tag:
 
```bash
pnpm build && pnpm test
# bump da versão em package.json
git add dist package.json && git commit -m "chore(release): v2.x.x"
git tag v2.x.x && git push origin master v2.x.x
```
 
Depois, no projeto consumidor: `pnpm add github:Fiuza3/MF-ui#v2.x.x`.
 
### Estrutura
 
```
src/
├─ tokens/       cores, tipografia, globals.css, utilitarios.css
├─ primitivos/   componentes atômicos (Radix + CVA)
├─ componentes/  marca e navegação (Logo, Navbar, Footer, Reveal)
├─ blocos/       seções de site
├─ blocos-app/   blocos de painel interno
├─ lib/          cn(), motion
└─ testes/       Vitest
```
 
---
 
## Next.js + Turbopack no Windows
 
Ao consumir via `github:`, projetos Next.js com Turbopack no Windows podem precisar fixar a
resolução para o bundle CJS — caso contrário a resolução ESM pode gerar exports `undefined` no
prerender (*"Element type is invalid"*):
 
```js
// next.config.mjs
const nextConfig = {
  turbopack: {
    resolveAlias: {
      "@mf/ui": "./node_modules/@mf/ui/dist/index.js",
    },
  },
};
```
 
> O antigo workaround de copiar arquivos via script não é mais necessário: a dep `github:`
> instala arquivos reais em `node_modules`, sem junction.
 
---
 
## Licença
 
Uso interno da MF Desenvolvimento. Pacote privado, sem licença de redistribuição (`UNLICENSED`).
 
<div align="center">
<sub>Feito por <a href="https://mfdesenvolvimento.online">Marcus Fiuza · MF Desenvolvimento</a></sub>
</div>
