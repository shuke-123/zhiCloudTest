import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import count from '@/components/count'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'count'
    }
    ,
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/count',
      name: 'count',
      component: count,
    },
    {
      path: '/test',
      name: 'test',
      component: test,
    }
  ]
})