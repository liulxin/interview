console.log(10 + 1)
console.log(10 + '1')
console.log(true + '1')
console.log(undefined + '1')
console.log(null + '1')
console.log(console.log + '1')
// console.log(Symbol('') + '1') Cannot convert a Symbol value to a string

// 11
// 101
// true1
// undefined1
// null1
// function () { [native code] }1

// 除了 == null 以外，其余都建议使用 ===
console.log(100 == '100')
console.log(0 == '')
console.log(0 == false)
console.log(false == '')
console.log(null == undefined)


// 以下是falsely 变量，其余都是truely 变量
console.log(!!0 === false)
console.log(!!NaN === false)
console.log(!!'' === false)
console.log(!!null === false)
console.log(!!undefined === false)
console.log(!!false === false)

console.log(10 && 0) 
console.log('' || 'ab')
console.log(!global.a)
// 0
// ab
// true