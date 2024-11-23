import { defineStore } from "pinia";

// 定义仓库状态类型
interface PolicyStoreState {
  policies: string[]; // 假设这里存储政策信息的数组，可根据实际修改
}

// 定义仓库action类型，明确addPolicy方法的类型签名
interface PolicyStoreActions {
  addPolicy: (newPolicy: string) => void;
}

// 使用defineStore准确定义包含状态和action类型的仓库，并返回类型正确的实例
export const usePolicyStore = defineStore<
  "policy",
  PolicyStoreState,
  {},
  PolicyStoreActions
>("policy", {
  state: () => ({
    policies: []
  }),
  actions: {
    addPolicy(newPolicy: string) {
      // 这里是具体添加政策数据到状态的逻辑，比如将新政策数据推送到policies数组中
      this.policies.push(newPolicy);
    }
  },
  // 配置持久化相关选项
  persist: {
    key: "policyStore", // 持久化存储的键名，可根据喜好修改，用于在本地存储等地方标识该仓库数据
    storage: localStorage // 指定存储方式，这里使用localStorage，也可以是sessionStorage等
  }
});
