import type { ProductOrderStatus } from "../enums/";

export type ProductOrderDto = {
  /**
   */
  "ProductOrderRepository/COMPLEX_FETCHER": {
    id: string;
    createdTime: string;
    editedTime: string;
    remark: string;
    status: ProductOrderStatus;
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
