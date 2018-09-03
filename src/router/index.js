import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Add from '@/components/Add'
import Employee from '@/components/Employee'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/employees',
      name: 'Home',
      component: Home
    },
    {
      path: '/employees/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/employees/:id',
      name: 'Employee',
      component: Employee
    }
  ]
})
