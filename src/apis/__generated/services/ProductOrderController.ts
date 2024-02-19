import type { Executor } from "../";
import type { ProductOrderDto } from "../model/dto/";
import type {
  Page,
  ProductOrderInput,
  ProductOrderSpec,
  QueryRequest,
} from "../model/static/";

export class ProductOrderController {
  constructor(private executor: Executor) {}

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
};
