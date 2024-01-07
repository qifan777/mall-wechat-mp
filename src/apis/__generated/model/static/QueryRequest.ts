import type { LikeMode, Sort_Direction } from "../enums";
import type { InviteHistorySpec } from "./";

export interface QueryRequest<T> {
  likeMode?: LikeMode;

  pageNum?: number;

  pageSize?: number;

  query: T;

  sorts?: Array<QueryRequest_QuerySort>;
}

export interface QueryRequest_QuerySort {
  direction: Sort_Direction;

  property: string;
}
