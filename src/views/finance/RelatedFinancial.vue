<script setup lang="ts">
// 引入hook按钮逻辑整合文件
import { useFinancialData } from "@/composable/RelatedFinancial/useFinancialData";
// 引入弹窗子组件
import FinancialDialog from "@/components/ReDialog/RelatedFinancial/FinancialDialog.vue";

// 解构出整合文件的逻辑方法和数据
const { router, changeDialog, parentData, onChange, updateDataFromChild } =
  useFinancialData();
</script>

<template>
  <div class="financial-container">
    <div class="financial-header">
      <span class="financial-header-span">财务数据统计</span>
    </div>
    <div class="financial-body">
      <div class="financial-body-content">
        <div class="financial-item">
          <span class="financial-item-span">净利润</span>
          <p class="financial-item-p">{{ parentData.net_profit }}</p>
        </div>
        <div class="financial-item">
          <span class="financial-item-span">营业收入</span>
          <p class="financial-item-p">{{ parentData.operating_income }}</p>
        </div>
        <div class="financial-item">
          <span class="financial-item-span">加工费收入</span>
          <p class="financial-item-p">{{ parentData.processing_fees }}</p>
        </div>
        <div class="financial-item">
          <span class="financial-item-span">进销存数据</span>
          <p class="financial-item-p">{{ parentData.invoicing_data }}</p>
        </div>
        <div class="financial-item">
          <span class="financial-item-span">生产开支</span>
          <p class="financial-item-p">{{ parentData.production_expenses }}</p>
        </div>
        <div class="financial-item">
          <span class="financial-item-span">贷款总额</span>
          <p class="financial-item-p">{{ parentData.total_amount }}</p>
        </div>
        <div class="financial-item">
          <span class="financial-item-span">生产线数据</span>
          <p class="financial-item-p">{{ parentData.line_data }}</p>
        </div>
        <div class="financial-item">
          <span class="financial-item-span">办公开支</span>
          <p class="financial-item-p">{{ parentData.office_expenses }}</p>
        </div>
      </div>
      <el-button
        class="financial-change-button"
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
  width: 95%;
  height: 10vh;
  margin-left: 1vw;
  line-height: 10vh;
  border-bottom: 2px solid black;
}

.financial-header-span {
  margin-left: 1vw;
  font-size: 18px;
}

.financial-body {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 95%;
  height: 70vh;
}

.financial-body-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
  height: 60vh;
  margin: auto;
}

.financial-item {
  display: flex;
  flex-direction: column;
  width: 25%;
  padding: 10vh 0;
}

.financial-item-span {
  margin: auto;
  font-size: 1vw;
}

.financial-item-p {
  margin: auto;
  font-size: 1.6vw;
}

.financial-change-button {
  width: 15vw;
  height: 5vh;
  margin-right: 1vw;
  margin-bottom: 1vh;
}
</style>
