// const tinderUser = new Object () // singleton object 

const tinderUser = {} // non singleton object

tinderUser.id = "123abc"
tinderUser.email = "tinder@gmail.com"
tinderUser.isLoggedIn = true 

// console.log(tinderUser);

const regularUser = {
    email : "ru@gmail.com", 
    fullname : {
        userfullname : {
            fn : "ADM",
            ln : "NIO",
        }
    }
}

// console.log(regularUser.fullname.userfullname.ln); 


const obj1 = { 1 : 'a' , 2 : 'b'}
const obj2 = { 3 : 'c' , 4 : 'd'}

// const obj3 = {obj1 , obj2} // method 1 : obj k obj ban jay ga

// const obj3 = Object.assign({} , obj1 , obj2 ) // method 2 : aik hi obj ma sab store

const obj3 = {...obj1 , ...obj2} // method 3 : best ever

console.log(obj3);



 // when data comes from BACKEND 

const users = [ 
    {
        id : 12 ,
        email : "m@gmail.com"
    },
      {
        id : 12 ,
        email : "m@gmail.com"
    },
      {
        id : 12 ,
        email : "m@gmail.com"
    },
]

console.log(users[1].email)

// -------------------

console.log(tinderUser) ; 
console.log(Object.keys(tinderUser)) // ya array ma store krti ha data
console.log(Object.values(tinderUser)) // ya array ma store krti ha data

console.log(tinderUser.hasOwnProperty('id')) // check weather property has or not