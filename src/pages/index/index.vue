<script setup lang="ts">
import Taro from "@tarojs/taro";
import { api } from "@/utils/api-instance";
import { useHomeStore } from "@/stores/home-store";
import RegisterPopup from "@/components/register-popup/register-popup.vue";
import { usePageHelper } from "@/utils/page";
import ProductCover from "@/components/product/product-cover.vue";

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
</script>

<template>
  <walter-fall :data-list="pageData.content" class="product-walter-fall">
    <template #itemLeft="{ item }">
      <product-cover :product="item"></product-cover>
    </template>
    <template #itemRight="{ item }">
      <product-cover :product="item"></product-cover>
    </template>
  </walter-fall>
  <register-popup></register-popup>
</template>

<style lang="scss">
page {
  background-color: #f5f5f5;
}
</style>
