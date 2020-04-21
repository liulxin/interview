<template>
  <div class="">
    <Input @add="addHandler" />
    <List :list="list" @delete="deleteHandler" />
  </div>
</template>

<script>
import Input from './Input'
import List from './List'
export default {
  components: {
    Input,
    List
  },
  data () {
    return {
      list: [
        {
          id: 'id-1',
          title: '标题1'
        }
      ]
    }
  },
  methods: {
    addHandler (title) {
      this.list.push({
        id: `id-${Date.now()}`,
        title
      })
    },
    deleteHandler (id) {
      this.list = this.list.filter(item => item.id !== id)
    }
  },
  beforeCreate () {
    // 不能访问 data, 数据观测 (data observer) 和 event/watcher 事件配置之前触发
    console.log(this.data) // undefined
  },
  created () {
    console.log('index created')
  },
  mounted () {
    console.log('index mounted')
  },
  beforeUpdate () {
    console.log('index beforeUpdate')
  },
  updated () {
    console.log('index updated')
  },
  beforeDestroy () {
    console.log('index beforeDestroy')
  },
  destroyed () {
    console.log('index destroyed')
  }
}
</script>

<style lang="scss" scoped>

</style>
