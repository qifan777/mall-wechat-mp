<template>
  <div class="invite-page">
    <div class="user-panel">
      <div class="user-info">
        <div class="avatar">
          <user-avatar :avatar="userInfo.avatar" width="35px"></user-avatar>
        </div>
        <div class="info">
          <div class="username-wrapper">
            <div class="username">{{ userInfo.nickname }}</div>
            <div class="level">
              <image
                mode="widthFix"
                class="icon"
                src="@/assets/icons/vip.png"
              ></image>
              <div class="name">市级代理</div>
            </div>
            <div class="icon" @click="visible = true">
              <icon-font name="scan" size="11"></icon-font>
            </div>
          </div>
          <div class="invite">
            <div class="code">邀请码：{{ inviteInfo.code }}</div>
            <div class="divide"></div>
            <div class="active">今日邀请数：{{ 2 }}</div>
          </div>
        </div>
      </div>
      <div class="inviter-info">
        <div class="inviter-id">邀请人id：ccc</div>
        <div class="divide"></div>
        <div class="inviter-name">昵称：起凡2</div>
        <div class="divide"></div>
        <div class="level">等级：省级代理</div>
      </div>
    </div>
    <div class="static-panel">
      <div class="cell">
        <div class="label">累计邀请人数</div>
        <div class="value">25</div>
      </div>
      <div class="cell">
        <div class="label">直接推荐人数</div>
        <div class="value">15</div>
      </div>
      <div class="cell">
        <div class="label">提货订单总数</div>
        <div class="value">45</div>
      </div>
    </div>
    <div class="function-panel">
      <div
        class="function-row"
        @click="switchPage('/pages/invite/invite-history')"
      >
        <div class="left">
          <div class="icon">
            <image src="@/assets/icons/invite.png" mode="widthFix"></image>
          </div>
          <div class="label">我的邀请</div>
        </div>
        <div class="right">
          <icon-font name="rect-right" size="14"></icon-font>
        </div>
      </div>
      <div class="divide"></div>
      <div class="function-row">
        <div class="left">
          <div class="icon">
            <image src="@/assets/icons/income.png" mode="widthFix"></image>
          </div>
          <div class="label">收入明细</div>
        </div>
        <div class="right">
          <icon-font name="rect-right" size="14"></icon-font>
        </div>
      </div>
    </div>
    <nut-popup v-model:visible="visible" round>
      <div class="qr-code-wrapper">
        <image
          mode="widthFix"
          :src="inviteInfo.qrCode"
          @longpress="imagePress"
        ></image>
      </div>
    </nut-popup>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { InviterDto } from "@/apis/__generated/model/dto";
import { api } from "@/utils/api-instance";
import { useHomeStore } from "@/stores/home-store";
import { storeToRefs } from "pinia";
import { IconFont } from "@nutui/icons-vue-taro";
import Taro from "@tarojs/taro";
import UserAvatar from "@/components/user/user-avatar.vue";
const visible = ref(false);

const homeStore = useHomeStore();
const { userInfo } = storeToRefs(homeStore);
const inviteInfo = ref<InviterDto["InviterRepository/COMPLEX_FETCHER"]>({
  code: "",
  createdTime: "",
  creator: { id: "", nickname: "", phone: "" },
  editedTime: "",
  editor: { id: "", nickname: "", phone: "" },
  id: "",
  qrCode: "",
});
onMounted(async () => {
  inviteInfo.value = await api.inviterController.getInviteInfo();
});
const imagePress = () => {
  if (!inviteInfo.value.qrCode) {
    return;
  }
  Taro.getImageInfo({
    src: inviteInfo.value.qrCode,
    success: (res) => {
      Taro.saveImageToPhotosAlbum({
        filePath: res.path,
        success: () => {
          Taro.showToast({
            title: "保存成功",
          });
        },
      });
    },
  });
};

const switchPage = (url: string) => {
  console.log(url);

  Taro.navigateTo({ url });
};
</script>

<style lang="scss">
page {
  background-color: #f5f5f5;
}
@mixin vertical-divide-style($color: #f8a012, $height: 20px) {
  margin: 0 20px;
  border-right: 1px solid $color;
  height: $height;
}
@mixin horizon-divide-style($color: #f8a012, $width: 100%) {
  margin: 20px auto;
  border-top: 1px solid $color;
  width: $width;
}
@mixin panel-style() {
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  background-color: white;
}
.invite-page {
  .user-panel {
    @include panel-style();
    .user-info {
      display: flex;
      align-items: center;
      .avatar {
        margin-right: 20px;
      }
      .info {
        .username-wrapper {
          display: flex;
          align-items: center;
          .username {
            font-size: 30px;
            margin-right: 20px;
          }
          .level {
            display: flex;
            align-items: center;
            margin-right: 30px;
            .icon {
              margin-right: 10px;
              width: 40px;
            }
            .name {
              font-size: 26px;
            }
          }
        }
        .invite {
          display: flex;
          align-items: center;
          color: #f8a012;
          margin-top: 10px;
          .divide {
            @include vertical-divide-style();
          }
          .code {
            font-size: 27px;
          }
          .active {
            font-size: 27px;
          }
        }
      }
    }
    .inviter-info {
      margin-top: 20px;
      display: flex;
      align-items: center;
      font-size: 24px;
      color: rgb(black, 0.7);
      .divide {
        @include vertical-divide-style(rgb(black, 0.7));
      }
    }
  }
  .static-panel {
    @include panel-style;
    display: flex;
    justify-content: space-around;
    .cell {
      display: flex;
      flex-direction: column;
      align-items: center;
      .label {
        font-size: 24px;
        color: rgba(black, 0.5);
      }
      .value {
        margin-top: 10px;
        font-size: 28px;
      }
    }
  }
  .function-panel {
    @include panel-style;
    .divide {
      @include horizon-divide-style(rgb(black, 0.1), 600px);
    }
    .function-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 0;
      .left {
        display: flex;
        align-items: center;
        font-size: 30px;
        font-weight: 500;
        .icon {
          margin-right: 20px;
          image {
            width: 50px;
          }
        }
      }
      .right {
        color: rgba(black, 0.5);
      }
    }
  }
}
.qr-code-wrapper {
  image {
    width: 600px;
  }
}
</style>
