# Marca <MF/> — pacote de arquivos

Tudo aqui é gerado a partir do núcleo `src/brand/` (contornos de glifo, sem fonte instalada). Não edite arquivos à mão: rode `pnpm brand`.

## Estrutura

| Pasta | Conteúdo | Vai para o npm |
| --- | --- | --- |
| `svg/{variante}-{tom}.svg` | 15 SVGs estáticos (3 variantes × 5 tons) | sim |
| `svg/animated/{variante}-{animacao}.svg` | 18 SVGs animados em CSS (3 variantes × 6 animações), tom ciano | sim (via `svg/`) |
| `favicon/` | Pacote completo de favicon (símbolo MF no bloco) | sim |
| `png/{variante}/{tom}/mf-{variante}-{tom}-{N}.png` | Rasters. Horizontal e monograma: altura 32–1024. Símbolo: lado 16–1024 | não (só repositório) |
| `png/social/` | Avatar 400 e 1080, banner 1500×500, card OG 1200×630 | não |
| `animated/` | WebP/GIF animados: horizontal e símbolo × assemble, type, draw, pulse, bounce | não |

PNG e animados pesam no install de todo consumidor, por isso ficam só no repositório.

## Animações

`assemble` (montagem), `type` (digitação), `draw` (traço), `pulse` (pulso, loop), `spread` (abertura, hover) e `bounce` (brincando, loop).

- `draw` é a animação assinatura, aprovada: abertura de site, vídeo e fecho de apresentação.
- `bounce` é o repouso vivo da logo na navegação (componente `BrandMarkLive`: brinca em repouso, se redesenha no hover).
- `spread` é de hover e só roda com o SVG inline no HTML. Dentro de `<img>` ou como `background-image` ela fica parada no estado de repouso, e por isso não tem WebP/GIF.
- `pulse` e `bounce` são loops de exatamente um ciclo nos WebP/GIF.

## Variantes

- `horizontal` — `<MF/>` completo. Uso principal: header, rodapé, documentos.
- `monogram` — `MF` sem colchetes, para espaços estreitos.
- `symbol` — `MF` em bloco escuro arredondado, sem cursor. Favicon, ícone de app e avatar das redes. Escolhido por manter as iniciais legíveis em 16 px.

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

`favicon/` (também em `zip/mf-favicon.zip`) tem: `favicon.ico` (16/32/48), `icon.svg`, `apple-touch-icon.png` (180, quadrado cheio sem transparência — o iOS arredonda sozinho), `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` (cheio, conteúdo a 60% do lado, dentro da zona segura de 80%), `safari-pinned-tab.svg`, `site.webmanifest` e `head.html` (cole no `<head>`).

`safari-pinned-tab.svg` é preto puro, só as formas do símbolo, sem bloco: o Safari usa o arquivo como máscara e pinta com a cor do atributo `color` do `<link rel="mask-icon">`. Fundo ou duas cores quebrariam a máscara.

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
