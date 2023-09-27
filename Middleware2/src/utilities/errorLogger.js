// let errorLogger = (err,req,res,next) => {
//     if(err){
//         console.log(new Date(), err.stack);// log the error
//         res.json({message:err.message});// send the error message to the client
//         // inform error to the client
//     }
//     next(); // for future use, if creating new request  handler
// }

// module.exports = errorLogger;

// -----------------------------------------------

const fs = require("fs");
let errorLogger = (err,req,res,next) => {
    if(err){
        let logMessage = `${new Date()}: ${err.stack} \n` ;// log the error
        fs.appendFile("ErrorLogger.txt", logMessage, (error) => {
            if(error){
                console.log("Logging failed");
            }
        })
        if(err.status){ // if the error object has any status code
            res.status(err.status); // send the error status cose as a response status
        }else{
            res.status(500); // setting a default value to 500
        }
        res.json({message:err.message});// send the error message to the client
        // inform error to the client
    }
    next(); // for future use, if creating new request  handler
}

module.exports = errorLogger;