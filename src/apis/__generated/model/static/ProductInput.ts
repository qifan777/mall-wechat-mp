import type { KeyValue } from "./";

export interface ProductInput {
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
  id?: string | undefined;
}
