<template>
  <div class="water-fall">
    <div class="left-water-fall">
      <div v-for="(item, index) in leftList" :key="index" class="item-wrapper">
        <slot :item="item" name="itemLeft"></slot>
      </div>
    </div>
    <div class="right-water-fall">
      <div v-for="(item, index) in rightList" :key="index" class="item-wrapper">
        <slot :item="item" name="itemRight"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup generic="T">
import { computed } from "vue";
const props = defineProps<{ dataList: T[] }>();
defineSlots<{
  itemRight: (props: { item: T }) => void;
  itemLeft: (props: { item: T }) => void;
}>();

const leftList = computed(() =>
  props.dataList.filter((_value, index) => index % 2 === 0),
);
const rightList = computed(() =>
  props.dataList.filter((_value, index) => index % 2 !== 0),
);
</script>

<style lang="scss">
.water-fall {
  display: flex;

  .left-water-fall {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }

  .right-water-fall {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }
}
</style>
