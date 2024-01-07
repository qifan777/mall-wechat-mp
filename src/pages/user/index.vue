<template>
  <view class="content">
    <view class="user-head">
      <image
        class="background"
        mode="aspectFill"
        src="https://my-resource-share.oss-cn-qingdao.aliyuncs.com/config/BJ.jpg"
      ></image>
      <view class="user-wrapper">
        <view class="user-section">
          <view class="user-info" @tap="switchPage('user-edit')">
            <user-avatar
              :avatar="userInfo.avatar"
              :radius="'50%'"
            ></user-avatar>
            <view class="username">
              <text
                v-if="!userInfo.nickname"
                class="name"
                @tap="
                  () => {
                    homeStore.getUserInfo();
                  }
                "
                >您还未登录,点击登录
              </text>
              <text v-else class="name">{{ userInfo.nickname }}</text>
              <rect-right />
            </view>
          </view>
        </view>
      </view>
    </view>

    <view class="divider">
      <view class="front">我的</view>
      <view class="rear">MY SERVICE</view>
    </view>
    <view class="functions">
      <view class="function" @tap="switchPage('/pages/order/order-list')">
        <image
          class="icon"
          mode="widthFix"
          src="@/assets/icons/order.png"
        ></image>
        <view class="name">我的订单</view>
      </view>

      <view class="function" @tap="switchPage('/pages/address/address-list')">
        <image
          class="icon"
          mode="widthFix"
          src="@/assets/icons/address.png"
        ></image>
        <view class="name">我的地址</view>
      </view>
      <view class="function" @tap="switchPage('/pages/feedback/index')">
        <image
          class="icon"
          mode="widthFix"
          src="@/assets/icons/feedback.png"
        ></image>
        <view class="name">反馈建议</view>
      </view>
      <view class="function" @tap="switchPage('/pages/invite/index')">
        <image
          class="icon"
          mode="widthFix"
          src="@/assets/icons/user-invite.png"
        ></image>
        <view class="name">我的推广</view>
      </view>
    </view>
  </view>
  <login-popup></login-popup>
</template>

<script lang="ts" setup>
import { toRefs } from "vue";
import Taro from "@tarojs/taro";
import { RectRight } from "@nutui/icons-vue-taro";
import { useHomeStore } from "@/stores/home-store";
import UserAvatar from "@/components/user/user-avatar.vue";
import LoginPopup from "@/components/login-popup/login-popup.vue";
const homeStore = useHomeStore();
const { userInfo } = toRefs(homeStore);

const switchPage = (url: string) => {
  Taro.navigateTo({ url });
};
</script>

<style lang="scss">
.content {
  .user-head {
    position: relative;

    .background {
      position: relative;
      max-width: 100%;
      max-height: 500.35px;
      width: 100%;
    }

    .user-wrapper {
      position: absolute;
      width: 100%;
      display: flex;
      justify-content: center;
      bottom: -75px;

      .user-section {
        box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.2);
        position: relative;
        width: 100%;
        height: 150px;
        background-color: white;
        float: right;
        margin: 20px 40px;
        padding: 20px;
        border-radius: 10px;

        .user-info {
          position: absolute;
          top: -60px;
          left: 70px;
          display: flex;
          align-items: flex-end;

          .avatar {
            width: 140.67px;
            height: 140.67px;
            border-radius: 50%;
            margin-right: 50px;
            box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.2);
          }

          .username {
            margin-left: 20px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;

            .icon2 {
              width: 40px;
              height: 40px;
            }

            .name {
              font-weight: bold;
              font-size: 35px;
              margin-right: 20px;
            }

            .point {
              display: flex;
              align-items: center;
              margin-right: 20px;

              .label {
                color: rgba(black, 0.5);
              }
            }
          }
        }
      }
    }
  }

  .divider {
    margin-top: 70px;
    display: flex;
    padding: 40px 0 10px 40px;
    align-items: flex-end;

    .front {
      font-size: 35px;
      font-weight: bold;
      margin-right: 10px;
    }

    .rear {
      font-size: 25px;
      color: #c3c3c3;
    }
  }

  .functions {
    box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.2);
    background-color: white;
    margin: 0 40px;
    padding: 40px 20px;
    border-radius: 10px;
    display: flex;
    // justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    .function {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 25%;

      .icon {
        width: 55px;
      }

      .name {
        background-color: white;
        border: 0;
        padding: 10px 0;
        color: #9e9e9e;
        font-size: 25px;
        // padding: 0;
      }
    }
  }
}
</style>
