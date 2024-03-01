import type { RefundStatus } from "../enums/";

export type RefundRecordDto = {
  /**
   */
  "RefundRecordRepository/COMPLEX_FETCHER": {
    id: string;
    createdTime: string;
    editedTime: string;
    orderId: string;
    reason?: string | undefined;
    refundId: string;
    trackingNumber?: string | undefined;
    amount: number;
    originalAmount: number;
    status: RefundStatus;
    creator: {
      id: string;
      phone: string;
      nickname?: string | undefined;
    };
    editor: {
      id: string;
      phone: string;
      nickname?: string | undefined;
    };
  };
};
