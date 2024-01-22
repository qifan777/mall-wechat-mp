import type { MenuType } from "../enums/";

export interface MenuInput {
  name: string;
  parentId?: string | undefined;
  path: string;
  orderNum?: number | undefined;
  menuType: MenuType;
  icon?: string | undefined;
  id?: string | undefined;
}
