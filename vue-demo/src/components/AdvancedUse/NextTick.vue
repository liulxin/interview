<template>
  <div class="">
    <ul ref="ull">
      <li v-for="(item,index) in list" :key="index">{{item}}</li>
    </ul>
    <button @click="addItem">add</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: ['a', 'b', 'c']
    }
  },
  methods: {
    addItem () {
      this.list.push(`${Date.now()}`)
      this.list.push(`${Date.now()}`)
      this.list.push(`${Date.now()}`)

      const ulElm = this.$refs.ull
      console.log(ulElm.childNodes.length)

      // 获取更新后的真实dom
      this.$nextTick(() => {
        console.log(ulElm.childNodes.length)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
