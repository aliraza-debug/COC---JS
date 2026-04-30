let prrr = new Promise(function(res,rej){
    setTimeout(()=>{
    let rn  =  Math.floor(Math.random()*10)
    if(rn > 5){
        res("Resolved " + rn)
    }
    else{
        rej("Reject " + rn)
    }
 },1000)
})

async function fnc (){
    try{
    let val = await prrr
    console.log(val);
    }
    catch(err){
    console.log(err);
    }
}
fnc()