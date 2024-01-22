import type { Executor } from "../";
import type { DictDto } from "../model/dto/";
import type { DictInput, DictSpec, Page, QueryRequest } from "../model/static/";

export class DictController {
  constructor(private executor: Executor) {}

  async delete(
    options: DictControllerOptions["delete"],
  ): Promise<boolean | undefined> {
    const _uri = "/dict/delete";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<boolean | undefined>;
  }

  async findById(
    options: DictControllerOptions["findById"],
  ): Promise<DictDto["DictRepository/COMPLEX_FETCHER"]> {
    let _uri = "/dict/";
    _uri += encodeURIComponent(options.id);
    return (await this.executor({ uri: _uri, method: "GET" })) as Promise<
      DictDto["DictRepository/COMPLEX_FETCHER"]
    >;
  }

  async generateJava(): Promise<void> {
    const _uri = "/dict/java";
    return (await this.executor({ uri: _uri, method: "GET" })) as Promise<void>;
  }

  async generateTS(): Promise<Array<number>> {
    const _uri = "/dict/ts";
    return (await this.executor({ uri: _uri, method: "GET" })) as Promise<
      Array<number>
    >;
  }

  async query(
    options: DictControllerOptions["query"],
  ): Promise<Page<DictDto["DictRepository/COMPLEX_FETCHER"]>> {
    const _uri = "/dict/query";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<Page<DictDto["DictRepository/COMPLEX_FETCHER"]>>;
  }

  async save(options: DictControllerOptions["save"]): Promise<string> {
    const _uri = "/dict/save";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<string>;
  }
}
export type DictControllerOptions = {
  findById: {
    id: string;
  };
  query: {
    body: QueryRequest<DictSpec>;
  };
  save: {
    body: DictInput;
  };
  delete: {
    body: Array<string>;
  };
  generateTS: {};
  generateJava: {};
};
