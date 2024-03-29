<script setup lang="ts">
import Taro from "@tarojs/taro";
import { api } from "@/utils/api-instance";
import { useHomeStore } from "@/stores/home-store";
import RegisterPopup from "@/components/register-popup/register-popup.vue";
import { usePageHelper } from "@/utils/page";
import ProductCover from "@/components/product/product-cover.vue";
import ProductSkuDialog from "@/components/product/product-sku-dialog.vue";
import { ProductDto } from "@/apis/__generated/model/dto";
import { ref } from "vue";
import { CartItem, useCartStore } from "@/components/cart/cart-store";

const homeStore = useHomeStore();
Taro.useLoad(() => {
  Taro.login({
    success: function (loginRes) {
      // 调用微信登录接口
      api.authController
        .authByWecChat({
          body: {
            loginCode: loginRes.code,
          },
        })
        .then((res) => {
          Taro.setStorageSync("token", res.tokenValue);
          homeStore.getUserInfo();
        });
    },
  });
});
const { pageData } = usePageHelper(
  api.productController.query,
  api.productController,
  {},
);

// 点击封面触发
type ProductSkuFetcherDto = ProductDto["ProductRepository/PRODUCT_SKU_FETCHER"];
const chosenProduct = ref<ProductSkuFetcherDto>();
const dialogVisible = ref(false);
const handleChoose = (id: string) => {
  api.productController.findById({ id }).then((res) => {
    dialogVisible.value = true;
    chosenProduct.value = res;
  });
};
const cartStore = useCartStore();
const handleAddSku = (
  sku: ProductSkuFetcherDto["skuList"][0],
  product: ProductSkuFetcherDto,
) => {
  cartStore.pushItem({ checked: true, count: 1, sku: sku, product });
};
const handleSubmit = (catItems: CartItem[]) => {
  Taro.navigateTo({
    url: "/pages/order/order-create",
    success: () => {
      Taro.eventCenter.trigger("submitCart", catItems);
    },
  });
};
</script>

<template>
  <product-sku-dialog
    v-if="chosenProduct"
    :key="chosenProduct.id"
    v-model:visible="dialogVisible"
    :product="chosenProduct"
    @add-sku="handleAddSku"
  ></product-sku-dialog>
  <walter-fall :data-list="pageData.content" class="product-walter-fall">
    <template #itemLeft="{ item }">
      <product-cover
        :product="item"
        @click="handleChoose(item.id)"
      ></product-cover>
    </template>
    <template #itemRight="{ item }">
      <product-cover
        :product="item"
        @click="handleChoose(item.id)"
      ></product-cover>
    </template>
  </walter-fall>
  <cart-list @submit="handleSubmit"></cart-list>
  <register-popup></register-popup>
</template>

<style lang="scss">
page {
  background-color: #f5f5f5;
}
</style>
