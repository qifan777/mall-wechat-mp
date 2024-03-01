import type { Executor } from "../";
import type { RefundRecordDto } from "../model/dto/";
import type {
  Page,
  QueryRequest,
  RefundRecordInput,
  RefundRecordSpec,
} from "../model/static/";

export class RefundRecordController {
  constructor(private executor: Executor) {}

  async delete(
    options: RefundRecordControllerOptions["delete"],
  ): Promise<boolean | undefined> {
    const _uri = "/refundRecord/delete";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<boolean | undefined>;
  }

  async findById(
    options: RefundRecordControllerOptions["findById"],
  ): Promise<RefundRecordDto["RefundRecordRepository/COMPLEX_FETCHER"]> {
    let _uri = "/refundRecord/";
    _uri += encodeURIComponent(options.id);
    return (await this.executor({ uri: _uri, method: "GET" })) as Promise<
      RefundRecordDto["RefundRecordRepository/COMPLEX_FETCHER"]
    >;
  }

  async query(
    options: RefundRecordControllerOptions["query"],
  ): Promise<Page<RefundRecordDto["RefundRecordRepository/COMPLEX_FETCHER"]>> {
    const _uri = "/refundRecord/query";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<
      Page<RefundRecordDto["RefundRecordRepository/COMPLEX_FETCHER"]>
    >;
  }

  async save(options: RefundRecordControllerOptions["save"]): Promise<string> {
    const _uri = "/refundRecord/save";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<string>;
  }
}

export type RefundRecordControllerOptions = {
  findById: {
    id: string;
  };
  query: {
    body: QueryRequest<RefundRecordSpec>;
  };
  save: {
    body: RefundRecordInput;
  };
  delete: {
    body: Array<string>;
  };
};
