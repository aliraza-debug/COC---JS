// method 1 to declare

function addTwoNumbers (num1 , num2){
console.log(num1 + num2)
}
addTwoNumbers(96,6)


//  method 2 to declare a function

function addTwoNumbers (num1 , num2){
    let result = num1 + num2
    return result
    // return num1 + num2 // another method 
}
const result = addTwoNumbers ( 2 , 6)
console.log("Result : " , result );



function loginUserMessage(user="K-D"){
    if(user===undefined){
        console.log("Plz enter your name")
        return
    }
return  `${user} just logged in `
}
console.log(loginUserMessage("ADMINO"));
console.log(loginUserMessage()); // jab khuch na diya ho tu undefine ata ha 


// (...) rest operator 

function calculateCartPrice(...num){
    return num
}
console.log(calculateCartPrice(1200 , 600 , 900));


// pass obj in function

const obj = {
    username : 'SMOOKER',
    id : 63
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username}`)
}
handleobject(obj)

// pass array in function

const myARR = [100 , 900 , 600]

function returnSecondValue(getARRAY){
    return getARRAY[2]
}
console.log(returnSecondValue(myARR))