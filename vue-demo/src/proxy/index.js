// const data = {
//   name: 'dong',
//   age: 12
// }
const data = ['a', 'b', 'c']

// eslint-disable-next-line no-unused-vars
const proxyData = new Proxy(data, {
  get (target, key, receiver) {
    // 只处理本身（非原型的）属性
    const ownKeys = Reflect.ownKeys(target)
    // console.log(ownKeys) // ["0", "1", "2", "length"]

    if (ownKeys.includes(key)) {
      console.log('get', key)
    }

    const result = Reflect.get(target, key, receiver)
    return result
  },
  set (target, key, val, receiver) {
    // 重复的数据不处理
    const oldVal = target[key]
    if (val === oldVal) {
      return true
    }

    const result = Reflect.set(target, key, val, receiver)
    console.log('set', key, val)
    console.log('result', result)
    return result
  },
  deleteProperty (target, key) {
    const result = Reflect.deleteProperty(target, key)
    console.log('delete', key)
    console.log('result', result)
    return result
  }
})

// console.log(proxyData.name)
// proxyData.name = 'wud'
// console.log(data)
// delete proxyData.name
// console.log(data)

proxyData.push(1)
console.log(data)
// get push
// get length
// set 3 1
// result true
// set length 4
// result true
// (4)["a", "b", "c", 1]
