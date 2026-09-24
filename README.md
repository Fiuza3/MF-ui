<div align="center">

# `@mf/ui`

**Design system da MF Desenvolvimento.**
Tokens, primitivos e blocos de seção reutilizáveis — extraídos do site
[mfdesenvolvimento.online](https://mfdesenvolvimento.online) e prontos para qualquer projeto React.

[![versão](https://img.shields.io/badge/versão-3.0.0-FF6B00?style=flat-square)](https://github.com/Fiuza3/MF-ui/tags)
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

| Camada         | O que é                                                     | Exemplos                                    |
| -------------- | ----------------------------------------------------------- | ------------------------------------------- |
| **Tokens**     | Cores, tipografia e motion — valor em CSS, referência em TS | `cores`, `familias`, `pesos`, `duracoes`    |
| **Primitivos** | Componentes de UI atômicos, acessíveis (Radix + CVA)        | `Button`, `Dialog`, `Table`, `Toast`        |
| **Blocos**     | Seções inteiras de página, 100% dirigidas por props         | `Hero`, `Services`, `AppShell`, `DataTable` |

### Princípios

- **Blocos não sabem de nada.** Recebem todo o conteúdo por props/slots — nenhum bloco importa
  dados, rotas ou subcomponentes de um projeto específico. É isso que os torna reutilizáveis.
- **Tema por variável CSS.** Escuro e claro trocam valores das mesmas variáveis; nenhum
  componente precisa de código condicional.
- **Uma fonte de valor.** Todo valor de token vive em `globals.css`. O TypeScript exporta
  referências (`var(--token)`), nunca literais — uma constante com o valor congela um dos temas.
  Um teste falha o build se aparecer hexadecimal, duração ou curva fora do `globals.css`.
- **Contraste verificado.** Os dois temas passam por WCAG 2.1 AA a cada `pnpm test`; um token de
  cor que derrube um par abaixo do mínimo quebra o build.
- **Zero build no consumidor.** `dist/` é versionado no git, então instalar via `github:` já
  entrega o pacote compilado.
- **Nomenclatura em português.** Pastas e tokens em pt-BR (`primitivos`, `blocos`, `cores`);
  nomes de componentes em inglês, como manda o ecossistema React.

---

## Instalação

O pacote é publicado como `@fiuza3/mf-ui` no GitHub Packages (registry privado). O nome de
import continua `@mf/ui` via alias npm.

1. Crie um **classic PAT** com escopo **`read:packages`** apenas (o fine-grained ainda não
   funciona com o registry npm do GitHub Packages).
2. Exponha o token como variável de ambiente `NPM_TOKEN` — no Windows, variável de usuário; na
   Vercel/CI, variável do projeto marcada como sensível. Nunca em arquivo versionado.
3. No projeto consumidor, crie o `.npmrc`:

   ```ini
   @fiuza3:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=${NPM_TOKEN}
   ```

4. Instale fixando a versão exata:

   ```bash
   pnpm add @mf/ui@npm:@fiuza3/mf-ui@3.0.2
   ```

> Sempre fixe versão **exata**. A dist-tag `latest` acompanha a 3.x; a linha 2.x é publicada
> sob a dist-tag `release-2x`.

### Peer dependencies

Instale no projeto consumidor:

```bash
pnpm add react react-dom lucide-react \
  @radix-ui/react-accordion @radix-ui/react-checkbox @radix-ui/react-dialog \
  @radix-ui/react-dropdown-menu @radix-ui/react-label @radix-ui/react-select \
  @radix-ui/react-separator @radix-ui/react-slot @radix-ui/react-switch \
  @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-tooltip
```

| Peer                       | Versão mínima    |
| -------------------------- | ---------------- |
| `react` / `react-dom`      | `>=19`           |
| `lucide-react`             | `>=0.400`        |
| `@radix-ui/*` (12 pacotes) | ver tabela acima |

O pacote traz internamente `clsx`, `tailwind-merge` e `class-variance-authority` — você não
precisa instalá-los.

### CSS global (Tailwind v4)

```css
@import "@mf/ui/globals.css"; /* tokens + temas .dark / .light */
@import "@mf/ui/utilitarios.css"; /* dot-grid, noise, glow, scrollbar, marquee */

/* O Tailwind precisa varrer o fonte do pacote para gerar as utilities que os
   componentes usam. Apontar para o dist gera candidatos malformados a partir
   do JS empacotado e quebra o parser de CSS do consumidor. */
@source "../node_modules/@mf/ui/src/**/*.tsx";
```

---

## Uso

```tsx
import { Button, Card, Hero, Navbar, Footer } from "@mf/ui";
```

### Exports granulares

Importe do subpath quando quiser um bundle menor ou evitar React (caso de `tokens`):

| Subpath                  | Conteúdo                                                                      |
| ------------------------ | ----------------------------------------------------------------------------- |
| `@mf/ui`                 | tudo (tokens TS, primitivos, blocos, marca, `cn`, motion)                     |
| `@mf/ui/primitivos`      | componentes atômicos                                                          |
| `@mf/ui/blocos`          | seções de landing page                                                        |
| `@mf/ui/blocos-app`      | blocos de painel interno                                                      |
| `@mf/ui/tokens`          | `cores`, `tokensDeCor`, `duracoes`, `curvas`, `familias`, `pesos` — sem React |
| `@mf/ui/globals.css`     | variáveis de tema + `@theme inline`                                           |
| `@mf/ui/utilitarios.css` | utilitários CSS genéricos                                                     |

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

| Bloco          | Para quê                                | Tipos auxiliares |
| -------------- | --------------------------------------- | ---------------- |
| `Hero`         | topo da landing, com stats e slot livre | `HeroStat`       |
| `Services`     | grade de serviços                       | `ServiceItem`    |
| `Projects`     | portfólio / cases                       | `ProjectItem`    |
| `Process`      | etapas do método de trabalho            | `ProcessStep`    |
| `Stack`        | tecnologias agrupadas                   | `StackGrupo`     |
| `Testimonials` | depoimentos                             | `Depoimento`     |
| `About`        | seção institucional                     | —                |
| `Contact`      | CTA final e canais                      | —                |

### Blocos de aplicação — `@mf/ui/blocos-app`

| Bloco        | Para quê                                      | Tipos auxiliares           |
| ------------ | --------------------------------------------- | -------------------------- |
| `AppShell`   | casca de painel (sidebar + topbar + conteúdo) | —                          |
| `PageHeader` | título, breadcrumb e ações da página          | `PageHeaderBreadcrumbItem` |
| `DataTable`  | tabela com colunas declarativas               | `DataTableColumn`          |
| `StatCard`   | métrica com variação                          | `StatCardDelta`            |
| `FormField`  | label + controle + erro                       | —                          |
| `CopyField`  | valor somente-leitura com copiar              | —                          |
| `EmptyState` | estado vazio ilustrado                        | —                          |

### Marca e utilidades — `@mf/ui`

`Logo` · `LogoAnimado` · `Navbar` · `Footer` · `Reveal` · `NodeNetwork` · `cn()` ·
`lerToken()` · constantes de proporção do logo
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
/>;
```

---

## Temas

O tema **escuro é o padrão** (`:root` / `.dark`). Para o tema claro (creme + laranja), adicione
a classe `light` no `<html>` — por exemplo via `next-themes`. As mesmas variáveis CSS trocam de
valor; nenhum componente muda.

### Usando um token

Em CSS ou Tailwind, use a variável direto (`bg-primary`, `text-muted-foreground`, `var(--ring)`).

Em estilo inline, `cores` já entrega a referência pronta:

```tsx
import { cores } from "@mf/ui/tokens";

<div style={{ borderColor: cores.borda }} />; // → var(--border)
```

Quando a API não entende `var()` — canvas, WebGL, uma lib de gráfico — leia o valor resolvido no
tema ativo:

```tsx
import { lerToken, tokensDeCor } from "@mf/ui";

const cor = lerToken(elemento, tokensDeCor.primaria); // hex do tema atual
```

Tokens disponíveis:

```
fundo · texto · textoSutil
superficie · superficieTexto · superficieElevada · flutuante · flutuanteTexto
primaria · primariaTexto · primariaHover · primariaSutil
secundaria · secundariaTexto · neutra · neutraTexto · destaque · destaqueTexto
alerta · alertaTexto · erro · erroTexto
borda · bordaCampo · foco
```

Motion segue o mesmo desenho: `duracoes.micro | rapida | entrada | secao` e
`curvas.expo | power | suave`.

Os valores dos dois temas vivem em `src/tokens/globals.css`. Mudar um deles muda o sistema
inteiro, e o teste de contraste avisa na hora se a mudança quebrar acessibilidade.

---

## Desenvolvimento

| Comando           | O que faz                             |
| ----------------- | ------------------------------------- |
| `pnpm build`      | compila com `tsup` e regenera `dist/` |
| `pnpm dev`        | build em watch                        |
| `pnpm test`       | roda a suíte Vitest                   |
| `pnpm test:watch` | Vitest em watch                       |

**Editando o DS enquanto vê num projeto:** use link local — no projeto consumidor,
`pnpm link ../mf-ui`.
**Em produção / outros projetos:** instale do registry com versão exata (ver [Instalação](#instalação)).

### Publicando uma versão

Bump → tag → o workflow `Publish` publica no GitHub Packages. Passo a passo em
[CONTRIBUTING.md](CONTRIBUTING.md#publicando-uma-versão).

### Estrutura

```
src/
├─ tokens/       cores, tipografia, globals.css, utilitarios.css
├─ primitivos/   componentes atômicos (Radix + CVA)
├─ componentes/  marca e navegação (Logo, Navbar, Footer, Reveal, NodeNetwork)
├─ blocos/       seções de site
├─ blocos-app/   blocos de painel interno
├─ lib/          cn(), lerToken()
└─ testes/       Vitest
```

---

## Next.js + Turbopack no Windows

Ao consumir via `github:`, projetos Next.js com Turbopack no Windows podem precisar fixar a
resolução para o bundle CJS — caso contrário a resolução ESM pode gerar exports `undefined` no
prerender (_"Element type is invalid"_):

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
