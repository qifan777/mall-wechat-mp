import { ProductDto } from "@/apis/__generated/model/dto";
import Taro from "@tarojs/taro";
import { defineStore } from "pinia";
import { computed, ref, watchEffect } from "vue";
export type CartItem = {
  product: ProductDto["ProductRepository/COMPLEX_FETCHER"];
  sku: ProductDto["ProductRepository/COMPLEX_FETCHER"]["skuList"][0];
  count: number;
  checked: boolean;
};
export const useCartStore = defineStore("cart", () => {
  const visible = ref(false);
  const cartList = ref<CartItem[]>(
    JSON.parse(Taro.getStorageSync("cart") || "[]"),
  );
  watchEffect(() => {
    Taro.setStorageSync("cart", JSON.stringify(cartList.value));
  });
  const totalPrice = computed(() =>
    cartList.value
      .filter((item) => item.checked)
      .map((item) => item.count * item.sku.price)
      .reduce((prev, curr) => prev + curr, 0),
  );

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
  const plusItem = (index: number) => {
    cartList.value[index].count++;
  };
  const minusItem = (index: number) => {
    const item = cartList.value[index];
    if (item.count === 1) {
      cartList.value.splice(index, 1);
    } else {
      item.count--;
    }
  };
  const clearCart = () => {
    cartList.value = [];
  };

  return {
    visible,
    cartList,
    totalPrice,
    pushItem,
    plusItem,
    minusItem,
    clearCart,
  };
});
