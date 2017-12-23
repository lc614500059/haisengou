// 项目的JS打包入口文件
// 1. 导入Vue
import Vue from 'vue'

import './globalConfig.js'

//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router.js'

// 导入 根组件
import App from './components/App.vue'

const vm = new Vue({
  el: '#app',
  render: c => c(App),
  router

})