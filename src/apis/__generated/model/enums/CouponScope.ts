export const CouponScope_CONSTANTS = [
  "CATEGORY",
  "PRODUCT",
  "GENERAL",
] as const;
export type CouponScope = (typeof CouponScope_CONSTANTS)[number];
