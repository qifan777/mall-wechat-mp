<template>
  <div class="address-choose">
    <nut-popup
      :visible="visible"
      @update:visible="(value) => emit('update:visible', value)"
      position="bottom"
      closeable
      round
    >
      <div
        class="address-wrapper"
        :key="address.id"
        v-for="address in addressList"
        @click="handleChoose(address)"
      >
        <check color="red" v-if="address.id == chosenAddress.id"></check>
        <location2 color="red" v-else></location2>
        <address-row class="address" :address="address"> </address-row>
      </div>
    </nut-popup>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { AddressDto } from "@/apis/__generated/model/dto";
import { api } from "@/utils/api-instance";
import Taro from "@tarojs/taro";
import { Check, Location2 } from "@nutui/icons-vue-taro";
type SimpleAddressDto = AddressDto["AddressRepository/SIMPLE_FETCHER"];
defineProps<{ visible: boolean }>();
const emit = defineEmits<{
  "update:visible": [value: boolean];
  choose: [address: SimpleAddressDto];
}>();
const addressList = ref<SimpleAddressDto[]>([]);
const chosenAddress = ref({} as SimpleAddressDto);
Taro.useLoad(() => {
  api.addressController.getUserAddress().then((res) => {
    addressList.value = res;
    if (res.length > 0) {
      // 默认地址会在第一个
      chosenAddress.value = res[0];
      emit("choose", res[0]);
    }
  });
});
const handleChoose = (address: SimpleAddressDto) => {
  chosenAddress.value = address;
  emit("update:visible", false);
  emit("choose", address);
};
</script>
<style lang="scss">
.address-choose {
  .address-wrapper {
    margin: 0 20px;
    display: flex;
    align-items: center;
  }
}
</style>
