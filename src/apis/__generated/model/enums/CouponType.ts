export const CouponType_CONSTANTS = ["DISCOUNT", "REDUCE"] as const;
export type CouponType = (typeof CouponType_CONSTANTS)[number];
