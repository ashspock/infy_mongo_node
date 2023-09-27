// const express = require("express");
// const app = express();

// app.get('/show',(req,res,next) => {
//     let err = new Error("Check ME");
//     next(err);
//     throw new Error("Check Me"); // once the error is thrown ,
//     // it looks for an error handler.
//     // if it is present, the request gets transferred to the request handler
//     // else the error is thrown to client as well as in the console
//     // error handler has 4 params in its call-back
// })

// // this is to catch the error
// app.use('/show', (err,req,res,next) => {
//     console.log("from 4 params", err);
// })

// let errorHandler = ('/show', (err,req,res,next) => {
//     console.log("from 4 params", err);
// })

// // error thrown only on  server side,
// app.use(errorHandler);

// // error thrown on client side as well
// // app.get(errorHandler);

// app.listen(3000);
// console.log("Server is running");

/**
 * If the handler has four params (err, req, res, next)
 * 1st param >> error object
 * 2nd param >> request
 * 3rd param >> response
 * 4th param >> transfer
 * 
 * If the handler has 3 params (req, res, next)
 * 1 >> request
 * 2 >> response
 * 3 >> transfer
 */

// -------------------------------------------------------------

const express = require("express");
const app = express();

app.get('/show',(req,res,next) => {
    throw new Error("Check Me");
})

let errorHandler = ('/show', (err,req,res,next) => {
    console.log("from 4 params", err.message);
    // next(); // transferring to a request handler
    next(err); // transfers request to a error handler
})

// **transferring of request from one middleware to another >> chaining of middleware*
app.use(errorHandler);

app.use((req,res) => {
    console.log("in request handler");
})

app.use((err,req,res,next) => {
    console.log("handling error");
})

// app.get((err,req,res,next) => {     // doesn't work
//     console.log("handling error");
// })

app.listen(3000);
console.log("Server is running");