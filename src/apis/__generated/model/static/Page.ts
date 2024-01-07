import type { Pageable, Sort } from "./";

export interface Page<T> {
  content: Array<T>;

  empty: boolean;

  first: boolean;

  last: boolean;

  number: number;

  numberOfElements: number;

  pageable: Pageable;

  size: number;

  sort: Sort;

  totalElements: number;

  totalPages: number;
}
