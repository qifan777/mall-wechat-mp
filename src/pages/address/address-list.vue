<template>
  <div class="address-list-page">
    <address-row
      class="address"
      :key="address.id"
      :address="address"
      v-for="address in addressList"
      @longpress="showActionSheet(address)"
    >
      <template #operation>
        <div class="operations">
          <Del class="delete" @click="handleDelete(address.id)"></Del>
          <edit
            class="edit"
            @click="switchPage(`/pages/address/address-save?id=${address.id}`)"
          ></edit>
        </div>
      </template>
    </address-row>
    <div class="add-address" @click="switchPage('/pages/address/address-save')">
      <div class="btn">
        <plus></plus>
        添加收货地址
      </div>
    </div>
    <nut-action-sheet
      v-model:visible="show"
      :menu-items="actions"
      @choose="handleActionChoose"
    />
  </div>
</template>

<script lang="ts" setup>
import { api } from "@/utils/api-instance";
import { switchPage } from "@/utils/common";
import AddressRow from "@/components/address/address-row.vue";
import Taro from "@tarojs/taro";
import { Edit, Del, Plus } from "@nutui/icons-vue-taro";
import { ref } from "vue";
import { AddressDto } from "@/apis/__generated/model/dto";
import { menuItems } from "@nutui/nutui-taro/dist/types/__VUE/actionsheet/index.taro.vue";

const addressList = ref<AddressDto["AddressRepository/SIMPLE_FETCHER"][]>([]);
const loadData = () => {
  api.addressController.getUserAddress().then((res) => {
    addressList.value = res;
  });
};
Taro.useDidShow(() => {
  loadData();
});
const handleDelete = (id: string) => {
  Taro.showModal({
    title: "是否确认删除",
    showCancel: true,
    success: ({ confirm }) => {
      if (confirm) {
        api.addressController.delete({ body: [id] }).then(() => {
          loadData();
        });
      }
    },
  });
};
// 控制是否显示操作菜单
const show = ref(false);
// 长按地址后这个值会变成目标地址
const activeAddress = ref({} as AddressDto["AddressRepository/SIMPLE_FETCHER"]);
// 菜单项
const actions = [{ name: "复制地址" }, { name: "设为默认" }] as menuItems[];
// 菜单项对应的操作
const actionMap = {
  ["复制地址"]: () => {
    // 复制地址到剪贴板
    const address = activeAddress.value;
    const value = `收件人：${address.realName}\n手机号码：${address.phoneNumber}\n详细地址：${address.address} ${address.details}`;
    Taro.setClipboardData({ data: value });
  },
  ["设为默认"]: () => {
    // 设置默认地址
    api.addressController.top({ id: activeAddress.value.id }).then(() => {
      loadData();
    });
  },
};
// 选择菜单后触发
const handleActionChoose = (action: menuItems) => {
  // 执行对应的操作
  actionMap[action.name]();
};
// 长按地址后触发，显示
const showActionSheet = (
  address: AddressDto["AddressRepository/SIMPLE_FETCHER"],
) => {
  activeAddress.value = address;
  show.value = true;
};
</script>

<style lang="scss">
page {
  background-color: #f5f5f5;
}
.address-list-page {
  .operations {
    display: flex;
    justify-content: center;

    .edit {
      margin-left: 20px;
    }
  }
  .add-address {
    border-top: 1px solid rgba(black, 0.1);
    box-shadow: 10rpx -10rpx 10rpx rgba(black, 0.05);
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 30rpx 0 60rpx 0;

    .btn {
      margin: auto;
      justify-content: center;
      display: flex;
      align-items: center;
      background-image: linear-gradient(#fcd956, #f5d131);
      width: 600rpx;
      padding: 20rpx 0;
      border-radius: 10rpx;
    }
  }
}
</style>
