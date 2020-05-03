// 闭包
// 1. 函数作为返回值
// function create() {
//   const a = 100;
//   return function () {
//     console.log(a)
//   }
// }

// const fn = create()
// const a = 100
// fn() // 100

// 2. 函数作为参数
function print(fn) {
  let a = 200
  fn()
}

let a = 100
function fn() {
  console.log(a)
}

print(fn) // 100
