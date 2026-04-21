// declearaion of OBJECTS

const { json } = require("express")

//  1 . singleton (jo ham constructor ki madad sy banaty han)
           Object.create

//  2 . object literals 


const mySym = Symbol("key1")
const JSuser = {
    name : "JS LEARNER" ,
    "First name" : "ONmiDA"  ,// not access byt (JS. -- )
    age  : 69 ,
   [mySym] : "mykey 1" , // jab [ ] use karain as a symbol use ho ga 
    location : "UK" ,
    email : "google@gmail.com" ,
    isLoggedIn : true ,
    lastLoggedIn : ["monday" , 'saturday']
}
console.log(JSuser.lastLoggedIn) // Method 1 to access 
console.log(JSuser["email"]) // method 2 to access
console.log(JSuser[mySym]);
console.log(typeof JSuser[mySym]);
 

JSuser.email = "gpt@gmail.com" // change value
Object.freeze(JSuser) // freeze krna means koi value change ni ho gi 

console.log(JSuser)