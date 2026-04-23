//  **************************  for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 7){
        // console.log("CR7")
    }
    // console.log(element)
}

for (let i = 1; i <= 10 ; i++) {
    // console.log(`table of ${i}`);
    
    for (let j = 1; j <=10 ; j++) {
        // console.log(`Inner loop ${j} & inner loop ${i}`);
        // console.log(i + '*' +  j + "=" +  i * j );
    }
}

const newArray = ["flash" , "Superman" , "aDMINo"]
for (let index = 0; index < newArray.length; index++) {
    const element = newArray[index];
    // console.log(element)
}

// break & continue 



// 1. BREAK


for (let index = 0; index < 11 ; index++) {
    const element = index;
    if (element == 5 ){
        // console.log("5 is Detected")
        break; // stop the execution of loop 
    }
    // console.log(element)    

// 2. CONTINUE 


for (let index = 0; index < 11 ; index++) {
    const element = index;
    if (element == 5 ){
        // console.log("5 is Detected")
        continue; // means skip for one time 
    }
    // console.log(element)
}
}

