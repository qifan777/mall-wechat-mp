import type { Executor } from "../";
import type { CouponUseRecordDto } from "../model/dto";
import type {
  CouponUseRecordInput,
  CouponUseRecordSpec,
  Page,
  QueryRequest,
} from "../model/static";

export class CouponUseRecordController {
  constructor(private executor: Executor) {}

  async delete(
    options: CouponUseRecordControllerOptions["delete"],
  ): Promise<boolean> {
    const _uri = "/couponUseRecord/delete";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as boolean;
  }

  async findById(
    options: CouponUseRecordControllerOptions["findById"],
  ): Promise<CouponUseRecordDto["CouponUseRecordRepository/COMPLEX_FETCHER"]> {
    let _uri = "/couponUseRecord/";
    _uri += encodeURIComponent(options.id);
    return (await this.executor({
      uri: _uri,
      method: "GET",
    })) as CouponUseRecordDto["CouponUseRecordRepository/COMPLEX_FETCHER"];
  }

  async query(
    options: CouponUseRecordControllerOptions["query"],
  ): Promise<
    Page<CouponUseRecordDto["CouponUseRecordRepository/COMPLEX_FETCHER"]>
  > {
    const _uri = "/couponUseRecord/query";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Page<
      CouponUseRecordDto["CouponUseRecordRepository/COMPLEX_FETCHER"]
    >;
  }

  async save(
    options: CouponUseRecordControllerOptions["save"],
  ): Promise<string> {
    const _uri = "/couponUseRecord/save";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as string;
  }
}

export type CouponUseRecordControllerOptions = {
  delete: { body: Array<string> };
  findById: { id: string };
  query: { body: QueryRequest<CouponUseRecordSpec> };
  save: { body: CouponUseRecordInput };
};
