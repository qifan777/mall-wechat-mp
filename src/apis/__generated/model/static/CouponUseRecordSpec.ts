export interface CouponUseRecordSpec {
  couponUser?: CouponUseRecordSpec_TargetOf_couponUser;

  id?: string;

  maxCreatedTime?: string;

  maxEditedTime?: string;

  minCreatedTime?: string;

  minEditedTime?: string;

  orderId?: string;
}

export interface CouponUseRecordSpec_TargetOf_couponUser {
  coupon?: CouponUseRecordSpec_TargetOf_couponUser_TargetOf_coupon_2;

  user?: CouponUseRecordSpec_TargetOf_couponUser_TargetOf_user_2;
}

export interface CouponUseRecordSpec_TargetOf_couponUser_TargetOf_coupon_2 {
  name?: string;
}

export interface CouponUseRecordSpec_TargetOf_couponUser_TargetOf_user_2 {
  phone?: string;
}
