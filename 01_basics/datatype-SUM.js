//kis trha data ko memory ma rakha jata ha or kis trha access kiya jata ha depend on types ...

//Primitive Data TYPES (copy kr k data dety han)

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

// NON primitive ( reference ) data type  

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

