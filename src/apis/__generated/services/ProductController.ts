import type { Executor } from "../";
import type { ProductDto } from "../model/dto/";
import type {
  Page,
  ProductInput,
  ProductSpec,
  QueryRequest,
} from "../model/static/";

export class ProductController {
  constructor(private executor: Executor) {}

  async delete(
    options: ProductControllerOptions["delete"],
  ): Promise<boolean | undefined> {
    const _uri = "/product/delete";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<boolean | undefined>;
  }

  async findById(
    options: ProductControllerOptions["findById"],
  ): Promise<ProductDto["ProductRepository/PRODUCT_SKU_FETCHER"]> {
    let _uri = "/product/";
    _uri += encodeURIComponent(options.id);
    return (await this.executor({ uri: _uri, method: "GET" })) as Promise<
      ProductDto["ProductRepository/PRODUCT_SKU_FETCHER"]
    >;
  }

  async query(
    options: ProductControllerOptions["query"],
  ): Promise<Page<ProductDto["ProductRepository/COMPLEX_FETCHER"]>> {
    const _uri = "/product/query";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<Page<ProductDto["ProductRepository/COMPLEX_FETCHER"]>>;
  }

  async save(options: ProductControllerOptions["save"]): Promise<string> {
    const _uri = "/product/save";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<string>;
  }
}

export type ProductControllerOptions = {
  findById: {
    id: string;
  };
  query: {
    body: QueryRequest<ProductSpec>;
  };
  save: {
    body: ProductInput;
  };
  delete: {
    body: Array<string>;
  };
};
