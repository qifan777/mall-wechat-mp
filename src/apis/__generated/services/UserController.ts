import type { Executor } from "../";
import type { MenuDto, RoleDto, UserDto } from "../model/dto";
import type {
  Page,
  QueryRequest,
  SaTokenInfo,
  UserInput,
  UserRegisterInput,
  UserSpec,
} from "../model/static";

export class UserController {
  constructor(private executor: Executor) {}

  async delete(options: UserControllerOptions["delete"]): Promise<boolean> {
    const _uri = "/user/delete";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as boolean;
  }

  async findById(
    options: UserControllerOptions["findById"],
  ): Promise<UserDto["UserRepository/COMPLEX_FETCHER"]> {
    let _uri = "/user/";
    _uri += encodeURIComponent(options.id);
    return (await this.executor({
      uri: _uri,
      method: "GET",
    })) as UserDto["UserRepository/COMPLEX_FETCHER"];
  }

  async getUserMenus(): Promise<
    Array<MenuDto["MenuRepository/COMPLEX_FETCHER"]>
  > {
    const _uri = "/user/menus";
    return (await this.executor({ uri: _uri, method: "GET" })) as Array<
      MenuDto["MenuRepository/COMPLEX_FETCHER"]
    >;
  }

  async getUserMenus_2(
    options: UserControllerOptions["getUserMenus_2"],
  ): Promise<Array<MenuDto["MenuRepository/COMPLEX_FETCHER"]>> {
    let _uri = "/user/";
    _uri += encodeURIComponent(options.id);
    _uri += "/menus";
    return (await this.executor({ uri: _uri, method: "GET" })) as Array<
      MenuDto["MenuRepository/COMPLEX_FETCHER"]
    >;
  }

  async getUserMenusTree(): Promise<
    Array<MenuDto["MenuRepository/MENU_TREE_FETCHER"]>
  > {
    const _uri = "/user/menus/tree";
    return (await this.executor({ uri: _uri, method: "GET" })) as Array<
      MenuDto["MenuRepository/MENU_TREE_FETCHER"]
    >;
  }

  async getUserMenusTree_2(
    options: UserControllerOptions["getUserMenusTree_2"],
  ): Promise<Array<MenuDto["MenuRepository/MENU_TREE_FETCHER"]>> {
    let _uri = "/user/";
    _uri += encodeURIComponent(options.id);
    _uri += "/menus/tree";
    return (await this.executor({ uri: _uri, method: "GET" })) as Array<
      MenuDto["MenuRepository/MENU_TREE_FETCHER"]
    >;
  }

  async getUserRoles(
    options: UserControllerOptions["getUserRoles"],
  ): Promise<Array<RoleDto["RoleRepository/SIMPLE_FETCHER"]>> {
    let _uri = "/user/";
    _uri += encodeURIComponent(options.id);
    _uri += "/roles";
    return (await this.executor({ uri: _uri, method: "GET" })) as Array<
      RoleDto["RoleRepository/SIMPLE_FETCHER"]
    >;
  }

  async query(
    options: UserControllerOptions["query"],
  ): Promise<Page<UserDto["UserRepository/COMPLEX_FETCHER"]>> {
    const _uri = "/user/query";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Page<UserDto["UserRepository/COMPLEX_FETCHER"]>;
  }

  async register(
    options: UserControllerOptions["register"],
  ): Promise<SaTokenInfo> {
    const _uri = "/user/register";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as SaTokenInfo;
  }

  async save(options: UserControllerOptions["save"]): Promise<string> {
    const _uri = "/user/save";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as string;
  }

  async userInfo(): Promise<UserDto["UserRepository/COMPLEX_FETCHER"]> {
    const _uri = "/user/info";
    return (await this.executor({
      uri: _uri,
      method: "GET",
    })) as UserDto["UserRepository/COMPLEX_FETCHER"];
  }
}

export type UserControllerOptions = {
  delete: { body: Array<string> };
  findById: { id: string };
  getUserMenus: {};
  getUserMenus_2: { id: string };
  getUserMenusTree: {};
  getUserMenusTree_2: { id: string };
  getUserRoles: { id: string };
  query: { body: QueryRequest<UserSpec> };
  register: { body: UserRegisterInput };
  save: { body: UserInput };
  userInfo: {};
};
