export type ProductDto = {
  "ProductRepository/COMPLEX_FETCHER": {
    id: string;
    createdTime: string;
    editedTime: string;
    name: string;
    price: number;
    image: string;
    brand: string;
    stock: number;
    description: string;
    tags: string;
    features: string;
    specs: string;
    categoryId: string;
    attributes: Array<{
      id: string;
      createdTime: string;
      editedTime: string;
      name: string;
      values: string;
    }>;
    skuList: Array<{
      id: string;
      createdTime: string;
      editedTime: string;
      values: string;
      name: string;
      cover: string;
      price: number;
      stock: number;
      description: string;
    }>;
    category: {
      id: string;
      name: string;
    };
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
