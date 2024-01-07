<template>
  <view class="main">
    <form @submit="submit">
      <view class="row">
        <view class="left">头像</view>
        <view class="right">
          <view class="content">
            <button
              class="choose-avatar"
              open-type="chooseAvatar"
              plain="true"
              @chooseavatar="chooseAvatar"
            >
              <image
                v-if="userInfo.avatar"
                class="avatar"
                :src="userInfo.avatar"
                mode="widthFix"
              ></image>
              <image
                v-else
                class="avatar"
                src="@/assets/icons/user.png"
                mode="widthFix"
              ></image>
            </button>
          </view>

          <rect-right />
        </view>
      </view>
      <view class="row">
        <view class="left">昵称</view>
        <view class="right">
          <input
            v-model="userInfo.nickname"
            type="nickname"
            name="nickname"
            class="content"
            placeholder="请输入昵称"
          />
          <rect-right />
        </view>
      </view>
      <!-- <view class="row">
        <view class="left">性别</view>
        <view class="right" @tap="showGenderPicker = true">
          <view class="content">{{ userInfo.gender }}</view>
          <RectRight />
        </view>
      </view> -->
      <nut-button type="primary" form-type="submit" class="submit"
        >提交</nut-button
      >
      <!-- <nut-popup v-model:visible="showGenderPicker" position="bottom">
        <nut-picker
          v-model="gender"
          :columns="genderType"
          title="选择性别"
          @cancel="showGenderPicker = false"
          @confirm="showGenderPicker = false"
        >
        </nut-picker> 
      </nut-popup> -->
    </form>
  </view>
  <QiLoginPopup> </QiLoginPopup>
</template>
<script lang="ts" setup>
import { toRefs } from "vue";
import { RectRight } from "@nutui/icons-vue-taro";
import { useHomeStore } from "@/stores/home-store";
import { uploadFile } from "@/utils/upload";
import { api } from "@/utils/api-instance";
import { assertSuccess } from "@/utils/common";
// const showGenderPicker = ref(false);
const homeStore = useHomeStore();
homeStore.getUserInfo();
const { userInfo } = toRefs(homeStore);
// const gender = computed({
//   get: () => {
//     return [userInfo.value.gender];
//   },
//   set: (value) => {
//     console.log(value);
//     userInfo.value.gender = value[0];
//   },
// });

const chooseAvatar = (e: any) => {
  uploadFile(e.detail.avatarUrl).then((res) => {
    userInfo.value.avatar = res;
  });
};

const submit = (e: any) => {
  userInfo.value.nickname = e.detail.value.nickname;
  api.userController
    .save({
      body: {
        ...userInfo.value,
        roleIds: userInfo.value.rolesView.map((role) => role.id),
      },
    })
    .then((res) => {
      assertSuccess(res);
    });
};
</script>
<style lang="scss">
.submit {
  display: block;
  margin: 300px auto;
  width: 300px;
}
.main {
  border-radius: 15px;
  margin: 0 20px;
  padding: 20px;

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;

    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.05);

    .left {
      font-size: 34px;
      color: rgba($color: #000000, $alpha: 0.6);
    }

    .right {
      font-size: 34px;
      color: rgba($color: #000000, $alpha: 0.9);
      display: flex;
      align-items: center;

      .content {
        text-align: right;
        margin-right: 10px;
      }
    }
  }
}

.avatar {
  width: 80px;
  border-radius: 15px;
}
.choose-avatar {
  background-color: rgba(white, 0);
  border: 0 !important;
  line-height: 0;
}

.icon {
  opacity: 0.5;
}
</style>
