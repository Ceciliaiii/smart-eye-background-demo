<script setup lang="ts">
import { ElLoading, ElMessage } from "element-plus";
import { reactive, ref, defineEmits, toRaw } from "vue";
// 组件通信
const emits = defineEmits(["edit-data"]);
// 弹窗双向绑定属性 弹窗是否可以看见
const dialogFormVisible = ref(false);
const formLabelWidth = "140px";

// 定义编辑表单数据
const editForm = ref({
  car_name: "",
  day_use: "",
  month_use: ""
});

const open = (row: any) => {
  dialogFormVisible.value = true;
};

// 取消逻辑
const onCancel = () => {
  // 重置数据
  resetFormData();
  dialogFormVisible.value = false;
};

// 确定编辑逻辑
const onSure = () => {
  if (
    !editForm.value.car_name.trim() ||
    !editForm.value.day_use.trim() ||
    !editForm.value.month_use.trim()
  ) {
    ElMessage.error("有输入框为空，请输入正确信息");
  } else {
    // 加载效果
    const loading = ElLoading.service({
      lock: true,
      text: "Loading",
      background: "rgba(0, 0, 0, 0.7)"
    });
    const rawData = toRaw(editForm);
    console.log("传给父组件的数据: ", rawData.value);
    emits("edit-data", rawData);
    loading.close();
    // 重置数据
    resetFormData();
    dialogFormVisible.value = false;
  }
};

// 重置弹窗数据的方法
const resetFormData = () => {
  editForm.value.car_name = "";
  editForm.value.day_use = "";
  editForm.value.month_use = "";
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
    <el-form :model="editForm" style="margin-left: -60px">
      <el-form-item label="车间名称: " :label-width="formLabelWidth">
        <el-input v-model="editForm.car_name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="日用电量: " :label-width="formLabelWidth">
        <el-input v-model="editForm.day_use" autocomplete="off" />
      </el-form-item>
      <el-form-item label="月用电量: " :label-width="formLabelWidth">
        <el-input v-model="editForm.month_use" autocomplete="off" />
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
