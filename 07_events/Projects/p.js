// Character Counter
let inp = document.querySelector("input")
let span = document.querySelector("span")
inp.addEventListener("input" , function(){
    // console.log("input howa");
    span.textContent = inp.value.length ;
})