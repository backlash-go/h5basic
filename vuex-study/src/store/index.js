import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state";
import getters from "./getter";
Vue.use(Vuex)

export default new Vuex.Store({
    //组件数据 专门存放全局数据
    // state: {
    //     num: 2
    // },
    state,
    //getter相当于组件的computed 是全局的 computed是组件内部使用的
    getters,
    // mutations 相当于METHODS 但是它不能使用异步方法 （定时器 axios）
    mutations: {
        increase(state,payload) {
            state.num += payload ? payload : 1;
        },
        decrease(state){
            state.num--
        }
    },
    //专门处理异步, 实际修改状态值的 依然是MUTATION
    actions: {
        // 点击按钮放慢一秒 使用定时器
        decreaseAsync(context){
            context.commit('decrease')
        }
    },
    modules: {}
})
