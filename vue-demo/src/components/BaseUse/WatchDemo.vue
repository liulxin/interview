<template>
  <div>
    <input type="text" v-model="name" />
    <input type="text" v-model="info.city" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'dong',
      info: {
        city: 'shanghai'
      }
    }
  },
  watch: {
    name (oldVal, val) {
      console.log('watch name', oldVal, val) // 值类型, 可正常拿到 oldVal val
    },
    info: {
      handler (oldVal, val) {
        console.log('watch info', oldVal, val) // 引用类型，拿不到 oldval, 因为指针相同，已经指向新的val
      },
      deep: true // 深度监听
    }
  }
}
</script>

<style></style>
