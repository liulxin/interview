<template>
  <div class="">
    <ul>
      <li v-for="item in list" :key="item.id">
        <TodoListItem :title="item.title"/>
        <button @click="deleteItem(item.id)">del</button>
      </li>
    </ul>
  </div>
</template>

<script>
import event from './eventBus'
import TodoListItem from './TodoListItem'
export default {
  components: {
    TodoListItem
  },
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    deleteItem (id) {
      this.$emit('delete', id)
    },
    addTitleHandler (title) {
      console.log('on add title', title)
    }
  },
  beforeCreate () {
    console.log('list beforeCreate')
    console.log(this)
  },
  created () {
    console.log('list created')
    console.log(this.list)
  },
  mounted () {
    console.log('list mounted')
    console.log(this.list)

    // 绑定自定义事件
    event.$on('onAddTitle', this.addTitleHandler)
  },
  beforeUpdate () {
    console.log('list beforeUpdate')
  },
  updated () {
    console.log('list updated')
  },
  beforeDestroy () {
    console.log('list beforeDestroy')
    // 解绑
    event.$off('onAddTitle', this.addTitleHandler)
  },
  destroyed () {
    console.log('list destroyed')
  }
}
</script>

<style lang="scss" scoped>

</style>
