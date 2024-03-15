<template>
  <div class="order-list-page">
    <nut-tabs class="tabs" v-model="activeStatus" @change="handleTabChange">
      <nut-tab-pane
        v-for="tab in tabList"
        :key="tab.keyId"
        :title="tab.keyName"
        :pane-key="tab.keyEnName"
      >
        <div class="order" v-for="order in pageData.content" :key="order.id">
          <order-row
            :order="order"
            @click="switchPage('./order-details?id=' + order.id)"
          >
            <nut-button size="small" plain v-if="showCancel(order.status)"
              >取消订单</nut-button
            >
            <nut-button
              size="small"
              type="danger"
              plain
              v-if="order.status === 'TO_BE_PAID'"
              >立即支付</nut-button
            >
            <nut-button
              size="small"
              type="danger"
              plain
              v-if="order.status === 'TO_BE_RECEIVED'"
              @click="trackingDetails"
              >查看物流</nut-button
            >
          </order-row>
        </div>
      </nut-tab-pane>
    </nut-tabs>
  </div>
</template>
<script setup lang="ts">
import { usePageHelper } from "@/utils/page";
import { api } from "@/utils/api-instance";
import OrderRow from "@/components/order/order-row.vue";
import { ProductOrderStatus } from "@/apis/__generated/model/enums";
import { switchPage } from "@/utils/common";
import { Dictionaries } from "@/apis/__generated/model/enums/DictConstants";
import { ref } from "vue";
import Taro from "@tarojs/taro";
const { TO_BE_PAID, TO_BE_DELIVERED, TO_BE_RECEIVED, CLOSED } =
  Dictionaries.ProductOrderStatus;
const tabList = [TO_BE_PAID, TO_BE_DELIVERED, TO_BE_RECEIVED, CLOSED];
const activeStatus = ref<ProductOrderStatus>("TO_BE_PAID");
const handleTabChange = () => {
  reloadPageData({ query: { status: activeStatus.value } });
};
const { pageData, reloadPageData } = usePageHelper(
  api.productOrderController.queryByUser,
  api.productOrderController,
  { query: { status: activeStatus.value } },
);
const showCancel = (status: ProductOrderStatus) => {
  return status === "TO_BE_PAID" || status === "TO_BE_DELIVERED";
};
const trackingDetails = (trackingNumber: string) => {
  Taro.navigateToMiniProgram({
    appId: "wx6885acbedba59c14",
    path: `pages/result/result?nu=${trackingNumber}&com=&querysource=third_xcx`,
  });
};
</script>
<style lang="scss">
page {
  background-color: #f5f5f5;
}
.order-list-page {
  .nut-tabs__list {
    background-color: white;
  }
  .nut-tab-pane {
    padding: 0;
    background-color: #f5f5f5;
  }
}
</style>
