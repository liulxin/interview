Function.prototype._bind = function() {
  const args = Array.prototype.slice.call(arguments, 1)
  const _this = arguments[0]
  const self = this

  return function() {
    return self.apply(_this, args)
  }
}

function f1(a) {
  console.log('this', this)
  console.log(a)
  return 'this is f1'
}
const f2 = f1._bind({x: 10}, 1)
const res = f2()
console.log(res)

// this { x: 10 }
// 1
// this is f1