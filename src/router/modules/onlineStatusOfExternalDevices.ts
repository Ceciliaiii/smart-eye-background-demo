export default {
  path: "/OnlineStatusOfExternalDevices",
  redirect: "/OnlineStatusOfExternalDevices/index",
  meta: {
    icon: "ri:mac-line",
    title: "外源设备在线情况",
    rank: 10
  },
  children: [
    {
      path: "/OnlineStatusOfExternalDevices/index",
      name: "OnlineStatusOfExternalDevices",
      component: () =>
        import(
          "@/views/OnlineStatusOfExternalDevices/OnlineStatusOfExternalDevices.vue"
        ),
      meta: {
        title: "外源设备在线情况"
      }
    }
  ]
} satisfies RouteConfigsTable;
