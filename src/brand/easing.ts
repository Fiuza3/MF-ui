export type Easing =
  | { kind: "cubic"; points: readonly [number, number, number, number] }
  | { kind: "linear" }
  | { kind: "step-end" };

const cubic = (x1: number, y1: number, x2: number, y2: number): Easing => ({
  kind: "cubic",
  points: [x1, y1, x2, y2],
});

export const EASING = {
  // expo-out da marca: o mesmo [0.16, 1, 0.3, 1] dos componentes do MF-UI.
  expoOut: cubic(0.16, 1, 0.3, 1),
  inOut: cubic(0.65, 0, 0.35, 1),
  softOut: cubic(0.33, 1, 0.68, 1),
  linear: { kind: "linear" } as const,
  stepEnd: { kind: "step-end" } as const,
} satisfies Record<string, Easing>;

export function easingToCss(easing: Easing): string {
  if (easing.kind === "cubic") return `cubic-bezier(${easing.points.join(",")})`;
  return easing.kind;
}

const bezier = (t: number, p1: number, p2: number) =>
  3 * (1 - t) ** 2 * t * p1 + 3 * (1 - t) * t ** 2 * p2 + t ** 3;

// Bissecção no eixo x: 30 passos dão erro < 1e-9, sobra para quadro de GIF.
function solveT(x: number, x1: number, x2: number): number {
  let low = 0;
  let high = 1;
  for (let step = 0; step < 30; step++) {
    const mid = (low + high) / 2;
    if (bezier(mid, x1, x2) < x) low = mid;
    else high = mid;
  }
  return (low + high) / 2;
}

// Mesma curva que o navegador aplica: o PNG animado e o CSS andam juntos.
export function applyEasing(easing: Easing, progress: number): number {
  const t = Math.min(Math.max(progress, 0), 1);
  if (easing.kind === "linear") return t;
  if (easing.kind === "step-end") return t >= 1 ? 1 : 0;
  const [x1, y1, x2, y2] = easing.points;
  return bezier(solveT(t, x1, x2), y1, y2);
}
