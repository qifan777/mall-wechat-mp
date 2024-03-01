<template>
  <div class="coupon-page">
    <div v-for="couponUser in pageData.content" :key="couponUser.id">
      <coupon-row :coupon-user="couponUser"></coupon-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHomeStore } from "@/stores/home-store";
import { api } from "@/utils/api-instance";
import { usePageHelper } from "@/utils/page";
import CouponRow from "@/components/coupon/coupon-row.vue";
const homeStore = useHomeStore();
const { pageData } = usePageHelper(
  api.couponUserController.queryByUser,
  api.couponController,
  {},
);
</script>

<style lang="scss"></style>
