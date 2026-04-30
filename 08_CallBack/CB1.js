function khuchdairbaadchaloga(fnc){
    setTimeout(fnc , Math.floor(Math.random()*10)*1000);
    }
khuchdairbaadchaloga(function(){
    // console.log("Han bhai bol");
})

// aik function ko agr ap aik or function bej rahy ho parameter ma tu wo function CALLBACK function kehlay ga

// function getProfile(username , cb){
//     console.log(" Fetching Profile data .... ");
    
//     setTimeout(() => {
//         cb({username, age : 20 , email: "haha@ha.com" })
//     }, 2000);
// }

// function getPost(id , cb){
//     console.log(" POST fechting");
//     setTimeout(() => {
//         cb({id:id , post: ["a" , "s" , "ssss" , "peoe"]})
//     }, 3000);
// }
// function savedPost(save , cb){
//     console.log("SAVED POST fechting");
    
//     setTimeout(() => {
//         cb({save : save , Spost : ["MIA" , "47"]})
//     }, 3500);
// }
// getProfile("ADMINO" , function(data){
//         console.log(data)
//     getPost(data.id , function(post){
//         console.log(post);
//     savedPost(post.save , function(saved){
//         console.log(saved);
//     })    
//     })
// })


// ************************** Promise ********************

// jab ap aik promise banaty ho jo k 2 state ma sy 1 state ma jaa sakta ha ya tu wo resolve ho ga ya to wo reject ho ga .. ab wo kya ho ga wo wqt bttay ga pr hamain dono k liy code likhna prta ha 


let pr = new Promise(function(res,rej){
    setTimeout(() => {
        let rn = Math.floor(Math.random()*10);
        if(rn > 5){
            res("Resolved with : " + rn);
        }
        else{
            rej("Reject with : " + rn);
        }
    }, 1000);
})

pr 
.then(function(val){
    console.log(val);
})
.catch (function(val){
    console.log(val);
})