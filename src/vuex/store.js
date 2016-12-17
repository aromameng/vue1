import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建一个对象来保存应用的状态
const state = {
  //计算点击次数
  count: 0,
  menu:false
}

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
  ADD_COUNT: function(state) {
    state.count++;
  },
  CLICKMENU:function(state){
  	state.menu=!state.menu;
  }
}

// 整合初始状态和变更函数，我们就得到了我们所需的 store
export default new Vuex.Store({
  state,
  mutations
})
