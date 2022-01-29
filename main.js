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

// class Vehicle {
//   constructor(name, wheel) {
//     this.name = name
//     this.wheel = wheel
//   }
// }
// const myVehicle = new Vehicle('운송수단', 2)
// console.log(myVehicle)

// class Bicycle extends Vehicle {
//   constructor(name, wheel) {
//     super(name, wheel)
//   }
// }

// class Car extends Vehicle {
//   constructor(name, wheel, license) {
//     super(name, wheel)
//     this.license = license
//   }
// }

// const jajungue = new Bicycle('삼천리', 2)
// const dautersBicycle = new Bicycle('세발', 3)

// console.log(jajungue)
// console.log(dautersBicycle)

// const whiteCar = new Car('흰붕이', 4, true)
// console.log(whiteCar)

// const myCar = new Car('벤틀리', 4, false)
// console.log(myCar)


// JS 데이터
// 문자

// const result = 'Hello world!'.indexOf('heropy')
// console.log(result)

// const str = '0123'
// console.log('0123'.length)  //길이 나타내기

// const str = 'gdwb3219@naver.com'

// console.log(str.match(/.+(?=@)/))
// console.log(str.match(/.+(?=@)/)[0])  // 정규 표현식

// const str = '   Hello world   '
// console.log(str.trim()) // 공백 없애기


// Math, text

// const pi = 3.141592
// console.log(pi)
// console.log(typeof pi)

// const str = pi.toFixed(2)
// console.log(typeof str)

// const a = 3
// const b = parseInt(a)

// console.log(b)
// console.log(typeof a)
// console.log(typeof b)


// Array

// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// console.log(numbers.length)
// console.log(fruits.length)
// console.log([1, 2].length)
// console.log([].length)


// concat 원본의 데이터에는 영향이 없다
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// console.log(numbers.concat(fruits))
// console.log(numbers)
// console.log(fruits)

// // forEach method
// // 화살표 함수도 가능하네

// fruits.forEach(function(element, index, array) {
//   console.log(element, index, array)
// })

// fruits.forEach((element, index, array) => {
//   console.log(element, index, array)
// })


// const a = fruits.forEach((fruit, index) => {
//   console.log(`${fruit}-${index}`)
// })
// console.log(a)


// const b = fruits.map((fruit, index) => {
//   return `${fruit}-${index}`
// })
// console.log(b)

// const c = fruits.map((fruit, index) => ({ 
//     id: index,
//     name: fruit
// }))
// console.log(c)



// .filter() 필터 함수

// const a = numbers.map(number => {
//   return number < 3
// })
// console.log(a)

// const b = numbers.filter(number => {
//   return number < 3
// })
// console.log(b)


// const c = numbers.map(number => number < 3)
// console.log(c)

// const d = numbers.filter(number => number < 3)
// console.log(d)


// .find() .findIndex()

// const a = fruits.find(fruit => /^C/.test(fruit))
// console.log(a)


// const b = fruits.findIndex(fruit => /^C/.test(fruit))
// console.log(b)


// // push() unshift()
// // 원본 수정 주의!

// numbers.push(5)
// console.log(numbers)

// numbers.unshift(0)
// console.log(numbers)


// .reverse()
// 원본 수정됨 주의!

// numbers.reverse()
// fruits.reverse()

// console.log(numbers)
// console.log(fruits)


// .splice()
// 원본 수정됨 주의!

// numbers.splice(2, 0, 999)
// console.log(numbers)

// fruits.splice(2, 0, 'Orange')
// console.log(fruits)

// const target = {a: 1, b: 2}
// const source = {b: 4, c: 5}


// Object practice

// const userAge = {
//   name: 'Heropy',
//   age: 85
// }
// const userEmail = {
//   name: 'Heropy',
//   email: 'thesecon@gmail.com'
// }


// const target = Object.assign({}, userAge)
// console.log(target)
// console.log(userAge)
// console.log(target === userAge)

// const a = { k: 123 }
// const b = { k: 123 }
// console.log(a === b)

// const user = {
//   name: 'Heropy',
//   age: 85,
//   email: 'thesecon@gmail.com'
// }

// const keys = Object.keys(user)
// console.log(keys)

// console.log(user['email'])

// const values = keys.map(key => user[key])
// console.log(values)


// 구조 분해 할당 (Destructuring assignment)
// 비구조화 할당

const user = {
  name: 'Heropy',
  age: 85,
  email: 'thesecon@gmail.com',
  address: 'USA'
}
const { name: heropy, age, email, address = 'Korea' } = user
// e.g user.address 와 같은 방식
// const heropy = name

console.log(`사용자의 이름은 ${heropy}입니다.`)
console.log(`${heropy}의 나이는 ${age}세입니다.`)
console.log(`${heropy}의 이메일 주소는 ${user.email}입니다.`)
console.log(address)

const fruits = ['Apple', 'Banana', 'Cherry']
const [,, b] = fruits
console.log(b)