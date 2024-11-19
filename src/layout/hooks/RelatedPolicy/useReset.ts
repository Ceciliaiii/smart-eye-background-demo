import { ElLoading, ElMessage } from "element-plus";
import type { User } from "types/RelatedPolicy/usertype";
import type { Ref } from "vue";

// 重置逻辑
export const useResetLogic = (
  input: Ref<string>,
  tableData: Ref<User[]>,
  filterTableData: Ref<User[]>
) => {
  const onReset = () => {
    // 加载效果
    const loading = ElLoading.service({
      lock: true,
      text: "Loading",
      background: "rgba(0, 0, 0, 0.7)"
    });
    // 清空搜索框，重新渲染
    input.value = "";
    filterTableData.value = tableData.value;
    loading.close();
    ElMessage({
      type: "success",
      message: "重置成功"
    });
  };
  return {
    onReset
  };
};
