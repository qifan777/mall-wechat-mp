import { createApp } from "vue";
import { createPinia } from "pinia";
import { useHomeStore } from "./stores/home-store";
const App = createApp({
  onShow() {
    useHomeStore().getUserInfo();
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});
App.use(createPinia());

export default App;
