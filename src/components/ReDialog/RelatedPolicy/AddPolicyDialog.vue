<template>
  <el-dialog
    v-model="centerDialogVisible"
    title="添加相关政策"
    width="500"
    align-center
    draggable
    class="addDialog-policy-dialog"
  >
    <div class="addDialog-input-wrapper">
      <span class="addDialog-input-label">相关政策信息：</span>
      <el-input
        v-model="textarea"
        class="addDialog-textarea-input"
        :autosize="{ minRows: 2, maxRows: 4 }"
        type="textarea"
        placeholder="Please input"
      />
    </div>
    <template #footer>
      <div class="addDialog-dialog-footer">
        <el-button class="addDialog-cancel-button" @click="onCancel"
          >取消</el-button
        >
        <el-button
          class="addDialog-confirm-button"
          type="primary"
          @click="onSure"
        >
          确认添加
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ElLoading, ElMessage } from "element-plus";
import { ref, defineEmits } from "vue";
// 组件通信
const emits = defineEmits(["add-data"]);
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
const onSure = async () => {
  if (!textarea.value.trim()) {
    ElMessage.error("输入框为空，请输入正确信息");
  } else {
    // 开启加载效果
    const loading = ElLoading.service({
      lock: true,
      text: "Loading",
      background: "rgba(0, 0, 0, 0.7)"
    });
    try {
      await new Promise<void>(resolve => {
        setTimeout(() => {
          newMsg.value = textarea.value;
          console.log("textarea赋值给newMsg后newMsg的值:", newMsg.value);
          // 关闭加载效果
          loading.close();
          resolve();
        }, 1000); // 此处通过setTimeout模拟异步操作耗时
      });
      // 清空输入框
      textarea.value = "";
      // 关闭弹窗
      centerDialogVisible.value = false;
      ElMessage({
        type: "success",
        message: "政策信息添加成功"
      });
      emits("add-data", newMsg.value);
    } catch (error) {
      // 捕获异步过程中出现的错误并提示错误信息
      ElMessage.error("添加操作出现错误：" + error.message);
    }
  }
};
defineExpose({ open });
</script>

<style lang="scss" scrop>
.addDialog-policy-dialog {
  border-radius: 10px;
}

.addDialog-input-wrapper {
  display: flex;
  align-items: flex-start;
}

.addDialog-input-label {
  margin-right: 10px;
}

.addDialog-textarea-input {
  width: 240px;
}

.addDialog-dialog-footer {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}
</style>
