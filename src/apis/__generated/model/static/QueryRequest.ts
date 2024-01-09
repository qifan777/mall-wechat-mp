import type { LikeMode } from "../enums/";
import type { QueryRequest_QuerySort } from "./";

export interface QueryRequest<T> {
  query: T;
  pageSize?: number | undefined;
  pageNum?: number | undefined;
  likeMode?: LikeMode | undefined;
  sorts?: Array<QueryRequest_QuerySort> | undefined;
}
