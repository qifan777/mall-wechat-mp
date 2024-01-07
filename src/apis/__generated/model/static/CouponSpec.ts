export interface CouponSpec {
  amount?: number;

  couponType?: string;

  discount?: number;

  id?: string;

  maxCreatedTime?: string;

  maxEditedTime?: string;

  maxEffectiveDate?: string;

  maxExpirationDate?: string;

  minCreatedTime?: string;

  minEditedTime?: string;

  minEffectiveDate?: string;

  minExpirationDate?: string;

  name?: string;

  releasedQuantity?: number;

  scopeType?: string;

  thresholdAmount?: number;
}
