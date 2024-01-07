export interface CouponInput {
  amount?: number;

  couponType: string;

  discount?: number;

  effectiveDate: string;

  expirationDate: string;

  id?: string;

  name: string;

  releasedQuantity: number;

  scopeType: string;

  thresholdAmount: number;
}
