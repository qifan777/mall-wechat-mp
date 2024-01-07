<template>
  <div>
    <image
      v-if="avatar"
      :src="avatar"
      :style="{ width: width, borderRadius: radius }"
      mode="widthFix"
    ></image>
    <image
      v-else
      :style="{ width: width, borderRadius: radius }"
      mode="widthFix"
      src="@/assets/icons/person.png"
    ></image>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  avatar: {
    type: String,
    default: undefined,
  },
  width: {
    type: String,
    default: "60px",
  },
  radius: {
    type: String,
    default: "15px",
  },
});
</script>

<style></style>
