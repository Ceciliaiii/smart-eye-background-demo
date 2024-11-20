import { ElMessage } from "element-plus";
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

  const handleEditData = (newMsg: string) => {
    console.log(newMsg);

    if (currentEditIndex.value !== -1 && currentEditRow.value) {
      // 直接使用之前记录的编辑行索引，更新对应的message字段
      tableData.value[currentEditIndex.value].message = newMsg;
      // 提示信息
      ElMessage({
        type: "success",
        message: "相关政策信息更新成功"
      });
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
