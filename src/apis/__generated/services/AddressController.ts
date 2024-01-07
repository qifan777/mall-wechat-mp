import type { Executor } from "../";
import type { AddressDto } from "../model/dto";
import type {
  AddressInput,
  AddressSpec,
  Page,
  QueryRequest,
} from "../model/static";

export class AddressController {
  constructor(private executor: Executor) {}

  async delete(options: AddressControllerOptions["delete"]): Promise<boolean> {
    const _uri = "/address/delete";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as boolean;
  }

  async findById(
    options: AddressControllerOptions["findById"],
  ): Promise<AddressDto["AddressRepository/COMPLEX_FETCHER"]> {
    let _uri = "/address/";
    _uri += encodeURIComponent(options.id);
    return (await this.executor({
      uri: _uri,
      method: "GET",
    })) as AddressDto["AddressRepository/COMPLEX_FETCHER"];
  }

  async query(
    options: AddressControllerOptions["query"],
  ): Promise<Page<AddressDto["AddressRepository/COMPLEX_FETCHER"]>> {
    const _uri = "/address/query";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Page<AddressDto["AddressRepository/COMPLEX_FETCHER"]>;
  }

  async save(options: AddressControllerOptions["save"]): Promise<string> {
    const _uri = "/address/save";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as string;
  }
}

export type AddressControllerOptions = {
  delete: { body: Array<string> };
  findById: { id: string };
  query: { body: QueryRequest<AddressSpec> };
  save: { body: AddressInput };
};
