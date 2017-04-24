<template lang="html">
  <div class="v-tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'v-tab-bar'
}
</script>

<style lang="stylus">
.v-tab-bar
  position fixed
  bottom 0
  left 0
  right 0
  background #eee
  display flex
  height 45px
.v-tab-bar-router-view
  margin-bottom 45px
</style>
