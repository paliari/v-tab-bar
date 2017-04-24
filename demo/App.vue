<template lang="html">
<div id="main">
  <router-view class="v-tab-bar-router-view"></router-view>
  <v-tab-bar>
    <router-link class="v-tab-bar-item" to="/home">
      <i class="fa fa-home"></i>
      <span class="label">Home</span>
    </router-link>
    <router-link class="v-tab-bar-item" to="/list">
      <i class="fa fa-list"></i>
      <span class="label">List</span>
    </router-link>
    <router-link class="v-tab-bar-item" to="/comments">
      <i class="fa fa-comments-o inactive"></i>
      <i class="fa fa-comments active"></i>
      <span class="label">Comments</span>
    </router-link>
    <router-link class="v-tab-bar-item" to="/account">
      <i class="fa fa-user-o inactive"></i>
      <i class="fa fa-user active"></i>
      <span class="label">Account</span>
    </router-link>
    <router-link class="v-tab-bar-item" to="/config">
      <i class="fa fa-bars"></i>
      <span class="label">Config</span>
    </router-link>
  </v-tab-bar>
</div>
</template>

<script>
import VTabBar from '../src/VTabBar.vue'

export default {
  components: {VTabBar}
}
</script>

<style lang="stylus">
#main
  height 100%
  text-align center
  .v-tab-bar-router-view
    height 100%
</style>
