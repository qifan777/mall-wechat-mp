<template>
  <div>
    <div class="product-dialog">
      <!-- 这步不能使用 v-model:visible="props.visible" 因为props.visible不能从子组件更新 -->
      <!-- 通过继续把事件emit出去实现双向绑定。emit('update:visible', visible) -->
      <nut-popup
        :visible="props.visible"
        round
        pop-class="product-popup"
        @update:visible="(visible) => emit('update:visible', visible)"
      >
        <!-- 当设置scroll-y时需要设置固定的高度 -->
        <scroll-view class="product-section" :scroll-y="true">
          <div>
            <!-- aspectFill优先保证图片的比例 -->
            <image
              class="product-cover"
              :src="activeSku.cover || props.product.image"
              :mode="'aspectFill'"
            ></image>
          </div>
          <div class="product-name">{{ props.product.name }}</div>
          <div class="product-description">
            {{ activeSku.description || props.product.description }}
          </div>
          <div>
            <div
              v-for="(attribute, index) in attributes"
              :key="attribute.id"
              class="attribute-row"
            >
              <div class="attribute-name">{{ attribute.name }}</div>
              <div class="values">
                <div
                  v-for="value in attribute.valueList"
                  :key="value"
                  :class="[
                    'value',
                    attribute.activeValue === value ? 'active' : '',
                  ]"
                  @click="() => changeActive(value, attribute, index)"
                >
                  {{ value }}
                </div>
              </div>
            </div>
          </div>
          <div class="choose">
            <div class="values">
              <span class="prefix">已选择规格：</span>
              {{ chooseAttribute.join("、") }}
            </div>
          </div>
          <div class="result">
            <div class="total-price">
              <span>总计</span>
              <span class="price-prefix">￥</span>
              <span class="price">
                {{ activeSku ? activeSku.price : product.price }}
              </span>
            </div>
            <div class="add-cert" @click="() => addProduct()">
              <span class="prefix">+</span>加入购物车
            </div>
          </div>
        </scroll-view></nut-popup
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProductDto } from "@/apis/__generated/model/dto";
import { ScrollView } from "@tarojs/components";
import { computed, ref, watch } from "vue";
type Sku = ProductDto["ProductRepository/COMPLEX_FETCHER"]["skuList"][0];
type Attribute =
  ProductDto["ProductRepository/COMPLEX_FETCHER"]["attributes"][0] & {
    activeValue: string;
    valueList: string[];
  };
const props = defineProps<{
  product: ProductDto["ProductRepository/COMPLEX_FETCHER"];
  visible: boolean;
}>();
const emit = defineEmits<{
  "update:visible": [visible: boolean];
  addSku: [sku: Sku, product: ProductDto["ProductRepository/COMPLEX_FETCHER"]];
}>();

const skuList = computed(() => {
  return props.product.skuList;
});
// 当传入的商品发送改变时重新计算商品的属性
const attributes = ref<Attribute[]>([]);
// 当前选择属性值
const chooseAttribute = ref<string[]>([]);
// 当前选中的商品规格
const activeSku = ref<Sku>({
  id: "",
  createdTime: "",
  editedTime: "",
  values: "",
  name: "",
  cover: "",
  price: 0,
  stock: 0,
  description: "",
});
// 切换属性时重新计算当前的商品规格
const changeActive = (value: string, attr: Attribute, index: number) => {
  attr.activeValue = value;
  chooseAttribute.value[index] = value;
  const sku = skuList.value.find((sku) => {
    return sku.values === chooseAttribute.value.join(",");
  });
  if (sku) {
    activeSku.value = sku;
  }
};
watch(
  props.product,
  () => {
    chooseAttribute.value = [];
    attributes.value = props.product.attributes.map((attribute) => {
      return {
        ...attribute,
        valueList: attribute.values.split(","),
        activeValue: "",
      } satisfies Attribute;
    });
    attributes.value.forEach((attribute, index: number) => {
      changeActive(attribute.valueList[0], attribute, index);
    });
  },
  { immediate: true },
);

const addProduct = async () => {
  emit("update:visible", false);
  emit("addSku", activeSku.value, props.product);
};
</script>

<style lang="scss">
.product-dialog {
  .product-section {
    background-color: white;
    border-radius: 15px;
    overflow: hidden;
    width: 680px;
    height: 1000px;

    .product-name {
      font-size: 34px;
      margin: 30px;
      word-break: keep-all;
    }

    .product-description {
      padding: 20px 30px;
      // 描述的颜色要淡一些，透明度设置0.7和标题体现出差异。
      color: rgba(black, 0.7);
      // 字体也是一样设置小一些
      font-size: 28px;
    }
    .product-cover {
      // 封面和对话框一样宽，不留缝隙。这样看起来会比较好看。
      width: 100%;
      height: 750px;
    }
    // 每个属性占一行
    .attribute-row {
      margin-top: 50px;
      padding: 30px;

      .attribute-name {
        color: rgba($color: #000000, $alpha: 0.8);
      }
      // 属性值水平排列
      .values {
        display: flex;

        .value {
          margin-top: 20px;
          padding: 20px;
          border-radius: 10px;
          margin-right: 30px;
          border: 1px solid rgba(black, 0.1);
          // 选中的属性值
          &.active {
            background-color: rgba(255, 209, 97, 0.7);
            border: 2px solid rgb(234, 186, 69);
          }
        }
      }
    }

    .choose {
      margin-top: 40px;
      padding: 20px 30px;
      background-color: rgba(black, 0.05);
      border: 1px solid rgba(black, 0.1);

      .prefix {
        color: rgba(black, 0.7);
      }
    }

    .result {
      padding: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .total-price {
        display: flex;
        align-items: flex-end;

        .price {
          color: red;
          font-size: 45px;
          line-height: 40px;
        }

        .price-prefix {
          color: red;
        }
      }

      .add-cert {
        background-color: rgba(255, 208, 95);
        border-radius: 10px;
        padding: 15px 30px;
        display: flex;

        .prefix {
          font-weight: bold;
          margin-right: 15px;
        }
      }
    }
  }
}
</style>
