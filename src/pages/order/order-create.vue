<template>
  <div class="order-submit">
    <div class="address" v-if="address">
      <nut-cell is-link center @click="addressChooseVisible = true">
        <template #icon>
          <location2
            color="red"
            size="20"
            style="margin-right: 10px"
          ></location2>
        </template>
        <template #title>
          <address-row :address="address"></address-row>
        </template>
        <template #link>
          <rect-right></rect-right>
        </template>
      </nut-cell>
    </div>
    <address-choose
      v-model:visible="addressChooseVisible"
      @choose="handleAddressChose"
    ></address-choose>
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
          <div class="value">￥{{ productPrice }}</div>
        </template>
      </nut-cell>
      <nut-cell title="配送费">
        <template #desc>
          <div class="value">￥{{ 0 }}</div>
        </template>
      </nut-cell>
      <nut-cell title="优惠券">
        <template #desc>
          <div class="value">-￥{{ 0 }}</div>
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
        <div class="price">￥{{ productPrice }}</div>
        <nut-button type="danger" @click="saveOrder">提交订单</nut-button>
      </div>
    </div>
    <address-choose
      v-model:visible="addressChooseVisible"
      @choose="handleAddressChose"
    ></address-choose>
  </div>
</template>

<script setup lang="ts">
import Taro from "@tarojs/taro";
import { computed, ref } from "vue";
import { CartItem } from "@/components/cart/cart-store";
import { AddressDto } from "@/apis/__generated/model/dto";
import AddressChoose from "@/pages/address/address-choose.vue";
import { RectRight, Location2 } from "@nutui/icons-vue-taro";
import { api } from "@/utils/api-instance";

const addressChooseVisible = ref(false);
const address = ref<AddressDto["AddressRepository/SIMPLE_FETCHER"]>();
const handleAddressChose = (
  value: AddressDto["AddressRepository/SIMPLE_FETCHER"],
) => {
  address.value = value;
};

const cartItems = ref<CartItem[]>([]);
const productPrice = computed(() => {
  return cartItems.value.reduce(
    (prev, cur) => prev + cur.sku.price * cur.count,
    0,
  );
});
Taro.eventCenter.on("submitCart", (items: CartItem[]) => {
  cartItems.value = items;
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
  api.productOrderController
    .create({
      body: {
        remark: "",
        items: cartItems.value.map((item) => ({
          productSkuId: item.sku.id,
          skuCount: item.count,
        })),
        addressId: address.value.id,
        payment: {
          payType: "WE_CHAT_PAY",
        },
      },
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
