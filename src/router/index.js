import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import City from '@/pages/city/City.vue'
import Detail from '@/pages/detail/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  // 每次切换页面，页面都回到最顶部，不让前一页面的滑动影响后一页面的展示
  scrollBehavior (to, from, savedPosition){
    //return desired position}
    return { x: 0, y: 0}
  }
})
