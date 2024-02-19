import type { ProductOrderStatus } from "../enums/";
import type { ProductOrderSpec_TargetOf_creator } from "./";

export interface ProductOrderSpec {
  status?: ProductOrderStatus | undefined;
  remark?: string | undefined;
  id?: string | undefined;
  minCreatedTime?: string | undefined;
  maxCreatedTime?: string | undefined;
  minEditedTime?: string | undefined;
  maxEditedTime?: string | undefined;
  creator?: ProductOrderSpec_TargetOf_creator | undefined;
}
