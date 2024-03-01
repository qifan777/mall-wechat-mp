import type { ProductOrderStatus } from "../enums/";
import type {
  ProductOrderSpec_TargetOf_address,
  ProductOrderSpec_TargetOf_creator,
  ProductOrderSpec_TargetOf_items,
  ProductOrderSpec_TargetOf_payment,
} from "./";

export interface ProductOrderSpec {
  status?: ProductOrderStatus | undefined;
  trackingNumber?: string | undefined;
  remark?: string | undefined;
  id?: string | undefined;
  minCreatedTime?: string | undefined;
  maxCreatedTime?: string | undefined;
  minEditedTime?: string | undefined;
  maxEditedTime?: string | undefined;
  creator?: ProductOrderSpec_TargetOf_creator | undefined;
  items?: ProductOrderSpec_TargetOf_items | undefined;
  payment?: ProductOrderSpec_TargetOf_payment | undefined;
  address?: ProductOrderSpec_TargetOf_address | undefined;
}
