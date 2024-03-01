import type { Executor } from "../";
import type { CouponUserDto } from "../model/dto/";
import type {
  CouponUserInput,
  CouponUserSpec,
  GiftCouponInput,
  Page,
  QueryRequest,
} from "../model/static/";

export class CouponUserController {
  constructor(private executor: Executor) {}

  async delete(
    options: CouponUserControllerOptions["delete"],
  ): Promise<boolean | undefined> {
    const _uri = "/couponUser/delete";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<boolean | undefined>;
  }

  async findById(
    options: CouponUserControllerOptions["findById"],
  ): Promise<CouponUserDto["CouponUserRepository/COMPLEX_FETCHER"]> {
    let _uri = "/couponUser/";
    _uri += encodeURIComponent(options.id);
    return (await this.executor({ uri: _uri, method: "GET" })) as Promise<
      CouponUserDto["CouponUserRepository/COMPLEX_FETCHER"]
    >;
  }

  async gift(options: CouponUserControllerOptions["gift"]): Promise<boolean> {
    const _uri = "/couponUser/gift";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<boolean>;
  }

  async query(
    options: CouponUserControllerOptions["query"],
  ): Promise<Page<CouponUserDto["CouponUserRepository/COMPLEX_FETCHER"]>> {
    const _uri = "/couponUser/query";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<Page<CouponUserDto["CouponUserRepository/COMPLEX_FETCHER"]>>;
  }

  async queryByUser(
    options: CouponUserControllerOptions["queryByUser"],
  ): Promise<Page<CouponUserDto["CouponUserRepository/COMPLEX_FETCHER"]>> {
    const _uri = "/couponUser/user";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<Page<CouponUserDto["CouponUserRepository/COMPLEX_FETCHER"]>>;
  }

  async save(options: CouponUserControllerOptions["save"]): Promise<string> {
    const _uri = "/couponUser/save";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<string>;
  }
}

export type CouponUserControllerOptions = {
  findById: {
    id: string;
  };
  query: {
    body: QueryRequest<CouponUserSpec>;
  };
  save: {
    body: CouponUserInput;
  };
  delete: {
    body: Array<string>;
  };
  gift: {
    body: GiftCouponInput;
  };
  queryByUser: {
    body: QueryRequest<CouponUserSpec>;
  };
};
