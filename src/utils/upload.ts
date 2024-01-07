import Taro from "@tarojs/taro";

export const uploadFile = async (filePath: string) => {
  return await new Promise<string>((resolve, reject) => {
    Taro.uploadFile({
      url: (process.env.TARO_APP_API ?? "") + "/oss/upload",
      header: {
        token: Taro.getStorageSync("token"),
      },
      name: "name",
      filePath,
      success: (res) => {
        resolve(JSON.parse(res.data).result.url);
      },
      fail: (result) => {
        console.log(result);
        reject(result);
      },
    });
  });
};
