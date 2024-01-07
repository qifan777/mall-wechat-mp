import type { Executor } from "../";
import type { CouponUserDto } from "../model/dto";
import type {
  CouponUserInput,
  CouponUserSpec,
  GiftCouponInput,
  Page,
  QueryRequest,
} from "../model/static";

export class CouponUserController {
  constructor(private executor: Executor) {}

  async delete(
    options: CouponUserControllerOptions["delete"],
  ): Promise<boolean> {
    const _uri = "/couponUser/delete";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as boolean;
  }

  async findById(
    options: CouponUserControllerOptions["findById"],
  ): Promise<CouponUserDto["CouponUserRepository/COMPLEX_FETCHER"]> {
    let _uri = "/couponUser/";
    _uri += encodeURIComponent(options.id);
    return (await this.executor({
      uri: _uri,
      method: "GET",
    })) as CouponUserDto["CouponUserRepository/COMPLEX_FETCHER"];
  }

  async gift(options: CouponUserControllerOptions["gift"]): Promise<boolean> {
    const _uri = "/couponUser/gift";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as boolean;
  }

  async listByIds(
    options: CouponUserControllerOptions["listByIds"],
  ): Promise<Array<CouponUserDto["CouponUserRepository/COMPLEX_FETCHER"]>> {
    const _uri = "/couponUser/listByIds";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Array<CouponUserDto["CouponUserRepository/COMPLEX_FETCHER"]>;
  }

  async query(
    options: CouponUserControllerOptions["query"],
  ): Promise<Page<CouponUserDto["CouponUserRepository/COMPLEX_FETCHER"]>> {
    const _uri = "/couponUser/query";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Page<CouponUserDto["CouponUserRepository/COMPLEX_FETCHER"]>;
  }

  async save(options: CouponUserControllerOptions["save"]): Promise<string> {
    const _uri = "/couponUser/save";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as string;
  }
}

export type CouponUserControllerOptions = {
  delete: { body: Array<string> };
  findById: { id: string };
  gift: { body: GiftCouponInput };
  listByIds: { body: Array<string> };
  query: { body: QueryRequest<CouponUserSpec> };
  save: { body: CouponUserInput };
};
