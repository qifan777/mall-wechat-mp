import type { CouponScope, CouponType } from "../enums/";

export interface CouponSpec {
  thresholdAmount?: number | undefined;
  releasedQuantity?: number | undefined;
  type?: CouponType | undefined;
  scope?: CouponScope | undefined;
  amount?: number | undefined;
  discount?: number | undefined;
  name?: string | undefined;
  minEffectiveDate?: string | undefined;
  maxEffectiveDate?: string | undefined;
  minExpirationDate?: string | undefined;
  maxExpirationDate?: string | undefined;
  id?: string | undefined;
  minCreatedTime?: string | undefined;
  maxCreatedTime?: string | undefined;
  minEditedTime?: string | undefined;
  maxEditedTime?: string | undefined;
}
