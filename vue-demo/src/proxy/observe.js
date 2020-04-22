function reactive (target = {}) {
  if (typeof target !== 'object' || target === null) {
    return target
  }

  const proxyConfig = {
    get (target, key, receiver) {
      // 只处理本身（非原型的）属性
      const ownKeys = Reflect.ownKeys(target)
      // console.log(ownKeys) // ['0', '1', '2', 'length']

      if (ownKeys.includes(key)) {
        console.log('get', key)
      }

      const result = Reflect.get(target, key, receiver)
      // return result
      console.log(result)
      // 深度监听，性能提升
      return reactive(result)
    },
    set (target, key, val, receiver) {
      // 重复的数据不处理
      const oldVal = target[key]
      if (val === oldVal) {
        return true
      }

      const ownKeys = Reflect.ownKeys(target)
      if (ownKeys.includes(key)) {
        console.log('已有的key', key)
      } else {
        console.log('新增的key', key)
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
  }

  const observed = new Proxy(target, proxyConfig)
  return observed
}

const data = {
  name: 'zhang',
  age: 20,
  info: {
    city: 'beijing'
  }
}

let re = reactive(data)

re.name = 'lisi'
console.log(data)

re.sex = 'man'
console.log(data)

console.log(re.info.city)
