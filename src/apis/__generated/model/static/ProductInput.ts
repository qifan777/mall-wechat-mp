export interface ProductInput {
  attributes: Array<ProductInput_TargetOf_attributes>;

  brand: string;

  categoryId: string;

  description: string;

  features: string;

  id?: string;

  image: string;

  name: string;

  price: number;

  skuList: Array<ProductInput_TargetOf_skuList>;

  specs: string;

  stock: number;

  tags: string;
}

export interface ProductInput_TargetOf_attributes {
  id?: string;

  name: string;

  values: string;
}

export interface ProductInput_TargetOf_skuList {
  cover: string;

  description: string;

  id?: string;

  name: string;

  price: number;

  stock: number;

  values: string;
}
