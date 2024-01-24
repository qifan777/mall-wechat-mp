import { ProductDto } from "@/apis/__generated/model/dto";
import Taro from "@tarojs/taro";
import { defineStore } from "pinia";
import { computed, ref, watchEffect } from "vue";
type ProductSkuFetcherDto = ProductDto["ProductRepository/PRODUCT_SKU_FETCHER"];
export type CartItem = {
  product: ProductSkuFetcherDto;
  sku: ProductSkuFetcherDto["skuList"][0];
  count: number;
  checked: boolean;
};
export const useCartStore = defineStore("cart", () => {
  // 购物车是否显示
  const visible = ref(false);
  // 从本地存储中获取购物车列表
  const cartList = ref<CartItem[]>(
    JSON.parse(Taro.getStorageSync("cart") || "[]"),
  );
  // cartList有变动就缓存到本地存储
  watchEffect(() => {
    Taro.setStorageSync("cart", JSON.stringify(cartList.value));
  });
  const checkedItems = computed(() =>
    cartList.value.filter((item) => item.checked),
  );
  // 总价
  const totalPrice = computed(() =>
    checkedItems.value
      // 计算每个商品的总价
      .map((item) => item.count * item.sku.price)
      // 求和
      .reduce((prev, curr) => prev + curr, 0),
  );
  // 购物车添加商品
  const pushItem = (cartItem: CartItem) => {
    const index = cartList.value.findIndex(
      (item) => item.sku.id === cartItem.sku.id,
    );
    if (index === -1) {
      cartList.value.push(cartItem);
    } else {
      plusItem(index);
    }
  };
  // 购物车减少商品数量
  const plusItem = (index: number) => {
    cartList.value[index].count++;
  };
  // 购物车减少商品数量
  const minusItem = (index: number) => {
    const item = cartList.value[index];
    if (item.count === 1) {
      // 少于1时移除购物车
      cartList.value.splice(index, 1);
    } else {
      item.count--;
    }
  };
  // 清空购物车
  const clearCart = () => {
    cartList.value = [];
  };
  // 全选或者反选
  const toggleCart = () => {
    // 如果已选的数量等于购物车数量反向否则全勋。
    const value = checkedItems.value.length !== cartList.value.length;
    cartList.value.forEach((item) => {
      item.checked = value;
    });
  };

  return {
    visible,
    checkedItems,
    cartList,
    totalPrice,
    pushItem,
    plusItem,
    minusItem,
    clearCart,
    toggleCart,
  };
});
