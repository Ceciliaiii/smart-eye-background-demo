<script setup lang="ts">
import { useRouter } from "vue-router";
import { nextTick, ref } from "vue";
// 引入弹窗子组件
import FinancialDialog from "@/components/FinancialDialog.vue";
const router = useRouter();
// 定义弹窗子组件ref属性
const changeDialog = ref();
// 更新数据
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

// 更改按钮方法
const onChange = () => {
  // 打开子组件弹窗
  changeDialog.value.open({});
};

// 接收子组件的数据方法
const updateDataFromChild = async (receivedData: any) => {
  console.log("接收到子组件传来的数据:", receivedData.value);
  // 更新数据  receivedData.value...
  // 去除空格处理
  parentData.value.net_profit = receivedData.value.net_profit.trim();
  parentData.value.operating_income =
    receivedData.value.operating_income.trim();
  parentData.value.processing_fees = receivedData.value.processing_fees.trim();
  parentData.value.invoicing_data = receivedData.value.invoicing_data.trim();
  parentData.value.production_expenses =
    receivedData.value.production_expenses.trim();
  parentData.value.total_amount = receivedData.value.total_amount.trim();
  parentData.value.line_data = receivedData.value.line_data.trim();
  parentData.value.office_expenses = receivedData.value.office_expenses.trim();
  // 使用nextTick确保DOM更新完成后再进行后续操作（比如打印查看等）
  await nextTick();
};
</script>

<template>
  <div class="container">
    <div class="header">财务数据统计</div>
    <div class="body">
      <div class="body-content">
        <div
          style="
            display: flex;
            flex-direction: column;
            width: 25%;
            padding: 110px 0;
          "
        >
          <span>净利润</span>
          <p>{{ parentData.net_profit }}</p>
        </div>
        <div
          style="
            display: flex;
            flex-direction: column;
            width: 25%;
            padding: 110px 0;
          "
        >
          <span>营业收入</span>
          <p>{{ parentData.operating_income }}</p>
        </div>
        <div
          style="
            display: flex;
            flex-direction: column;
            width: 25%;
            padding: 110px 0;
          "
        >
          <span>加工费收入</span>
          <p>{{ parentData.processing_fees }}</p>
        </div>
        <div
          style="
            display: flex;
            flex-direction: column;
            width: 25%;
            padding: 110px 0;
          "
        >
          <span>进销存数据</span>
          <p>{{ parentData.invoicing_data }}</p>
        </div>
        <div
          style="
            display: flex;
            flex-direction: column;
            width: 25%;
            padding: 110px 0;
          "
        >
          <span>生产开支</span>
          <p>{{ parentData.production_expenses }}</p>
        </div>
        <div
          style="
            display: flex;
            flex-direction: column;
            width: 25%;
            padding: 110px 0;
          "
        >
          <span>贷款总额</span>
          <p>{{ parentData.total_amount }}</p>
        </div>
        <div
          style="
            display: flex;
            flex-direction: column;
            width: 25%;
            padding: 110px 0;
          "
        >
          <span>生产线数据</span>
          <p>{{ parentData.line_data }}</p>
        </div>
        <div
          style="
            display: flex;
            flex-direction: column;
            width: 25%;
            padding: 110px 0;
          "
        >
          <span>办公开支</span>
          <p>{{ parentData.office_expenses }}</p>
        </div>
      </div>
      <el-button
        style="
          width: 150px;
          height: 45px;
          margin-right: 0;
          margin-bottom: 120px;
        "
        type="primary"
        @click="onChange"
        >更改</el-button
      >
    </div>
    <!-- 弹窗 -->
    <FinancialDialog ref="changeDialog" @update-data="updateDataFromChild" />
  </div>
</template>

<style lang="scss" scrop>
.header {
  // background-color: pink;
  // width: 100%;
  height: 80px;
  margin-left: 5px;
  line-height: 80px;
  border-bottom: 2px solid black;
}

.body {
  display: flex;
  // align-items: center;
  flex-direction: column; // 改为纵向排列
  align-items: flex-end; // 让子元素在交叉轴（横向）上靠右对齐
  justify-content: center;
  // background-color: red;
  width: 100%;
  height: 100vh;

  .body-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    // background-color: skyblue;
    width: 90%;
    height: 700px;
    // align-items: center;
    margin: auto;
  }

  span {
    margin: auto;
    font-size: 16px;
  }

  p {
    margin: auto;
    font-size: 26px;
  }
}
</style>
