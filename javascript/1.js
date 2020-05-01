// let arr = [undefined, 'str', 1, true, Symbol(''), null, console.log, [], {}, new Date()]

// arr.forEach(item => {
//   console.log(typeof(item))
// })

// undefined
// string
// number
// boolean
// symbol
// object null
// function func
// object array
// object object
// object date

// a instanceof A  -> a 是否为 A 的实例 (A的prototype属性是否在a的原型链(__proto__)上)
// console.log(null instanceof Object) // false
// console.log([] instanceof Array) // true
// console.log({} instanceof Object) // true
// console.log(Array instanceof Function) // true
// console.log(console.log instanceof Function) // true

// let a = 2
// let b = 2
// console.log(a === b) // true

// let c = [1]
// let d = [1]
// console.log(c === d) // false

console.log(Object.prototype.toString.call(undefined))
console.log(Object.prototype.toString.call('str'))
console.log(Object.prototype.toString.call(1))
console.log(Object.prototype.toString.call(true))
console.log(Object.prototype.toString.call(Symbol('')))
console.log(Object.prototype.toString.call(null))
console.log(Object.prototype.toString.call(console.log))
console.log(Object.prototype.toString.call([]))
console.log(Object.prototype.toString.call({}))
console.log(Object.prototype.toString.call(new Date()))

// [object Undefined]
// [object String]
// [object Number]
// [object Boolean]
// [object Symbol]
// [object Null]
// [object Function]
// [object Array]
// [object Object]
// [object Date]