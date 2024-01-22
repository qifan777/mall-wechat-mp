import type { Attribute } from "./";

export interface ProductInput {
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
  id?: string | undefined;
}
