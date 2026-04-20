const name = "ADMINO"
const level =  79 
// console.log(name +  level + " OF PUBG") (not use in modern era)


// ( string   [ INTERPOLATION `${}`  ] )
console.log(`my name is ${name} and my lvl in PUbg is ${level}`)

const gameName = new String ('      ADMINO    ')  // [ another method to declare]

console.log(gameName[3])
console.log(gameName.__proto__) // (for check)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("D"))


const newString = gameName.substring( 0 , 4 )
console.log(newString)

const anotherString = gameName.slice( -4 , 4 ) // ADMINO
console.log(anotherString) 

console.log(gameName.trim()) // remove wide space


const URL = "ADmino20@gmail.com"
console.log(URL.replace("20" , "-")) 
console.log(URL.includes("mIno")) // check wether number ha k ni 
console.log(URL.split("-")) // string ko array ma 
