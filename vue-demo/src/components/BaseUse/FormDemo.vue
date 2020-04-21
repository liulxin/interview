<template>
  <div class="">
    <p>输入框: name: {{name}} age: {{age}}</p>
    <input type="text" v-model.trim="name"> <br>
    <input type="text" v-model.lazy="name"> <br>
    <input type="text" v-model.number="age">

    <p>多行文本: {{desc}}</p>
    <textarea v-model="desc"></textarea>

    <p>复选框: {{checked}}</p>
    <input type="checkbox"  v-model="checked" />

    <p>多个复选框： {{checkedNames}}</p>
    <input type="checkbox" id="jack" value="jack" v-model="checkedNames">
    <label for="jack">jack</label>
    <input type="checkbox" id="john" value="john" v-model="checkedNames">
    <label for="john">john</label>
    <input type="checkbox" id="mike" value="mike" v-model="checkedNames">
    <label for="mike">mike</label>

    <p>单选按钮: {{ picked }}</p>
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>

    <p>单选选择框: {{ selected }}</p>
    <select v-model="selected">
      <option disabled value="">请选择</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>

    <p>多选选择框: {{ selectedArr }}</p>
    <select v-model="selectedArr" multiple>
      <option disabled value="">请选择</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      desc: '',
      age: 0,
      checked: true,
      checkedNames: [],
      picked: '',
      selected: '',
      selectedArr: []
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
