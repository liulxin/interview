// Object.defineProperty 缺点
// 深度监听，需要递归，一次性计算量大
// 无法监听新增，删除属性 （Vue.$set, Vue.$delete）
// 无法原生监听数组，需要特殊处理

// 触发更新视图
function updateView () {
  console.log('视图更新')
}

// 重新定义数组原型
const oldArrayproperty = Array.prototype

// 创建新对象，原型指向 oldArrayproperty， 再扩展新的方法不会影响原型
const arrProto = Object.create(oldArrayproperty);
// eslint-disable-next-line no-proto
// console.log(oldArrayproperty === arrProto.__proto__); true

['push', 'pop', 'shift', 'unshift', 'splice'].forEach(methodName => {
  arrProto[methodName] = function () {
    updateView()
    oldArrayproperty[methodName].call(this, ...arguments)
  }
})

// 重新定义属性，监听起来
function defineReactive (target, key, value) {
  // 深度监听
  observe(value)

  Object.defineProperty(target, key, {
    get () {
      return value
    },
    set (newVal) {
      // 深度监听
      observe(value)

      if (newVal !== value) {
        // value 一直在闭包中，此处设置完之后，再get 也是最新的值
        value = newVal

        updateView()
      }
    }
  })
}

function observe (target) {
  if (typeof target !== 'object' || target === null) {
    // 不是对象或数组
    return target
  }
  // 如果是数组 就劫持
  if (Array.isArray(target)) {
    // eslint-disable-next-line no-proto
    target.__proto__ = arrProto
  }
  for (let key in target) {
    defineReactive(target, key, target[key])
  }
}

const data = {
  name: 'zhangsan',
  age: 20,
  info: {
    address: '北京'
  },
  nums: [1, 2, 3]
}

// 监听数据
observe(data)

// test
// data.name = 'lisi'
// data.age = 21
// console.log(data.age)
// data.x = '100'
// delete data.name
// data.info.address = '上海'
data.nums.push(4)
