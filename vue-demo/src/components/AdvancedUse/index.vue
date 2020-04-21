<template>
  <div class="">
    <p>vue 高级特性</p>

    <p>{{name}}</p>
    <CustomModel v-model="name"/>
  </div>
</template>

<script>
import CustomModel from './CustomModel'
export default {
  components: {
    CustomModel
  },
  data () {
    return {
      name: 'dong'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
