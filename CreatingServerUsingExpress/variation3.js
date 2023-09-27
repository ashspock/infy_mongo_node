const express = require("express"); 
const app = express();

// localhost:3000/home/mohit

app.get('/:home/:cityId',(req,res,next)=>{
    next();// this will tranfer request to next matching route
    // res.send(`From city delete`);
    console.log(`From city delete`);
    // next();
})
app.get('/home/:name', (req, res) => {
    // res.send(`From city get`);
    console.log(`From city get`);
    res.send();
  })
 
app.get('/home/mohit',(req,res)=>{
    res.send(`From get new`);
})
app.post('/home/mohit',(req,res)=>{
    res.send(`From post new`);
})
app.listen(3000);
console.log("Server is running");