export const MenuType_CONSTANTS = ["BUTTON", "PAGE", "DIRECTORY"] as const;
export type MenuType = (typeof MenuType_CONSTANTS)[number];
