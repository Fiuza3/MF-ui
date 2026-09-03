# Changelog

Todas as mudanças relevantes deste pacote são registradas aqui.

O formato segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/) e o versionamento segue [SemVer](https://semver.org/lang/pt-BR/).

## [Não publicado]

### Adicionado

- `LICENSE` (MIT), `CHANGELOG.md`, `CONTRIBUTING.md` e `.editorconfig`.
- Integração contínua: `typecheck`, `lint`, testes, build e verificação de que o `dist/` commitado corresponde ao `src/`.
- ESLint (flat config) com `typescript-eslint`, `react-hooks` e `jsx-a11y`; Prettier alinhado.
- `src/testes/contraste.test.ts` — trava de acessibilidade: nenhum par de cor dos temas entra no `master` abaixo do mínimo WCAG 2.1 AA.
- `sideEffects` e `engines` no `package.json`; scripts `typecheck`, `lint`, `format` e `test:coverage`.

### Corrigido

- **`Reveal` não chama mais `setState` dentro do efeito.** O corpo do efeito disparava uma renderização em cascata por instância; as classes agora entram e saem por `classList`, sincronizando o DOM com o `IntersectionObserver`. Comportamento preservado — o servidor continua renderizando sem a classe de escondido.
- **Modal de case em `Projects`.** O container era um `div` sem papel com `onMouseDown`; o handler passou para o backdrop, que já é `aria-hidden`, e o `stopPropagation` do diálogo deixou de ser necessário. O glifo literal do botão de fechar virou o ícone `X` do `lucide-react`.
- **Acessibilidade dos temas.** Nove pares de cor reprovavam na WCAG 2.1 AA. No tema claro, o texto dentro do botão primário estava em 2,86:1 (mínimo 4,5) e o anel de foco em 2,69:1 (mínimo 3,0). No tema escuro, `--destructive` sobre o fundo estava em 3,94:1 e `--input` em 1,32:1. Todos os 30 pares verificados passam agora.

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
