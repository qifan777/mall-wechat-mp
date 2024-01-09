import type { Executor } from "./";
import {
  AuthController,
  UserController,
  UserWeChatController,
} from "./services/";

export class Api {
  readonly authController: AuthController;

  readonly userController: UserController;

  readonly userWeChatController: UserWeChatController;

  constructor(executor: Executor) {
    this.authController = new AuthController(executor);
    this.userController = new UserController(executor);
    this.userWeChatController = new UserWeChatController(executor);
  }
}
