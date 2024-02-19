import type { Executor } from "../";
import type { ProductOrderDto } from "../model/dto/";
import type {
  Page,
  ProductOrderInput,
  ProductOrderSpec,
  QueryRequest,
  WxPayUnifiedOrderV3Result_JsapiResult,
} from "../model/static/";

export class ProductOrderController {
  constructor(private executor: Executor) {}

  async cancel(
    options: ProductOrderControllerOptions["cancel"],
  ): Promise<boolean | undefined> {
    let _uri = "/productOrder/";
    _uri += encodeURIComponent(options.id);
    _uri += "/cancel";
    return (await this.executor({ uri: _uri, method: "POST" })) as Promise<
      boolean | undefined
    >;
  }

  async create(
    options: ProductOrderControllerOptions["create"],
  ): Promise<string> {
    const _uri = "/productOrder/create";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<string>;
  }

  async delete(
    options: ProductOrderControllerOptions["delete"],
  ): Promise<boolean | undefined> {
    const _uri = "/productOrder/delete";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<boolean | undefined>;
  }

  async findById(
    options: ProductOrderControllerOptions["findById"],
  ): Promise<ProductOrderDto["ProductOrderRepository/COMPLEX_FETCHER"]> {
    let _uri = "/productOrder/";
    _uri += encodeURIComponent(options.id);
    return (await this.executor({ uri: _uri, method: "GET" })) as Promise<
      ProductOrderDto["ProductOrderRepository/COMPLEX_FETCHER"]
    >;
  }

  async prepay(
    options: ProductOrderControllerOptions["prepay"],
  ): Promise<WxPayUnifiedOrderV3Result_JsapiResult> {
    let _uri = "/productOrder/";
    _uri += encodeURIComponent(options.id);
    _uri += "/prepay";
    return (await this.executor({
      uri: _uri,
      method: "POST",
    })) as Promise<WxPayUnifiedOrderV3Result_JsapiResult>;
  }

  async query(
    options: ProductOrderControllerOptions["query"],
  ): Promise<Page<ProductOrderDto["ProductOrderRepository/COMPLEX_FETCHER"]>> {
    const _uri = "/productOrder/query";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<
      Page<ProductOrderDto["ProductOrderRepository/COMPLEX_FETCHER"]>
    >;
  }

  async queryByUser(
    options: ProductOrderControllerOptions["queryByUser"],
  ): Promise<Page<ProductOrderDto["ProductOrderRepository/COMPLEX_FETCHER"]>> {
    const _uri = "/productOrder/user";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<
      Page<ProductOrderDto["ProductOrderRepository/COMPLEX_FETCHER"]>
    >;
  }

  async save(options: ProductOrderControllerOptions["save"]): Promise<string> {
    const _uri = "/productOrder/save";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<string>;
  }
}

export type ProductOrderControllerOptions = {
  findById: {
    id: string;
  };
  query: {
    body: QueryRequest<ProductOrderSpec>;
  };
  save: {
    body: ProductOrderInput;
  };
  delete: {
    body: Array<string>;
  };
  create: {
    body: ProductOrderInput;
  };
  queryByUser: {
    body: QueryRequest<ProductOrderSpec>;
  };
  prepay: {
    id: string;
  };
  cancel: {
    id: string;
  };
};
