import Vue from 'vue'
import VueRouter from 'vue-router'

function V(name) {
  return require(`./views/${name}.vue`)
}

let routes = [
  {
    name: 'home',
    path: '/home',
    alias: '/',
    component: V('Home'),
  }, {
    name: 'list',
    path: '/list',
    component: V('List'),
  }, {
    name: 'account',
    path: '/account',
    component: V('Account'),
  }, {
    name: 'config',
    path: '/config',
    component: V('Config'),
  }, {
    name: 'options',
    path: '/options',
    component: V('Options'),
  }
]

Vue.use(VueRouter)

const router = new VueRouter({ routes })

export default router
