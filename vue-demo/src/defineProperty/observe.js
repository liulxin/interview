// Object.defineProperty 缺点

// 触发更新视图
function updateView () {
  console.log('视图更新')
}

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
data.name = 'lisi'
data.age = 21
// console.log(data.age)
// data.x = '100'
// delete data.name
data.info.address = '上海'
// data.nums.push(4)
