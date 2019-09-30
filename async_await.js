function alpha(trip){
    console.log("alphabatic");
    return new Promise((resolve,reject)=>{
    
    if(trip){
    resolve("we have planned a trip")
    }
    else{
        reject("no parameter no trip")
    }
    })
    
    
    
    }
    async function trip(trip){
    console.log("async await by "+trip);
    try{
    var cancel=await alpha();
    console.log(cancel);
    
    }
    catch(error){
        console.log(error);
        
    }
    
    }
    trip("shimla")