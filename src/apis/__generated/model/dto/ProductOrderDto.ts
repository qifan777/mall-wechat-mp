import type { PayType, ProductOrderStatus } from "../enums/";
import type { KeyValue } from "../static/";

export type ProductOrderDto = {
  /**
   */
  "ProductOrderRepository/COMPLEX_FETCHER": {
    id: string;
    createdTime: string;
    editedTime: string;
    remark: string;
    status: ProductOrderStatus;
    items: Array<{
      id: string;
      productSku: {
        id: string;
        createdTime: string;
        editedTime: string;
        values: Array<string>;
        name: string;
        cover: string;
        price: number;
        stock: number;
        description: string;
        product: {
          id: string;
          createdTime: string;
          editedTime: string;
          name: string;
          price: number;
          cover: string;
          brand: string;
          stock: number;
          description: string;
          tags: Array<string>;
          specifications: Array<KeyValue>;
          attributes: Array<KeyValue>;
        };
      };
      skuCount: number;
    }>;
    address: {
      id: string;
      createdTime: string;
      editedTime: string;
      latitude: number;
      longitude: number;
      address: string;
      details: string;
      province: string;
      city: string;
      district: string;
      phoneNumber: string;
      realName: string;
      top: boolean;
    };
    payment: {
      id: string;
      createdTime: string;
      editedTime: string;
      payType: PayType;
      payAmount: number;
      deliveryFee: number;
      couponAmount: number;
      vipAmount: number;
      productAmount: number;
      payTime?: string | undefined;
      tradeNo?: string | undefined;
    };
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
