// Immediatley Invoked Function Expressions ( IIFE ) 
 
// REASONS to USE 

// 1. aik file ha jis ma data base ka connection or ham chahty han k jab app start ho tu usi time database ka connection start ho jay 
// 2. global scope sy polution  


// SIMPLE fnction

function IIFE_0 (){
    console.log(`DB connected 0.1`)
}
IIFE_0() ;

// IIFE Function 

(function IIFE (){
    console.log(`DB connected`);
})(); 
 
// ( ; ) IIFE k ander ya zaroorai ha is begair next function ni chaly ga

( (name) => {
    console.log(`DB connected two ${name}`);
})("AQUA"); 
 
    