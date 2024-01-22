export interface ProductSkuInput {
  values: Array<string>;
  name: string;
  cover: string;
  price: number;
  stock: number;
  description: string;
  productId: string;
  id?: string | undefined;
}
