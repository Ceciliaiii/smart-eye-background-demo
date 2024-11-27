<script setup lang="ts">
// 引入hook逻辑整合文件
import { usePolicyTable } from "@/composable/RelatedPolicy/usePolicyTable";
import { Search } from "@element-plus/icons-vue";
// 引入弹窗子组件
import RenewDialog from "@/components/ReDialog/RelatedPolicy/AddPolicyDialog.vue";
import EditDialog from "@/components/ReDialog/RelatedPolicy/EditDialog.vue";
import { reactive } from "vue";

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

// // 分页信息
// const pageInfo = reactive({
//   pageSize: 15,
//   pageNo: 1,
//   totalData: 0
// });

// // 每页条数变化方法
// const pageSizeChange = pageSize => {
//   pageInfo.pageSize = pageSize;
// };

// // 页码方法
// const pageNoChange = pageNo => {};
</script>

<template>
  <div class="policy-container">
    <div class="policy-header">
      <div class="policy-header-search">
        <span>相关政策信息</span>
        <el-input
          v-model="input"
          :icon="Search"
          class="policy-input-style"
          placeholder="Please input"
          clearable
        />
        <el-button type="primary" class="policy-search-button" @click="onSearch"
          >搜索</el-button
        >
        <el-button class="policy-reset-button" @click="onReset">重置</el-button>
      </div>
      <div class="policy-header-button">
        <el-button type="primary" class="policy-add-button" @click="handleAdd"
          >新增数据</el-button
        >
      </div>
    </div>
    <div class="policy-body">
      <el-table :data="filterTableData" border class="policy-table-style">
        <el-table-column
          fixed
          align="center"
          label="序号"
          prop="id"
          width="100"
        />
        <el-table-column
          align="center"
          label="相关政策信息"
          prop="message"
          width="1100px"
        />
        <el-table-column align="center" label="操作">
          <template #default="scope">
            <div class="policy-action-button">
              <el-button
                size="small"
                type="primary"
                @click="handleEdit(scope.$index, scope.row)"
              >
                编辑
              </el-button>
              <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
              >
                删除
              </el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <!-- 弹窗 -->
    </div>
    <RenewDialog ref="addDialog" @add-data="handleAddData" />
    <EditDialog ref="editDialog" @edit-data="handleEditData" />
  </div>
  <!-- 分页器 -->
  <!-- <div class="demo-pagination-block">
    <div class="demonstration">All combined</div>
    <el-pagination
      v-model:current-page="pageInfo.pageNo"
      v-model:page-size="pageInfo.pageSize"
      :page-sizes="[10, 20, 30, 40]"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageInfo.totalData"
      @size-change="pageSizeChange"
      @current-change="pageNoChange"
    />
  </div> -->
</template>

<style lang="scss" scrop>
.policy-container {
  width: 93%;
}

.policy-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  line-height: 80px;
}

.policy-header-search {
  display: flex;
  align-items: center;
}

.policy-input-style {
  width: 150px;
  margin-left: 10px;
  font-size: 10px;
  border: 1px solid gray;
  border-radius: 5px;
}

.policy-search-button {
  margin-left: 10px;
}

.policy-body {
  width: 100%;
  height: 75vh;
}

.policy-table-style {
  width: 100%;
}

.policy-action-button {
  display: flex; // 设置为flex布局，确保按钮并排
  justify-content: center;

  button {
    margin-right: 5px; // 按钮之间的间距，可根据实际需求调整
  }

  button:last-child {
    margin-right: 0; // 最后一个按钮去掉右边距，避免多余空白
  }
}
</style>
