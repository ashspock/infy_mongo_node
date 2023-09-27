const express = require("express"); 
const app = express();

app.get('/home',(req,res) => {
    res.send("From Home");
})

app.post('/contact',(req,res) => {
    res.send("From Contact");
})

app.put('/about',(req,res) => {
    res.send("From About");
})

app.delete('/profile',(req,res) => {
    res.send("From Profile");
})

// from all accepts requests from all HTTP methods
// if not sure which kind of request will be received we use it
app.all('/random',(req,res) => {
    res.send("From All");
})

app.listen(3000);
console.log("Server is running");