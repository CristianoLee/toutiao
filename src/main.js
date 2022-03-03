import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant, { Lazyload } from 'vant'
import 'vant/lib/index.less'
import 'amfe-flexible'
import store from '@/store.js'
// 导入 dayjs 的核心模块
import dayjs from 'dayjs'
// 导入计算相对时间的插件
import relativeTime from 'dayjs/plugin/relativeTime'
// 导入中文语言包
import zh from 'dayjs/locale/zh-cn'

Vue.config.productionTip = false
// 注册全局插件
Vue.use(Vant)
Vue.use(Lazyload)
// 配置“计算相对时间”的插件
dayjs.extend(relativeTime)

// 配置中文语言包
dayjs.locale(zh)

// dt 参数是文章的发表时间
Vue.filter('dateFormat', (dt) => {
  // 调用 dayjs() 得到的是当前的时间
  // .to() 方法的返回值，是计算出来的“相对时间”
  return dayjs().to(dt)
})

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#app')
