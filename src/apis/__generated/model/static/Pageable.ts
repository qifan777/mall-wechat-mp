import type { Sort } from "./";

export interface Pageable {
  offset: number;

  pageNumber: number;

  pageSize: number;

  paged: boolean;

  sort: Sort;

  unpaged: boolean;
}
