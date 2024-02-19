<script setup lang="ts">
import { ProductOrderDto } from "@/apis/__generated/model/dto";
import DictColumn from "@/components/dict/dict-column.vue";
import { DictConstants } from "@/apis/__generated/model/enums/DictConstants";
import { computed } from "vue";
import dayjs from "dayjs";

const props = defineProps<{
  order: ProductOrderDto["ProductOrderRepository/COMPLEX_FETCHER"];
}>();
const orderItems = computed(() => {
  return props.order.items.map(({ productSku, skuCount }) => {
    return {
      productSku: {
        ...productSku,
        description: productSku.values.join(","),
        brand: productSku.product.brand,
      },
      skuCount,
    };
  });
});
</script>

<template>
  <div class="order-row">
    <div class="time-status">
      <div class="time">
        {{ dayjs(order.createdTime).format("YYYY-MM-DD HH:mm") }}
      </div>
      <dict-column
        :dict-id="DictConstants.PRODUCT_ORDER_STATUS"
        :value="order.status"
      ></dict-column>
    </div>
    <div class="list">
      <product-row
        class="row"
        :key="item.productSku.id"
        :product="item.productSku"
        v-for="item in orderItems"
      >
        <template #operation>
          <div class="count">x{{ item.skuCount }}</div>
        </template>
      </product-row>
    </div>
    <div class="total">合计：￥{{ order.payment.payAmount }}</div>
    <div class="buttons">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.order-row {
  padding: 30px;
  background-color: white;
  border-radius: 20px;
  margin-top: 20px;
  .time-status {
    display: flex;
    font-size: 26px;
    justify-content: space-between;
    color: rgba(black, 0.5);
    padding: 10px 0;
  }
  .list {
    .row {
      .count {
        font-size: 26px;
      }
    }
  }
  .total {
    font-size: 30px;
    display: flex;
    justify-content: flex-end;
    padding: 15px 10px;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
    .nut-button {
      margin-left: 20px;
    }
  }
}
</style>
