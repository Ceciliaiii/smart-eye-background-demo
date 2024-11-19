<script setup lang="ts">
import { ElLoading, ElMessage } from "element-plus";
import { ref, toRaw, defineEmits } from "vue";
// 组件通信
const emits = defineEmits(["update-data"]);
// 弹窗双向绑定属性 弹窗是否可以看见
const dialogFormVisible = ref(false);
const formLabelWidth = "140px";

// 定义更改表单数据
const changeForm = ref({
  net_profit: "",
  operating_income: "",
  processing_fees: "",
  invoicing_data: "",
  production_expenses: "",
  total_amount: "",
  line_data: "",
  office_expenses: ""
});

const open = (row: any) => {
  dialogFormVisible.value = true;
};
// 按钮逻辑
const onCancel = () => {
  // 重置数据
  resetFormData();
  dialogFormVisible.value = false;
};
const onSure = () => {
  // 此处做空值判断  问题：第一个是空格也通过
  if (
    !changeForm.value.net_profit.trim() ||
    !changeForm.value.operating_income.trim() ||
    !changeForm.value.processing_fees.trim() ||
    !changeForm.value.invoicing_data.trim() ||
    !changeForm.value.production_expenses.trim() ||
    !changeForm.value.total_amount.trim() ||
    !changeForm.value.line_data.trim() ||
    !changeForm.value.office_expenses.trim()
  ) {
    ElMessage.error("有输入框为空，请输入正确信息");
  } else {
    // 加载效果
    const loading = ElLoading.service({
      lock: true,
      text: "Loading",
      background: "rgba(0, 0, 0, 0.7)"
    });
    getInputDataWithoutReactive();
    loading.close();
    ElMessage({
      type: "success",
      message: "更改政策成功"
    });
    // 重置数据
    resetFormData();
    dialogFormVisible.value = false;
  }
};

// 传数据的方法
const getInputDataWithoutReactive = () => {
  const rawData = toRaw(changeForm);
  console.log("即将传给父组件的数据: ", rawData.value);
  emits("update-data", rawData);
};
// 重置弹窗数据的方法
const resetFormData = () => {
  changeForm.value.net_profit = "";
  changeForm.value.operating_income = "";
  changeForm.value.processing_fees = "";
  changeForm.value.invoicing_data = "";
  changeForm.value.production_expenses = "";
  changeForm.value.total_amount = "";
  changeForm.value.line_data = "";
  changeForm.value.office_expenses = "";
};

defineExpose({ open });
</script>

<template>
  <el-dialog
    v-model="dialogFormVisible"
    title="修改车间能耗数据"
    width="500"
    center
    draggable
    style="border-radius: 10px"
  >
    <el-form :model="changeForm" style="margin-left: -60px">
      <el-form-item label="净利润: " :label-width="formLabelWidth">
        <el-input v-model="changeForm.net_profit" autocomplete="off" />
      </el-form-item>
      <el-form-item label="营业收入: " :label-width="formLabelWidth">
        <el-input v-model="changeForm.operating_income" autocomplete="off" />
      </el-form-item>
      <el-form-item label="加工费收入: " :label-width="formLabelWidth">
        <el-input v-model="changeForm.processing_fees" autocomplete="off" />
      </el-form-item>
      <el-form-item label="进销存数据: " :label-width="formLabelWidth">
        <el-input v-model="changeForm.invoicing_data" autocomplete="off" />
      </el-form-item>
      <el-form-item label="生产开支: " :label-width="formLabelWidth">
        <el-input v-model="changeForm.production_expenses" autocomplete="off" />
      </el-form-item>
      <el-form-item label="贷款总额: " :label-width="formLabelWidth">
        <el-input v-model="changeForm.total_amount" autocomplete="off" />
      </el-form-item>
      <el-form-item label="生产线数据: " :label-width="formLabelWidth">
        <el-input v-model="changeForm.line_data" autocomplete="off" />
      </el-form-item>
      <el-form-item label="办公开支: " :label-width="formLabelWidth">
        <el-input v-model="changeForm.office_expenses" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="onCancel">取消</el-button>
        <el-button type="primary" @click="onSure"> 确认 </el-button>
      </div>
    </template>
  </el-dialog>
</template>
