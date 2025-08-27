const userMe = {
  name: 'Rob',
  age: 22,
  isAdmin: true, //1
//=====================================================
  sayHello(name) {
    console.log(`Hello ${name}`) //2
  }
}
userMe.sayHello(userMe.name)
//=====================================================
const users = {
  bin: {
    age: 43,
    isAdmin: true,
  },
  din: {                 //3
    age: 34,
    isAdmin: false,
  },
  gin: {
    age: 434,
    isAdmin: false,
  }
}
//=====================================================
let simpleUsers = 0;
const usersArray = [
  {
    name: 'tad',
    isAdmin: true,
  },
  {
    name: 'vad',
    isAdmin: false,
  },
  {                                               //4
    name: 'pad',
    isAdmin: false,
  }
]

for (let i = 0; i < usersArray.length; i++) {
  if (usersArray[i].isAdmin == false) {
    simpleUsers++
  }
}
console.log(simpleUsers)
