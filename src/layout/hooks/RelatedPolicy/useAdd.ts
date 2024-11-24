import type { User } from "types/RelatedPolicy/usertype";
import { ref, type Ref } from "vue";

// 添加逻辑  定义子组件ref属性和表单数据
export const useAddLogic = (addDialog: Ref<any>, tableData: Ref<User[]>) => {
  // 点击添加按钮 打开弹窗
  const handleAdd = () => {
    addDialog.value.open({});
  };

  // 接收子组件传回的数据  添加到tableData
  const handleAddData = (newMsg: string) => {
    // 检查是否接收到newMsg
    console.log("接收到子组件的newMsg: ", newMsg);

    const newData = ref<User>({
      // 生成唯一且顺序递增的id
      id: (tableData.value.length + 1).toString(),
      message: newMsg
    });
    // 检查newData
    console.log("newData的值为: ", newData.value);
    // 添加新数据newData
    tableData.value.push(newData.value);
    // 检查新的tableData
    console.log("新的tableData为: ", tableData.value);
  };

  return {
    handleAdd,
    handleAddData
  };
};
