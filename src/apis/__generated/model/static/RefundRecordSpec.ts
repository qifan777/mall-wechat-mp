import type { RefundStatus } from "../enums/";

export interface RefundRecordSpec {
  refundId?: string | undefined;
  amount?: number | undefined;
  originalAmount?: number | undefined;
  status?: RefundStatus | undefined;
  reason?: string | undefined;
  orderId?: string | undefined;
  trackingNumber?: string | undefined;
  id?: string | undefined;
  minCreatedTime?: string | undefined;
  maxCreatedTime?: string | undefined;
  minEditedTime?: string | undefined;
  maxEditedTime?: string | undefined;
}
