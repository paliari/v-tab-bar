<template lang="html">
<div id="main" style="text-align: center;">
  <h1>DEMO v-tab-bar</h1>
  <h2>Simple Tab Bar for Vue.js.</h2>
  <p>
    <a href='https://github.com/paliari/v-toaster' target='_blank'> See on Github</a>
  </p>

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
