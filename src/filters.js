// 1. 导入Vue
import Vue from 'vue'

import moment from 'moment'

Vue.filter('dateFormat',function(dateStr){
    return moment(dateStr).format('YYYY-MM-DD HH:mm:ss')
})