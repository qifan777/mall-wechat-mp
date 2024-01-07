import type { Executor } from "../";
import type { InviterDto } from "../model/dto";
import type { InviterSpec, Page, QueryRequest } from "../model/static";

export class InviterController {
  constructor(private executor: Executor) {}

  async delete(options: InviterControllerOptions["delete"]): Promise<boolean> {
    const _uri = "/inviter/delete";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as boolean;
  }

  async findById(
    options: InviterControllerOptions["findById"],
  ): Promise<InviterDto["InviterRepository/COMPLEX_FETCHER"]> {
    let _uri = "/inviter/";
    _uri += encodeURIComponent(options.id);
    return (await this.executor({
      uri: _uri,
      method: "GET",
    })) as InviterDto["InviterRepository/COMPLEX_FETCHER"];
  }

  async getInviteInfo(): Promise<
    InviterDto["InviterRepository/COMPLEX_FETCHER"]
  > {
    const _uri = "/inviter/info";
    return (await this.executor({
      uri: _uri,
      method: "GET",
    })) as InviterDto["InviterRepository/COMPLEX_FETCHER"];
  }

  async query(
    options: InviterControllerOptions["query"],
  ): Promise<Page<InviterDto["InviterRepository/COMPLEX_FETCHER"]>> {
    const _uri = "/inviter/query";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Page<InviterDto["InviterRepository/COMPLEX_FETCHER"]>;
  }

  async save(): Promise<string> {
    const _uri = "/inviter/save";
    return (await this.executor({ uri: _uri, method: "POST" })) as string;
  }
}

export type InviterControllerOptions = {
  delete: { body: Array<string> };
  findById: { id: string };
  getInviteInfo: {};
  query: { body: QueryRequest<InviterSpec> };
  save: {};
};
