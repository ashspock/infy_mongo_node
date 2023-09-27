
// --------------Chaining of routes---------------

// chaining, passing request from aone router method to another

// const express = require("express"); 
// const app = express();

// app.get(<<url>>,<< 1st route handler >>,<< 2nd route handler >>..)   )
// app.get("/show",(req,res,next)=>{
//     console.log(1);
//     next()
// },(req,res,next)=>{
//     next()
//     console.log(2)
// },(req,res,next)=>{
//     console.log(3)
//     res.end();// end the response process
// });

// let handler1 = (req,res,next)=>{
//     console.log(5);
//     next();
// }
// let handler2 = (req,res,next)=>{
//     console.log(6);
//        res.end();
//     next()
// }
// let handler3 = (req,res,next) => {
//     console.log(7);
// }

// // multiple handlers
// app.get("/display",[handler1,handler2,handler3]); // array of callback functions

// app.listen(3000);
// console.log("Server is running");

//--------------------------------

const express = require("express"); 
const app = express();
// creating handlers
let handler1=(req,res,next)=>{
    console.log(5)
    next();
}
let handler2=(req,res,next)=>{
    next()
    console.log(6)
}
app.get("/display",[handler1,handler2],(req,res,next)=>{
    console.log(7)
});

app.listen(3000);
console.log("Server is running");


/**
 * 5
 * 7
 * 6
 */

/**
 * 
res.download() >>	Prompt a file to be downloaded.
res.end() >>	End the response process.
res.json() >> 	Send a JSON response.
res.jsonp() >> 	Send a JSON response with JSONP support.
res.redirect() >> 	Redirect a request.
res.render() >>	Render a view template.
res.send() >>	Send a response of various types.
res.sendFile() >>	Send a file as an octet stream.
res.sendStatus() >>	Set the response status code and send its string representation as the response body.
 */