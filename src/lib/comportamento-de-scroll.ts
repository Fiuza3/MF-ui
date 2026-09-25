/** "smooth", ou "auto" quando o visitante pediu menos movimento no sistema. */
export function comportamentoDeScroll(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}
