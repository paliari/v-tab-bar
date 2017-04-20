// need to use require instead of import (changes from babel 5 to 6)
const VTabBar = require('./VTabBar.vue')
module.exports = VTabBar

VTabBar.install = Vue => Vue.component(VTabBar.name, VTabBar)
VTabBar.version = proccess.env.VERSION
