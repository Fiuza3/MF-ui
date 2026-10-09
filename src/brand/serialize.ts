import type { SvgNode } from "./tree";

const escapeText = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const escapeAttr = (value: string | number) => escapeText(String(value)).replace(/"/g, "&quot;");

function attrsOf(node: SvgNode): string {
  return Object.entries(node.attrs)
    .map(([name, value]) => ` ${name}="${escapeAttr(value)}"`)
    .join("");
}

// <style> não passa pelo escape: o CSS gerado tem ">" em seletores e nunca vem de entrada externa.
function contentOf(node: SvgNode): string {
  if (node.tag === "style") return node.text ?? "";
  if (node.text !== undefined) return escapeText(node.text);
  return node.children.map(serializeSvg).join("");
}

export function serializeSvg(node: SvgNode): string {
  const content = contentOf(node);
  if (content === "") return `<${node.tag}${attrsOf(node)}/>`;
  return `<${node.tag}${attrsOf(node)}>${content}</${node.tag}>`;
}
