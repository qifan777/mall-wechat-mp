export const Direction_CONSTANTS = ["ASC", "DESC"] as const;
export type Direction = (typeof Direction_CONSTANTS)[number];
