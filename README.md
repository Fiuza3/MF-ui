# @mf/ui

Design system da MF Desenvolvimento. Tokens, primitivos e blocos de seção reutilizáveis,
extraídos do site MF Desenvolvimento.

## Instalação

```bash
pnpm add github:Fiuza3/mf-ui#v1.0.0
```

Peer dependencies (instale no projeto consumidor): `react`, `react-dom`,
`framer-motion`, `lucide-react` e os pacotes Radix usados pelos primitivos
(`@radix-ui/react-slot`, `react-label`, `react-separator`, `react-accordion`,
`react-dialog`, `react-tooltip`).

No CSS global do projeto (Tailwind v4):

```css
@import "@mf/ui/globals.css";     /* tokens + temas .dark / .light */
@import "@mf/ui/utilitarios.css"; /* dot-grid, noise, glow, scrollbar, marquee */
```

## Uso

```tsx
import { Button, Card, Hero, Navbar, Footer } from "@mf/ui";
```

Exports granulares:

| Subpath | Conteúdo |
|---|---|
| `@mf/ui` | tudo (tokens TS, primitivos, blocos, marca, `cn`, motion) |
| `@mf/ui/primitivos` | Button, Card, Badge, Input, Textarea, Label, Separator, Accordion, Dialog, Sheet, Tooltip |
| `@mf/ui/blocos` | Hero, Services, Projects, Process, Stack, Testimonials, About, Contact |
| `@mf/ui/tokens` | `cores`, `familias`, `pesos` (sem React) |
| `@mf/ui/globals.css` | variáveis de tema + `@theme inline` |
| `@mf/ui/utilitarios.css` | utilitários CSS genéricos |

### Blocos

Os blocos recebem todo o conteúdo por props/slots — não importam dados nem
subcomponentes específicos de nenhum projeto. Exemplo:

```tsx
<Hero
  eyebrow="boot / build / ship"
  headline={<MinhaHeadline />}
  descricao="Diagnóstico antes do código."
  cta={{ label: "iniciar projeto", href: "https://wa.me/..." }}
  stats={[{ value: "8+", label: "anos" }]}
  slotLateral={<MeuTerminal />}
/>
```

## Temas

O tema escuro é o padrão (`:root` / `.dark`). Para o tema claro (creme + laranja),
adicione a classe `light` no `<html>` (por exemplo via `next-themes`). As mesmas
variáveis CSS trocam de valor; nenhum componente precisa de mudança.

> Os valores do tema claro em `src/tokens/globals.css` (bloco `.light`) são um ponto
> de partida creme/laranja e podem ser refinados no navegador.

## Desenvolvimento

- **Editar o DS vendo num projeto:** use `pnpm link` local apontando para esta pasta
  (no projeto consumidor: `pnpm link ../mf-ui`).
- **Produção / outros projetos:** use a dep `github:` com uma tag (`#v1.x.x`).
- Após mudanças: `pnpm build` (regenera `dist/`, que **é versionado** no git),
  `pnpm test`, commit, e crie uma nova tag.

```bash
pnpm build && pnpm test
git add dist && git commit -m "..."
git tag v1.x.x && git push origin master v1.x.x
```

### Nota sobre Next.js + Turbopack no Windows

Ao consumir via `github:`, projetos Next.js com Turbopack no Windows podem precisar
fixar a resolução do pacote para o bundle CJS, senão a resolução ESM pode gerar
exports `undefined` no prerender ("Element type is invalid"). No `next.config.mjs`:

```js
const nextConfig = {
  turbopack: {
    resolveAlias: {
      "@mf/ui": "./node_modules/@mf/ui/dist/index.js",
    },
  },
};
```

(O antigo workaround de copiar arquivos via script **não** é mais necessário com a
dep `github:` — ela instala arquivos reais em `node_modules`, sem junction.)
