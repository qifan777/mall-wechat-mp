import type { Executor } from "./";

import {
  AddressController,
  AuthController,
  CouponController,
  CouponUseRecordController,
  CouponUserController,
  DictController,
  InviteHistoryController,
  InviterController,
  MenuController,
  ProductAttributeController,
  ProductCategoryController,
  ProductController,
  ProductOrderController,
  ProductSkuController,
  RoleController,
  UserController,
} from "./services";

export class Api {
  readonly addressController: AddressController;

  readonly authController: AuthController;

  readonly couponController: CouponController;

  readonly couponUseRecordController: CouponUseRecordController;

  readonly couponUserController: CouponUserController;

  readonly dictController: DictController;

  readonly inviteHistoryController: InviteHistoryController;

  readonly inviterController: InviterController;

  readonly menuController: MenuController;

  readonly productOrderController: ProductOrderController;

  readonly productAttributeController: ProductAttributeController;

  readonly productCategoryController: ProductCategoryController;

  readonly productController: ProductController;

  readonly productSkuController: ProductSkuController;

  readonly roleController: RoleController;

  readonly userController: UserController;

  constructor(executor: Executor) {
    this.addressController = new AddressController(executor);
    this.authController = new AuthController(executor);
    this.couponController = new CouponController(executor);
    this.couponUseRecordController = new CouponUseRecordController(executor);
    this.couponUserController = new CouponUserController(executor);
    this.dictController = new DictController(executor);
    this.inviteHistoryController = new InviteHistoryController(executor);
    this.inviterController = new InviterController(executor);
    this.menuController = new MenuController(executor);
    this.productOrderController = new ProductOrderController(executor);
    this.productAttributeController = new ProductAttributeController(executor);
    this.productCategoryController = new ProductCategoryController(executor);
    this.productController = new ProductController(executor);
    this.productSkuController = new ProductSkuController(executor);
    this.roleController = new RoleController(executor);
    this.userController = new UserController(executor);
  }
}
