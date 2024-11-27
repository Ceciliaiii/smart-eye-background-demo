<template>
  <el-dialog
    v-model="centerDialogVisible"
    title="修改相关政策"
    width="500"
    align-center
    draggable
    class="editdialog-policy-dialog"
  >
    <div class="editdialog-input-container">
      <span class="editdialog-input-label">相关政策信息：</span>
      <el-input
        v-model="textarea"
        class="editdialog-textarea-input"
        :autosize="{ minRows: 2, maxRows: 4 }"
        type="textarea"
        placeholder="Please input"
      />
    </div>
    <template #footer>
      <div class="editdialog-footer">
        <el-button class="editdialog-cancel-button" @click="onCancel"
          >取消</el-button
        >
        <el-button
          class="editdialog-confirm-button"
          type="primary"
          @click="onSure"
        >
          确认修改
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ElMessage } from "element-plus";
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

<style lang="scss" scrop>
.editdialog-policy-dialog {
  border-radius: 10px;
}

.editdialog-input-container {
  display: flex;
  align-items: flex-start;
}

.editdialog-input-label {
  margin-right: 10px;
}

.editdialog-textarea-input {
  width: 240px;
}

.editdialog-footer {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}
</style>
