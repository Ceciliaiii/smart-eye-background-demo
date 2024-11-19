import { ElMessage } from "element-plus";
import type { User } from "types/RelatedPolicy/usertype";
import type { Ref } from "vue";

// 编辑逻辑
export const useEditLogic = (
  editDialog: Ref<any>,
  currentEditIndex: Ref<number>,
  currentEditRow: Ref<User | null>,
  tableData: Ref<User[]>
) => {
  const handleEdit = (index: number, row: User) => {
    // 将当前点击编辑的行索引和整行数据保存到响应式数据中，方便后续在handleEditData方法中使用
    currentEditIndex.value = index;
    currentEditRow.value = row;
    editDialog.value.open({});
  };

  const handleEditData = (rawData: any) => {
    if (currentEditIndex.value !== -1 && currentEditRow.value) {
      // 直接使用之前记录的编辑行索引，更新对应的message字段
      tableData.value[currentEditIndex.value].message =
        rawData.value.car_name +
        ", " +
        rawData.value.day_use +
        ", " +
        rawData.value.month_use;
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
