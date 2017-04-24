<template lang="pug">
router-link.v-tab-bar-item(:class="{'with-label': label}", :to='to', :exact='exact')
  slot
  .v-tab-bar-item-label(v-if='label') {{label}}
</template>

<script>
export default {
  name: 'v-tab-bar-item',
  props: {
    label: String,
    exact: Boolean,
    to: {
      required: true
    }
  }
}
</script>

<style lang="stylus">
.v-tab-bar
  .v-tab-bar-item
    padding-top 8px
    padding-right 5px
    padding-left 5px
    padding-bottom 5px
    flex 1 0 0
    text-align center
    color #777
    text-decoration none
    height 45px
    &.with-label
      padding-top 5px
      i
        font-size 1.6em
    i
      font-size 2em
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
    .v-tab-bar-item-label
      font-size 10px
      line-height 10px
</style>
