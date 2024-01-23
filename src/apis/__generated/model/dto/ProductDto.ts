import type { KeyValue } from "../static/";

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
    specifications: Array<KeyValue>;
    attributes: Array<KeyValue>;
    categoryId: string;
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
  /**
   */
  "ProductRepository/PRODUCT_SKU_FETCHER": {
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
    categoryId: string;
    skuList: Array<{
      id: string;
      createdTime: string;
      editedTime: string;
      values: Array<string>;
      name: string;
      cover: string;
      price: number;
      stock: number;
      description: string;
    }>;
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
