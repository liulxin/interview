<template>
  <div>
    <p>文本插值 {message}</p>
    <p>js 表达式{{ flag ? "yes" : "no" }} (只能上表达式，不是js语句)</p>
    <p :id="dynamicId">动态属性</p>
    <hr />
    <p v-html="rawHtml">
      <span>有xss风险</span>
      <span>「注意」使用v-html 后，会覆盖子元素</span>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'hello vue',
      flag: true,
      dynamicId: `id-${Date.now()}`,
      rawHtml: '指令 - 原始 html <b>加粗</b>'
    }
  }
}
</script>

<style></style>
