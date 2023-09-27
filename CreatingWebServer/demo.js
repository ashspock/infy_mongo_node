// let http = require("http");
// let server = http.createServer((req,res)=>{
//     res.write("<h1>Hello</h1>"); // html 
//     res.write("Another write")
//     res.end();
// })
// server.listen(3000);
// console.log("Server is running");


// ---------Order Matters----------
// let http = require("http");
// let server = http.createServer((req,res)=>{
//     res.write("Hello");
//     res.write("<h1>Hello</h1>"); // html not applied
//     // res.write("Another write")
//     res.end();
// })
// server.listen(3000);
// console.log("Server is running");


// The first write will define the type of data/response sent back to the client
// If the first write is HTML everything after it will also be HTML
// But if the first  write is String everything after it will also be string

// let http = require("http");
// let server = http.createServer((req,res)=>{
//     res.write("<h1>Hello</h1>"); // html applied
//     res.write("Hello"); // also applied here
//     // res.write("Another write")
//     res.end();
// })
// server.listen(3000);
// console.log("Server is running");

// -------------------------------
// let http = require("http");
// let server = http.createServer((req,res)=>{
//     res.writeHead(200, {"Content-Type" : "text/html"})// setting the response header
//     // setting of header should be the first response*
//     // status code : 200
//     res.write("Hello"); //
//     res.write("<h1>Hello</h1><h2>Bye</h2>"); // html applied
//     // res.write("Another write")
//     res.end("Inside End");// can be only one res.end()
//     // writes and sends the closing acknowledgement
// })
// server.listen(3000);
// console.log("Server is running");

//-----------------------------------