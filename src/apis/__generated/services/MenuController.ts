import type { Executor } from "../";
import type { MenuDto } from "../model/dto";
import type { MenuInput, MenuSpec, Page, QueryRequest } from "../model/static";

export class MenuController {
  constructor(private executor: Executor) {}

  async delete(options: MenuControllerOptions["delete"]): Promise<boolean> {
    const _uri = "/menu/delete";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as boolean;
  }

  async findById(
    options: MenuControllerOptions["findById"],
  ): Promise<MenuDto["MenuRepository/COMPLEX_FETCHER"]> {
    let _uri = "/menu/";
    _uri += encodeURIComponent(options.id);
    return (await this.executor({
      uri: _uri,
      method: "GET",
    })) as MenuDto["MenuRepository/COMPLEX_FETCHER"];
  }

  async query(
    options: MenuControllerOptions["query"],
  ): Promise<Page<MenuDto["MenuRepository/COMPLEX_FETCHER"]>> {
    const _uri = "/menu/query";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Page<MenuDto["MenuRepository/COMPLEX_FETCHER"]>;
  }

  async queryMenuTree(): Promise<
    Array<MenuDto["MenuRepository/MENU_TREE_FETCHER"]>
  > {
    const _uri = "/menu/tree";
    return (await this.executor({ uri: _uri, method: "GET" })) as Array<
      MenuDto["MenuRepository/MENU_TREE_FETCHER"]
    >;
  }

  async save(options: MenuControllerOptions["save"]): Promise<string> {
    const _uri = "/menu/save";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as string;
  }
}

export type MenuControllerOptions = {
  delete: { body: Array<string> };
  findById: { id: string };
  query: { body: QueryRequest<MenuSpec> };
  queryMenuTree: {};
  save: { body: MenuInput };
};
