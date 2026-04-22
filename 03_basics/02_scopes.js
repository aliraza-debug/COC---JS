let a  = 900  
if (true){
    let a = 10 
    const b = 20
    var c = 30
    // console.log("inner  :  " ,a)
}
// console.log("outer : " , a)
// console.log(b)
// console.log(c)  


function one ( ){
    const username = "SYSTUMM"

    function two ( ){
        const Idlvl = "81"
        console.log(username)
    }
    // console.log(Idlvl)
    two() // jab tk two chaly ga tab ta one() chaly ga .because agr two ko kisi ny access hi ni kiya tu banany ki zaroorat hi kya thi or wesy b two () k ander one () ka variable k ha is liy

}
one() 


// ****************** INTERESTING *********************

1. 

addone() // ya pehly access ho jay because ya function variable bana kr ni banaya

function addone (num){
    return num + 1
}

2.

addtwo() // ya pehly access ni ho ga ... because of make function using variable

const addtwo = function (num){
    return num + 9
}


