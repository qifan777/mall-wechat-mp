<template>
  <div class="order-submit">
    <div class="address">
      <nut-cell is-link center @click="addressChooseVisible = true">
        <template #icon>
          <image class="icon" src="@/assets/icons/location.png"></image>
        </template>
        <template #title>
          <address-row :address="address" v-if="address"></address-row>
        </template>
        <template #desc v-if="!address">
          <div>请选择收货地址</div>
        </template>
        <template #link>
          <rect-right></rect-right>
        </template>
      </nut-cell>
    </div>
    <div class="coupon">
      <nut-cell is-link center @click="couponListVisible = true" title="优惠券">
        <template #icon>
          <image class="icon" src="@/assets/icons/coupon.png"></image>
        </template>
        <template #desc>
          {{ chosenCoupon ? chosenCoupon.coupon.name : "请选择优惠券" }}
        </template>
        <template #link>
          <rect-right></rect-right>
        </template>
      </nut-cell>
    </div>
    <!-- 忽略地址信息... -->
    <div class="product-list">
      <product-row
        v-for="item in cartItems"
        :key="item.sku.values.join(',')"
        :product="{
          ...item.sku,
          description: item.sku.values.join(','),
          brand: item.product.brand,
        }"
      >
        <template #operation>
          <div class="sku-count">x{{ item.count }}</div>
        </template>
      </product-row>
    </div>
    <nut-cell-group class="summary">
      <nut-cell title="商品总价">
        <template #desc>
          <div class="value">￥{{ paymentPrice.productAmount }}</div>
        </template>
      </nut-cell>
      <nut-cell title="配送费">
        <template #desc>
          <div class="value">￥{{ 0 }}</div>
        </template>
      </nut-cell>
      <nut-cell title="优惠券">
        <template #desc>
          <div class="value">-￥{{ paymentPrice.couponAmount }}</div>
        </template>
      </nut-cell>
      <nut-cell title="vip优惠">
        <template #desc>
          <div class="value">-￥{{ 0 }}</div>
        </template>
      </nut-cell>
    </nut-cell-group>
    <div class="submit-bar-wrapper">
      <div class="submit-bar">
        <div class="price">￥{{ paymentPrice.payAmount }}</div>
        <nut-button type="danger" @click="saveOrder">提交订单</nut-button>
      </div>
    </div>
    <available-coupon-list
      v-if="paymentPrice.productAmount"
      v-model:visible="couponListVisible"
      :price="paymentPrice.productAmount"
      @choose="handleCouponChoose"
    ></available-coupon-list>
    <address-choose
      v-model:visible="addressChooseVisible"
      @choose="handleAddressChose"
    ></address-choose>
  </div>
</template>

<script setup lang="ts">
import Taro from "@tarojs/taro";
import { ref, watchEffect } from "vue";
import { CartItem } from "@/components/cart/cart-store";
import { AddressDto, CouponUserDto } from "@/apis/__generated/model/dto";
import AddressChoose from "@/pages/address/address-choose.vue";
import { RectRight } from "@nutui/icons-vue-taro";
import { api } from "@/utils/api-instance";
import AvailableCouponList from "@/pages/coupon/available-coupon-list.vue";
import type {
  PaymentPriceView,
  ProductOrderInput,
} from "@/apis/__generated/model/static";
import { recursiveOmit } from "@/utils/page";
import _ from "lodash";

const addressChooseVisible = ref(false);
const address = ref<AddressDto["AddressRepository/SIMPLE_FETCHER"]>();
const handleAddressChose = (
  value: AddressDto["AddressRepository/SIMPLE_FETCHER"],
) => {
  address.value = value;
};

const cartItems = ref<CartItem[]>([]);
Taro.eventCenter.on("submitCart", (items: CartItem[]) => {
  cartItems.value = items;
});
const chosenCoupon =
  ref<CouponUserDto["CouponUserRepository/COMPLEX_FETCHER"]>();
const couponListVisible = ref(false);
const handleCouponChoose = (
  value: CouponUserDto["CouponUserRepository/COMPLEX_FETCHER"],
) => {
  chosenCoupon.value = value;
  couponListVisible.value = false;
};

const paymentPrice = ref<PaymentPriceView>({
  couponAmount: 0,
  deliveryFee: 0,
  payAmount: 0,
  productAmount: 0,
  vipAmount: 0,
});
const order = ref<ProductOrderInput>({
  remark: "",
  items: [],
  addressId: "",
  payment: {
    payType: "WE_CHAT_PAY",
  },
  couponUser: {},
});
watchEffect(() => {
  if (cartItems.value.length === 0) return;
  order.value.items = cartItems.value.map((item) => ({
    productSkuId: item.sku.id,
    skuCount: item.count,
  }));
  if (address.value) {
    order.value.addressId = address.value.id;
  }
  if (chosenCoupon.value) {
    order.value.couponUser = { id: chosenCoupon.value.id };
  }
  api.productOrderController.calculate({ body: order.value }).then((res) => {
    paymentPrice.value = res;
  });
});
const saveOrder = () => {
  if (!address.value) {
    Taro.showToast({
      title: "请选择收货地址",
      icon: "none",
      duration: 1000,
    });
    return;
  }
  if (order.value.couponUser && !order.value.couponUser.id) {
    order.value = _.omit(order.value, ["couponUser"]);
  }
  api.productOrderController
    .create({
      body: order.value,
    })
    .then((res) => {
      console.log(res);
      Taro.showToast({
        title: "订单创建成功",
        icon: "success",
        duration: 1000,
      });
    });
};
</script>

<style lang="scss">
page {
  background-color: rgba(black, 0.05);
}

.order-submit {
  .icon {
    width: 40px;
    height: 40px;
  }
  .address {
    background-color: white;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    .nut-cell {
      margin-top: 0;
    }
    .address-row {
      padding: 0;
    }
  }
  .product-list {
    background-color: white;
    padding: 32px;
    border-radius: 12px;
    margin-bottom: 30px;
    .sku-count {
      font-size: 28px;
    }
  }
  .summary {
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    .value {
      color: rgba(black, 0.9);
      font-weight: bold;
    }
  }
  .submit-bar-wrapper {
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: white;

    .submit-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      width: 700px;
      .price {
        font-size: 34px;
        color: red;
      }
    }
  }
}
</style>
