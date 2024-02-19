import type { Executor } from "../";
import type {
  PhonePasswordAuth,
  SaTokenInfo,
  WeChatAuth,
} from "../model/static/";

export class AuthController {
  constructor(private executor: Executor) {}

  async authByPhonePassword(
    options: AuthControllerOptions["authByPhonePassword"],
  ): Promise<SaTokenInfo> {
    const _uri = "/auth/phone-password";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<SaTokenInfo>;
  }

  async authByWecChat(
    options: AuthControllerOptions["authByWecChat"],
  ): Promise<SaTokenInfo> {
    const _uri = "/auth/wechat";
    return (await this.executor({
      uri: _uri,
      method: "POST",
      body: options.body,
    })) as Promise<SaTokenInfo>;
  }
}

export type AuthControllerOptions = {
  authByPhonePassword: {
    body: PhonePasswordAuth;
  };
  authByWecChat: {
    body: WeChatAuth;
  };
};
