import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/Login'
import PublicRelation from '@/components/publicRelation/publicRelation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '登录页面',
      component: PublicRelation
    },
    {
      path: '/main',
      name: '主页',
      component: Main
    }
  ]
})
