import type { ProductOrderStatus } from "../enums/";

export interface ProductOrderSpec {
  status?: ProductOrderStatus | undefined;
  remark?: string | undefined;
  id?: string | undefined;
  minCreatedTime?: string | undefined;
  maxCreatedTime?: string | undefined;
  minEditedTime?: string | undefined;
  maxEditedTime?: string | undefined;
}
