import type { Executor } from "../";
import type { ProductSkuDto } from "../model/dto/";
import type {
  Page,
  ProductSkuInput,
  ProductSkuSpec,
  QueryRequest,
} from "../model/static/";

export class ProductSkuController {
  constructor(private executor: Executor) {}

  async delete(
    options: ProductSkuControllerOptions["delete"],
  ): Promise<boolean | undefined> {
    const _uri = "/productSku/delete";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<boolean | undefined>;
  }

  async findById(
    options: ProductSkuControllerOptions["findById"],
  ): Promise<ProductSkuDto["ProductSkuRepository/COMPLEX_FETCHER"]> {
    let _uri = "/productSku/";
    _uri += encodeURIComponent(options.id);
    return (await this.executor({ uri: _uri, method: "GET" })) as Promise<
      ProductSkuDto["ProductSkuRepository/COMPLEX_FETCHER"]
    >;
  }

  async query(
    options: ProductSkuControllerOptions["query"],
  ): Promise<Page<ProductSkuDto["ProductSkuRepository/COMPLEX_FETCHER"]>> {
    const _uri = "/productSku/query";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<Page<ProductSkuDto["ProductSkuRepository/COMPLEX_FETCHER"]>>;
  }

  async save(options: ProductSkuControllerOptions["save"]): Promise<string> {
    const _uri = "/productSku/save";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<string>;
  }

  async saveBatch(
    options: ProductSkuControllerOptions["saveBatch"],
  ): Promise<boolean | undefined> {
    const _uri = "/productSku/save-batch";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<boolean | undefined>;
  }
}
export type ProductSkuControllerOptions = {
  findById: {
    id: string;
  };
  query: {
    body: QueryRequest<ProductSkuSpec>;
  };
  save: {
    body: ProductSkuInput;
  };
  saveBatch: {
    body: Array<ProductSkuInput>;
  };
  delete: {
    body: Array<string>;
  };
};
