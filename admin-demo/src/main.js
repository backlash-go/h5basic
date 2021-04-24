import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入 elementui 组件和样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//导入全局样式
import './styles/index.sass'

Vue.use(ElementUI);


Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
