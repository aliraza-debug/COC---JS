// let p = document.querySelector("p")
// p.addEventListener("click" , function(){
//     p.style.color = "green" ;
// })

// let para = document.querySelector("p")
// para.addEventListener("dblclick" , function(){
//     para.style.color = 'YELLOW'
// })

// ***********************  2nd METHOD      ***********

// let pr = document.querySelector("h1")
// function click (){
//     pr.style.color = "blue"
// }
// pr.addEventListener("click" , click )  // first click event ha or second function call 


// pr.removeEventListener("click" , click) 



// *********  INPUT ***************

// let inp = document.querySelector("input")
// inp.addEventListener("input" , function(details){
//     if(details.data !== null){
//         console.log(details.data); 
//     }
// })

// let inpt = document.querySelector("input")
// inpt.addEventListener("input" , function(dets){
//     if(dets.data !== null){
//         console.log(dets.data)
//     }
// })



// **************** change ******************

// change event tab chalta ha jab ap ka koi input select ya text area ma koi change ho jay 

// let scl = document.querySelector("select")
// let device = document.querySelector("#device")
// scl.addEventListener("change" , function(dts){
//     // console.log(dts.target.value); 
//     device.textContent = `${dts.target.value} Device SELECTED` ;
// })



// let selected  = document.querySelector("select")
// let device = document.querySelector("#device")

// selected.addEventListener("change" , function(val){
//     console.log(val.target.value);
//     device.textContent = `${val.target.value} Selected`;
    
// })


// *********** KEYDOWN *******************


// let ach1  = document.querySelector("h1")

// window.addEventListener("keydown" , function(detss){
//     if(detss.key === " "){
//         ach1.textContent = "JAAA RYYYYY"
//     }else{
//     ach1.textContent = `${detss.key}`
//     }
// })

 
//  *********** ACCESS FILES *********

let btn = document.querySelector("#btn")
let inpbtn = document.querySelector("#inpbtn")

btn.addEventListener("click", function(){
    inpbtn.click();
})


inpbtn.addEventListener("change" , function(detailssss){
    // console.log(detailssss.target.files[0].name)
    btn.textContent = `${detailssss.target?.files[0].name}`
})