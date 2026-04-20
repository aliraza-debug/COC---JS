// 03_conversionandoperation.js

let score = "33abc"

console.log(typeof(score))

let valueInNumber = Number(score)

console.log(typeof(valueInNumber))
console.log(valueInNumber)




let isLoggedIn = "ADMINO" ;

let valueInboolean = Boolean(isLoggedIn)

console.log(valueInboolean)
console.log(typeof(valueInboolean))

// 1 => true , 0 => false 
// " " => false 
// " admino " => true 

// ********************* OPERATION ************************



let value = 3 
let negValue = -value
console.log(negValue) 

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);

let str1 = "ADM"
let str2 = "INO"
let str3 = str1 + str2 ;

console.log(str3) ;


console.log("1" + 2 )
console.log(1 + "2" )
console.log(1 + 2 + "2" )
console.log("1" + 2 + 2 )

console.log(true); // true
 console.log(+true); // 1
 console.log(true+); // error
