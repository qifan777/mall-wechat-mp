import type {
  CouponReceiveType,
  CouponScope,
  CouponType,
  CouponUseStatus,
} from "../enums/";

export type CouponUserDto = {
  /**
   */
  "CouponUserRepository/COMPLEX_FETCHER": {
    id: string;
    createdTime: string;
    editedTime: string;
    receiveType: CouponReceiveType;
    status: CouponUseStatus;
    creator: {
      id: string;
      phone: string;
      nickname?: string | undefined;
    };
    editor: {
      id: string;
      phone: string;
      nickname?: string | undefined;
    };
    coupon: {
      id: string;
      createdTime: string;
      editedTime: string;
      name: string;
      thresholdAmount: number;
      releasedQuantity: number;
      effectiveDate: string;
      expirationDate: string;
      type: CouponType;
      scope: CouponScope;
      amount?: number | undefined;
      discount?: number | undefined;
    };
    user: {
      id: string;
      nickname?: string | undefined;
      phone: string;
    };
    couponId: string;
    userId: string;
  };
};
