<template>
  <div class="available-coupon-list">
    <coupon-row
      v-for="couponUser in couponList"
      :coupon-user="couponUser"
      :key="couponUser.id"
      @use="chooseCoupon"
    ></coupon-row>
  </div>
</template>

<script setup lang="ts">
import { CouponUserDto } from "@/apis/__generated/model/dto";
import { api } from "@/utils/api-instance";
import Taro from "@tarojs/taro";
import { ref } from "vue";

const couponList = ref<CouponUserDto["CouponUserRepository/COMPLEX_FETCHER"][]>(
  [],
);
Taro.eventCenter.on("availableCoupon", (ids: string[]) => {
  api.couponUserController.listByIds({ body: ids }).then((res) => {
    couponList.value = res;
  });
});
const chooseCoupon = (
  couponUser: CouponUserDto["CouponUserRepository/COMPLEX_FETCHER"],
) => {
  Taro.navigateBack({
    success: () => {
      Taro.eventCenter.trigger("chooseCoupon", couponUser);
    },
  });
};
</script>

<style scoped></style>
