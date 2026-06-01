// src/lib/motion.ts
export const motionDurations = {
  micro: 0.24,
  reveal: 0.64,
  section: 0.9,
} as const;

export const motionEase = {
  expoOut: [0.16, 1, 0.3, 1],
  powerOut: [0.22, 1, 0.36, 1],
  softInOut: [0.65, 0, 0.35, 1],
} as const;

export const blinkMs = 530;
