// Event Bubbling & Capturing 



// 1.Event Bubbling

// jis pr event ay ga agr us pr listener ni howa tu hamara event us k parent pr listener dhoondhy ga or aisa krty krty uper ki trf move kry ga 

document.querySelector(".nav")
.addEventListener("click", function(){
    alert("clicked")
})


// 2. Event Capturing 

// jab bhai app click krty ho ya koi bhi event raise krty ho tu app ka  event flow 2 phase ma chalta ha  : 

// phase 1 : event top level element se neechy ki trf ata ha 
// phase 2 : event raise element se parent ki trf ata ha 

// pehly capture phase chalta ha phir bubbling phase chalta ha ... 

let btn = document.querySelector("button")
let a = document.querySelector("a")
let b = document.querySelector("b")
let c = document.querySelector("c")

btn.addEventListener("click" ,function(){
    console.log("button clicked");
})
a.addEventListener("click" ,function(){
    console.log("a clicked");
})
b.addEventListener("click" ,function(){
    console.log("b clicked");
})
c.addEventListener("click" ,function(){
    console.log("c clicked");
},true)