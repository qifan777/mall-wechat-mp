export type ProductSkuDto = {
  /**
   */
  "ProductSkuRepository/COMPLEX_FETCHER": {
    id: string;
    createdTime: string;
    editedTime: string;
    values: Array<string>;
    name: string;
    cover: string;
    price: number;
    stock: number;
    description: string;
    productId: string;
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
