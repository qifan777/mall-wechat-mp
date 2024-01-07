import type { Executor } from "../";
import type { ProductAttributeDto } from "../model/dto";
import type {
  Page,
  ProductAttributeInput,
  ProductAttributeSpec,
  QueryRequest,
} from "../model/static";

export class ProductAttributeController {
  constructor(private executor: Executor) {}

  async delete(
    options: ProductAttributeControllerOptions["delete"],
  ): Promise<boolean> {
    const _uri = "/productAttribute/delete";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as boolean;
  }

  async findById(
    options: ProductAttributeControllerOptions["findById"],
  ): Promise<
    ProductAttributeDto["ProductAttributeRepository/COMPLEX_FETCHER"]
  > {
    let _uri = "/productAttribute/";
    _uri += encodeURIComponent(options.id);
    return (await this.executor({
      uri: _uri,
      method: "GET",
    })) as ProductAttributeDto["ProductAttributeRepository/COMPLEX_FETCHER"];
  }

  async query(
    options: ProductAttributeControllerOptions["query"],
  ): Promise<
    Page<ProductAttributeDto["ProductAttributeRepository/COMPLEX_FETCHER"]>
  > {
    const _uri = "/productAttribute/query";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Page<
      ProductAttributeDto["ProductAttributeRepository/COMPLEX_FETCHER"]
    >;
  }

  async save(
    options: ProductAttributeControllerOptions["save"],
  ): Promise<string> {
    const _uri = "/productAttribute/save";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as string;
  }
}

export type ProductAttributeControllerOptions = {
  delete: { body: Array<string> };
  findById: { id: string };
  query: { body: QueryRequest<ProductAttributeSpec> };
  save: { body: ProductAttributeInput };
};
