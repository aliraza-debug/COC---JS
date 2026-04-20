//kis trha data ko memory ma rakha jata ha or kis trha access kiya jata ha depend on types ...

//Primitive Data TYPES (copy kr k data dety han) [not change in orginal vale ]

// String 
// Number
// Boolean
// null
// undefined
// Symbol
const id = Symbol("235")
const anotherid = Symbol("235")
console.log(id === anotherid)
// BigInt

// NON primitive ( reference ) data type  [reference deta ha or orginal ma change honta ha ]

// Array
const Heros = ["ALI" , "AHMAD" , "RAZA"]
// Object
let myObj = {
    name : "ADMINO" ,
    age  : 36 ,
}
// Function

const myFunction = function(){
    console.log("hello im Funcation");
}
myFunction(); 

// *********************MEMORY**************************

// 1. STACK (Primitive)  [not change in orginal ]

let myYoutubeName = "ADmiNO gaming"
let anotherName = myYoutubeName
anotherName = "TOP Gaming"
console.log(anotherName)
console.log(myYoutubeName)


//  2. HEAP (Non-Primitive)  [change in original value]

let userOne = {
    email : "user1@gmail.com" ,
    ID : 369 ,
}

let userTwo = userOne 
userTwo.email = "SILI@gmail.com"


console.log(userOne.email)
console.log(userTwo.email)