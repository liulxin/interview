<template>
  <div class="">
    {{title}}
  </div>
</template>

<script>
export default {
  props: ['title'],
  created () {
    console.log('todoItem created')
  },
  mounted () {
    console.log('todoItem mounted')
  },
  beforeUpdate () {
    console.log('todoItem beforeUpdate')
  },
  updated () {
    console.log('todoItem updated')
  },
  beforeDestroy () {
    console.log('todoItem beforeDestroy')
  },
  destroyed () {
    console.log('todoItem destroyed')
    console.log(this)
  }
}
</script>

<style lang="scss" scoped>

</style>
