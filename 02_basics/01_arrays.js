const myArr = [0,1,2,3,4,5]
const myArr2 = new Array ( 0 , 9 , 8 , 6)
console.log(myArr[3]);
console.log(myArr2[3]);

// *****************ARRAY METHOD********************

myArr.push(36,39);  // add at last 
console.log(myArr)
myArr.pop() // remove from last 
console.log(myArr)
myArr.unshift(79) // add at start
console.log(myArr)
myArr.shift() // remove from start
console.log(myArr) 


console.log(myArr.includes(3)) // number ha array ma k nahi 
console.log(myArr.indexOf(5)) // number ka index bttata ha  


const newArr = myArr.join() // join krta ha or array ko string ki form krta ha 
console.log(newArr)


// SLICE & SPLICE 

const arr1 = [0,9,7,3]
console.log("A" , arr1)

const arr11 = arr1.slice(0,2)  // last index include ni hota ha 
console.log(arr11)

console.log("B" , arr1) 

const arr2 = arr1.splice(0,2) 
console.log("c" , arr1) 
console.log(arr2)

 

