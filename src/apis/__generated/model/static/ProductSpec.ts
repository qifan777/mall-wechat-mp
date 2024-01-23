import type { KeyValue } from "./";

export interface ProductSpec {
  price?: number | undefined;
  cover?: string | undefined;
  stock?: number | undefined;
  tags?: Array<string> | undefined;
  specifications?: Array<KeyValue> | undefined;
  attributes?: Array<KeyValue> | undefined;
  name?: string | undefined;
  description?: string | undefined;
  categoryId?: string | undefined;
  brand?: string | undefined;
  id?: string | undefined;
  minCreatedTime?: string | undefined;
  maxCreatedTime?: string | undefined;
  minEditedTime?: string | undefined;
  maxEditedTime?: string | undefined;
}
