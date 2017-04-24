import Vue from 'vue'
import VueRouter from 'vue-router'

function V(name) {
  return require(`./views/${name}.vue`)
}

let routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: 'home',
    path: '/home',
    component: V('Home'),
  },
  {
    name: 'list',
    path: '/list',
    component: V('List'),
  },
  {
    name: 'account',
    path: '/account',
    component: V('Account'),
  },
  {
    name: 'config',
    path: '/config',
    component: V('Config'),
  },
  {
    name: 'comments',
    path: '/comments',
    component: V('Comments'),
  }
]

Vue.use(VueRouter)

const router = new VueRouter({ routes })

export default router
