<template>
  <nut-popup
    ref="popup"
    v-model:visible="visible"
    background-color="#fff"
    position="bottom"
    z-index="19"
  >
    <div class="cart-content">
      <div class="top-bar">
        <div class="left">
          <nut-checkbox
            :model-value="checkedItems.length > 0"
            :indeterminate="isIndeterminate"
            @click="toggleCart"
          >
            已选：{{ checkedItems.length }}
          </nut-checkbox>
        </div>
        <div class="right" @click="clearCart">
          <Del size="20"></Del>
          <div class="tip">清空购物车</div>
        </div>
      </div>
      <div
        v-for="(item, index) in cartStore.cartList"
        :key="item.sku.id"
        class="product-row"
      >
        <nut-checkbox
          v-model="item.checked"
          :label="item.sku.id"
        ></nut-checkbox>
        <product-row
          :product="{
            ...item.sku,
            description: item.sku.values.join(','),
            brand: item.product.brand,
          }"
        >
          <template #operation>
            <div class="count-wrapper">
              <Minus size="32" @click="minusItem(index)"></Minus>

              <div class="count">{{ item.count }}</div>
              <Plus
                size="32"
                :color="'#f0ad4e'"
                @click="plusItem(index)"
              ></Plus>
            </div>
          </template>
        </product-row>
      </div>
    </div>
  </nut-popup>
  <div class="cart-bar-wrapper">
    <div class="cart-bar">
      <div class="left" @click="visible = true">
        <div class="price">￥{{ totalPrice }}</div>
      </div>
      <div class="right" @click="submit">去结算</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { type CartItem, useCartStore } from "./cart-store";
import { Del, Minus, Plus } from "@nutui/icons-vue-taro";
import ProductRow from "@/components/product/product-row.vue";
import { computed } from "vue";

const cartStore = useCartStore();
const { visible, totalPrice, checkedItems } = storeToRefs(cartStore);
const { minusItem, plusItem, clearCart, toggleCart } = cartStore;

const emit = defineEmits<{ submit: [value: CartItem[]] }>();
const submit = () => {
  emit("submit", cartStore.cartList);
};
// 中间状态
const isIndeterminate = computed(() => {
  return (
    checkedItems.value.length > 0 &&
    checkedItems.value.length < cartStore.cartList.length
  );
});
</script>

<style lang="scss">
// 多行溢出scss函数
@import "../../app.scss";
.cart-content {
  border-top-left-radius: 20rpx;
  border-top-right-radius: 20rpx;
  padding: 0 30rpx 150rpx 30rpx;

  .top-bar {
    display: flex;
    justify-content: space-between;
    padding: 30rpx 0;
    border-bottom: 1px solid rgba(black, 0.1);
    .left {
      display: flex;
      align-items: center;
      color: #1485ee;
    }
    .right {
      display: flex;
      align-items: center;
      .tip {
        margin-left: 5px;
      }
    }
  }

  .product-row {
    display: flex;
    align-items: center;
    margin-top: 20rpx;
    border-bottom: 1px solid rgba(black, 0.05);
    .nut-checkbox {
      margin-right: 0;
    }
    .count-wrapper {
      display: flex;
      align-items: center;

      .count {
        font-size: 30rpx;
      }
    }
  }
}
// 横条父亲的宽度和屏幕宽度一样, 让子元素横条居中.并且将横条的位置固定在页面底部
.cart-bar-wrapper {
  position: fixed;
  z-index: 20;
  bottom: 20rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .cart-bar {
    width: 700rpx;
    display: flex;
    height: 100rpx;

    .left {
      background-color: black;
      width: 500rpx;
      height: 100%;
      border-bottom-left-radius: 60rpx;
      border-top-left-radius: 60rpx;
      display: flex;
      align-items: center;

      .price {
        color: white;
        margin-left: 40rpx;
        font-size: 40rpx;
      }
    }

    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(255, 207, 92);
      width: 200rpx;
      height: 100%;
      border-bottom-right-radius: 60rpx;
      border-top-right-radius: 60rpx;
      font-size: 35rpx;
      font-weight: bold;
    }
  }
}
</style>
