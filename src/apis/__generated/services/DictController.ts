import type { Executor } from "../";
import type { DictDto } from "../model/dto";
import type { DictInput, DictSpec, Page, QueryRequest } from "../model/static";

export class DictController {
  constructor(private executor: Executor) {}

  async delete(options: DictControllerOptions["delete"]): Promise<boolean> {
    const _uri = "/dict/delete";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as boolean;
  }

  async findById(
    options: DictControllerOptions["findById"],
  ): Promise<DictDto["DictRepository/COMPLEX_FETCHER"]> {
    let _uri = "/dict/";
    _uri += encodeURIComponent(options.id);
    return (await this.executor({
      uri: _uri,
      method: "GET",
    })) as DictDto["DictRepository/COMPLEX_FETCHER"];
  }

  async query(
    options: DictControllerOptions["query"],
  ): Promise<Page<DictDto["DictRepository/COMPLEX_FETCHER"]>> {
    const _uri = "/dict/query";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Page<DictDto["DictRepository/COMPLEX_FETCHER"]>;
  }

  async save(options: DictControllerOptions["save"]): Promise<string> {
    const _uri = "/dict/save";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as string;
  }
}

export type DictControllerOptions = {
  delete: { body: Array<string> };
  findById: { id: string };
  query: { body: QueryRequest<DictSpec> };
  save: { body: DictInput };
};
