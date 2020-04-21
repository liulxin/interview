const data = {}
let name = 'zhangsan'

Object.defineProperty(data, 'name', {
  get: function () {
    console.log('get')
    return name
  },
  set: function (newVal) {
    console.log('set')
    name = newVal
  }
})

// test
console.log(data.name)
data.name = 'lisi'
console.log(data.name)
