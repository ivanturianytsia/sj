import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import NikePage from '@/components/NikePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/nike',
      name: 'Nike',
      component: NikePage
    }
  ]
})
