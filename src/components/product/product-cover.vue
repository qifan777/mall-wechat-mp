<template>
  <div class="product-cover">
    <image
      :src="item.image"
      class="image"
      mode="widthFix"
      :style="{ width }"
    ></image>
    <div class="title-wrapper" :style="{ width }">
      <div class="title">
        {{ item.name }}
      </div>
      <slot></slot>
    </div>
    <div class="bottom-wrapper">
      <div class="tags">
        <nut-tag
          v-for="tag in item.tags.split(',')"
          :key="tag"
          class="tag"
          color="#E9E9E9"
          textColor="#999999"
        >
          {{ tag }}
        </nut-tag>
      </div>
      <div class="description-price">
        <div class="description">{{ item.description }}</div>
        <div class="price">￥{{ item.price }}</div>
      </div>
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ProductDto } from "@/apis/__generated/model/dto/ProductDto";
withDefaults(
  defineProps<{
    item: ProductDto["ProductRepository/COMPLEX_FETCHER"];
    width?: string;
  }>(),
  { width: "305px" },
);
</script>

<style lang="scss">
@import "../../app.scss";
.product-cover {
  border-radius: 15px;
  margin: 20px 10px;
  background-color: #ffffff;
  padding: 14px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .image {
    border-radius: 10rpx;
  }

  .title-wrapper {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    .title {
      font-size: 28rpx;
      margin-top: 5px;
      color: rgba(black, 0.9);
      @include text-max-line(2);
    }
  }
  .bottom-wrapper {
    width: 100%;
    align-self: flex-start;

    // display: flex;
    // flex-direction: column;
    .tags {
      display: flex;
      flex-wrap: wrap;
      margin-left: 20px;
      .tag {
        margin-right: 10px;
        --nut-tag-font-size: 18px;
      }
    }
    .description-price {
      padding: 10px 20px;

      display: flex;
      align-items: center;
      justify-content: space-between;
      .description {
        font-size: 26px;
        color: rgba(black, 0.7);
      }
      .price {
        color: rgba(red, 0.9);
      }
    }
  }
}
</style>
