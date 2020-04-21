<template>
  <div class="">
    <input type="text" v-model="title">
    <button @click="addTitle">add</button>
  </div>
</template>

<script>
import event from './eventBus'
export default {
  data () {
    return {
      title: ''
    }
  },
  methods: {
    addTitle () {
      // 调用父组件的事件
      this.$emit('add', this.title)

      // 调用自定义事件
      event.$emit('onAddTitle', this.title)
      this.title = ''
    }
  },
  created () {
    console.log('input created')
  },
  mounted () {
    console.log('input mounted')
  },
  beforeUpdate () {
    console.log('input beforeUpdate')
  },
  updated () {
    console.log('input updated')
  },
  beforeDestroy () {
    console.log('input beforeDestroy')
  },
  destroyed () {
    console.log('input destroyed')
  }
}
</script>

<style lang="scss" scoped>

</style>
