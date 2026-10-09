# Changelog

Todas as mudanças relevantes deste pacote são registradas aqui.

O formato segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/) e o versionamento segue [SemVer](https://semver.org/lang/pt-BR/).

## [3.4.0-beta.0] — 2026-10-09

A marca `<MF/>` vira contorno vetorial, com variantes, tons, animações e o pacote completo de arquivos. Versão de teste no dist-tag `next`: `latest` continua na 3.3.x.

### Adicionado

- Subpath `@fiuza3/mf-ui/brand`: núcleo puro da marca, sem React (pensado para o consumidor Vue). Traz os contornos do Geist Mono 700, 3 variantes (`horizontal`, `monogram`, `symbol`), 5 tons (`cyan`, `light`, `ink`, `solid-black`, `solid-white`) e 6 animações descritas como dados (`assemble`, `type`, `draw`, `pulse`, `spread`, `bounce`). Uma árvore SVG única alimenta o componente, os arquivos e os quadros dos animados.
- `BrandMark` e `BrandMarkAnimated`: o CSS da animação vai embutido no SVG, então nada depende de hidratação. Com `prefers-reduced-motion`, a marca aparece completa e parada.
- `BrandMarkLive`: a logo brinca em repouso (`bounce`) e se redesenha no hover (`draw`).
- `@fiuza3/mf-ui/brand/*`: SVG estáticos e animados, favicon completo do símbolo `MF` (ico, apple-touch, maskable, pinned tab, webmanifest, head.html) e README com as regras de uso. PNG, WebP/GIF e zips ficam no repositório (`pnpm brand`), fora do pacote.

### Alterado

- `Logo` e `LogoAnimado` mantêm a mesma API, mas desenham com os vetores da marca, sem depender da fonte. O `LogoAnimado` entra com a animação de montagem.
- `exports`: a condição `types` passa a vir antes de `import`/`require`. Antes ela nunca era lida.

## [3.3.2] — 2026-10-09

Alvos de toque de 42 px (e menores) chegam ao piso do sistema. Nenhuma assinatura mudou.

### Corrigido

- `Hero`: o CTA de marca ("iniciar projeto") media 42 px de altura; agora tem 44, o piso de alvo de toque do sistema (WCAG 2.5.5).
- `Projects`: os botões "abrir case" e "ver projeto" mediam 42 px de altura; agora têm 44 (mesmo piso). Padding horizontal e visual não mudaram.
- `Footer`: os links do rodapé mediam ~34 px de altura; agora têm 44. O espaçamento vertical entre linhas de links passou de `gap-3` para `gap-y-1.5` (o horizontal continua `gap-3`) para o ritmo não dobrar.
- `Navbar`: os links e o CTA do menu mobile mediam 36 px de altura; agora têm 44.

## [3.3.1] — 2026-10-09

Correções de acessibilidade e a trava de durações estendida. Nenhuma assinatura mudou.

### Corrigido

- `Testimonials`: o botão de pausa trocava o rótulo entre "Pausar" e "Retomar apresentação"; agora segue o padrão do `Projects` — rótulo fixo ("Pausar apresentação") com `aria-pressed`, e só o ícone alterna. Os dois carrosséis do sistema passam a ser anunciados do mesmo jeito.
- `Navbar`: o botão "Abrir menu" media 40×44 px; agora tem 44×44, o piso de alvo de toque do sistema (WCAG 2.5.5).

### Alterado

- Durações dos loops (`hero-scan` 8s, `marquee` 30s, carrossel do `Projects` 96s) viraram os tokens `--mf-duration-scan`, `--mf-duration-marquee` e `--mf-duration-carousel` em `globals.css`. Os valores são os mesmos. A trava `tokens-fonte-unica` passa a barrar duração em segundos literal em qualquer CSS, não só no `animated-icon.css`.

## [3.3.0] — 2026-10-08

Tema claro na família ciano da marca, anel de foco opaco, piso tipográfico de 12px, pausa no carrossel do `Projects`, slot de ações na `Navbar` e o primitivo `AnimatedIcon`. Nenhuma assinatura mudou.

### Atenção ao atualizar

- **O tema claro trocou creme + laranja por gelo + ciano profundo.** `--primary`, `--accent`, `--cyan` e `--ring` passam a `#0a6e68` (5,7:1 sobre o fundo — seguros para texto), com `--primary-foreground` branco. O ciano brilhante da marca não serve como texto no claro (1,32:1), então ganhou token próprio de preenchimento: **`--brand` / `--brand-foreground`** (`#3df2e0` com `#0b0f14`, 13,7:1, iguais nos dois temas). CTA de identidade: `bg-brand text-brand-foreground`.
- **Anel de foco sem alfa.** `focus-visible:ring-ring/50` dava 2,19:1 no claro (WCAG 1.4.11 pede 3:1); todos os componentes usam `ring-ring` opaco, e `destructive` usa `ring-destructive` opaco. A tinta de campo inválido (`aria-invalid`) só vale sem foco. Quem tinha `ring-ring/50` no próprio app deve trocar também.
- **O CTA do `Hero` mudou de cor.** No tema claro deixa de ser laranja/creme e passa a ciano brilhante com texto quase preto, via `--brand` (no hover, borda e texto vão para `--cyan`). No escuro a aparência é a mesma.
- **Marca d'água do `Footer` virou SVG `aria-hidden`.** As letras ficam ~15% maiores e o bloco mais alto (o dimensionamento por `@container` foi removido); o texto decorativo de 1,22:1 sai do cálculo de contraste do axe/Lighthouse. O viewBox foi medido com a Geist Mono Black real (antes cortava ~9 unidades do topo dos glifos).

### Adicionado

- `AnimatedIcon` (primitivo): ícone Lucide animado só com CSS — `draw`, `pulse`, `nudge`, `spin` × gatilhos `hover` (próprio ou `.group`, incluindo foco), `inview` (IntersectionObserver nativo) e `always` (`pulse`/`nudge` com `always` rodam 3 ciclos, ≤ 5 s; só `spin` gira sem fim). Aceita `ref` do consumidor (inclusive via `asChild`), mas `icon` é uma função: não passe de Server Component. Nunca fica escondido sem JS, antes da hidratação ou sem IntersectionObserver; `prefers-reduced-motion` mostra o estado final.
- `Navbar`: prop `acoes` (ex.: botão de tema), renderizada no desktop antes do CTA e no fim do painel mobile — fica montada duas vezes com o painel mobile aberto, então evite `id` fixo nela. Prop `logoLabel` para o nome acessível do logo quando ele não leva ao topo.
- `Projects`: botão "Pausar carrossel" com `aria-pressed` (WCAG 2.2.2; só o ícone alterna), persiste com hover; some com movimento reduzido e no toque, onde o carrossel já é trilho com scroll.
- Testes que travam regressão: anel com alfa, fonte abaixo de 12px (`classes-tailwind.test.ts`), pares `--brand`, `--accent` e foco/borda sobre `--muted` (`contraste.test.ts`).

### Corrigido

- `Reveal`: conteúdo ainda invisível revela ao receber foco por teclado, em vez de receber foco com `opacity: 0`.
- `text-[10px]`/`text-[11px]` em `Contact`, `Footer`, `Hero`, `Process`, `Projects` e `Services` → `text-xs`, com tracking de caixa-alta limitado a 0,2em.

## [3.2.0] — 2026-09-26

### Adicionado

- Piso de toque de 44px nos controles sob `pointer: coarse` (decide o dedo, não a largura da tela), via `min-height` para não esticar quem já é maior.
- `AppShell`: `larguraSidebar` configurável (trilho de ícones); a gaveta do celular não acompanha de propósito.

## [3.1.0] — 2026-09-26

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
