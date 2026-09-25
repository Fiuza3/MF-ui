# Changelog

Todas as mudanças relevantes deste pacote são registradas aqui.

O formato segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/) e o versionamento segue [SemVer](https://semver.org/lang/pt-BR/).

## [Não publicado]

Auditoria componente a componente: todo bloco deve funcionar só com `tailwindcss` + `globals.css` + `utilitarios.css`, sem CSS extra no consumidor. Sugestão de versão: **3.1.0**. Não há mudança de assinatura, mas há mudança visual e de comportamento (ver "Atenção ao atualizar").

### Atenção ao atualizar

- **`dark:` agora segue a classe de tema, não o sistema operacional.** Antes, um visitante com o Windows em modo escuro via os ajustes `dark:` por cima do tema claro. Se algum app dependia disso, ele estava com bug.
- **Hover e foco de itens (Button `ghost`/`outline`, DropdownMenu, Select, Pagination, fechar de overlay) usam cinza neutro, não o `accent` da marca.** Em `accent` o contraste chegava a 1,1:1. `--accent` continua sendo a cor de destaque para uso livre.
- **`globals.css` agora entrega `tw-animate-css`, a borda base, o `body` base e o cursor de botão.** Quem importava `tw-animate-css` ou declarava `* { border-color }` por conta própria pode remover. As regras do pacote ficam em `@layer base`, então as do app continuam vencendo.
- **`FormField` aplica `id`, `aria-invalid` e `aria-describedby` direto no controle filho**, e gera o `id` se `htmlFor` não vier. Não é mais preciso repetir esses atributos no `Input`.

### Corrigido

- Animações de Dialog, Sheet, Select, Tooltip, DropdownMenu, Toast e Accordion eram classes sem CSS: os componentes abriam e fechavam "no tranco".
- Blocos `Hero`, `Projects` e `Stack` dependiam de CSS que só existia no site da MF: o carrossel do Projects não andava e o fundo do Hero sumia. O CSS agora vem em `blocos.css`, importado por `utilitarios.css`.
- `Pagination`: "Anterior" sobrepunha os números (largura fixa); no celular estourava a tela ou escondia o total. Agora mostra primeira, atual e última com elipses.
- Overflow horizontal em 375px no `Contact`, no `Footer` (em 1280px a coluna da direita também era cortada) e no viewport do `Toast`.
- `AppShell` ficava sem navegação abaixo de 1024px: ganhou menu em painel. Também corrigido o `overflow-x-hidden` do conteúdo, que quebrava `sticky` do consumidor.
- `Projects`: o modal feito à mão não travava o scroll nem devolvia o foco. Agora usa o `Dialog` da lib. Cards sem mockup não têm mais o buraco de ~250px, e `href`/`categoria` passam a aparecer.
- Acessibilidade:
  - `Testimonials` respeita `prefers-reduced-motion`, pausa no foco e não anuncia em autoplay;
  - `NodeNetwork` não some com movimento reduzido;
  - `Navbar` ganhou `aria-controls`, fecha ao clicar fora e o menu mobile respeita `externo`;
  - `CopyField` trata falha do clipboard;
  - `DataTable` sinaliza `aria-busy`;
  - `StatCard` indica direção com seta, não só com cor;
  - rótulos em pt-BR: fechar dos overlays, breadcrumb, `lang` errado no `Contact`.
- Contraste: destrutivo usa o par de tokens validado em vez de `text-white`; aba ativa e `Skeleton` visíveis no tema claro; sombras próprias para o tema claro.
- CTAs de `Navbar`, `Hero` e `Contact` abriam âncora interna em nova aba.

### Adicionado

- `css-entregue.test.ts` compila o CSS como o consumidor e falha se um componente usar classe sem CSS no pacote.
- Regras de teste contra `text-white`/`text-black`, `rgb()`/`rgba()` literal e hover em `accent`.
- Storybook com todos os componentes, publicado na Vercel.

## [3.0.2] — 2026-09-24

Só empacotamento — nenhuma mudança de API ou de `dist/`.

### Alterado

- **Publicado no GitHub Packages como `@fiuza3/mf-ui`.** A instalação via `github:Fiuza3/MF-ui` deixa de ser o caminho suportado: a Vercel não clona repositório privado por SSH e o install dos consumidores travava. O import continua `@mf/ui` com alias npm (`"@mf/ui": "npm:@fiuza3/mf-ui@3.0.2"`). Instalação e token em [README](README.md#instalação).
- Publicação automática pelo workflow `Publish` a cada tag `v*`, com checagem de que a tag bate com a versão e `prepublishOnly` rodando typecheck, testes e build.

## [3.0.1] — 2026-09-04

### Corrigido

- **O título de seção de seis blocos renderizava no tamanho do corpo.** `About`, `Contact`, `Process`, `Projects`, `Services` e `Stack` escreviam `text-[var(--text-h2)]`. Para o Tailwind, `text-` serve para cor e para tamanho: diante de um `var()` ele decide por cor e gera `color: var(--text-h2)` — declaração inválida, nenhum `font-size`, e o `<h2>` herda 16px. Em todo consumidor, em todas as páginas. Agora é `text-[length:var(--text-h2)]`.

### Adicionado

- `classes-tailwind.test.ts`: falha o build se um token de tipografia, espaçamento ou line-height entrar como `text-[var(--token)]` sem o prefixo `length:`.

## [3.0.0] — 2026-09-03

Esta versão elimina as fontes de verdade duplicadas do sistema. `globals.css` passa a ser o único lugar onde um valor de token existe; o TypeScript exporta referências.

### Por quê

`cores.ts` guardava um hexadecimal por token. O tema, porém, troca em runtime: `accent: "#3DF2E0"` era a resposta certa apenas no tema escuro. Qualquer consumidor que usasse esse valor para pintar um canvas ou alimentar um gráfico pintava ciano com o usuário no tema claro. Não era duplicação a sincronizar — era uma API correta pela metade.

O mesmo valia para motion: `duration.reveal` dizia `0.64` (640 ms) enquanto o CSS que de fato animava usava `600ms`, e as curvas estavam no formato de arrays do Framer Motion, dependência removida na 2.5.0.

### Removido

- `cores` não exporta mais valores hexadecimais. Passa a exportar `var(--token)`.
- `motionDurations`, `motionEase` e `blinkMs` — o arquivo `lib/motion.ts` era apenas um alias que criava dois nomes públicos para a mesma coisa. `blinkMs` não era usado por ninguém.
- `fadeUp`, `fadeIn` e `scaleIn` — devolviam props de Framer Motion, que não é mais dependência do pacote desde a 2.5.0.
- `bordaForte`: era o unico token sem semantica propria — a borda que delimita um campo agora e `bordaCampo` (`--input`), com os 3:1 que a WCAG exige.

### Adicionado

- `lerToken(el, token, fallback?)` — lê uma custom property já resolvida pelo navegador, correta para o tema ativo. É o caminho para APIs que não entendem `var()`: canvas, WebGL, bibliotecas de gráfico.
- `tokensDeCor` e `tokensDeMotion` — nomes das custom properties, para uso com `lerToken`.
- `duracoes` (`micro`, `rapida`, `entrada`, `secao`) e `curvas` (`expo`, `power`, `suave`), como referências CSS.
- Token semântico `--warning` / `--warning-foreground` nos dois temas, com contraste verificado. O sistema tinha erro, mas não tinha aviso.
- `--subtle-foreground` e `--primary-hover` nos dois temas. Eram usados como `textoSutil` e `accentForte` do lado do TypeScript sem nunca terem existido no CSS — agora existem, com valor calculado. O antigo `textoSutil` (`#5C6B7E`) ficava em 3,53:1 sobre o fundo e reprovava em AA; o novo passa em 5,64:1 sobre fundo, card e superfície elevada.
- `src/testes/tokens-fonte-unica.test.ts` — falha o build se aparecer hexadecimal, duração ou curva literal fora de `globals.css`, e se o mapa do TypeScript apontar para um token inexistente ou deixar um token semântico de fora.

### Alterado

- Nomes dos tokens de cor alinhados ao vocabulário do CSS, cobrindo agora todos os semânticos:

  | antes             | agora                                                 |
  | ----------------- | ----------------------------------------------------- |
  | `fundo`           | `fundo`                                               |
  | `textoPrimario`   | `texto`                                               |
  | `superficie`      | `superficie` / `superficieTexto`                      |
  | `accent`          | `primaria` / `primariaTexto`                          |
  | `textoSecundario` | `neutraTexto`                                         |
  | `borda`           | `borda`, `bordaCampo`, `foco`                         |
  | `alerta`          | `alerta` / `alertaTexto`                              |
  | `erro`            | `erro` / `erroTexto`                                  |
  | —                 | `flutuante`, `secundaria`, `destaque` e seus `*Texto` |

- Variáveis de motion renomeadas e movidas de `utilitarios.css` para `globals.css`, onde moram os tokens: `--mf-ease-expo-out` → `--mf-ease-expo`, `--mf-dur-entrada` → `--mf-duration-reveal`, `--mf-dur-entrada-lenta` → `--mf-duration-section`. `utilitarios.css` agora só consome.
- `NodeNetwork` lê `--primary` via `lerToken` em vez de `--cyan` com fallback hexadecimal.

### Migração

```diff
- import { cores } from "@mf/ui";
- <div style={{ background: cores.fundo }} />        // "#0B0F14", só no tema escuro
+ import { cores } from "@mf/ui";
+ <div style={{ background: cores.fundo }} />        // "var(--background)", nos dois

- ctx.fillStyle = cores.accent;
+ ctx.fillStyle = lerToken(canvas, tokensDeCor.primaria);

- transition: `opacity ${motionDurations.reveal}s ${motionEase.expoOut}`
+ transition: `opacity ${duracoes.entrada} ${curvas.expo}`
```

Quem usava `fadeUp`/`fadeIn`/`scaleIn` deve migrar para as classes de entrada de `utilitarios.css` (`mf-entrada`, `mf-entrada-up`) ou para o componente `Reveal`.

### Também nesta versão

#### Ferramental do repositório

- `LICENSE` (MIT), `CHANGELOG.md`, `CONTRIBUTING.md` e `.editorconfig`.
- Integração contínua: `typecheck`, `lint`, testes, build e verificação de que o `dist/` commitado corresponde ao `src/`.
- ESLint (flat config) com `typescript-eslint`, `react-hooks` e `jsx-a11y`; Prettier alinhado.
- `src/testes/contraste.test.ts` — trava de acessibilidade: nenhum par de cor dos temas entra no `master` abaixo do mínimo WCAG 2.1 AA.
- `sideEffects` e `engines` no `package.json`; scripts `typecheck`, `lint`, `format` e `test:coverage`.

#### Acessibilidade e correções

- **`Reveal` não chama mais `setState` dentro do efeito.** O corpo do efeito disparava uma renderização em cascata por instância; as classes agora entram e saem por `classList`, sincronizando o DOM com o `IntersectionObserver`. Comportamento preservado — o servidor continua renderizando sem a classe de escondido.
- **Modal de case em `Projects`.** O container era um `div` sem papel com `onMouseDown`; o handler passou para o backdrop, que já é `aria-hidden`, e o `stopPropagation` do diálogo deixou de ser necessário. O glifo literal do botão de fechar virou o ícone `X` do `lucide-react`.
- **Acessibilidade dos temas.** Nove pares de cor reprovavam na WCAG 2.1 AA. No tema claro, o texto dentro do botão primário estava em 2,86:1 (mínimo 4,5) e o anel de foco em 2,69:1 (mínimo 3,0). No tema escuro, `--destructive` sobre o fundo estava em 3,94:1 e `--input` em 1,32:1. Todos os 30 pares verificados passam agora.

### Conhecido, para a próxima

`globals.css` ainda mantém um vocabulário legado ao lado do semântico — `--cyan`, `--cyan-dim`, `--cyan-glow`, `--gray-text`, `--surface`, `--surface-raised`, `--line`. No tema claro, `--cyan` guarda laranja. Unificar isso toca vários componentes e sai em release própria.

## [2.7.0] — 2026-09-03

### Adicionado

- O pacote publica `src/` para que o consumidor possa varrer os arquivos com `@source` do Tailwind.

### Corrigido

- `Select` não compilava: uma string com aspas simples fechava antes da hora.
- `Select` passa a usar a mesma forma não escapada dos demais primitivos nas classes de `svg`.

## [2.6.0] — 2026-09-03

### Adicionado

- `NodeNetwork` — fundo de rede de partículas em canvas.
- Testes para `Pagination`, `Dialog`, `Sheet` e `Tooltip`.

## [2.5.0] — 2026-09-03

### Removido

- **`framer-motion` deixa de ser peer dependency.** As animações migraram para CSS e o pacote não é mais importado em `src/`. Projetos consumidores podem removê-lo se não o usarem por conta própria.

### Alterado

- `LogoAnimado`, `Navbar` e `Stack` com animação de entrada CSS-first.
- README reestruturado: instalação com a lista completa de peer deps, tabela de exports granulares, catálogo de primitivos e blocos, tokens, scripts e fluxo de release.

---

As versões anteriores a `2.5.0` são anteriores à adoção deste changelog. O histórico está nas [tags](https://github.com/Fiuza3/MF-ui/tags).
