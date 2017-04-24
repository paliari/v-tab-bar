// need to use require instead of import (changes from babel 5 to 6)
const VTabBar = require('./VTabBar.vue')
const VTabBarItem = require('./VTabBarItem.vue')
VTabBar.install = (Vue) => {
  Vue.component(VTabBarItem.name, VTabBarItem)
  Vue.component(VTabBar.name, VTabBar)
}
VTabBar.version = proccess.env.VERSION

module.exports = VTabBar
