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
    number: 0,
    size: 0,
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
  const loading = ref(false);

  // 请求分页数据
  const loadPageData = (request: Partial<QueryRequest<T>>) => {
    queryRequest.value = {
      ...queryRequest.value,
      ..._.omitBy(request, _.isNil),
    };
    queryRequest.value.query = {
      ..._.omitBy(queryRequest.value.query, (row) => {
        if (_.isString(row)) {
          return _.isEmpty(row);
        } else {
          return _.isNil(row);
        }
      }),
    } as T;
    loading.value = true;
    queryApi.apply(object, [{ body: queryRequest.value }]).then(
      (res) => {
        if (postProcessor !== undefined) {
          postProcessor(res);
        }
        pageData.value = res;
        loading.value = false;
      },
      (res) => {
        console.log(res);
      },
    );
  };
  // 重新请求分页数据，pageNum=1, pageSize=10
  const reloadPageData = (
    queryRequest: Partial<QueryRequest<T>> = { pageNum: 1, pageSize: 10 },
  ) => {
    loadPageData(queryRequest);
  };
  Taro.usePullDownRefresh(() => {
    reloadPageData();
    setTimeout(() => {
      Taro.stopPullDownRefresh();
    }, 300);
  });
  Taro.useReachBottom(() => {
    loadPageData({ pageNum: pageData.value.number + 1 });
  });

  Taro.useLoad(() => {
    loadPageData({ pageNum: pageData.value.number + 1 });
  });
  return {
    loading,
    queryRequest,
    pageData,
    loadPageData,
    reloadPageData,
  };
};
