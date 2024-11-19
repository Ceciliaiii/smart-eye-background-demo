export default {
  path: "/finance",
  redirect: "/finance/403",
  meta: {
    icon: "ri:money-cny-box-line",
    // showLink: false,
    title: "财务ERP",
    rank: 9
  },
  children: [
    {
      path: "/finance/RelatedFinancial",
      name: "相关财务信息",
      component: () => import("@/views/finance/RelatedFinancial.vue"),
      meta: {
        title: "相关财务信息"
      }
    },
    {
      path: "/finance/RelatedPolicy",
      name: "相关政策信息",
      component: () => import("@/views/finance/RelatedPolicy.vue"),
      meta: {
        title: "相关政策信息"
      }
    }
  ]
} satisfies RouteConfigsTable;
