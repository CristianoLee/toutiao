import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.less'
import 'amfe-flexible'
import store from '@/store.js'

Vue.config.productionTip = false
// 注册全局插件
Vue.use(Vant)

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#app')
