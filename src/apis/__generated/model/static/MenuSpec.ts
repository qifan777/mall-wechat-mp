import type { MenuType } from "../enums/";

export interface MenuSpec {
  parentId?: string | undefined;
  orderNum?: number | undefined;
  menuType?: MenuType | undefined;
  icon?: string | undefined;
  name?: string | undefined;
  path?: string | undefined;
  id?: string | undefined;
  minCreatedTime?: string | undefined;
  maxCreatedTime?: string | undefined;
  minEditedTime?: string | undefined;
  maxEditedTime?: string | undefined;
}
