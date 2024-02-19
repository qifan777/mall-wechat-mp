import type { Executor } from "../";
import type { UserWeChatDto } from "../model/dto/";
import type {
  Page,
  QueryRequest,
  SaTokenInfo,
  UserWeChatInput,
  UserWeChatRegisterInput,
  UserWeChatSpec,
} from "../model/static/";

export class UserWeChatController {
  constructor(private executor: Executor) {}

  async delete(
    options: UserWeChatControllerOptions["delete"],
  ): Promise<boolean | undefined> {
    const _uri = "/userWeChat/delete";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<boolean | undefined>;
  }

  async findById(
    options: UserWeChatControllerOptions["findById"],
  ): Promise<UserWeChatDto["UserWeChatRepository/COMPLEX_FETCHER"]> {
    let _uri = "/userWeChat/";
    _uri += encodeURIComponent(options.id);
    return (await this.executor({ uri: _uri, method: "GET" })) as Promise<
      UserWeChatDto["UserWeChatRepository/COMPLEX_FETCHER"]
    >;
  }

  async query(
    options: UserWeChatControllerOptions["query"],
  ): Promise<Page<UserWeChatDto["UserWeChatRepository/COMPLEX_FETCHER"]>> {
    const _uri = "/userWeChat/query";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<Page<UserWeChatDto["UserWeChatRepository/COMPLEX_FETCHER"]>>;
  }

  async register(
    options: UserWeChatControllerOptions["register"],
  ): Promise<SaTokenInfo> {
    const _uri = "/userWeChat/register";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<SaTokenInfo>;
  }

  async save(options: UserWeChatControllerOptions["save"]): Promise<string> {
    const _uri = "/userWeChat/save";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<string>;
  }
}

export type UserWeChatControllerOptions = {
  findById: {
    id: string;
  };
  query: {
    body: QueryRequest<UserWeChatSpec>;
  };
  save: {
    body: UserWeChatInput;
  };
  delete: {
    body: Array<string>;
  };
  register: {
    body: UserWeChatRegisterInput;
  };
};
