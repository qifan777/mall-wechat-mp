export const PayType_CONSTANTS = ["WE_CHAT_PAY", "ALI_PAY"] as const;
export type PayType = (typeof PayType_CONSTANTS)[number];
