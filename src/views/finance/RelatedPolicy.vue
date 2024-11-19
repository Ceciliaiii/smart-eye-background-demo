<script setup lang="ts">
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import { ElLoading, ElMessage, ElMessageBox } from "element-plus";
// 引入子组件弹窗
import RenewDialog from "@/components/RenewDialog.vue";
import EditDialog from "@/components/EditDialog.vue";

const input = ref("");
// 搜索数据
const search = ref("");
// 子组件ref属性
const addDialog = ref();
const editDialog = ref();
// 新增响应式数据，用于记录当前编辑行的索引
const currentEditIndex = ref(-1);
// 新增响应式数据，用于记录当前编辑行的数据
const currentEditRow = ref<User | null>(null);

// 接收子组件新增的addForm数据
const textareaContent = ref("");

// 数据类型
interface User {
  id: string;
  message: string;
}

// 表格数据
const tableData = ref<User[]>([
  {
    id: "01",
    message: "黄金之风"
  },
  {
    id: "02",
    message: "不灭钻石"
  },
  {
    id: "03",
    message: "石之海"
  },
  {
    id: "04",
    message: "十字远征军"
  }
]);

// 新增一个响应式数据，用于存储过滤后的表格数据
const filterTableData = ref<User[]>(tableData.value);

// -------------------------------------------------------------------------------------

// 查找逻辑
const onSearch = () => {
  // 加载效果
  const loading = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)"
  });
  if (!input.value.trim()) {
    // 如果搜索关键词为空，显示全部数据
    filterTableData.value = tableData.value;
    ElMessage.error("输入框为空，请输入正确信息");
  } else {
    // 使用数组的filter方法根据关键词筛选数据
    filterTableData.value = tableData.value.filter(item => {
      return item.message.toLowerCase().includes(input.value.toLowerCase());
    });
    ElMessage({
      type: "success",
      message: "搜索成功"
    });
  }
  loading.close();
};

// -------------------------------------------------------------------------------------

// 重置逻辑
const onReset = () => {
  // 加载效果
  const loading = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)"
  });
  // 清空搜索框，重新渲染
  input.value = "";
  filterTableData.value = tableData.value;
  loading.close();
  ElMessage({
    type: "success",
    message: "重置成功"
  });
};

// -----------------------------------------------------------------------------------------

// 编辑逻辑
const handleEdit = (index: number, row: User) => {
  // 将当前点击编辑的行索引和整行数据保存到响应式数据中，方便后续在handleEditData方法中使用
  currentEditIndex.value = index;
  currentEditRow.value = row;
  editDialog.value.open({});
};
// ----------------------------------------------------------------------------------------

// 删除逻辑
const handleDelete = (index: number, row: User) => {
  ElMessageBox.confirm("确定要删除该数据吗？", "警告", {
    confirmButtonText: "删除",
    cancelButtonText: "取消",
    type: "warning"
  })
    .then(() => {
      tableData.value.splice(index, 1);
      ElMessage({
        type: "success",
        message: "删除成功"
      });
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "删除取消"
      });
    });
};

// ------------------------------------------------------------------------------------

// 添加逻辑
const handleAdd = () => {
  addDialog.value.open({});
};

// ------------------------------------------------------------------------------------------

// 添加子组件的组件通信
const handleAddData = (newMsg: string) => {
  // 检查是否接收到newMsg
  console.log("接收到子组件的newMsg: ", newMsg);

  const newData = ref<User>({
    id: "随机",
    message: newMsg
  });
  // 检查newData
  console.log("newData的值为: ", newData.value);
  // 添加新数据newData
  tableData.value.push(newData.value);
  // 检查新的tableData
  console.log("新的tableData为: ", tableData.value);
};

// -----------------------------------------------------------------------------------------

// 编辑子组件的通信方法
const handleEditData = (rawData: any) => {
  if (currentEditIndex.value !== -1 && currentEditRow.value) {
    // 直接使用之前记录的编辑行索引，更新对应的message字段
    tableData.value[currentEditIndex.value].message =
      rawData.value.car_name +
      " , " +
      rawData.value.day_use +
      " , " +
      rawData.value.month_use;
    // 提示信息
    ElMessage({
      type: "success",
      message: "相关政策信息更新成功"
    });
  } else {
    ElMessage({
      type: "error",
      message: "编辑行信息丢失或不完整，更新失败"
    });
  }
};
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
