import type { RefundStatus } from "../enums/";

export interface RefundRecordInput {
  orderId: string;
  reason?: string | undefined;
  refundId: string;
  trackingNumber?: string | undefined;
  amount: number;
  originalAmount: number;
  status: RefundStatus;
  id?: string | undefined;
}
