// 项目的JS打包入口文件
// 1. 导入Vue
import Vue from 'vue'

//安装mintui 
import MintUI from 'mint-ui'
//导入mintui样式表
import 'mint-ui/lib/style.css'
//使用vue.use注册
Vue.use(MintUI)

//导入mui
import '../lib/mui/css/mui.min.css'
//图标
import '../lib/mui/css/icons-extra.css'

//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router.js'

//配置axios
import axios from 'axios'

Vue.prototype.$http = axios.create({
    baseURL: 'http://39.106.32.91:3000/'
})

// 导入 根组件
import App from './components/App.vue'

const vm = new Vue({
  el: '#app',
  render: c => c(App),
  router

})