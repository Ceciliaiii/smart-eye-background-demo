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
  <div class="financial-container">
    <div class="financial-header">
      <span>财务数据统计</span>
    </div>
    <div class="financial-body">
      <div class="financial-body-content">
        <div
          style="
            display: flex;
            flex-direction: column;
            width: 25%;
            padding: 10vh 0;
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
            padding: 10vh 0;
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
            padding: 10vh 0;
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
            padding: 10vh 0;
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
            padding: 10vh 0;
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
            padding: 10vh 0;
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
            padding: 10vh 0;
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
            padding: 10vh 0;
          "
        >
          <span>办公开支</span>
          <p>{{ parentData.office_expenses }}</p>
        </div>
      </div>
      <el-button
        style="width: 15vw; height: 5vh; margin-right: 1vw; margin-bottom: 1vh"
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
.financial-header {
  // background-color: pink;
  width: 95%;
  height: 10vh;
  margin-left: 1vw;
  line-height: 10vh;
  border-bottom: 2px solid black;

  span {
    margin-left: 1vw;
    font-size: 18px;
  }
}

.financial-body {
  display: flex;
  // align-items: center;
  flex-direction: column; // 改为纵向排列
  align-items: flex-end; // 让子元素在交叉轴（横向）上靠右对齐
  justify-content: center;
  // background-color: red;
  width: 95%;
  height: 70vh;

  .financial-body-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    // background-color: skyblue;
    width: 90%;
    height: 60vh;
    // align-items: center;
    margin: auto;
    // line-height: 500px;
  }

  span {
    margin: auto;
    font-size: 1vw;
  }

  p {
    margin: auto;
    font-size: 1.6vw;
  }
}
</style>
