const email = "a@a.gi"

if(email){
    console.log("GOT IT ");
}
else{
    console.log("NOT use")
}

// ******************  FALSY VALUE

// false 
// 0 
// -0 
// BigInt 0n 
// ""
// null 
// undefined 
// NAN 

// *******************  TRUTHY VALUE

// true 
// 1 
// " 0 "
// " false "
// " "
// []
// {}
// function(){}


 // check weather array is empty or not

const isEMAIL = [ ] 

if(isEMAIL.length === 0){
    console.log("ARRAY IS EMPTY")
}


// check weather obj is empty or not
 
const ismAIL = {}

if(Object.keys(ismAIL).length === 0 )  {   
    console.log("OBJ IS EMPTY")
}


// ****** Nullish Coalescing Operator ( ?? )  [ null , undefined ]

let val  ; 
val = 20  ??  30
val = null ?? 98 
val = undefined ?? 78 
val = null ?? 33 ?? 39

console.log(val)


// Ternary Operator

// condition ? true : false  (structure)

const IceTeaprice = 36 
IceTeaprice>=36 ? console.log("OK ha") : console.log("not ok")