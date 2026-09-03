/**
 * Leitura de token de design em runtime.
 *
 * Os valores dos tokens vivem em `globals.css` e trocam com o tema. Em CSS
 * isso e resolvido por `var(--token)`. Em JavaScript nao existe equivalente
 * estatico: uma constante em TS congela um dos temas e passa a mentir assim
 * que o outro entra. Por isso, quando um valor precisa chegar a uma API que
 * nao entende `var()` — canvas, WebGL, uma lib de grafico — ele e lido do
 * elemento, ja resolvido pelo navegador e ja correto para o tema ativo.
 */

/**
 * Le uma custom property resolvida a partir de `el`.
 *
 * @param el       elemento de onde herdar o tema (normalmente o proprio no).
 * @param token    nome da custom property, com os dois hifens: `"--primary"`.
 * @param fallback valor usado quando o token nao esta definido — por exemplo
 *                 antes do CSS carregar, ou em ambiente de teste. O padrao e
 *                 a cor de texto computada do elemento, que sempre existe e
 *                 acompanha o tema; se nem ela existir, `"transparent"`.
 */
export function lerToken(el: Element, token: string, fallback?: string): string {
  const estilo = getComputedStyle(el);
  const valor = estilo.getPropertyValue(token).trim();
  if (valor) return valor;
  if (fallback) return fallback;
  return estilo.color?.trim() || "transparent";
}
