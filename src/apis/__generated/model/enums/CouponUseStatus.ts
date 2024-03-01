export const CouponUseStatus_CONSTANTS = ["USED", "EXPIRED", "UNUSED"] as const;
export type CouponUseStatus = (typeof CouponUseStatus_CONSTANTS)[number];
