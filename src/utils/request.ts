import type { Method, Result } from "@/typings";
import Taro from "@tarojs/taro";
import { useHomeStore } from "@/stores/home-store";

const baseUrl = process.env.TARO_APP_API;

const requestWithToken = async <T>(
  url: string,
  method: Method,
  data: unknown,
  headers?: Record<string, unknown>,
): Promise<T> => {
  return await new Promise((resolve, reject) => {
    const token = Taro.getStorageSync("token");
    Taro.request({
      url: (baseUrl ?? "") + url,
      method,
      data,
      header: {
        token,
        ...headers,
      },
      dataType: "json",
      success: (response) => {
        const result = response.data as Result<T>;
        if (result.code !== 1) {
          Taro.showToast({
            title: result.msg,
            icon: "none",
          });
        }
        if (result.code === 1001007 || result.code === 1001008) {
          useHomeStore().loginShow = true;
        } else {
          resolve(result.result);
        }
      },
      fail: (res: unknown) => {
        reject(res);
      },
    });
  });
};
export default requestWithToken;
