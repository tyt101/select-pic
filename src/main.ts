import { createSSRApp, useAttrs } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
import App from './App.vue'
// 微信平台时，不引入vant
// #ifndef MP-WEIXIN
import vant from 'vant'
import 'vant/lib/index.css'
// #endif
export function createApp() {
  const app = createSSRApp(App)
  const pinia = createPinia()
  pinia.use(piniaPluginPersist)
  app.use(pinia)
  // #ifndef MP-WEIXIN
  app.use(vant)
  // #endif
  return {
    app,
  }
}
