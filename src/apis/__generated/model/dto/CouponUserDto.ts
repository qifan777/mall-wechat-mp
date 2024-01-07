export type CouponUserDto = {
  "CouponUserRepository/COMPLEX_FETCHER": {
    id: string;
    createdTime: string;
    editedTime: string;
    receiveType: string;
    status: string;
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
    user: {
      id: string;
      phone: string;
      nickname: string;
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
      couponType: string;
      scopeType: string;
      amount?: number;
      discount?: number;
    };
    userId: string;
    couponId: string;
  };
};
