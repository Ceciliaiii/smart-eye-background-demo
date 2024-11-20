import { ref } from "vue";
import { useRouter } from "vue-router";
import { useChangeDialogLogic, useUpdateDataLogic } from "./useChange";

// 整合hook封装的方法
export const useFinancialData = () => {
  const router = useRouter();
  // 子组件ref属性
  const changeDialog = ref(null);
  // 接收弹窗数据
  const parentData = ref({
    net_profit: "",
    operating_income: "",
    processing_fees: "",
    invoicing_data: "",
    production_expenses: "",
    total_amount: "",
    line_data: "",
    office_expenses: ""
  });

  // 获取封装方法里的逻辑方法
  const { onChange } = useChangeDialogLogic(changeDialog);
  const { updateDataFromChild } = useUpdateDataLogic(parentData);

  return {
    router,
    changeDialog,
    parentData,
    onChange,
    updateDataFromChild
  };
};
