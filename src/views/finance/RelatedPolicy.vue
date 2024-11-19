<script setup lang="ts">
// 引入hook逻辑整合文件
import { usePolicyTable } from "@/layout/hooks/RelatedPolicy/usePolicyTable";
import { Search } from "@element-plus/icons-vue";
// 引入弹窗子组件
import RenewDialog from "@/components/RenewDialog.vue";
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
  <div class="container">
    <div class="header">
      <div class="header-search">
        <span>相关政策信息</span>
        <el-input
          v-model="input"
          :icon="Search"
          style="width: 100px; margin-left: 10px; font-size: 10px"
          placeholder="Please input"
          clearable
        />
        <el-button type="primary" style="margin-left: 10px" @click="onSearch"
          >搜索</el-button
        >
        <el-button @click="onReset">重置</el-button>
      </div>
      <div class="header-button">
        <el-button type="primary" @click="handleAdd">新增数据</el-button>
      </div>
    </div>
    <div class="body">
      <el-table
        :data="filterTableData"
        border
        style="width: 100%; border: 1px solid grey"
      >
        <el-table-column label="序号" prop="id" />
        <el-table-column label="相关政策信息" prop="message" />
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
.container {
  background-color: rgb(240 236 236);
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  // background-color: pink;
  width: 100%;
  height: 70px;
  line-height: 80px;
}

.body {
  // background-color: red;
  width: 100%;
  height: 100vh;
}
</style>
