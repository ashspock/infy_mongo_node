const express = require("express"); 
const app = express();

// app.get('/a+b',(req,res) => {
// app.get('/2+3',(req,res) => {
// app.get('/x.y',(req,res) => {
// app.get(/x.y/,(req,res) => {
// app.get('/d?c',(req,res) => {
// app.get(/d?c/,(req,res) => {
// app.get(/gr(ou)?p/,(req,res) => {
app.get(/ab(cd)?e/,(req,res) => {
    // res.send('From home'); // aab ab aa...b
    // res.send('From home'); // 23 223 2222.....3
    // res.send('From home'); // only x.y works (String match)
    // res.send('From home regex'); // any character xy x@y x.y x+y ax.yb x<<any character>>y
    // res.send('From dc'); // c dc >> string match but d can be 0 or 1
    // res.send('From dc regex'); // dc dsc dccc ddddc dcfvcdsc >> regex match with c existing*
    // res.send('Checking value'); // partial regex match with ou existing together or not existing
    res.write(req.url);
    res.send() // return the entered endpoint as o/p
    // group grp agrp agroupd grpd grpdddd
    // res.send(`From ${req.url} Star`);
})

app.listen(3000);
console.log("Server is running");