import type { Executor } from "../";
import type { CouponDto } from "../model/dto";
import type {
  CouponInput,
  CouponSpec,
  Page,
  QueryRequest,
} from "../model/static";

export class CouponController {
  constructor(private executor: Executor) {}

  async delete(options: CouponControllerOptions["delete"]): Promise<boolean> {
    const _uri = "/coupon/delete";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as boolean;
  }

  async findById(
    options: CouponControllerOptions["findById"],
  ): Promise<CouponDto["CouponRepository/COMPLEX_FETCHER"]> {
    let _uri = "/coupon/";
    _uri += encodeURIComponent(options.id);
    return (await this.executor({
      uri: _uri,
      method: "GET",
    })) as CouponDto["CouponRepository/COMPLEX_FETCHER"];
  }

  async query(
    options: CouponControllerOptions["query"],
  ): Promise<Page<CouponDto["CouponRepository/COMPLEX_FETCHER"]>> {
    const _uri = "/coupon/query";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Page<CouponDto["CouponRepository/COMPLEX_FETCHER"]>;
  }

  async save(options: CouponControllerOptions["save"]): Promise<string> {
    const _uri = "/coupon/save";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as string;
  }
}

export type CouponControllerOptions = {
  delete: { body: Array<string> };
  findById: { id: string };
  query: { body: QueryRequest<CouponSpec> };
  save: { body: CouponInput };
};
