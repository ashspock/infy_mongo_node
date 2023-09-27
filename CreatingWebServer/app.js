// creating server inside Node JS, we have a special module http

// let http = require("http");

// http module has a method called createServer()
// this method runs ona particular port number
// and listens the request made to this port number

// createServer takes a callback func. as a parameter
// this callback func. takes 2 param. 
// 1. request: request lisener >> http.IncomingMessage
// 2. response : sends response >> http.ServerResponse

// http.createServer((request, response) => {
//     response.write("Hello Everyone");
//     // response.end();// closes the connection
//     // response.end("Bye");// Bye gets appended and the connection is closed
// }).listen(3000);
// // // assign a port number, to  server

// console.log("Server is running");

/**
 * 1. A connection is established
 * 2. A request is made
 * 3. A request is received
 * 4. A response is prepared
 * 5. A response is sent back
 * 6. Connection is closed >> acknowledgement by the server
 * 
 * while using response.write() we are sending the response but not closing
 * the connection so the client keeps on waiting before it can display the response  
*/

// let http = require("http");
// http.createServer((req,res)=>{
//     res.write("Before End");
//     res.write("Another write")
//     res.end();
// }).listen(3000);
// console.log("Server is running");

// PostMan >>  Before EndAnother write

// let http = require("http");
// let server = http.createServer((req,res)=>{
//     res.write("Before End");
//     res.write("Another write")
//     res.end();
// })
// server.listen(3000);
// console.log("Server is running");
