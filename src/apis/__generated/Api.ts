import type { Executor } from "./";
import {
  AddressController,
  AuthController,
  DictController,
  MenuController,
  ProductCategoryController,
  ProductController,
  ProductSkuController,
  RoleController,
  UserController,
  UserWeChatController,
} from "./services/";

export class Api {
  readonly addressController: AddressController;

  readonly authController: AuthController;

  readonly dictController: DictController;

  readonly menuController: MenuController;

  readonly productCategoryController: ProductCategoryController;

  readonly productController: ProductController;

  readonly productSkuController: ProductSkuController;

  readonly roleController: RoleController;

  readonly userController: UserController;

  readonly userWeChatController: UserWeChatController;

  constructor(executor: Executor) {
    this.addressController = new AddressController(executor);
    this.authController = new AuthController(executor);
    this.dictController = new DictController(executor);
    this.menuController = new MenuController(executor);
    this.productCategoryController = new ProductCategoryController(executor);
    this.productController = new ProductController(executor);
    this.productSkuController = new ProductSkuController(executor);
    this.roleController = new RoleController(executor);
    this.userController = new UserController(executor);
    this.userWeChatController = new UserWeChatController(executor);
  }
}
