const marvel_heros = ["ironman" , "spiderman"]
const dc_heros = ["flash" , "superman"]

// marvel_heros.push(dc_heros) // array k ander array deta ha na k aik array ma vales .

// console.log(marvel_heros)


const allheros = marvel_heros.concat(dc_heros) // it return a whole array
console.log(allheros)


// speard operators ( ... )

const new_heros = [...marvel_heros , ...dc_heros] // more efficent way to combine array 
console.log(new_heros)

const ajeeb_array = [0 , 6 , 3 , 5 , [ 2 , 9 ] , 7 , [2 , 9 , 6 , [6 , 8 ,9]]]
console.log(ajeeb_array.flat(Infinity)) 
// use FLAT ( jo sab array ko aik array ma kr deta ha )
// infinity ka mtlb ha jitni b array han sab ko kr do 

console.log(Array.isArray("ADMINO")); 
//  .isArray  [ check krta ha array ha k ni ]  
console.log(Array.from("ADMINO"));  
// .from [array m aconvert kr deta ha jo b ho ]
console.log(Array.from({name : "RAZA"}));   // interesting .... 



let socre1 = 100 
let socre2 = 200 
let socre3 = 300 

console.log(Array.of(socre1,socre2,socre3)) 
// .of ( sab variable ko array ma ocnvert krta ha na k string or object ko )