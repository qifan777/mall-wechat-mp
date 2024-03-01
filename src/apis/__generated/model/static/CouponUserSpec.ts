import type { CouponReceiveType, CouponUseStatus } from "../enums/";

export interface CouponUserSpec {
  receiveType?: CouponReceiveType | undefined;
  status?: CouponUseStatus | undefined;
  userId?: string | undefined;
  couponId?: string | undefined;
  id?: string | undefined;
  minCreatedTime?: string | undefined;
  maxCreatedTime?: string | undefined;
  minEditedTime?: string | undefined;
  maxEditedTime?: string | undefined;
}
