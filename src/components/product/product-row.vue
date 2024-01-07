<template>
  <div class="qi-product">
    <!-- 封面 aspectFill优先保证图片比例 -->
    <image class="cover" :src="product.image" mode="aspectFill"></image>
    <!-- 商品详情 -->
    <div class="info">
      <div class="name">{{ product.name }}</div>
      <div v-if="product.description" class="description">
        {{ product.description }}
      </div>
      <div v-if="product.price" class="price-row">
        <div class="price">
          <span class="prefix">￥</span>
          <span>{{ product.price }}</span>
        </div>
        <div class="choose" @click="handleChoose">立即选购</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProductDto } from "@/apis/__generated/model/dto";
// 接受参数
const props = defineProps<{
  product: ProductDto["ProductRepository/COMPLEX_FETCHER"];
}>();
// 定义事件
const emit = defineEmits<{
  choose: [product: ProductDto["ProductRepository/COMPLEX_FETCHER"]];
}>();
const handleChoose = () => {
  emit("choose", props.product);
};
</script>

<style lang="scss">
.qi-product {
  padding: 15px 0;
  display: flex;
  align-items: flex-start;
  .cover {
    width: 150px;
    height: 150px;
    border-radius: 10px;
  }
  .info {
    // 撑开多余的空间
    flex: 2;
    margin-left: 20px;
    padding-right: 10px;
    display: flex;
    // 元素排列方向变为垂直
    flex-direction: column;
    // 各个元素之间在垂直方向上均衡分布
    justify-content: space-between;
    height: 200px;
    .name {
      font-size: 28px;
      font-weight: bold;
      // 文字溢出处理开始
      // 文字只能显示一行
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      overflow: hidden;
      // 溢出部分用 ...代替
      text-overflow: ellipsis;
      // 文字溢出处理结束
    }
    .description {
      font-size: 24px;
      color: rgba($color: #000000, $alpha: 0.7);
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .price-row {
      width: 100%;
      display: flex;
      // 水平方向上均衡分布
      justify-content: space-between;
      // 垂直方向居中
      align-items: center;

      .price {
        display: flex;
        // ￥ 和 数字底部对齐
        align-items: flex-end;
        .prefix {
          font-size: 28px;
          color: red;
        }

        color: red;
        font-weight: bold;
        font-size: 28px;
      }

      .choose {
        padding: 5px 15px;
        font-size: 26px;
        color: black;
        background-color: rgb(255, 209, 97);
        border-radius: 10px;
      }
    }
  }
}
</style>
