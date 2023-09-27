// const express = require('express');
// const app = express();

//user-defined middleware
// let mylogger = (req,res,next) => {
//   console.log('Request method is '+ req.method); // console
//   console.log('Request url is '+ req.url); // console
//   next();	
// }
// app.use(mylogger);
// app.get('/adminLogin',(req,res) => {
// 	res.send("Admin login Success"); // in postman
// });
// app.get('/userLogin',(req,res) => {
// 	res.send("User login Success"); // in postman
// });

// app.listen(8000);
// console.log("Server started at port 8000!");

// ******************************************************

const express = require("express");
const app = express();
const router = require('./routes/routing.js');
const myRequestLogger = require('./utilities/requestLogger.js');

app.use(myRequestLogger);
app.use('/', router);
console.log("Server Started at port 3000!")
app.listen(3000);


