import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 1.定义初始的 state 对象，命名为 initState
// 初始的 state 对象
let initState = {
  // token 的信息对象
  tokenInfo: {}
}

// 3.在 new Vuex.Store() 之前，读取 localStorage 中本地存储的 state 字符串
const stateStr = localStorage.getItem('state')

// 4.如果 stateStr 的值存在，则证明本地存储中有之前存储的 state 数据，需要转换后赋值给 initState
if (stateStr) {
  // 加载本地的数据
  initState = JSON.parse(stateStr)
}

export default new Vuex.Store({
  // 2.把 initState 对象作为 new Vuex.Store() 时候的 state 初始值
  state: initState,
  mutations: {
    // 更新 tokenInfo 数据的方法
    updateTokenInfo(state, payload) {
      // 把提交过来的 payload 对象，作为 tokenInfo 的值
      state.tokenInfo = payload

      // 如果希望在 Mutation A 中调用 Mutation B，需要通过 this.commit() 方法来实现
      // this 表示当前的 new 出来的 store 实例对象
      this.commit('saveStateToStorage')
    },
    // 将 state 持久化存储到本地
    saveStateToStorage(state) {
      localStorage.setItem('state', JSON.stringify(state))
    }
  },
  modules: {}
})
