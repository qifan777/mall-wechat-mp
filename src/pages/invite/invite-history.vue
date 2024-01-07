<script setup lang="ts">
import UserAvatar from "@/components/user/user-avatar.vue";
import { api } from "@/utils/api-instance";
import { usePageHelper } from "@/utils/page";
const { pageData } = usePageHelper(
  api.inviteHistoryController.userInviteHistory,
  api.inviteHistoryController,
  { status: 1 },
);
</script>

<template>
  <div class="invite-history">
    <div class="invite-row" v-for="item in pageData.content" :key="item.id">
      <div class="user-row">
        <div class="avatar">
          <user-avatar
            :avatar="item.invitee?.avatar"
            width="60px"
          ></user-avatar>
        </div>
        <div class="name">{{ item.invitee?.nickname }}</div>
      </div>
      <div class="time">邀请时间：{{ item.createdTime }}</div>
    </div>
  </div>
</template>

<style lang="scss">
page {
  background-color: #f5f5f5;
}
@mixin panel-style() {
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  background-color: white;
}
.invite-row {
  @include panel-style();
  .user-row {
    display: flex;
    .name {
      margin-left: 20px;
      font-size: 30px;
    }
  }
  .time {
    font-size: 26px;
    margin-top: 20px;
    color: rgba($color: #000000, $alpha: 0.5);
  }
}
</style>
