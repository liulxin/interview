const compiler = require('vue-template-compiler')

const template = '<div>{{msg}}</div>'
// render with(this){return _c('div',[_v(_s(msg))])}

const res = compiler.compile(template)
console.log(res)
