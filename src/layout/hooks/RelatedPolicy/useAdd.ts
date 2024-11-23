// import { usePolicyStore } from "@/store/RelatedPolicy/policyStore";
import { usePolicyStore } from "@/store/RelatedPolicy/policyStore";
import type { User } from "types/RelatedPolicy/usertype";
import type { Ref } from "vue";

// 添加逻辑  定义子组件ref属性和表单数据
export const useAddLogic = (addDialog: Ref<any>, tableData: Ref<User[]>) => {
  // 点击添加按钮 打开弹窗
  const handleAdd = () => {
    addDialog.value.open({});
  };

  // 接收子组件传回的数据  添加到tableData
  const handleAddData = () => {
    // 获取PolicyStore实例
    const policyStore = usePolicyStore();
    // 先调用加载方法从本地存储中获取数据，确保数据是最新的
    policyStore.loadFromLocalStorage();
    // 假设你想取policies数组中的第一个政策数据赋值给newData的message
    const policyMessage = policyStore.policies[policyStore.policies.length - 1];
    if (policyMessage) {
      const newData: User = {
        id: (tableData.value.length + 1).toString(),
        message: policyMessage
      };
      tableData.value.push(newData);
    } else {
      console.warn(
        "PolicyStore中的policies数组为空，无法赋值给newData的message"
      );
    }
  };
  return {
    handleAdd,
    handleAddData
  };
};
