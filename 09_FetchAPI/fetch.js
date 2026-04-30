fetch('https://randomuser.me/api/')
.then(function(rawdata){
    return rawdata.json();
})
.then(function(data){
    console.log(data.results[0].name.first);
})
.catch(function(err){
    console.log(err); 
})