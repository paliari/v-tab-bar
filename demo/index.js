import Vue from 'vue'

import 'font-awesome/css/font-awesome.css'
import '../dist/v-tab-bar.css'

import TabBar from '../dist/v-tab-bar.js'
Vue.use(TabBar)

import router from './router.js'

import App from './App.vue'

new Vue({
  ...App,
  router
}).$mount('#app')
