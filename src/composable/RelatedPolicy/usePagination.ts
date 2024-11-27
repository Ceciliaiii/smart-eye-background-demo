import type { User } from "types/RelatedPolicy/usertype";
import { ref, onMounted } from "vue";

// 定义分页相关的类型，这里假设传入的数据是泛型 T 类型的数组，现在明确 T 为 User 类型
interface PaginationOptions<T = User> {
  data: T[];
  pageSize?: number;
}

// 封装分页逻辑的hook函数
export const usePagination = <T = User>({
  data,
  pageSize = 10
}: PaginationOptions<T>) => {
  // 当前页码，初始化为1
  const currentPage = ref(1);
  // 每页显示条数，默认使用传入的参数或者初始化为10条
  const pageSizeValue = ref(pageSize);
  // 总数据条数，初始根据传入数据长度确定，后续若有数据变化可更新
  const total = ref(data.length);

  // 获取当前页数据的函数，明确返回类型为 T[]（也就是 User[]）
  const fetchPageData = async (): Promise<T[]> => {
    return new Promise<T[]>(async resolve => {
      setTimeout(() => {
        const startIndex = (currentPage.value - 1) * pageSizeValue.value;
        const endIndex = startIndex + pageSizeValue.value;
        const filterData = data.slice(startIndex, endIndex);
        resolve(filterData);
      }, 1000);
    });
  };

  // 分页改变时的回调函数，更新当前页码并重新获取对应页的数据
  const handlePageChange = (page: number) => {
    currentPage.value = page;
    fetchPageData();
  };

  // 每页显示条数改变时的回调函数，更新每页显示条数并重新获取对应页的数据
  const handleSizeChange = (val: number) => {
    pageSizeValue.value = val;
    fetchPageData();
  };

  // 在组件挂载时获取第一页数据（初始展示）
  onMounted(() => {
    fetchPageData();
  });

  return {
    currentPage,
    pageSizeValue,
    total,
    fetchPageData,
    handlePageChange,
    handleSizeChange
  };
};
