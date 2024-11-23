import { ElLoading, ElMessage } from "element-plus";
import { nextTick, type Ref } from "vue";

export const useChangeDialogLogic = (changeDialog: any) => {
  const onChange = () => {
    if (changeDialog.value) {
      // 打开子组件弹窗
      changeDialog.value.open({});
    }
  };
  return {
    onChange
  };
};

export const useUpdateDataLogic = (
  // 接收到子组件传来的数据
  parentData: Ref<{
    net_profit: string;
    operating_income: string;
    processing_fees: string;
    invoicing_data: string;
    production_expenses: string;
    total_amount: string;
    line_data: string;
    office_expenses: string;
  }>
) => {
  // const updateDataFromChild = async (receivedData: any) => {
  //   console.log("接收到子组件传来的数据:", receivedData.value);
  //   // 更新数据  receivedData.value...
  //   // 去除空格处理
  //   parentData.value.net_profit = receivedData.value.net_profit.trim();
  //   parentData.value.operating_income =
  //     receivedData.value.operating_income.trim();
  //   parentData.value.processing_fees =
  //     receivedData.value.processing_fees.trim();
  //   parentData.value.invoicing_data = receivedData.value.invoicing_data.trim();
  //   parentData.value.production_expenses =
  //     receivedData.value.production_expenses.trim();
  //   parentData.value.total_amount = receivedData.value.total_amount.trim();
  //   parentData.value.line_data = receivedData.value.line_data.trim();
  //   parentData.value.office_expenses =
  //     receivedData.value.office_expenses.trim();
  //   // 使用nextTick确保DOM更新完成后再进行后续操作（比如打印查看等）
  //   await nextTick();
  // };
  const updateDataFromChild = async (receivedData: any) => {
    console.log("接收到子组件传来的数据:", receivedData.value);
    // 开启加载效果
    const loading = ElLoading.service({
      lock: true,
      text: "Loading",
      background: "rgba(0, 0, 0, 0.7)"
    });
    try {
      await new Promise<void>(resolve => {
        setTimeout(() => {
          // 使用解构赋值和展开运算符来更新parentData.value，确保响应式更新
          parentData.value.net_profit = receivedData.value.net_profit.trim();
          parentData.value.operating_income =
            receivedData.value.operating_income.trim();
          parentData.value.processing_fees =
            receivedData.value.processing_fees.trim();
          parentData.value.invoicing_data =
            receivedData.value.invoicing_data.trim();
          parentData.value.production_expenses =
            receivedData.value.production_expenses.trim();
          parentData.value.total_amount =
            receivedData.value.total_amount.trim();
          parentData.value.line_data = receivedData.value.line_data.trim();
          parentData.value.office_expenses =
            receivedData.value.office_expenses.trim();
          // 使用nextTick确保DOM更新完成后再进行后续操作（比如打印查看等）
          nextTick().then(() => {
            // 关闭加载效果
            loading.close();
            resolve();
          });
        }, 1000); // 此处通过setTimeout模拟异步操作耗时
      });

      ElMessage({
        type: "success",
        message: "财务信息更新成功"
      });
    } catch (error) {
      ElMessage.error("数据更新出现错误：" + error.message);
    }
  };
  return {
    updateDataFromChild
  };
};
