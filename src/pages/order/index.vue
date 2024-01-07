<template>
  <div class="order-submit">
    <item-choose
      :icon-path="localPng"
      tip="请选择收货地址"
      page-url="../address/address-list?from=order"
      :show-tip="address == undefined"
    >
      <div class="address-info" v-if="address">
        <div class="details">{{ address.address }}</div>
        <div class="connector">
          <div class="real-name">{{ address.realName }}</div>
          <div class="phone-number">{{ address.phoneNumber }}</div>
        </div>
      </div>
    </item-choose>

    <div class="product-list">
      <div
        class="product-info"
        v-for="item in cartItems"
        :key="item.product.id + item.sku.values"
      >
        <div class="cover">
          <image
            :src="item.sku.cover || item.product.image"
            mode="aspectFill"
          ></image>
        </div>
        <div class="info">
          <div class="name">{{ item.sku.name }}</div>
          <div class="values">{{ item.sku.values }}</div>
          <div class="price-count">
            <div class="price">
              <span class="price-prefix">￥</span>
              {{ item.sku.price }}
            </div>
            <div class="count-wrapper">
              <div class="count">x{{ item.count }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <item-choose
      :icon-path="couponPng"
      page-url="../coupon/available-coupon-list"
      :show-tip="couponUser == undefined"
      tip="请选择优惠券"
      @success="showAvailableCouon"
    >
      <div class="coupon-info" v-if="couponUser">
        <div class="coupon-name">{{ couponUser.coupon.name }}</div>
        <div class="value">-{{ orderPrice.couponAmount }}元</div>
      </div>
    </item-choose>
    <div class="sumary">
      <div class="title">价格明细</div>
      <div class="row">
        <div class="label">商品总价：</div>
        <div class="value">￥{{ orderPrice.productAmount }}</div>
      </div>
      <div class="row">
        <div class="label">配送费：</div>
        <div class="value">￥{{ orderPrice.deliveryFee }}</div>
      </div>
      <div class="row">
        <div class="label">优惠券：</div>
        <div class="value">-￥{{ orderPrice.couponAmount }}</div>
      </div>
      <div class="row">
        <div class="label">vip优惠：</div>
        <div class="value">-￥{{ orderPrice.vipAmount }}</div>
      </div>
    </div>
    <div class="submit-bar-wrapper">
      <div class="submit-bar">
        <div class="total">
          <div class="label">总计：</div>
          <div class="price">￥{{ totalPrice }}</div>
        </div>
        <nut-button type="warning">提交订单</nut-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AddressDto, CouponUserDto } from "@/apis/__generated/model/dto";
import Taro from "@tarojs/taro";
import { computed, ref } from "vue";
import { CartItem } from "@/components/cart/cart-store";
import ItemChoose from "@/components/item-choose/item-choose.vue";
import { api } from "@/utils/api-instance";
import { ProductOrderPriceView } from "@/apis/__generated/model/static";
import localPng from "@/assets/icons/local.png";
import couponPng from "@/assets/icons/coupon.png";

const address = ref<AddressDto["AddressRepository/COMPLEX_FETCHER"]>();
Taro.eventCenter.on(
  "chooseAddress",
  (value: AddressDto["AddressRepository/COMPLEX_FETCHER"]) => {
    address.value = value;
  },
);
const cartItems = ref<CartItem[]>([]);
const orderPrice = ref<ProductOrderPriceView>({
  availableCoupons: [],
  couponAmount: 0,
  deliveryFee: 0,
  productAmount: 0,
  vipAmount: 0,
});
const totalPrice = computed(() => {
  return (
    orderPrice.value.productAmount +
    orderPrice.value.deliveryFee -
    orderPrice.value.couponAmount -
    orderPrice.value.vipAmount
  );
});
Taro.eventCenter.on("submitCart", (items: CartItem[]) => {
  cartItems.value = items;
  calculateOrder();
});
const calculateOrder = () => {
  api.productOrderController
    .orderCalculate({
      body: {
        couponUser: couponUser.value ? { id: couponUser.value.id } : {},
        items: cartItems.value.map((item) => {
          return {
            productCount: item.count,
            productSkuId: item.sku.id,
          };
        }),
      },
    })
    .then((res) => {
      orderPrice.value = res;
    });
};

const couponUser = ref<CouponUserDto["CouponUserRepository/COMPLEX_FETCHER"]>();
Taro.eventCenter.on(
  "chooseCoupon",
  (value: CouponUserDto["CouponUserRepository/COMPLEX_FETCHER"]) => {
    couponUser.value = value;
    calculateOrder();
  },
);
const showAvailableCouon = () => {
  Taro.eventCenter.trigger(
    "availableCoupon",
    orderPrice.value.availableCoupons,
  );
};
</script>

<style lang="scss">
@import "../../app.scss";

page {
  background-color: rgba(black, 0.05);
}

.order-submit {
  .address-info {
    .details {
      font-size: 30px;
      font-weight: bold;
      @include text-max-line(1);
    }

    .connector {
      display: flex;
      margin-top: 20px;
      color: rgba(black, 0.3);

      .real-name {
        margin-right: 20px;
      }
    }
  }
  .coupon-info {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .value {
      color: red;
      font-size: 30px;
    }
  }

  .product-list {
    // margin: 20px;
    .product-info {
      display: flex;
      align-items: flex-start;
      margin-top: 10px;
      background-color: white;
      padding: 20px;
      // border-radius: 10px;

      .cover {
        margin-right: 20px;

        image {
          border-radius: 15px;
          width: 180px;
          height: 180px;
        }
      }

      .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;

        .name {
          font-size: 32px;
          @include text-max-line(2);
        }

        .values {
          color: rgba(black, 0.8);
          font-size: 30px;
        }

        .price-count {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .price {
            color: red;
            font-size: 37px;
            display: flex;
            align-items: flex-end;

            .price-prefix {
              font-size: 30px;
            }
          }

          .count-wrapper {
            display: flex;
            align-items: center;

            .count {
              font-size: 35px;
              padding: 0 10px;
            }
          }
        }
      }
    }
  }
  .sumary {
    width: 100%;
    .title {
      font-size: 32px;
      background-color: white;
      padding: 20px;
    }
    .row {
      background-color: white;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 30px;
      margin-top: 2px;
      .label {
        color: rgba(black, 0.7);
      }
      .value {
        color: rgba(black, 0.9);
      }
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
      .total {
        display: flex;
        align-items: flex-end;
        .label {
          font-size: 28px;
        }
        .price {
          font-size: 34px;
          color: red;
        }
      }
    }
  }
}
</style>
