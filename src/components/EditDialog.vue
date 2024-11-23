<template>
  <el-dialog
    v-model="centerDialogVisible"
    title="修改相关政策"
    width="500"
    align-center
    draggable
    style="border-radius: 10px"
  >
    <div style="display: flex; align-items: flex-start">
      <span style="margin-right: 10px">相关政策信息：</span>
      <el-input
        v-model="textarea"
        style="width: 240px"
        :autosize="{ minRows: 2, maxRows: 4 }"
        type="textarea"
        placeholder="Please input"
      />
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="onCancel">取消</el-button>
        <el-button type="primary" @click="onSure"> 确认修改 </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ElLoading, ElMessage } from "element-plus";
import { ref, defineEmits } from "vue";

// 组件通信
const emits = defineEmits(["edit-data"]);
const textarea = ref("");
// 弹框双向绑定属性
const centerDialogVisible = ref(false);

const open = (row: any) => {
  centerDialogVisible.value = true;
};

// 准备传输给父组件的数据
const newMsg = ref();

// 取消按钮
const onCancel = () => {
  textarea.value = "";
  centerDialogVisible.value = false;
};
// 添加按钮
const onSure = () => {
  if (!textarea.value.trim()) {
    ElMessage.error("输入框为空，请输入正确信息");
  } else {
    newMsg.value = textarea.value;
    console.log("textarea赋值给newMsg后newMsg的值:", newMsg.value);
    // 清空输入框
    textarea.value = "";
    // 关闭弹窗
    centerDialogVisible.value = false;
    emits("edit-data", newMsg.value);
  }
};

defineExpose({ open });
</script>

<style lang="scss" scrop></style>
