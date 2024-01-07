<template>
  <div class="address-create">
    <div class="content">
      <map
        id="map"
        class="map"
        :latitude="address.latitude - 0.004"
        :longitude="address.longitude"
        :markers="[marker]"
      >
      </map>
    </div>
    <div class="address-section">
      <div class="btn" @click="chooseAddress">
        去选择收货地址
        <icon-font name="rect-right" :color="'#999'"></icon-font>
      </div>
      <div class="form">
        <div class="form-item">
          <div class="label">门牌号</div>
          <div class="input">
            <input placeholder="请输入详细地址" v-model="address.details" />
          </div>
        </div>
        <div class="form-item">
          <div class="label">联系人</div>
          <div class="input">
            <input placeholder="请输入姓名" v-model="address.realName" />
          </div>
        </div>
        <div class="form-item">
          <div class="label">手机号</div>
          <div class="input">
            <input placeholder="请输入手机号" v-model="address.phoneNumber" />
          </div>
        </div>
      </div>
      <div class="submit" @click="submit">保存地址</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import Taro, { requirePlugin } from "@tarojs/taro";
import { api } from "@/utils/api-instance";
import { AddressInput } from "@/apis/__generated/model/static";
import { assertSuccess } from "@/utils/common";
import { IconFont } from "@nutui/icons-vue-taro";
const marker = computed(() => {
  return {
    id: 1,
    iconPath: "/assets/icons/address.png",
    latitude: address.value.latitude,
    longitude: address.value.longitude,
    width: 40,
    height: 40,
  };
});
// 获取到经纬度
Taro.authorize({
  scope: "scope.userLocation",
  success() {
    Taro.getLocation({
      success: (res) => {
        if (!address.value.id) {
          address.value.latitude = res.latitude;
          address.value.longitude = res.longitude;
        }
      },
    });
  },
});

const chooseAddress = () => {
  const key = "ZWNBZ-2ARW3-J6H3Q-3SUEF-BILFZ-TLFPW";
  const referer = "华大快帮";
  const category = "小区";
  Taro.navigateTo({
    url:
      "plugin://chooseLocation/index?key=" +
      key +
      "&referer=" +
      referer +
      "&category=" +
      category,
  });
};
const chooseLocation = requirePlugin("chooseLocation");
const address = ref<AddressInput>({
  address: "",
  city: "",
  details: "",
  district: "",
  latitude: 23.099994,
  longitude: 113.32452,
  phoneNumber: "",
  province: "",
  realName: "",
  top: false,
});
const submit = () => {
  api.addressController.save({ body: address.value }).then((res) => {
    assertSuccess(res).then(() => {
      Taro.showToast({ title: "提交成功", icon: "success" });
      Taro.navigateBack();
    });
  });
};
Taro.useLoad((ops: any) => {
  if (ops.id) {
    api.addressController.findById({ id: ops.id }).then((res) => {
      address.value = res;
    });
  }
});
Taro.useDidShow(() => {
  const chooseAddress = chooseLocation.getLocation();
  console.log(chooseAddress);

  address.value = { ...address.value, ...chooseAddress };
});
</script>

<style lang="scss">
.address-create {
  .content {
    width: 100%;

    .map {
      top: 0;
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100vh;
    }
  }

  .address-section {
    background-color: white;
    height: 100vh;
    margin: 300rpx 20rpx 0 20rpx;
    border-radius: 20rpx;
    padding: 40rpx 20rpx;

    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 400rpx;
      border: 1.5px solid orange;
      text-align: center;
      padding: 15rpx 50rpx;
      color: orange;
      font-weight: bold;
      margin: auto;
      border-radius: 15rpx;
    }
  }

  .form {
    margin-top: 40rpx;

    .form-item {
      display: flex;
      align-items: center;
      padding: 20rpx 0;

      .label {
        width: 120rpx;
        font-weight: bold;
      }

      .input {
        flex: 1;
        padding: 20rpx 0;
        border-bottom: 1px solid rgba(black, 0.1);
      }
    }
  }

  .submit {
    margin-top: 30rpx;
    text-align: center;
    padding: 20rpx 0;
    font-weight: bold;
    background-image: linear-gradient(#fcd956, #f5d131);
    border-radius: 15rpx;
  }
}
</style>
