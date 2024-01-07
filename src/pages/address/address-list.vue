<template>
  <div class="address-section">
    <div
      class="address-row"
      v-for="address in pageData.content"
      @click="chooseAddress(address)"
      :key="address.id"
    >
      <div class="address-info">
        <div class="details">{{ address.address + " " + address.details }}</div>
        <div class="connector">
          <div class="real-name">{{ address.realName }}</div>
          <div class="phone-number">{{ address.phoneNumber }}</div>
        </div>
      </div>
      <div
        class="edit"
        @click="switchPage(`/pages/address/address-save?id=${address.id}`)"
      >
        <icon-font name="edit" size="26"></icon-font>
      </div>
    </div>
  </div>
  <div class="add-address" @click="switchPage('/pages/address/address-save')">
    <div class="btn">
      <icon-font name="plus"></icon-font>
      添加收货地址
    </div>
  </div>
  <login-popup></login-popup>
</template>

<script lang="ts" setup>
import { api } from "@/utils/api-instance";
import { usePageHelper } from "@/utils/page";
import { switchPage } from "@/utils/common";
import Taro from "@tarojs/taro";
import { ref } from "vue";
import { AddressDto } from "@/apis/__generated/model/dto";
import { IconFont } from "@nutui/icons-vue-taro";
import LoginPopup from "@/components/login-popup/login-popup.vue";
const { pageData } = usePageHelper(
  api.addressController.query,
  api.addressController,
);
const from = ref("user");
Taro.useLoad((ops) => {
  if (ops.from) {
    from.value = ops.from;
  }
});
const chooseAddress = (
  address: AddressDto["AddressRepository/COMPLEX_FETCHER"],
) => {
  if (from.value != "user") {
    Taro.navigateBack({
      success: () => {
        Taro.eventCenter.trigger("chooseAddress", address);
      },
    });
  }
};
</script>

<style lang="scss">
.address-section {
  .address-row {
    padding: 30rpx;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(black, 0.1);

    .address-info {
      width: 600rpx;

      .details {
        font-size: 30rpx;
        font-weight: bold;
        margin-bottom: 10rpx;
      }

      .connector {
        font-size: 28rpx;
        color: rgba(black, 0.3);
        display: flex;
        align-items: center;

        .real-name {
          margin-right: 30rpx;
        }
      }
    }

    .edit {
      flex: 1;
      flex-shrink: 0;
      display: flex;
      justify-content: center;
    }
  }
}

.add-address {
  border-top: 1px solid rgba(black, 0.1);
  box-shadow: 10rpx -10rpx 10rpx rgba(black, 0.05);
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 30rpx 0 60rpx 0;

  .btn {
    margin: auto;
    justify-content: center;
    display: flex;
    align-items: center;
    background-image: linear-gradient(#fcd956, #f5d131);
    width: 600rpx;
    padding: 20rpx 0;
    border-radius: 10rpx;
  }
}
</style>
