const obj1 = {
  age: 20,
  name: 'dong',
  address: {
    city: 'shanghai'
  },
  children: ['a', 'b']
}

// const obj2 = obj1

// obj2.address.city = 'beij'

// console.log(obj1.address.city) // beij


const obj2 = require('./2_deepClone')(obj1)
obj2.address.city = 'beij'

console.log(obj1.address.city) // shanghai