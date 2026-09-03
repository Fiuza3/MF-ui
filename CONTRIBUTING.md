# Contribuindo com `@mf/ui`

## Ambiente

```bash
pnpm install
pnpm test          # Vitest
pnpm typecheck     # tsc --noEmit
pnpm lint          # ESLint
pnpm build         # tsup → dist/
```

Para ver as mudanças dentro de um projeto real, use link local: no projeto consumidor, `pnpm link ../mf-ui`.

## As três regras que não se negociam

**1. Bloco não sabe de nada.** Nenhum componente de `blocos/` ou `blocos-app/` importa dados, rotas, imagens ou subcomponentes de um projeto específico. Todo conteúdo entra por props ou slots. É isso que faz o pacote ser reutilizável em vez de ser um recorte de um site.

**2. Cor, espaçamento e tempo vêm de token.** Nada de hex solto, nada de `[537px]`, nada de `600ms` escrito à mão dentro de um componente. Se um valor não existe como token, a discussão é sobre criar o token — não sobre escrever o valor.

**3. Contraste é verificado, não estimado.** `pnpm test` roda `contraste.test.ts` contra os dois temas. Se um token de cor mudar e algum par cair abaixo de WCAG AA, o build falha. Não desative o teste: ajuste a cor.

## Acessibilidade

Todo componente interativo precisa de:

- estado de foco visível (`focus-visible`), nunca `outline: none` sem substituto;
- nome acessível — texto, `aria-label` ou `sr-only`;
- operação completa por teclado (Tab, Enter, Espaço, Esc onde couber);
- `prefers-reduced-motion` respeitado em qualquer animação.

Componentes Radix já resolvem a maior parte disso. Componentes escritos à mão não — neles a verificação é manual.

## Commits

Conventional Commits, em português:

```
tipo(escopo): descrição no imperativo, minúscula, sem ponto final
```

Tipos: `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `perf`.
Escopos usuais: `tokens`, `primitivos`, `blocos`, `blocos-app`, `componentes`, `pacote`, `build`, `readme`.

```
feat(primitivos): Combobox com filtro assíncrono
fix(blocos): Hero perdia o slot quando stats vinha vazio
```

## Abrindo um PR

1. Branch a partir do `master`.
2. `pnpm lint && pnpm typecheck && pnpm test && pnpm build` — tudo verde.
3. Entrada no `CHANGELOG.md`, seção `[Não publicado]`.
4. Se mudou algo em `src/`, commite o `dist/` correspondente — o CI verifica que os dois estão sincronizados.

## Publicando uma versão

`dist/` é versionado, então o release é commit + tag:

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm build
# bump da versão em package.json, fecha a seção no CHANGELOG
git add dist package.json CHANGELOG.md
git commit -m "chore(release): v2.x.x"
git tag v2.x.x && git push origin master v2.x.x
```

Depois, publique a release da tag no GitHub com as notas da seção correspondente do changelog.

**SemVer vale de verdade aqui.** Remover ou renomear um export é `major`. Componente ou prop novos são `minor`. Correção que não muda API é `patch`.
