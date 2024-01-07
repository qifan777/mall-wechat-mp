import type { Executor } from "../";
import type { ProductOrderDto } from "../model/dto";
import type {
  Page,
  ProductOrderCalculateInput,
  ProductOrderInput,
  ProductOrderPriceView,
  ProductOrderSpec,
  QueryRequest,
} from "../model/static";

export class ProductOrderController {
  constructor(private executor: Executor) {}

  async delete(
    options: ProductOrderControllerOptions["delete"],
  ): Promise<boolean> {
    const _uri = "/productOrder/delete";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as boolean;
  }

  async findById(
    options: ProductOrderControllerOptions["findById"],
  ): Promise<ProductOrderDto["ProductOrderRepository/COMPLEX_FETCHER"]> {
    let _uri = "/productOrder/";
    _uri += encodeURIComponent(options.id);
    return (await this.executor({
      uri: _uri,
      method: "GET",
    })) as ProductOrderDto["ProductOrderRepository/COMPLEX_FETCHER"];
  }

  async orderCalculate(
    options: ProductOrderControllerOptions["orderCalculate"],
  ): Promise<ProductOrderPriceView> {
    const _uri = "/productOrder/calculate";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as ProductOrderPriceView;
  }

  async query(
    options: ProductOrderControllerOptions["query"],
  ): Promise<Page<ProductOrderDto["ProductOrderRepository/COMPLEX_FETCHER"]>> {
    const _uri = "/productOrder/query";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Page<ProductOrderDto["ProductOrderRepository/COMPLEX_FETCHER"]>;
  }

  async save(options: ProductOrderControllerOptions["save"]): Promise<string> {
    const _uri = "/productOrder/save";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as string;
  }
}

export type ProductOrderControllerOptions = {
  delete: { body: Array<string> };
  findById: { id: string };
  orderCalculate: { body: ProductOrderCalculateInput };
  query: { body: QueryRequest<ProductOrderSpec> };
  save: { body: ProductOrderInput };
};
