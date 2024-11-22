import { ElLoading, ElMessage } from "element-plus";
import type { User } from "types/RelatedPolicy/usertype";
import type { Ref } from "vue";

// 查找逻辑   定义响应式输入框、表单数据、查找过滤后的表单数据
export const useSearchLogic = (
  input: Ref<string>,
  tableData: Ref<User[]>,
  filterTableData: Ref<User[]>
) => {
  const onSearch = async () => {
    // 开启加载效果
    const loading = ElLoading.service({
      lock: true,
      text: "Loading",
      background: "rgba(0, 0, 0, 0.7)"
    });
    try {
      await new Promise<void>(resolve => {
        setTimeout(() => {
          if (!input.value.trim()) {
            // 如果搜索关键词为空，显示全部数据
            filterTableData.value = tableData.value;
          } else {
            // 使用数组的filter方法根据关键词筛选数据
            filterTableData.value = tableData.value.filter(item => {
              return item.message
                .toLowerCase()
                .includes(input.value.toLowerCase());
            });
          }
          // 关闭加载效果
          loading.close();
          resolve();
        }, 1000); // 此处通过setTimeout模拟异步操作耗时
      });

      if (!input.value.trim()) {
        ElMessage.error("输入框为空，请输入正确信息");
      } else {
        ElMessage({
          type: "success",
          message: "搜索成功"
        });
      }
    } catch (error) {
      ElMessage.error("搜索操作出现错误：" + error.message);
    }
  };
  return {
    onSearch
  };
};
