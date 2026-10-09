import { createElement, type ReactElement, type ReactNode } from "react";
import type { SvgNode } from "../brand";

type ElementProps = Record<string, string | number | boolean | Record<string, string>>;

// Mapa explícito: a árvore neutra usa nomes de atributo SVG; o React espera camelCase.
const REACT_ATTR: Readonly<Record<string, string>> = {
  class: "className",
  "fill-opacity": "fillOpacity",
  "stroke-width": "strokeWidth",
  "stroke-dasharray": "strokeDasharray",
  "stroke-dashoffset": "strokeDashoffset",
  "stroke-linejoin": "strokeLinejoin",
};

export type RootOverrides = {
  props: ElementProps;
  drop: readonly string[];
  skipTitle: boolean;
};

function reactAttrs(attrs: SvgNode["attrs"]): ElementProps {
  const props: ElementProps = {};
  for (const [name, value] of Object.entries(attrs)) props[REACT_ATTR[name] ?? name] = value;
  return props;
}

function childrenOf(node: SvgNode, skipTitle: boolean): ReactNode[] {
  if (node.text !== undefined) return [node.text];
  const visible = skipTitle ? node.children.filter((child) => child.tag !== "title") : node.children;
  return visible.map((child, index) => toElement(child, index));
}

function toElement(node: SvgNode, key: number, root?: RootOverrides): ReactElement {
  const base = reactAttrs(node.attrs);
  for (const name of root?.drop ?? []) delete base[name];
  const props = { ...base, ...root?.props, key };
  return createElement(node.tag, props, ...childrenOf(node, root?.skipTitle ?? false));
}

export function renderBrandRoot(tree: SvgNode, root: RootOverrides): ReactElement {
  return toElement(tree, 0, root);
}

// className do svg raiz precisa somar com a(s) classe(s) da marca, não substituí-la.
export function joinClasses(...parts: Array<string | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
