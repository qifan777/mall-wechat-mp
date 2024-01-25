import type { Executor } from "../";
import type { AddressDto } from "../model/dto/";
import type {
  AddressInput,
  AddressSpec,
  Page,
  QueryRequest,
} from "../model/static/";

export class AddressController {
  constructor(private executor: Executor) {}

  async delete(
    options: AddressControllerOptions["delete"],
  ): Promise<boolean | undefined> {
    const _uri = "/address/delete";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<boolean | undefined>;
  }

  async findById(
    options: AddressControllerOptions["findById"],
  ): Promise<AddressDto["AddressRepository/COMPLEX_FETCHER"]> {
    let _uri = "/address/";
    _uri += encodeURIComponent(options.id);
    return (await this.executor({ uri: _uri, method: "GET" })) as Promise<
      AddressDto["AddressRepository/COMPLEX_FETCHER"]
    >;
  }

  async getUserAddress(): Promise<
    Array<AddressDto["AddressRepository/SIMPLE_FETCHER"]>
  > {
    const _uri = "/address/user";
    return (await this.executor({ uri: _uri, method: "GET" })) as Promise<
      Array<AddressDto["AddressRepository/SIMPLE_FETCHER"]>
    >;
  }

  async query(
    options: AddressControllerOptions["query"],
  ): Promise<Page<AddressDto["AddressRepository/COMPLEX_FETCHER"]>> {
    const _uri = "/address/query";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<Page<AddressDto["AddressRepository/COMPLEX_FETCHER"]>>;
  }

  async save(options: AddressControllerOptions["save"]): Promise<string> {
    const _uri = "/address/save";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<string>;
  }

  async top(
    options: AddressControllerOptions["top"],
  ): Promise<boolean | undefined> {
    let _uri = "/address/top";
    let _separator = _uri.indexOf("?") === -1 ? "?" : "&";
    let _value: any = undefined;
    _value = options.id;
    if (_value !== undefined && _value !== null) {
      _uri += _separator;
      _uri += "id=";
      _uri += encodeURIComponent(_value);
      _separator = "&";
    }
    return (await this.executor({ uri: _uri, method: "POST" })) as Promise<
      boolean | undefined
    >;
  }
}
export type AddressControllerOptions = {
  findById: {
    id: string;
  };
  query: {
    body: QueryRequest<AddressSpec>;
  };
  save: {
    body: AddressInput;
  };
  delete: {
    body: Array<string>;
  };
  getUserAddress: {};
  top: {
    id: string;
  };
};
