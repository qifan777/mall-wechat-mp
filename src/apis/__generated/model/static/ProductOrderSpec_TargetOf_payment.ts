import type { PayType } from "../enums/";

export interface ProductOrderSpec_TargetOf_payment {
  payType?: PayType | undefined;
  minPayTime?: string | undefined;
  maxPayTime?: string | undefined;
  tradeNo?: string | undefined;
}
