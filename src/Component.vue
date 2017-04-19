<template lang="html">
  <div class="v-tab-bar">
    <slot></slot>
  </div>
</template>

<style lang="stylus">
.v-tab-bar
  position fixed
  bottom 0
  left 0
  right 0
  background #eee
  display flex
  .v-tab-bar-item
    padding 5px
    flex 1 0 0
    text-align center
    color #777
    text-decoration none
    i
      font-size 1.8em
      &.inactive
        display block
      &.active
        display none
    &.router-link-active
      color #337ab7
      i
        &.inactive
          display none
        &.active
          display block
    .label
      display block
      font-size 10px
</style>
