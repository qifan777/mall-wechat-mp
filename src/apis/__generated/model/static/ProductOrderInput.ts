import type {
  ProductOrderInput_TargetOf_items,
  ProductOrderInput_TargetOf_payment,
} from "./";

export interface ProductOrderInput {
  remark: string;
  id?: string | undefined;
  addressId: string;
  items: Array<ProductOrderInput_TargetOf_items>;
  payment: ProductOrderInput_TargetOf_payment;
}
