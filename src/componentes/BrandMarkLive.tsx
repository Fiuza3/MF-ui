"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { prepareAnimation, type BrandTone, type BrandVariant } from "../brand";
import type { BrandMarkProps } from "./BrandMark";
import { BrandMarkAnimated } from "./BrandMarkAnimated";

export type BrandMarkLiveProps = Pick<
  BrandMarkProps,
  "height" | "color" | "title" | "decorative" | "className"
> & {
  variant?: BrandVariant;
  tone?: BrandTone;
};

type Mode = "bounce" | "draw";

// Em repouso as letras brincam (bounce); ao passar o mouse a marca se
// redesenha (draw) uma vez inteira — sair no meio não corta o traço, ele
// termina e só então volta a brincar.
export function BrandMarkLive({ variant = "horizontal", tone = "cyan", ...rest }: BrandMarkLiveProps) {
  const [mode, setMode] = useState<Mode>("bounce");
  const [take, setTake] = useState(0);
  const hovered = useRef(false);
  const drawing = useRef(false);
  const drawLength = useMemo(() => prepareAnimation(variant, "draw").timeline.length, [variant]);

  useEffect(() => {
    if (mode !== "draw") return;
    drawing.current = true;
    const timer = setTimeout(() => {
      drawing.current = false;
      if (!hovered.current) setMode("bounce");
    }, drawLength);
    return () => clearTimeout(timer);
  }, [mode, take, drawLength]);

  const enter = () => {
    hovered.current = true;
    if (drawing.current) return;
    setMode("draw");
    setTake((count) => count + 1);
  };

  const leave = () => {
    hovered.current = false;
    if (!drawing.current) setMode("bounce");
  };

  return (
    <span className="inline-flex" onPointerEnter={enter} onPointerLeave={leave}>
      <BrandMarkAnimated
        {...rest}
        variant={variant}
        tone={tone}
        animation={mode}
        replayKey={`${mode}-${take}`}
      />
    </span>
  );
}
