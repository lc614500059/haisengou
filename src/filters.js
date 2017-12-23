// 1. 导入Vue
import Vue from 'vue'

import moment from 'moment'

Vue.filter('dateFormat', function (dateStr, formatStr = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dateStr).format(formatStr)
})