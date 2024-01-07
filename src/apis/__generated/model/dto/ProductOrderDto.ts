export type ProductOrderDto = {
  "ProductOrderRepository/COMPLEX_FETCHER": {
    id: string;
    createdTime: string;
    editedTime: string;
    status: string;
    deliveryFee: number;
    couponAmount: number;
    vipAmount: number;
    productAmount: number;
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
