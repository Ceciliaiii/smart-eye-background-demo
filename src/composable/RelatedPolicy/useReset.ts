import { ElLoading, ElMessage } from "element-plus";
import type { User } from "types/RelatedPolicy/usertype";
import type { Ref } from "vue";

// 重置逻辑   定义响应式输入框、表单数据、查找过滤后的表单数据
export const useResetLogic = (
  input: Ref<string>,
  tableData: Ref<User[]>,
  filterTableData: Ref<User[]>
) => {
  const onReset = async () => {
    // 开启加载效果
    const loading = ElLoading.service({
      lock: true,
      text: "Loading",
      background: "rgba(0, 0, 0, 0.7)"
    });
    try {
      await new Promise<void>(resolve => {
        setTimeout(() => {
          // 清空搜索框，重新渲染
          input.value = "";
          filterTableData.value = tableData.value;
          // 关闭加载效果
          loading.close();
          resolve();
        }, 1000); // 此处通过setTimeout模拟异步操作耗时
      });

      ElMessage({
        type: "success",
        message: "重置成功"
      });
    } catch (error) {
      ElMessage.error("重置操作出现错误：" + error.message);
    }
  };
  return {
    onReset
  };
};
