# Marca <MF/> — pacote de arquivos

Tudo aqui é gerado a partir do núcleo `src/brand/` (contornos de glifo, sem fonte instalada). Não edite arquivos à mão: rode `pnpm brand`.

## Estrutura

| Pasta | Conteúdo | Vai para o npm |
| --- | --- | --- |
| `svg/{variante}-{tom}.svg` | 25 SVGs estáticos (5 variantes × 5 tons) | sim |
| `svg/animated/{variante}-{animacao}.svg` | 25 SVGs animados em CSS, tom ciano | sim (via `svg/`) |
| `favicon/{symbol-block,symbol-tag,symbol-cursor}/` | Pacote completo de favicon por candidato | sim |
| `png/{variante}/{tom}/mf-{variante}-{tom}-{N}.png` | Rasters. Horizontal e monograma: altura 32–1024. Símbolos: lado 16–1024 | não (só repositório) |
| `png/social/` | Avatar 400 e 1080, banner 1500×500, card OG 1200×630 | não |
| `animated/` | PNG/WebP/GIF animados | não |

PNG e animados pesam no install de todo consumidor, por isso ficam só no repositório.

**Animados:** a animação `spread` é de hover e só roda com o SVG inline no HTML. Dentro de `<img>` ou como `background-image` ela fica parada no estado de repouso.

## Variantes

- `horizontal` — `<MF/>` completo. Uso principal: header, rodapé, documentos.
- `monogram` — `MF` sem colchetes, para espaços estreitos.
- `symbol-block` — `MF_` em bloco arredondado. `symbol-tag` — `</>`. `symbol-cursor` — `<M>` com cursor. Os três são candidatos a favicon/avatar; só um será adotado.

## Cores

| Nome | Hex |
| --- | --- |
| Ink (fundo escuro) | `#0B0F14` |
| Ciano | `#3DF2E0` (colchetes a 58% de opacidade no tom `cyan`) |
| Teal (ciano sobre claro) | `#0A6E6A` |
| Branco suave | `#F7FAFC` |
| Bloco claro | `#F4F6F7` |

## Tons e quando usar

- `cyan` — padrão sobre fundo escuro (ink). Colchetes esmaecidos, letras em ciano.
- `light` — fundo escuro quando as letras precisam de mais contraste: MF branco, colchetes ciano.
- `ink` — fundo claro. O ciano some sobre branco (1,3:1); aqui usa teal (5,6:1).
- `solid-black` / `solid-white` — uma cor só: carimbo, gravação a laser, fax, bordado. O símbolo vira bloco com as letras vazadas.

## Favicon

Cada pasta em `favicon/` tem: `favicon.ico` (16/32/48), `icon.svg`, `apple-touch-icon.png` (180, quadrado cheio sem transparência — o iOS arredonda sozinho), `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` (cheio, conteúdo a 60% do lado, dentro da zona segura de 80%), `safari-pinned-tab.svg`, `site.webmanifest` e `head.html` (cole no `<head>`).

`safari-pinned-tab.svg` é preto puro, só as formas do próprio símbolo, sem bloco: o Safari usa o arquivo como máscara e pinta com a cor do atributo `color` do `<link rel="mask-icon">`. Fundo ou duas cores quebrariam a máscara.

## Uso correto

- **Área de proteção:** altura do "M" ao redor da marca, em todos os lados.
- **Tamanhos mínimos:** horizontal ≥ 80 px de largura em tela; símbolo ≥ 16 px.
- **Não fazer:** recolorir fora dos tons acima; distorcer ou girar; aplicar sombra, brilho ou contorno; trocar a fonte (a marca é desenho, não texto); sobrepor a fundos que zerem o contraste do tom escolhido.

## Regenerar

```
pnpm brand
```

Limpa e recria tudo nesta pasta (este README é preservado). Requer `sharp` (dependência só de build).

## Reextrair os glifos

`scripts/brand/extract-glyphs.cjs` lê o TTF do Geist Mono Bold com `opentype.js` e gera `src/brand/glyphs.ts`. Geist Mono é da Vercel, licença SIL OFL 1.1 (permite uso e embutir contornos em logotipo; não vender a fonte isolada). Depois de reextrair, rode `pnpm brand`.
