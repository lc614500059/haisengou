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
//导入过滤器
import './filters.js'


//配置axios
import axios from 'axios'

Vue.prototype.$http = axios.create({
    baseURL: 'http://39.106.32.91:3000/'
})