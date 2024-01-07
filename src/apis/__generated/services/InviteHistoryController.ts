import type { Executor } from "../";
import type { InviteHistoryDto } from "../model/dto";
import type { InviteHistorySpec, Page, QueryRequest } from "../model/static";

export class InviteHistoryController {
  constructor(private executor: Executor) {}

  async check(
    options: InviteHistoryControllerOptions["check"],
  ): Promise<boolean | undefined> {
    let _uri = "/inviteHistory/check";
    let _separator = _uri.indexOf("?") === -1 ? "?" : "&";
    let _value: any = undefined;
    _value = options.code;
    if (_value !== undefined && _value !== null) {
      _uri += _separator;
      _uri += "code=";
      _uri += encodeURIComponent(_value);
      _separator = "&";
    }
    return (await this.executor({ uri: _uri, method: "POST" })) as
      | boolean
      | undefined;
  }

  async delete(
    options: InviteHistoryControllerOptions["delete"],
  ): Promise<boolean> {
    const _uri = "/inviteHistory/delete";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as boolean;
  }

  async findById(
    options: InviteHistoryControllerOptions["findById"],
  ): Promise<InviteHistoryDto["InviteHistoryRepository/COMPLEX_FETCHER"]> {
    let _uri = "/inviteHistory/";
    _uri += encodeURIComponent(options.id);
    return (await this.executor({
      uri: _uri,
      method: "GET",
    })) as InviteHistoryDto["InviteHistoryRepository/COMPLEX_FETCHER"];
  }

  async query(
    options: InviteHistoryControllerOptions["query"],
  ): Promise<
    Page<InviteHistoryDto["InviteHistoryRepository/COMPLEX_FETCHER"]>
  > {
    const _uri = "/inviteHistory/query";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Page<InviteHistoryDto["InviteHistoryRepository/COMPLEX_FETCHER"]>;
  }

  async userInviteHistory(
    options: InviteHistoryControllerOptions["userInviteHistory"],
  ): Promise<
    Page<InviteHistoryDto["InviteHistoryRepository/COMPLEX_FETCHER"]>
  > {
    const _uri = "/inviteHistory/user";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Page<InviteHistoryDto["InviteHistoryRepository/COMPLEX_FETCHER"]>;
  }
}

export type InviteHistoryControllerOptions = {
  check: { code: string };
  delete: { body: Array<string> };
  findById: { id: string };
  query: { body: QueryRequest<InviteHistorySpec> };
  userInviteHistory: { body: QueryRequest<InviteHistorySpec> };
};
