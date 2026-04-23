const coding  = ["JS", "PYTHON" , "TS" , "REACT"]

coding.forEach(function(val){
    // console.log(val);
})

coding.forEach((items)=>{
    // console.log(items);
})

function printme(items){
    console.log(items);
}
// coding.forEach(printme)


coding.forEach((items , index ,arr)=>{
    // console.log(items , index , arr);
})

const myCoding = [
    {
        langname : "JS",
        file : ".js"
    },
    {
        langname : "TS",
        file : ".Ts"
    },
    {
        langname : "Python",
        file : ".py"
    }
]

myCoding.forEach((coding)=>{
    console.log(coding.langname); // array k ander sy object k value ko acces krna
})

