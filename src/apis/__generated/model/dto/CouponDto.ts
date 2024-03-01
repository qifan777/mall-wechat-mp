import type { CouponScope, CouponType } from "../enums/";

export type CouponDto = {
  /**
   */
  "CouponRepository/COMPLEX_FETCHER": {
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
  };
};
