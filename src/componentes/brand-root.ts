import { joinClasses, type RootOverrides } from "./brand-node";
import type { SvgNode } from "../brand";

export type BrandRootOptions = {
  tree: SvgNode;
  height: number | string;
  decorative: boolean;
  className?: string;
};

// A largura sai do viewBox (width:auto); só a altura é decidida por quem usa.
// Número vira atributo (funciona sem CSS); string CSS ("2rem") só vale via style.
export function rootOverrides({ tree, height, decorative, className }: BrandRootOptions): RootOverrides {
  // overflow visível: o viewBox abraça os contornos sem folga, e o Pulso e a
  // Abertura afastam os colchetes para fora dele — sem isto eles seriam cortados.
  const base = { width: "auto", overflow: "visible" } as const;
  const props: RootOverrides["props"] = {
    style: typeof height === "number" ? base : { ...base, height },
    className: joinClasses(String(tree.attrs.class ?? ""), className),
  };
  if (typeof height === "number") props.height = height;
  if (decorative) {
    props["aria-hidden"] = "true";
    props.focusable = "false";
  }
  return { props, drop: decorative ? ["role", "aria-label"] : [], skipTitle: decorative };
}
