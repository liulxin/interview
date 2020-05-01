class People {
  constructor(name) {
    this.name = name
  }
  eat() {
    console.log(`${this.name} eat something`)
  }
}

// 继承
class Student extends People{
  constructor(name, number) {
    super(name)
    this.number = number
  }
  static print() {
    console.log('print')
  }
  sayName() {
    console.log(`name: ${this.name} number: ${this.number}`)
  }
}

const xiaoming = new Student('xiaoming', 22)
xiaoming.sayName() // name: xiaoming number: 22
// Student.print()
xiaoming.eat()

console.log(xiaoming instanceof Student)
console.log(xiaoming instanceof People)
console.log(Student instanceof Function) 
console.log(Student instanceof Object)

// true
// true
// true
// true

console.log(console.log instanceof Object)
console.log(console.log instanceof Function)
// true
// true

function F (name) {
  this.name = name
}
const f = new F('f')
console.log('----')
console.log(f.name)
console.log(F instanceof Object)
console.log(F instanceof Function)
console.log(f instanceof F)

// f
// true
// true
// true


console.log(xiaoming.__proto__ === Student.prototype) // true
console.log(People.prototype === Student.prototype.__proto__) // true
console.log(People.prototype.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__ === null) // true

console.log(xiaoming instanceof Student) // true

console.log(xiaoming.hasOwnProperty('name'))
console.log(xiaoming.hasOwnProperty('eat'))
// true
// false