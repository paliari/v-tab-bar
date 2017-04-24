V = (name) -> require "./views/#{name}.vue"

module.exports = [
    name: 'home'
    path: '/home'
    alias: '/'
    component: V 'Home'
  ,
    name: 'list'
    path: '/list'
    component: V 'List'
  ,
    name: 'account'
    path: '/account'
    component: V 'Account'
  ,
    name: 'config'
    path: '/config'
    component: V 'Config'
  ,
    name: 'options'
    path: '/options'
    component: V 'Options'
]
