import type { CouponScope, CouponType } from "../enums/";

export interface CouponInput {
  name: string;
  thresholdAmount: number;
  releasedQuantity: number;
  effectiveDate: string;
  expirationDate: string;
  type: CouponType;
  scope: CouponScope;
  amount?: number | undefined;
  discount?: number | undefined;
  id?: string | undefined;
}
