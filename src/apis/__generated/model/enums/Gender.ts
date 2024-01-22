export const Gender_CONSTANTS = ["PRIVATE", "MALE", "FEMALE"] as const;
export type Gender = (typeof Gender_CONSTANTS)[number];
