<template>
  <nut-popup
    :visible="visible"
    @update:visible="(value) => emit('update:visible', value)"
    position="bottom"
    closeable
    round
  >
    <div class="available-coupon-list">
      <coupon-row
        v-for="couponUser in couponList"
        :coupon-user="couponUser"
        :key="couponUser.id"
        @use="chooseCoupon"
      ></coupon-row>
    </div>
  </nut-popup>
</template>

<script setup lang="ts">
import { CouponUserDto } from "@/apis/__generated/model/dto";

import { onMounted, ref } from "vue";
import { api } from "@/utils/api-instance";
type CouponUser = CouponUserDto["CouponUserRepository/COMPLEX_FETCHER"];
const props = defineProps<{ price: number; visible: boolean }>();
const emit = defineEmits<{
  choose: [value: CouponUser];
  "update:visible": [value: boolean];
}>();
const couponList = ref<CouponUser[]>([]);
onMounted(() => {
  api.productOrderController
    .availableCoupons({ price: props.price })
    .then((res) => {
      couponList.value = res;
    });
});
const chooseCoupon = (couponUser: CouponUser) => {
  emit("choose", couponUser);
};
</script>

<style lang="scss">
.available-coupon-list {
  padding-top: 100px;
  min-height: 300px;
}
</style>
