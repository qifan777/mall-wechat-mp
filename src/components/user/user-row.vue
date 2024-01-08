<template>
  <div class="row">
    <div class="avatar">
      <QiUserAvatar :avatar="avatar" :width="width"></QiUserAvatar>
    </div>
    <div class="info">
      <div class="info-top">
        <div class="name">{{ name }}</div>
        <div class="label">{{ label }}</div>
      </div>
      <div class="time">{{ time }}</div>
    </div>
    <div class="rear">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import QiUserAvatar from "@/components/user/user-avatar.vue";

defineProps({
  avatar: {
    type: String,
    default: "",
    required: false,
  },
  width: { type: String, default: "85rpx" },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
  time: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss">
.row {
  display: flex;
  align-items: center;
  background-color: white;

  .avatar {
    image {
      border-radius: 15px;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    margin-left: 20px;

    .info-top {
      display: flex;
      align-items: center;

      .name {
        flex-shrink: 0;
        margin-right: 20px;
        font-size: 28px;
        color: rgba(black, 0.9);
      }

      .label {
        font-size: 24px;
        color: rgba(black, 0.7);
      }
    }

    .time {
      margin-top: 15px;
      font-size: 24px;
      color: rgba(black, 0.7);
    }
  }

  .rear {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
