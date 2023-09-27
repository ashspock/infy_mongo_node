const express = require("express"); // importing express
const app = express(); // created an express object >> instance of express

// express instance along with http method 
// which takes two parameters 
// 1. url
// 2. callback func. (1. request, 2. response)

// route methods
// app.get('/',(req,res) => {
//     res.send("Hello World");
// })
// app.listen(3000);
// console.log("Server is running");

// -------------------------------------------------

// changing url -> /home
// app.get('/home',(req,res) => {
//     res.send("Hello World");
// })


//---------------------------------------

app.get('/home',(req,res) => {
    res.send("From Home");
})

app.get('/contact',(req,res) => {
    res.send("From Contact");
})

app.get('/about',(req,res) => {
    res.send("From About")
    next()
})

app.get('/about',(req,res) => {
    res.send("From 2nd About");
})


app.listen(3000);
console.log("Server is running");

// -------------------------------------------------
