import VueRouter from 'vue-router'

import Home from './components/tabbars/Home.vue'
import Member from './components/tabbars/Member.vue'
import Search from './components/tabbars/Search.vue'
import Shopcar from './components/tabbars/Shopcar.vue'

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/member', component: Member },
    { path: '/shopcar', component: Shopcar },
    { path: '/search', component: Search },

  ],
  linkActiveClass: 'mui-active'
  
})

export default router