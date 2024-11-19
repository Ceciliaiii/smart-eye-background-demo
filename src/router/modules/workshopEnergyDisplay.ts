export default {
  path: "/workshopEnergyDisplay",
  redirect: "/workshopEnergyDisplay/RelatedFinancial",
  meta: {
    icon: "ri:battery-charge-line",
    // showLink: false,
    title: "车间能耗展示",
    rank: 9
  },
  children: [
    {
      path: "/workshopEnergyDisplay/RelatedFinancial",
      name: "车间能耗",
      component: () =>
        import("@/views/WorkshopEnergyDisplay/EnergyConsumption.vue"),
      meta: {
        title: "车间能耗"
      }
    },
    {
      path: "/workshopEnergyDisplay/RelatedPolicy",
      name: "存储系统配置",
      component: () =>
        import("@/views/WorkshopEnergyDisplay/StorageSystem.vue"),
      meta: {
        title: "存储系统配置"
      }
    }
  ]
} satisfies RouteConfigsTable;
