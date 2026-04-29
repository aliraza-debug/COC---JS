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

// let btn = document.querySelector("#btn")
// let inpbtn = document.querySelector("#inpbtn")

// btn.addEventListener("click", function(){
//     inpbtn.click();
// })


// inpbtn.addEventListener("change" , function(detailssss){
//     const files = detailssss.target.files[0];
//     if(files){
//         btn.textContent = files.name;
//         console.log(`${files.name}`)
//     }
// })

// ******************** SUBMIT **********************

let form = document.querySelector("form")
let inputs = document.querySelectorAll("input")
let main = document.querySelector(".main")

form.addEventListener("submit" , function(data){
    data.preventDefault() ; // page ko reload ni krny deta jab submit krain tu 
    // console.log(inputs);

    let card = document.createElement("div")
    card.classList.add("card")

    let profile = document.createElement("div")
    profile.classList.add("profile")

    let img = document.createElement("img")
    img.setAttribute("src" , inputs[0].value)

    let h3 = document.createElement("h3")
    h3.textContent = inputs[1].value
    let h5 = document.createElement("h5")
    h5.textContent = inputs[2].value
    let p = document.createElement("p")
    p.textContent = inputs[3].value


    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);


    main.appendChild(card);

    inputs.forEach(function(inpp){
        if(inpp.type !== "submit"){
            inpp.value = ''
        }
    })
})


// ************* MOUSEOVER / OUT ****************

let abcd =document.querySelector(".abcd")
abcd.addEventListener("mouseover" , function(){
    abcd.style.backgroundColor = "YELLOW"
})
abcd.addEventListener("mouseout" , function(){
    abcd.style.backgroundColor = "green"
})


// **************** MOUSEMOVE *********************

window.addEventListener("mousemove" , function (detssss){
    abcd.style.top = detssss.clientY + "px"
    abcd.style.left = detssss.clientX + "px"
})