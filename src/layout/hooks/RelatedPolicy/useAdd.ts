import type { Ref } from "vue";

// 添加逻辑  定义子组件ref属性和表单数据
export const useAddLogic = (addDialog: Ref<any>) => {
  // 点击添加按钮 打开弹窗
  const handleAdd = () => {
    addDialog.value.open({});
  };

  // 接收子组件传回的数据  添加到tableData

  // 具体添加方法在添加弹窗
  const handleAddData = () => {};
  return {
    handleAdd,
    handleAddData
  };
};
