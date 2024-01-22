import type { Attribute } from "./";

export interface ProductSpec {
  id?: string | undefined;
  price?: number | undefined;
  cover?: string | undefined;
  stock?: number | undefined;
  tags?: Array<string> | undefined;
  specifications?: Array<Attribute> | undefined;
  attributes?: Array<Attribute> | undefined;
  name?: string | undefined;
  description?: string | undefined;
  brand?: string | undefined;
  minCreatedTime?: string | undefined;
  maxCreatedTime?: string | undefined;
  minEditedTime?: string | undefined;
  maxEditedTime?: string | undefined;
}
