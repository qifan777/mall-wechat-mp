import type { Attribute } from "../static/";

export type ProductDto = {
  /**
   */
  "ProductRepository/COMPLEX_FETCHER": {
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
    categoryId: string;
    attributes: Array<Attribute>;
    specifications: Array<Attribute>;
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
