import type { CouponReceiveType, CouponUseStatus } from "../enums/";

export interface CouponUserInput {
  receiveType: CouponReceiveType;
  status: CouponUseStatus;
  id?: string | undefined;
  couponId: string;
  userId: string;
}
