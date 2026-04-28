const h1 = document.querySelector("h1");
// h1.textContent = "DOM with SHeriyan" ;
h1.innerHTML = "<i>DOM = COC / SCS</i>" ;
// console.dir(h1);

const h22 =  document.querySelector("h2");
h22.innerHTML = "HEY im ADMINO" ;

let a = document.querySelector("a")
// console.dir(a.getAttribute("href"));
// a.removeAttribute("href");
// a.setAttribute("href" , "https://www.google.com")

let img = document.querySelector("img")
// img.setAttribute("src" , "https://images.unsplash.com/photo-1777221490079-b949ecac1a9e?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")



// CREATE an Element in JS 

let h4 = document.createElement("h4");
h4.textContent = "HEY im willing to learn DOM"

// show on page 

document.body.append(h4) ;  // M1 to attch
document.querySelector("body").prepend(h4) // M2 to Attach

// JS sy CSS badalna 

let h2 = document.querySelector("h2")
h2.style.color = " green "
// console.dir(h2) 

// attach class to specific element 

let h12 = document.querySelector("h2")
h12.classList.add("hihi")
h12.classList.remove("hihi")
h12.classList.toggle("hihi") // lagi ho gi tu hata dy ga .. and ni lagi ho gi tu laga  dy ga 


// ****************** WHAT  RETURN  ********************


// let tt = document.getElementById("tittle")
// console.log(tt); // return whole html of given id ---


// let rr = document.getElementsByClassName("heading")
// console.log(rr); // return HTML collection 


// let pp = document.querySelector("h2")
// console.log(pp); // return whole html --- 


// let oo = document.querySelectorAll("h2")
// console.log(oo);  // return node list --- 


// ************* TASK ******************

1.  

let imp = document.querySelector("#imp")
imp.textContent = "WELCOME to this WORLD"


2. 

let lis = document.querySelectorAll("li") 

//  M1 .

lis.forEach(function(val){
    console.log(val.textContent)
})

// M2 .

for( i = 0 ; i < lis.length ; i ++ ){
 console.log(lis[i].textContent);
}


3.


let div = document.querySelector("div");
div.setAttribute("title" , "some info");  


4. 

let ul = document.querySelector("ul")
let lin = document.createElement("li")
lin.textContent = "APPLE 7" ;
ul.appendChild(lin)


5. 

let imgg = document.createElement("img")
img.setAttribute("src" , "https://images.unsplash.com/photo-1774327988852-531c6eba5397?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8" )
imgg.classList.add("placeholder")
document.querySelector("div").prepend(imgg);


6.

let ull = document.querySelector("ul")
let lli = document.querySelector("li")
lli.remove(lli);


7. 

let listt = document.querySelectorAll("ul li:nth-child(2n)")
listt.forEach(function(ele){
    ele.classList.add("highlight")
})


8. 

let para = document.querySelectorAll("p")
para.forEach(function(vall){
    vall.style.fontSize = "30px" 
})