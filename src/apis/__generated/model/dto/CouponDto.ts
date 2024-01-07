export type CouponDto = {
  "CouponRepository/COMPLEX_FETCHER": {
    id: string;
    createdTime: string;
    editedTime: string;
    name: string;
    thresholdAmount: number;
    releasedQuantity: number;
    effectiveDate: string;
    expirationDate: string;
    couponType: string;
    scopeType: string;
    amount?: number;
    discount?: number;
    creator: {
      id: string;
      phone: string;
      nickname: string;
    };
    editor: {
      id: string;
      phone: string;
      nickname: string;
    };
  };
};
