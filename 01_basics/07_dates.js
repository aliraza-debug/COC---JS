let myDate = new Date()

console.log(myDate)

console.log(myDate.toString())

console.log(myDate.toDateString())

console.log(myDate.toLocaleString())

console.log(myDate.toISOString())

console.log(myDate.toTimeString())

// mujy ya achi lagi ha 
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())


// khud sy b dat dy skty ho 

// const myOwndate = new Date(2005 , 8 , 8) // method 1
// const myOwndate = new Date("2005-09-08") // method 2
// console.log(myOwndate.toLocaleDateString())
// console.log(myOwndate.toDateString())



console.log(Math.floor((Date.now()/1000))) // miliseconds to seconds


console.log(myDate.getMonth())


 console.log ( myDate.toLocaleString("default" ,{
    era : "short",
}))