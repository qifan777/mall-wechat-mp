<template>
  <div class="order-details" v-if="order">
    <div class="address">
      <nut-cell is-link center>
        <template #icon>
          <location2
            color="red"
            size="20"
            style="margin-right: 10px"
          ></location2>
        </template>
        <template #title>
          <address-row :address="order.address"></address-row>
        </template>
        <template #link>
          <rect-right></rect-right>
        </template>
      </nut-cell>
    </div>

    <div class="product-list">
      <product-row
        v-for="item in order.items"
        :key="item.productSku.values.join(',')"
        :product="{
          ...item.productSku,
          description: item.productSku.values.join(','),
          brand: item.productSku.product.brand,
        }"
      >
        <template #operation>
          <div class="sku-count">x{{ item.skuCount }}</div>
        </template>
      </product-row>
    </div>
    <nut-cell-group class="summary">
      <nut-cell title="商品总价">
        <template #desc>
          <div class="value">￥{{ order.payment.productAmount }}</div>
        </template>
      </nut-cell>
      <nut-cell title="配送费">
        <template #desc>
          <div class="value">￥{{ order.payment.deliveryFee }}</div>
        </template>
      </nut-cell>
      <nut-cell title="优惠券">
        <template #desc>
          <div class="value">-￥{{ order.payment.couponAmount }}</div>
        </template>
      </nut-cell>
      <nut-cell title="vip优惠">
        <template #desc>
          <div class="value">-￥{{ order.payment.vipAmount }}</div>
        </template>
      </nut-cell>
    </nut-cell-group>
    <div class="pay-cancel-wrapper">
      <div class="pay-cancel">
        <div class="cancel">取消订单</div>
        <nut-button type="danger"
          >立即支付 ￥{{ order.payment.payAmount }}
        </nut-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ProductOrderDto } from "@/apis/__generated/model/dto";
import { Location2, RectRight } from "@nutui/icons-vue-taro";
import { api } from "@/utils/api-instance";
import Taro from "@tarojs/taro";

const order = ref<ProductOrderDto["ProductOrderRepository/COMPLEX_FETCHER"]>();
Taro.useLoad(({ id }) => {
  api.productOrderController.findById({ id }).then((res) => {
    order.value = res;
  });
});
</script>

<style lang="scss">
@import "../../app.scss";

page {
  background-color: rgba(black, 0.05);
}

.order-details {
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

  .sku-count {
    font-size: 28px;
  }

  .product-list {
    background-color: white;
    padding: 32px;
    border-radius: 12px;
    margin-bottom: 30px;
  }

  .summary {
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;

    .value {
      color: rgba(black, 0.9);
      font-weight: bold;
    }
  }

  .pay-cancel-wrapper {
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    width: 100%;

    .pay-cancel {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      width: 700px;

      .cancel {
        color: rgba(black, 0.7);
      }
    }
  }
}
</style>
