export interface ProductOrderCalculateInput {
  couponUser: ProductOrderCalculateInput_TargetOf_couponUser;

  items: Array<ProductOrderCalculateInput_TargetOf_items>;
}

export interface ProductOrderCalculateInput_TargetOf_couponUser {
  id?: string;
}

export interface ProductOrderCalculateInput_TargetOf_items {
  productCount: number;

  productSkuId: string;
}
