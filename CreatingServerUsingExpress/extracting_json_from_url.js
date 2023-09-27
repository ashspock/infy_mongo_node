
const express = require("express"); 
const app = express();

// // extract url from request

app.get('/home/books/:booksId/user/:userId',(req,res) => {
    console.log(req.url);
    res.send(`From ${req.url}`);
    // res.send(req.params);
})

app.get('/contact',(req,res) => {
    res.send(`From ${req.url}`);
})

app.get('/about',(req,res) => {
    res.send(`From ${req.url}`);
})

app.get('/profile',(req,res) => {
    res.send(`From ${req.url}`);
})

app.get('*',(req,res) => {
    res.send(`From ${req.url} Star`);
})
app.listen(3000);
console.log("Server is running");


// -------------------------------------------

// localhost:3000/home/delhi : extracting city from url
// /:city act as a variable which could be anyy string
// extracting city Name froma key inside req object i.e. params
// params is a object whose keyname will be the name provided in the route method
// and the value of this key will be the url sent from client
// app.get('/home/:cityName',(req,res) => {
//     console.log(req); // outputs in object(params) key-value pair city
//     res.send(`From ${req.url}`);
// })

// app.post('/:home/:cityName',(req,res) => {
//     console.log(req); // outputs in object(params) key-value pair city
//     res.send(`From ${req.url}`);
// })

// -------------------------------------------
// looking for contact where name is Sachin
// query is for contact >> condition >> name >> value >> Sachin
// localhost:3000/contact?name=Sachin
// app.get('/contact',(req,res) => {
//     console.log(req);
//     console.log(req.query); // { name: 'Sachin }
//     res.send(`From ${req.url}`);
// })
// not changing route but adding query to url

// app.get('/about',(req,res) => {
//     res.send(`From ${req.url}`);
// })

// extract using both parmas and query
// app.get('/:profile',(req,res) => {
//     console.log(req);
//     console.log("From Params", req.params.profile);
//     console.log("From Query", req.query.name, req.query.age);
//     res.send(`From ${req.url}`);
// })

// app.get('*',(req,res) => {
//     res.send(`From ${req.url} Star`);
// })
// app.listen(3000);
// console.log("Server is running");

// passing value with params works with all requests