<template>
  <!-- 普通弹窗 -->
  <nut-popup
    ref="popup"
    v-model:visible="visible"
    background-color="#fff"
    position="bottom"
  >
    <div class="cart-content">
      <div class="top-bar">
        <div class="left"></div>
        <div class="right" @click="clearCart">
          <Del size="20"></Del>
          <div class="tip">清空购物车</div>
        </div>
      </div>
      <div
        v-for="(item, index) in cartList"
        :key="item.sku.id"
        class="product-row"
      >
        <nut-checkbox
          v-model="item.checked"
          :label="item.sku.id"
        ></nut-checkbox>
        <div class="product-info">
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
                <div class="minus">
                  <Minus size="32" @click="minusItem(index)"></Minus>
                </div>
                <div class="count">{{ item.count }}</div>
                <div class="plus">
                  <Plus
                    size="32"
                    :color="'#f0ad4e'"
                    @click="plusItem(index)"
                  ></Plus>
                </div>
              </div>
            </div>
          </div>
        </div>
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
import { useCartStore, type CartItem } from "./cart-store";
import { Plus, Minus, Del } from "@nutui/icons-vue-taro";

const cartStore = useCartStore();
const { visible, totalPrice, cartList } = storeToRefs(cartStore);
const { minusItem, plusItem, clearCart } = cartStore;

const emit = defineEmits<{ submit: [value: CartItem[]] }>();
const submit = () => {
  emit("submit", cartList.value);
};
</script>

<style lang="scss">
@import "../../app.scss";
.cart-content {
  border-top-left-radius: 20rpx;
  border-top-right-radius: 20rpx;
  padding: 0rpx 30rpx 200rpx 30rpx;

  .top-bar {
    display: flex;
    justify-content: space-between;
    padding: 30rpx;
    border-bottom: 1px solid rgba(black, 0.1);
    .left {
      display: flex;
      align-items: center;
      .nut-checkbox {
      }
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
    .nut-checkbox {
      margin-right: 0;
    }
    .product-info {
      display: flex;
      align-items: flex-start;
      width: 100%;
      margin-top: 20rpx;
      .cover {
        margin-right: 20rpx;

        image {
          border-radius: 15rpx;
          width: 180rpx;
          height: 180rpx;
        }
      }

      .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        // height: 180rpx;
        border-bottom: 1px solid rgba(black, 0.1);
        width: 100%;
        // padding-bottom: 5rpx;

        .name {
          font-size: 32rpx;
          @include text-max-line(2);
        }

        .values {
          color: rgba(black, 0.8);
          font-size: 30rpx;
        }

        .price-count {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .price {
            color: red;
            font-size: 37rpx;
            display: flex;
            align-items: flex-end;

            .price-prefix {
              font-size: 30rpx;
            }
          }

          .count-wrapper {
            display: flex;
            align-items: center;

            .count {
              font-size: 35rpx;
              padding: 0 10rpx;
            }
          }
        }
      }
    }
  }
}
.cart-bar-wrapper {
  position: fixed;
  z-index: 2;
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
