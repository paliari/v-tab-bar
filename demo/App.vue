<template lang="html">
<div id="main" style="text-align: center;">
  <h1>DEMO v-tab-bar</h1>

  <router-view></router-view>

  <v-tab-bar>
    <router-link class="v-tab-bar-item" to="/home">
      <i class="fa fa-home"></i>
      <span class="label">Home</span>
    </router-link>
    <router-link class="v-tab-bar-item" to="/list">
      <i class="fa fa-list"></i>
      <span class="label">List</span>
    </router-link>
    <router-link class="v-tab-bar-item" to="/account">
      <i class="fa fa-user"></i>
      <span class="label">Account</span>
    </router-link>
    <router-link class="v-tab-bar-item" to="/config">
      <i class="fa fa-bars"></i>
      <span class="label">Config</span>
    </router-link>
    <router-link class="v-tab-bar-item" to="/options">
      <i class="fa fa-cog"></i>
      <span class="label">Options</span>
    </router-link>
  </v-tab-bar>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
