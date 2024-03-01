export const RefundStatus_CONSTANTS = [
  "APPROVED",
  "TO_BE_APPROVE",
  "REJECTED",
  "TO_BE_CREATE",
] as const;
export type RefundStatus = (typeof RefundStatus_CONSTANTS)[number];
