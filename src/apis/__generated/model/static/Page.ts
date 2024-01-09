import type { Pageable, Sort } from "./";

export interface Page<T> {
  totalPages: number;
  totalElements: number;
  number: number;
  size: number;
  numberOfElements: number;
  content: Array<T>;
  sort: Sort;
  first: boolean;
  last: boolean;
  pageable: Pageable;
}
