export const LikeMode_CONSTANTS = [
  "EXACT",
  "START",
  "END",
  "ANYWHERE",
] as const;
export type LikeMode = (typeof LikeMode_CONSTANTS)[number];
