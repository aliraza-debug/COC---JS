// for of  // har term ko aik aik kr dekhata ha 

const arr = [ 3 , 9 , 8 , 6 , 6]
 for (const array of arr) {
    // console.log(`My array is ${array}`)
 }


 const greetings = "Hello World ! "
 for (const greet of greetings) {
    if (greet === " "){
        continue
    }
    // console.log(`My CHar of Greets is ${greet}`)
 }

//  ******************* MAPs  // uniques value k liy use hota (dublicate) values ni ati han 

const map = new Map()
map.set("PK" , "PAKISTAN")
map.set("K" , "KOREA")
map.set("GR" , "germany ")

// console.log(map);

for (const [key , value] of map) {
    // console.log(key); // is trha karain gy tu array ma value mily gi 
    // console.log(key , ":-" , value); // without array 
}


