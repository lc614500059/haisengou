import VueRouter from 'vue-router'

import Home from './components/tabbars/Home.vue'
import Member from './components/tabbars/Member.vue'
import Search from './components/tabbars/Search.vue'
import Shopcar from './components/tabbars/Shopcar.vue'
import News from './components/news/News.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/PhotoList.vue'

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/member', component: Member },
    { path: '/shopcar', component: Shopcar },
    { path: '/search', component: Search },
    { path: '/home/news', component: News },
    { path: '/home/newsInfo/:id', component: NewsInfo, props:true },
    { path: '/home/photolist',component:PhotoList }
    
    
  ],
  linkActiveClass: 'mui-active'
  
})

export default router