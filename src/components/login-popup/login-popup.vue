<template>
  <nut-popup
    v-model:visible="loginShow"
    :style="{ padding: '30px 50px' }"
    position="bottom"
    pop-class="login-popup"
  >
    <div class="login-section">
      <view class="climb-icon">
        <image
          class="climb"
          mode="heightFix"
          src="../../assets/img/climb.png"
        ></image>
      </view>

      <view class="title-section">
        <view class="title">欢迎登录~</view>
        <view class="info">登录后可享受更好的服务体验</view>
      </view>
      <view class="button-section">
        <button class="btn" open-type="getPhoneNumber" @getphonenumber="submit">
          <image
            class="icon"
            mode="heightFix"
            src="../../assets/icons/wechat.png"
          ></image>
          微信一键登录
        </button>
      </view>
    </div>
  </nut-popup>
</template>

<script lang="ts" setup>
import Taro from "@tarojs/taro";
import { useHomeStore } from "@/stores/home-store";
import { api } from "@/utils/api-instance";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore();
const { loginShow } = storeToRefs(homeStore);
const handleClose = () => {
  loginShow.value = false;
};
const submit = (e: { detail: { code: string } }) => {
  Taro.login({
    success: function (loginRes) {
      // 调用微信登录接口
      api.authController
        .authByWecChat({
          body: {
            loginCode: loginRes.code,
            phoneCode: e.detail.code,
            inviteCode: Taro.getStorageSync("invite-code") || "",
          },
        })
        .then((res) => {
          console.log(res);
          Taro.setStorageSync("token", res.tokenValue);
          homeStore.getUserInfo();
          handleClose();
        });
    },
  });
};

defineExpose({
  submit,
  handleClose,
});
</script>

<style lang="scss">
page,
:root {
  .nut-popup {
    padding: 0 !important;
    overflow: unset;
  }
}

.login-btn {
  width: 400px;
  height: 80px;
  border-radius: 40px;
  line-height: 80px;
}

.login-section {
  height: 600px;
  background-color: white;
  width: 100%;

  .climb-icon {
    position: relative;
    width: 100%;

    .climb {
      position: absolute;
      height: 350px;
      right: 100px;
      top: -175px;
    }
  }

  .title-section {
    padding: 100px 0 100px 50px;

    .title {
      color: red;
      font-size: 55px;
      font-weight: bold;
      margin-bottom: 30px;
    }

    .info {
      color: #727272;
      font-size: 35px;
    }
  }

  .button-section {
    width: 100%;
    display: flex;
    justify-content: center;

    .icon {
      height: 40px;
      margin-right: 20px;
    }

    .btn {
      background-color: rgb(0, 200, 0);
      margin: 0;
      color: white;
      width: 80%;
      height: 90px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 45px;
      font-size: 40px;
    }
  }
}
</style>
