export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/user/index",
    "pages/address/address-list",
    "pages/address/address-save",
    "pages/order/order-create",
    "pages/order/order-list",
    "pages/order/order-details",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    borderStyle: "black",
    backgroundColor: "#ffffff",
    color: "#8F8F94",
    selectedColor: "#1296db",
    list: [
      {
        pagePath: "pages/index/index",
        iconPath: "assets/icons/home.png",
        selectedIconPath: "assets/icons/home-active.png",
        text: "首页",
      },
      {
        pagePath: "pages/user/index",
        iconPath: "assets/icons/user.png",
        selectedIconPath: "assets/icons/user-active.png",
        text: "我的",
      },
    ],
  },
  plugins: {
    chooseLocation: {
      version: "1.0.10",
      provider: "wx76a9a06e5b4e693e",
    },
  },
  permission: {
    "scope.userLocation": {
      desc: "你的位置将用于确认收货地址",
    },
  },
  requiredPrivateInfos: ["getLocation"],
});
