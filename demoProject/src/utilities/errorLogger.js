const fs=require("fs");
let errorLogger=(err,req,res,next)=>{
    if(err){
        let logMessage=`${new Date()} :  ${err.stack} \n`
        fs.appendFile("ErrorLogger.txt",logMessage,(error)=>{
            if(error){
                console.log("Logging failed");
            }
        })
        if(err.status){ //if the error object has any status code
            res.status(err.status); //send that error status code as response status
        }
        else{
            res.status(500); //setting a default value of status code
        }
        res.json({message:err.message}) //send the error message to client
        //inform the error to the client
    }
    next()//future, if in future im creating any request handler
}
module.exports=errorLogger;