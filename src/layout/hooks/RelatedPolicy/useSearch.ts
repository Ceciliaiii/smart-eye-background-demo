import { ElLoading, ElMessage } from "element-plus";
import type { User } from "types/RelatedPolicy/usertype";
import type { Ref } from "vue";

// 查找逻辑
export const useSearchLogic = (
  input: Ref<string>,
  tableData: Ref<User[]>,
  filterTableData: Ref<User[]>
) => {
  const onSearch = () => {
    // 加载效果
    const loading = ElLoading.service({
      lock: true,
      text: "Loading",
      background: "rgba(0, 0, 0, 0.7)"
    });
    if (!input.value.trim()) {
      // 如果搜索关键词为空，显示全部数据
      filterTableData.value = tableData.value;
      ElMessage.error("输入框为空，请输入正确信息");
    } else {
      // 使用数组的filter方法根据关键词筛选数据
      filterTableData.value = tableData.value.filter(item => {
        return item.message.toLowerCase().includes(input.value.toLowerCase());
      });
      ElMessage({
        type: "success",
        message: "搜索成功"
      });
    }
    loading.close();
  };
  return {
    onSearch
  };
};
