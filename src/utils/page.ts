import { type Ref, ref } from "vue";
import type { Page, QueryRequest } from "@/apis/__generated/model/static";
import _ from "lodash";
import Taro from "@tarojs/taro";

export type PageResult<T> = Pick<
  Page<T>,
  "content" | "number" | "size" | "totalElements" | "totalPages"
>;

export const usePageHelper = <T extends Object, E>(
  // 调用后端的查询接口
  queryApi: (options: {
    readonly body: QueryRequest<T>;
  }) => Promise<PageResult<E>>,
  object: unknown,
  // 查询条件
  initQuery?: T,
  // 分页数据后置处理
  postProcessor?: (data: PageResult<E>) => void,
) => {
  const pageData = ref({
    content: [] as E,
    number: 1,
    size: 10,
    totalElements: 0,
    totalPages: 0,
  }) as Ref<PageResult<E>>;
  const queryRequest = ref({
    query: { ...initQuery } ?? {},
    pageNum: 1,
    pageSize: 10,
    likeMode: "ANYWHERE",
    sorts: [{ property: "createdTime", direction: "DESC" }],
  }) as Ref<QueryRequest<T>>;
  const finish = ref(false);

  // 请求分页数据
  const loadPageData = (request: Partial<QueryRequest<T>> = {}) => {
    // 通用查询对象，防止传入空值
    queryRequest.value = {
      ...queryRequest.value,
      ..._.omitBy(request, _.isNil),
    };
    // 如果查询条件为null，undefined，空字符串则过滤不提交
    queryRequest.value.query = {
      ..._.omitBy(queryRequest.value.query, (row) => {
        if (_.isString(row)) {
          return _.isEmpty(row);
        } else {
          return _.isNil(row);
        }
      }),
    } as T;
    if (finish.value) return;
    // 显示加载动画
    Taro.showLoading({
      title: "加载中",
    });
    // 调用查询接口
    queryApi.apply(object, [{ body: queryRequest.value }]).then(
      (res: PageResult<E>) => {
        if (postProcessor !== undefined) {
          postProcessor(res);
        }
        // 返回结果
        pageData.value.content.push(...res.content);
        finish.value = res.content.length < res.size;
        queryRequest.value.pageNum = (queryRequest.value.pageNum || 1) + 1;
        // 取消加载动画
        Taro.hideLoading();
      },
      (res) => {
        console.log(res);
        Taro.hideLoading();
      },
    );
  };
  // 重新请求分页数据，pageNum=1, pageSize=10
  const reloadPageData = (query?: T) => {
    finish.value = false;
    pageData.value.content = [];
    loadPageData({ pageNum: 1, pageSize: 10, query });
  };
  // 下拉刷新
  Taro.usePullDownRefresh(() => {
    reloadPageData();
    setTimeout(() => {
      Taro.stopPullDownRefresh();
    }, 300);
  });
  // 触底加载
  Taro.useReachBottom(() => {
    loadPageData();
  });
  // 首次进入页面加载
  Taro.useLoad(() => {
    loadPageData();
  });
  return {
    queryRequest,
    pageData,
    loadPageData,
    reloadPageData,
  };
};
