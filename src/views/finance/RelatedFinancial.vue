<script setup lang="ts">
// 引入hook按钮逻辑整合文件
import { useFinancialData } from "@/layout/hooks/RelatedFinancial/useFinancialData";
// 引入弹窗子组件
import FinancialDialog from "@/components/FinancialDialog.vue";

// 解构出整合文件的逻辑方法和数据
const { router, changeDialog, parentData, onChange, updateDataFromChild } =
  useFinancialData();
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
          <p>
            {{ parentData.net_profit }}
          </p>
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
