import type { User } from "types/RelatedPolicy/usertype";
import { ref } from "vue";
// 引入hook封装好的按钮方法
import { useSearchLogic } from "./useSearch";
import { useResetLogic } from "./useReset";
import { useEditLogic } from "./useEdit";
import { useDeleteLogic } from "./useDelete";
import { useAddLogic } from "./useAdd";

// 整合按钮方法
export const usePolicyTable = () => {
  // 初始化v-model属性
  const input = ref("");
  const search = ref("");
  // 子组件ref属性
  const addDialog = ref();
  const editDialog = ref();
  const currentEditIndex = ref(-1);
  const currentEditRow = ref<User | null>(null);
  const textareaContent = ref("");
  // 初始表单数据
  const tableData = ref<User[]>([]);

  // 查找过滤后的表单数据
  const filterTableData = ref<User[]>(tableData.value);

  // 将封装的方法 里的按钮方法解构出来 并传参
  const { onSearch } = useSearchLogic(input, tableData, filterTableData);
  const { onReset } = useResetLogic(input, tableData, filterTableData);
  const { handleEdit, handleEditData } = useEditLogic(
    editDialog,
    currentEditIndex,
    currentEditRow,
    tableData
  );
  const { handleDelete } = useDeleteLogic(tableData);
  const { handleAdd, handleAddData } = useAddLogic(addDialog, tableData);

  return {
    input,
    search,
    addDialog,
    editDialog,
    currentEditIndex,
    currentEditRow,
    textareaContent,
    tableData,
    filterTableData,
    onSearch,
    onReset,
    handleEdit,
    handleEditData,
    handleDelete,
    handleAdd,
    handleAddData
  };
};
