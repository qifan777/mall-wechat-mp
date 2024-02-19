export const ProductOrderStatus_CONSTANTS = [
  "CLOSED",
  "REFUNDING",
  "TO_BE_RECEIVED",
  "TO_BE_PAID",
  "TO_BE_EVALUATED",
  "TO_BE_CREATE",
  "TO_BE_DELIVERED",
] as const;
export type ProductOrderStatus = (typeof ProductOrderStatus_CONSTANTS)[number];
