<template>
  <div>
    <ul class="nav">
      <li><router-link to="/baseuse/tpl">baseuse/tpl</router-link></li>
      <li><router-link to="/baseuse/computed">baseuse/computed</router-link></li>
      <li><router-link to="/baseuse/watch">baseuse/watch</router-link></li>
      <li><router-link to="/baseuse/style">baseuse/style</router-link></li>
      <li><router-link to="/baseuse/condition">baseuse/condition</router-link></li>
      <li><router-link to="/baseuse/list">baseuse/list</router-link></li>
      <li><router-link to="/baseuse/event">baseuse/event</router-link></li>
      <li><router-link to="/baseuse/form">baseuse/form</router-link></li>
      <li><router-link to="/baseuse/emit-props">baseuse/emit&props</router-link></li>
      <li><router-link to="/advance/model">advance/model</router-link></li>
      <li><router-link to="/advance/nexttick">advance/nexttick</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'slider'
}
</script>

<style></style>
