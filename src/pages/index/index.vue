<script setup lang="ts">
import Taro from "@tarojs/taro";
import { api } from "@/utils/api-instance";
import { useHomeStore } from "@/stores/home-store";
import RegisterPopup from "@/components/register-popup/register-popup.vue";

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
        .then(() => {
          homeStore.getUserInfo();
        });
    },
  });
});
</script>

<template>
  <register-popup></register-popup>
</template>

<style scoped lang="scss"></style>
