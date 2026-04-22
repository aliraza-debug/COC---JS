// if 

const isUserLoggedIn = true ;

if (2 == "2"){
    // console.log("EXECUTED")
}

const temperature = 63 ;
if (temperature > 60 ){
    console.log("very hot outside");
}
else{
    console.log("hot outside");
}


const score = 23 ;
if (score > 20){
    let power = "fly"
    console.log(`user power : ${power}`);
}

// const balance = 200 ; 
// if(balance > 150 ) console.log("Valid Amount") ; // not readable .. 

const balance = 15 ; 
if (balance <  50) {
    console.log("Less than 50")
}
else if (balance < 80 ){
    console.log("Less than 80")
}
else if ( balance < 130){
    console.log("Less than 130")
}
else {
    console.log("Less than 203")
}


const UserLoggedIn = true ;
const debitCard = true ;
const logingFromEmail = true ;
const logingFromGoogle = false ;


if(UserLoggedIn && debitCard && (logingFromEmail || logingFromGoogle)){
    console.log("ALLOW to buy")
}