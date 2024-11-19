export default {
  path: "/abnormalManagementMonitoring",
  redirect: "/abnormalManagementMonitoring/index",
  meta: {
    icon: "ri:alarm-warning-line",
    title: "异常报警监控",
    rank: 10
  },
  children: [
    {
      path: "/abnormalManagementMonitoring/index",
      name: "AbnormalManagementMonitoring",
      component: () =>
        import(
          "@/views/AbnormalManagementMonitoring/AbnormalManagementMonitoring.vue"
        ),
      meta: {
        title: "异常报警监控"
      }
    }
  ]
} satisfies RouteConfigsTable;
