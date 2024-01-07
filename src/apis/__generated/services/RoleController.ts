import type { Executor } from "../";
import type { RoleDto } from "../model/dto";
import type { Page, QueryRequest, RoleInput, RoleSpec } from "../model/static";

export class RoleController {
  constructor(private executor: Executor) {}

  async delete(options: RoleControllerOptions["delete"]): Promise<boolean> {
    const _uri = "/role/delete";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as boolean;
  }

  async findById(
    options: RoleControllerOptions["findById"],
  ): Promise<RoleDto["RoleRepository/COMPLEX_FETCHER"]> {
    let _uri = "/role/";
    _uri += encodeURIComponent(options.id);
    return (await this.executor({
      uri: _uri,
      method: "GET",
    })) as RoleDto["RoleRepository/COMPLEX_FETCHER"];
  }

  async query(
    options: RoleControllerOptions["query"],
  ): Promise<Page<RoleDto["RoleRepository/COMPLEX_FETCHER"]>> {
    const _uri = "/role/query";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Page<RoleDto["RoleRepository/COMPLEX_FETCHER"]>;
  }

  async save(options: RoleControllerOptions["save"]): Promise<string> {
    const _uri = "/role/save";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as string;
  }
}

export type RoleControllerOptions = {
  delete: { body: Array<string> };
  findById: { id: string };
  query: { body: QueryRequest<RoleSpec> };
  save: { body: RoleInput };
};
