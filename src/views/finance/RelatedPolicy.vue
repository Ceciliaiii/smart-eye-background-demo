<script setup lang="ts">
// 引入hook逻辑整合文件
import { usePolicyTable } from "@/layout/hooks/RelatedPolicy/usePolicyTable";
import { Search } from "@element-plus/icons-vue";
// 引入弹窗子组件
import RenewDialog from "@/components/AddPolicyDialog.vue";
import EditDialog from "@/components/EditDialog.vue";

// 引入hook按钮逻辑整合文件
const {
  input,
  addDialog,
  editDialog,
  filterTableData,
  onSearch,
  onReset,
  handleEdit,
  handleEditData,
  handleDelete,
  handleAdd,
  handleAddData
} = usePolicyTable();
</script>

<template>
  <div class="policy-container">
    <div class="policy-header">
      <div class="policy-header-search">
        <span>相关政策信息</span>
        <el-input
          v-model="input"
          :icon="Search"
          style="
            width: 150px;
            margin-left: 10px;
            font-size: 10px;
            border: 1px solid gray;
            border-radius: 5px;
          "
          placeholder="Please input"
          clearable
        />
        <el-button type="primary" style="margin-left: 10px" @click="onSearch"
          >搜索</el-button
        >
        <el-button @click="onReset">重置</el-button>
      </div>
      <div class="policy-header-button">
        <el-button type="primary" @click="handleAdd">新增数据</el-button>
      </div>
    </div>
    <div class="policy-body">
      <el-table
        :data="filterTableData"
        border
        style="width: 100%; border: 1px solid black"
      >
        <el-table-column label="序号" prop="id" />
        <el-table-column label="相关政策信息" prop="message" width="800px" />
        <el-table-column align="center" label="操作">
          <template #default="scope">
            <el-button
              link
              size="small"
              @click="handleEdit(scope.$index, scope.row)"
            >
              编辑
            </el-button>
            <el-button
              link
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 弹窗 -->
    <RenewDialog ref="addDialog" @add-data="handleAddData" />
    <EditDialog ref="editDialog" @edit-data="handleEditData" />
  </div>
</template>

<style lang="scss" scrop>
.policy-container {
  width: 93%;
  // margin-left: 200px;
}

.policy-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  // background-color: pink;
  width: 100%;
  height: 70px;
  line-height: 80px;
}

.policy-body {
  // background-color: red;
  width: 100%;
  height: 75vh;
}
</style>
