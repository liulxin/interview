<template>
  <div class="">
    <p>{{num}}</p>
    <button @click="increment1">+1</button>
    <button @click="increment2(2, $event)">+2</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 0
    }
  },
  methods: {
    increment1 (event) {
      // eslint-disable-next-line no-proto
      console.log('event', event, event.__proto__.constructor)
      console.log(event.target) // event 在哪里监听的
      console.log(event.currentTarget) // event 在哪里触发的
      this.num++

      // 1. event 是原生的
      // 2. 事件被挂载到当前元素
    },
    increment2 (num, event) {
      console.log(event.target)
      this.num += num
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
