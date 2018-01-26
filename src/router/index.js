import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/leftmenu'
import Table from '@/view/table'
import Tables from '@/view/tables'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu
    },
    {
      path:'/1',
      name:'table',
      component:Table
    },
    {
      path:'/2',
      name:'tables',
      component:Tables
    }
  ]
})
