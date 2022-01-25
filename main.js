// import random from './getRandom'

// const a = random()

// switch (a) {
//   case 0:
//     console.log('a is 0')
//     break
//   case 2:
//     console.log('a is 2')
//     break
//   case 4:
//     console.log('a is 4')
//     break
//   case 6:
//     console.log('a is 6')
//     break
//   default:
//     console.log('rest...')
// }

// if (a === 0) {
//   console.log('a is 0')
// } else if (a == 2) {
//   console.log('a is 2')
// } else if (a == 4) {
//   console.log('a is 4')
// } else if (a == 6) {
//   console.log('a is 6')
// } else {
//   console.log('rest...')
// }

// 반복문 (For Statement)
// for (시작조건; 종료 조건; 변화 조건) {}

// const ulEl = document.querySelector('ul')

// for (let i = 0; i < 10; i += 1) {
//   const li = document.createElement('li')
//   li.textContent = `list-${i + 1}`
//   if ((i+1) % 2 === 0) {
//     li.addEventListener('click', function () {
//       console.log(li.textContent)
//     })
//   }
//   ulEl.appendChild(li)
// }

// 변수 유효범위 (Variable Scope)
// var (x) , let, const

// function scope() {
//   if (true) {
//     const a = 123
//     console.log(a)
//   }
// }
// scope()

// 복습

// function sum(x, y) {
//   console.log(arguments)
//   return arguments[0] + arguments[1]
// }
// console.log(sum(7, 3))


// # 생성자 함수
// const heropy = {
//   firstName: 'Heropy',
//   lastName: 'Park',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// console.log(heropy.getFullName())

// const amy = {
//   firstName: 'Amy',
//   lastName: 'Clarke',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(amy.getFullName())

// const neo = {
//   firstName: 'Neo',
//   lastName: 'Smith',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(neo.getFullName())

// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
// }
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

// const heropy = new User('Heropy', 'Park')
// const amy = new User('Amy', 'Clarke')
// const neo = new User('Neo', 'Smith')

// console.log(heropy.getFullName())
// console.log(amy.getFullName())
// console.log(neo.getFullName())


//  ## This

// const heropy = {
//   name: 'Heropy',
//   normal: function () {
//     console.log(this.name)
//   },
//   arrow: () => {
//     console.log(this.name)
//   }
// }

// heropy.normal()
// heropy.arrow()

// const amy = {
//   name: 'Amy',
//   normal: heropy.normal,
//   arrow: heropy.arrow
// }

// amy.normal()
// amy.arrow()


// function User(name) {
//   this.name = name
// }
// User.prototype.normal = function () {
//   console.log(this.name)
// }
// User.prototype.arrow = () => {
//   console.log(this.name)
// }

// const heropy = new User('Heropy')

// heropy.normal()
// heropy.arrow()


// const timer = {
//   name: 'Heropy!',
//   timeout: function () {
//     // setTimeout(함수, 시간)
//     setTimeout(() => {
//       console.log(this.name)
//     }, 2000)
//   }
// }
// timer.timeout()


// ES6 Classes

// const heropy = {
//   name: 'Heropy',
//   normal: function () {
//     console.log(this.name)
//   },
//   arrow: () => {
//     console.log(this.name)
//   }
// }

// heropy.normal()
// heropy.arrow()


// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
// }
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

// class User {
//   constructor(first, last) {
//     this.firstName = first
//     this.lastName = last
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }


// const heropy = new User('Heropy', 'Park')
// const amy = new User('Amy', 'Clarke')
// const neo = new User('Neo', 'Smith')

// console.log(heropy)
// console.log(amy.getFullName())
// console.log(neo.getFullName())


// 상속(확장)

class Vehicle {
  constructor(name, wheel) {
    this.name = name
    this.wheel = wheel
  }
}
const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle)

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel)
  }
}

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license
  }
}

const jajungue = new Bicycle('삼천리', 2)
const dautersBicycle = new Bicycle('세발', 3)

console.log(jajungue)
console.log(dautersBicycle)

const whiteCar = new Car('흰붕이', 4, true)
console.log(whiteCar)

const myCar = new Car('벤틀리', 4, false)
console.log(myCar)
