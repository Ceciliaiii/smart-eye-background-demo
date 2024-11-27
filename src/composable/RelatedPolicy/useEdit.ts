import { ElLoading, ElMessage } from "element-plus";
import type { User } from "types/RelatedPolicy/usertype";
import type { Ref } from "vue";

// 编辑逻辑  定义表单数据、indexrow、子组件ref属性
export const useEditLogic = (
  editDialog: Ref<any>,
  currentEditIndex: Ref<number>,
  currentEditRow: Ref<User | null>,
  tableData: Ref<User[]>
) => {
  // 点击编辑 打开弹窗
  const handleEdit = (index: number, row: User) => {
    // 将当前点击编辑的行索引和整行数据保存到响应式数据中，方便后续在handleEditData方法中使用
    currentEditIndex.value = index;
    currentEditRow.value = row;
    editDialog.value.open({});
  };

  const handleEditData = async (newMsg: string) => {
    console.log(newMsg);

    if (currentEditIndex.value !== -1 && currentEditRow.value) {
      // 开启加载效果
      const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        background: "rgba(0, 0, 0, 0.7)"
      });

      try {
        await new Promise<void>(resolve => {
          setTimeout(() => {
            // 直接使用之前记录的编辑行索引，更新对应的message字段
            tableData.value[currentEditIndex.value].message = newMsg;
            // 关闭加载效果
            loading.close();
            resolve();
          }, 1000); // 此处通过setTimeout模拟异步操作耗时
        });

        // 提示信息
        ElMessage({
          type: "success",
          message: "相关政策信息编辑成功"
        });
      } catch (error) {
        // 捕获异步过程中出现的错误并提示错误信息
        ElMessage.error("更新操作出现错误：" + error.message);
      }
    } else {
      ElMessage({
        type: "error",
        message: "编辑行信息丢失或不完整，更新失败"
      });
    }
  };

  return {
    handleEdit,
    handleEditData
  };
};
