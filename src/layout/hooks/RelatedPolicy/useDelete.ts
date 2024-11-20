import { ElMessage, ElMessageBox } from "element-plus";
import type { User } from "types/RelatedPolicy/usertype";
import type { Ref } from "vue";

// 删除逻辑   定义tableData表单数据
export const useDeleteLogic = (tableData: Ref<User[]>) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleDelete = (index: number, row: User) => {
    ElMessageBox.confirm("确定要删除该数据吗？", "警告", {
      confirmButtonText: "删除",
      cancelButtonText: "取消",
      type: "warning"
    })
      .then(() => {
        tableData.value.splice(index, 1);
        ElMessage({
          type: "success",
          message: "删除成功"
        });
      })
      .catch(() => {
        ElMessage({
          type: "info",
          message: "删除取消"
        });
      });
  };
  return {
    handleDelete
  };
};
