import type { Direction } from "../enums/";

export interface QueryRequest_QuerySort {
  property: string;
  direction: Direction;
}
