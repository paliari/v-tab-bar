V = (name) -> require "./views/#{name}.vue"

module.exports = [
    path: '/'
    redirect: '/home'
  ,
    name: 'home'
    path: '/home'
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
