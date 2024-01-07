export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/user/index",
    "pages/user/user-edit",
    "pages/invite/index",
    "pages/invite/invite-history",
    "pages/coupon/index",
    "pages/coupon/available-coupon-list",
    "pages/address/address-list",
    "pages/address/address-save",
    "pages/order/index",
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
    citySelector: {
      version: "1.0.2",
      provider: "wx63ffb7b7894e99ae",
    },
  },
  permission: {
    "scope.userLocation": {
      desc: "你的位置讲用于为你推荐附近的旅游景点",
      // 高速公路行驶持续后台定位
    },
  },
  requiredPrivateInfos: ["getLocation"],
});
