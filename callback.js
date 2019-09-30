a(2,function(firstresult,err){
    if(!err){
        console.log(firstresult); 
        b(firstresult,function(secondresult,err){
            if(!err){
                console.log(secondresult); 
                c(secondresult,function(thirdresult,err){
                    if(!err){
                       console.log(thirdresult); 
                    }
                });
                
            }
        });
        
    }
});





function c(value,callback){
    callback(value*4,false)
}
function b(value,callback){
    callback(value-2,false)
}
function a(value,callback){
    callback(value+9,false)
}