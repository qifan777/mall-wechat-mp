<template>
  <nut-popup
    v-model:visible="registerShow"
    :style="{ padding: '30px 50px' }"
    position="bottom"
    pop-class="register-popup"
  >
    <div class="register-section">
      <view class="climb-icon">
        <image
          class="climb"
          mode="heightFix"
          src="../../assets/img/climb.png"
        ></image>
      </view>

      <view class="title-section">
        <view class="title">欢迎注册~</view>
        <view class="info">注册后可享受更好的服务体验</view>
      </view>
      <view class="register-input-section">
        <nut-input
          class="code-input"
          :border="false"
          :model-value="inputValue"
          @input="handleInput"
        >
          <template #right>
            <nut-button
              type="primary"
              size="small"
              @click="handleSendMessage"
              :disabled="registerInput.countDown > 0"
              >{{
                registerInput.countDown === 0
                  ? "获取验证码"
                  : registerInput.countDown
              }}</nut-button
            >
          </template>
        </nut-input>
        <div
          class="change-phone"
          v-if="registerInput.isSend"
          @click="changePhone"
        >
          修改手机号
        </div>
      </view>
      <view class="button-section">
        <button class="btn" @click="submit">
          <image
            class="icon"
            mode="heightFix"
            src="../../assets/icons/wechat.png"
          ></image>
          注册
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
import { computed, ref } from "vue";
import { UserWeChatRegisterInput } from "@/apis/__generated/model/static";
import { sendSMS } from "@/apis/sms/sms-api";

const homeStore = useHomeStore();
const { registerShow } = storeToRefs(homeStore);
const registerInput = ref<
  UserWeChatRegisterInput & {
    isSend: boolean;
    countDown: number;
  }
>({
  code: "",
  loginCode: "",
  phone: "",
  isSend: false,
  countDown: 0,
});
const inputValue = computed({
  get: () => {
    if (registerInput.value.isSend) {
      return registerInput.value.code;
    } else {
      return registerInput.value.phone;
    }
  },
  set: (val) => {
    if (registerInput.value.isSend) {
      registerInput.value.code = val;
    } else {
      registerInput.value.phone = val;
    }
  },
});
const handleClose = () => {
  registerShow.value = false;
};
const handleInput = (e: { detail: { value: string } }) => {
  inputValue.value = e.detail.value;
};
const handleSendMessage = () => {
  let intervalId: NodeJS.Timeout;
  sendSMS(registerInput.value.phone).then((res) => {
    if (res) {
      registerInput.value.isSend = true;
      registerInput.value.countDown = 120;
      intervalId = setInterval(() => {
        if (registerInput.value.countDown === 0) {
          clearInterval(intervalId);
          return;
        }
        registerInput.value.countDown--;
      }, 1000);
    }
  });
};
const changePhone = () => {
  inputValue.value = registerInput.value.phone;
  registerInput.value.isSend = false;
  registerInput.value.countDown = 0;
};
const submit = () => {
  Taro.login({
    success: function (loginRes) {
      // 调用微信登录接口
      api.userWeChatController
        .register({
          body: {
            loginCode: loginRes.code,
            phone: registerInput.value.phone,
            code: registerInput.value.code,
          },
        })
        .then((res) => {
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

.register-section {
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
    padding: 100px 0 20px 50px;

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
  .register-input-section {
    padding: 40px;
    .phone-input {
      border: 1px solid rgba(black, 0.1);
      border-radius: 80px;
      width: 600px;
      margin: auto;
    }
    .code-input {
      border: 1px solid rgba(black, 0.1);
      border-radius: 80px;
      width: 600px;
      margin: auto;
    }
    .change-phone {
      display: flex;
      justify-content: flex-end;
      margin-right: 60px;
      margin-top: 10px;
      color: rgba(black, 0.5);
      font-size: 26px;
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
      width: 600px;
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
