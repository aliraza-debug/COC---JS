const user = {
    username : "mino",
    price : 699 ,

    welcomeMessage  : function (){
        console.log(`${this.username} , welcome to this WEB`)
        // this [ current contest(value) ko reffer krny k use hota ha ]
        console.log(this); // its show us current contest(values) of function
        
    }
}
console.log(user.welcomeMessage());
user.welcomeMessage();
user.username = "AD"
user.welcomeMessage();

console.log(this); // when no value here then (this) return an empty obj {}



function one (){
    const userr = "4T"
    console.log(this.userr) // give undifine because its work in obj not in funciton
}
one()


// ARROW FUNCTION 

const chai = () => {
    let userrr = "MILI"
    console.log(this)
}
chai()



// METHOD 1 ( arrow )

const addtwo = ( num1 , num2) =>{
    return num1 + num2
}
console.log(addtwo(9,3));

// METHOD 2 ( Implicit Return)

const addtwo = (num1 , num2 ) =>  num1 + num2  // method 2 ka method 1

const addtwo = (num1 , num2 ) =>  (num1 + num2) // method 2 ka method 2

const retrunObj = () => ({name : "ILA"})  // obj return krna arrow k ander
console.log(retrunObj.name)