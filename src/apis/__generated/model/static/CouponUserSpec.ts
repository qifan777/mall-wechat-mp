export interface CouponUserSpec {
  coupon?: CouponUserSpec_TargetOf_coupon;

  id?: string;

  maxCreatedTime?: string;

  maxEditedTime?: string;

  minCreatedTime?: string;

  minEditedTime?: string;

  receiveType?: string;

  status?: string;

  user?: CouponUserSpec_TargetOf_user;
}

export interface CouponUserSpec_TargetOf_coupon {
  name?: string;
}

export interface CouponUserSpec_TargetOf_user {
  id?: string;

  phone?: string;
}
