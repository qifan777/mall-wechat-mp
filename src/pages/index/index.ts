import { defineStore } from "pinia";
import { ref } from "vue";

export const useIndexStore = defineStore("index", () => {
  const msg = ref("");
  return { msg };
});
