<template lang="html">
<div style="padding-top: 50px">
  <h1>DEMO v-tab-bar Vue.js Component</h1>

  <p>
    <v-tab-bar v-model="value" :maxlength="40" @left-chars="leftChars = $event"></v-tab-bar>
    <strong>{{ leftChars }}</strong>
  </p>

  <p>
    {{ value }}
  </p>
</div>
</template>

<script>

import Component from '../src/Component.vue'

export default {
  components: {'v-tab-bar': Component},
  data () {
    return {
      value: 'My Input Value',
      leftChars: 0
    }
  }
}
</script>
