<template lang="html">
<div id="main">
  <router-view class="v-tab-bar-router-view"></router-view>
  <v-tab-bar>
    <v-tab-bar-item v-for="item in items" :to="item.to" :label="item.label">
      <i v-for='i in item.icon' :class="'fa ' + i"></i>
    </v-tab-bar-item>
  </v-tab-bar>
</div>
</template>

<script>
import VTabBar from '../src/VTabBar.vue'
import VTabBarItem from '../src/VTabBarItem.vue'

export default {
  components: {VTabBar, VTabBarItem},
  data () {
    return {
      items: [
        {to: '/home', icon: ['fa-home'], label: 'Home'},
        {to: '/list', icon: ['fa-list'], label: ''},
        {to: '/comments', icon: ['fa-comments-o inactive', 'fa-comments active'], label: 'Comments'},
        {to: '/account', icon: ['fa-user-o inactive', 'fa-user active'], label: ''},
        {to: '/config', icon: ['fa-bars'], label: 'Config'},
      ]
    }
  }
}
</script>

<style lang="stylus">
#main
  height 100%
  text-align center
  .v-tab-bar-router-view
    height 100%
</style>
