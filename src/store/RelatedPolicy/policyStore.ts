import { defineStore } from "pinia";

export const usePolicyStore = defineStore("policy", {
  state: () => ({
    policies: [] as string[]
  }),
  actions: {
    addPolicy(policy: string) {
      this.policies.push(policy);
      this.saveToLocalStorage();
    },
    saveToLocalStorage() {
      try {
        localStorage.setItem("policy_store", JSON.stringify(this.policies));
      } catch (error) {
        console.error("保存数据到localStorage时出错:", error);
      }
    },
    loadFromLocalStorage() {
      const storedData = localStorage.getItem("policy_store");
      if (storedData) {
        try {
          this.policies = JSON.parse(storedData);
        } catch (error) {
          console.error("从localStorage解析数据时出错:", error);
        }
      }
    }
  }
});
