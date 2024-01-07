<template>
  <div class="product-page">
    <walter-fall :data-list="pageData.content" class="walter-fall">
      <template #itemLeft="{ item }">
        <product-cover
          :item="item"
          :width="'280rpx'"
          @click="handleChoose(item)"
        >
        </product-cover>
      </template>
      <template #itemRight="{ item }">
        <product-cover
          :item="item"
          :width="'280rpx'"
          @click="handleChoose(item)"
        >
        </product-cover>
      </template>
    </walter-fall>
    <product-sku-dialog
      v-if="chosenProduct"
      v-model:visible="dialogVisible"
      :product="chosenProduct"
      @add-sku="handleAddSku"
    ></product-sku-dialog>

    <cart-list @submit="handleSubmit"></cart-list>
  </div>
  <login-popup></login-popup>
</template>

<script lang="ts" setup>
import { api } from "@/utils/api-instance";
import { usePageHelper } from "@/utils/page";

import Taro from "@tarojs/taro";
import { ref } from "vue";
import { ProductDto } from "@/apis/__generated/model/dto";
import { CartItem, useCartStore } from "@/components/cart/cart-store";
import ProductSkuDialog from "@/components/product/product-sku-dialog.vue";
import WalterFall from "@/components/walter-fall/walter-fall.vue";
import ProductCover from "@/components/product/product-cover.vue";
import CartList from "@/components/cart/cart-list.vue";
const { pageData } = usePageHelper(
  api.productController.query,
  api.productController,
  {},
);
const cartStore = useCartStore();
Taro.useLoad((ops: { scene: string }) => {
  console.log("程序启动");
  console.log(ops);
  Taro.removeStorageSync("invite-code");
  if (ops.scene) {
    const keyValueMap: Record<string, string> = {};
    let params = decodeURIComponent(ops.scene);
    let keyValueList = params.split(";");
    keyValueList.forEach((keyValueStr) => {
      const keyValue = keyValueStr.split("=");
      keyValueMap[keyValue[0]] = keyValue[1];
    });
    const inviteCode = keyValueMap["code"];
    if (inviteCode) {
      api.inviteHistoryController.check({ code: keyValueMap["code"] });
      Taro.setStorageSync("invite-code", keyValueMap["code"]);
    }
    console.log(keyValueMap);
  }
});
// 点击封面触发
const handleChoose = (
  product: ProductDto["ProductRepository/COMPLEX_FETCHER"],
) => {
  dialogVisible.value = true;
  chosenProduct.value = product;
};
const chosenProduct = ref<ProductDto["ProductRepository/COMPLEX_FETCHER"]>();
const dialogVisible = ref(false);
const handleAddSku = (
  sku: ProductDto["ProductRepository/COMPLEX_FETCHER"]["skuList"][0],
  product: ProductDto["ProductRepository/COMPLEX_FETCHER"],
) => {
  cartStore.pushItem({ checked: true, count: 1, sku: sku, product });
};
const handleSubmit = (catItems: CartItem[]) => {
  Taro.navigateTo({
    url: "/pages/order/index",
    success: () => {
      Taro.eventCenter.trigger("submitCart", catItems);
    },
  });
};
</script>
<style lang="scss">
page {
  background-color: rgba(black, 0.05);
}

.product-page {
  .walter-fall {
  }
}
</style>
