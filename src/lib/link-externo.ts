const URL_ABSOLUTA = /^https?:\/\//i;

/**
 * target/rel para um CTA: nova aba só para URL absoluta. Âncora ou rota interna
 * ("#contato", "/precos") abrindo em outra aba duplicava o site na mesma sessão.
 */
export function propsDeLink(href: string): { target?: "_blank"; rel?: string } {
  return URL_ABSOLUTA.test(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
}
