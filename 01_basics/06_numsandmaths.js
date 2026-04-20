// ************************NUMBERS********************
const score = 400 
// console.log(score);

const balance = new Number ( 300 )
// console.log(balance)

// console.log(balance.toString()) // number ko string ma kr deta ha 
// console.log(typeof(balance.toString())) 
// console.log(balance.toFixed(3)) // value k baad kitny digit / decimal ay gy  
// console.log(balance.toPrecision(3)) // value ko kitny digit ma precise krna ha ya round off krna ha


const number = 110236400 
// console.log(number.toLocaleString('en-PK')) // long number ko readable banata ha using comas

// ******************* MATHs ************************

console.log(Math)
console.log(Math.abs(-4)) // negative integers ko positive ma krta ha positive ko negative ma ni krta


console.log(Math.round(4.6)) 
console.log(Math.ceil(4.6)) // rounding ma top value choose krta ha means 4.1 b ho ga tu 5 hi kry ga      
console.log(Math.floor(4.6)) // rounding ma low value choose krta ha means 4.9 b ho ga tu 4 hi kry ga      


console.log(Math.min( 3, 6, 9 ,66 ,88 ,7 ,0)) // choose minimum value 
console.log(Math.max( 3, 6, 9 ,66 ,88 ,7 ,0)) // choose maximum value

 //most commonly used of MATH is math.random
  
console.log(Math.random()); // chose random value b/w 0 - 1 
console.log((Math.random()*10) + 1)
console.log(Math.floor((Math.random()*10) + 1)) 

const min = 50
const max = 500 
  

// most important formula ...

console.log(Math.floor(Math.random() * (max - min + 1 ) ) + min ) 

