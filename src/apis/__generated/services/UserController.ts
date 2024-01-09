import type { Executor } from "../";
import type { UserDto } from "../model/dto/";
import type {
  Page,
  QueryRequest,
  SaTokenInfo,
  UserInput,
  UserRegisterInput,
  UserSpec,
} from "../model/static/";

export class UserController {
  constructor(private executor: Executor) {}

  async delete(
    options: UserControllerOptions["delete"],
  ): Promise<boolean | undefined> {
    const _uri = "/user/delete";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<boolean | undefined>;
  }

  async findById(
    options: UserControllerOptions["findById"],
  ): Promise<UserDto["UserRepository/COMPLEX_FETCHER"]> {
    let _uri = "/user/";
    _uri += encodeURIComponent(options.id);
    return (await this.executor({ uri: _uri, method: "GET" })) as Promise<
      UserDto["UserRepository/COMPLEX_FETCHER"]
    >;
  }

  async getUserInfo(): Promise<UserDto["UserRepository/COMPLEX_FETCHER"]> {
    const _uri = "/user/user-info";
    return (await this.executor({ uri: _uri, method: "GET" })) as Promise<
      UserDto["UserRepository/COMPLEX_FETCHER"]
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
    })) as Promise<Page<UserDto["UserRepository/COMPLEX_FETCHER"]>>;
  }

  async register(
    options: UserControllerOptions["register"],
  ): Promise<SaTokenInfo> {
    const _uri = "/user/register";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<SaTokenInfo>;
  }

  async save(options: UserControllerOptions["save"]): Promise<string> {
    const _uri = "/user/save";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<string>;
  }
}
export type UserControllerOptions = {
  findById: {
    id: string;
  };
  query: {
    body: QueryRequest<UserSpec>;
  };
  save: {
    body: UserInput;
  };
  delete: {
    body: Array<string>;
  };
  getUserInfo: {};
  register: {
    body: UserRegisterInput;
  };
};
