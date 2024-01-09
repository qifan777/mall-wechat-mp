import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import { api } from "@/utils/api-instance";
import { UserDto } from "@/apis/__generated/model/dto";

export const useHomeStore = defineStore("home", () => {
  const userInfo = ref<UserDto["UserRepository/COMPLEX_FETCHER"]>({
    createdTime: "",
    editedTime: "",
    id: "",
    nickname: "",
    password: "",
    phone: "",
  });
  const registerShow = ref(false);
  onMounted(() => {
    getUserInfo();
  });
  const getUserInfo = async () => {
    userInfo.value = await api.userController.getUserInfo();
    return userInfo.value;
  };
  return { userInfo, registerShow, getUserInfo };
});
