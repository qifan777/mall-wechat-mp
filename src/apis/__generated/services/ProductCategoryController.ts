import type { Executor } from "../";
import type { ProductCategoryDto } from "../model/dto";
import type {
  Page,
  ProductCategoryInput,
  ProductCategorySpec,
  QueryRequest,
} from "../model/static";

export class ProductCategoryController {
  constructor(private executor: Executor) {}

  async delete(
    options: ProductCategoryControllerOptions["delete"],
  ): Promise<boolean> {
    const _uri = "/productCategory/delete";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as boolean;
  }

  async findById(
    options: ProductCategoryControllerOptions["findById"],
  ): Promise<ProductCategoryDto["ProductCategoryRepository/COMPLEX_FETCHER"]> {
    let _uri = "/productCategory/";
    _uri += encodeURIComponent(options.id);
    return (await this.executor({
      uri: _uri,
      method: "GET",
    })) as ProductCategoryDto["ProductCategoryRepository/COMPLEX_FETCHER"];
  }

  async query(
    options: ProductCategoryControllerOptions["query"],
  ): Promise<
    Page<ProductCategoryDto["ProductCategoryRepository/COMPLEX_FETCHER"]>
  > {
    const _uri = "/productCategory/query";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Page<
      ProductCategoryDto["ProductCategoryRepository/COMPLEX_FETCHER"]
    >;
  }

  async save(
    options: ProductCategoryControllerOptions["save"],
  ): Promise<string> {
    const _uri = "/productCategory/save";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as string;
  }
}

export type ProductCategoryControllerOptions = {
  delete: { body: Array<string> };
  findById: { id: string };
  query: { body: QueryRequest<ProductCategorySpec> };
  save: { body: ProductCategoryInput };
};
