import type { App } from "vue";
import { createPinia } from "pinia";
const store = createPinia();
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
export function setupStore(app: App<Element>) {
  // 使用持久化插件
  store.use(piniaPluginPersistedstate);
  app.use(store);
}

export { store };
