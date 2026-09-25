import { useSyncExternalStore } from "react";

const CONSULTA = "(prefers-reduced-motion: reduce)";

function assinar(avisar: () => void): () => void {
  const lista = window.matchMedia(CONSULTA);
  lista.addEventListener("change", avisar);
  return () => lista.removeEventListener("change", avisar);
}

/**
 * Preferência de movimento reduzido, reativa. No servidor responde `false`:
 * ler matchMedia num useState inicial daria HTML diferente entre SSR e cliente.
 */
export function usePrefereMovimentoReduzido(): boolean {
  return useSyncExternalStore(
    assinar,
    () => window.matchMedia(CONSULTA).matches,
    () => false,
  );
}
