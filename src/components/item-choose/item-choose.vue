<template>
  <div class="item-choose">
    <image class="item-icon" :src="iconPath" mode="widthFix"></image>
    <div class="tip" v-if="showTip">{{ tip }}</div>
    <div class="content" v-else>
      <slot></slot>
    </div>
    <div class="choose" @click="switchPage(pageUrl)">
      <image src="../../assets/icons/right.png" mode="widthFix"></image>
    </div>
  </div>
</template>

<script setup lang="ts">
import Taro from "@tarojs/taro";

defineProps<{
  pageUrl: string;
  iconPath: string;
  tip: string;
  showTip: boolean;
}>();
const switchPage = (url: string) => {
  Taro.navigateTo({
    url: url,
    success: (res) => {
      emit("success", res);
    },
  });
};
const emit = defineEmits<{
  success: [value: Parameters<Required<Taro.navigateTo.Option>["success"]>[0]];
}>();
</script>

<style lang="scss">
.item-choose {
  background-color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  .item-icon {
    width: 40px;
  }
  .tip {
    margin-left: 20px;
    color: rgba(black, 0.7);
    font-size: 28px;
    flex-grow: 1;
  }
  .content {
    margin-left: 20px;
    flex-grow: 1;
  }
  .choose {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 34rpx;
    image {
      margin-left: 10rpx;
      margin-right: 10px;
      width: 40px;
    }
  }
}
</style>
