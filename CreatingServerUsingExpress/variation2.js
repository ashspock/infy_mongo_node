const express = require("express"); 
const app = express();

// localhost:3000/home/mohit

app.delete('/:home/:cityId',(req,res)=>{
    res.send(`From city delete`);
})
app.get('/home/:name', (req, res) => {
    res.send(`From city get`);
  })
 
app.get('/home/mohit',(req,res)=>{
    res.send(`From get new`);
})
app.post('/home/mohit',(req,res)=>{
    res.send(`From post new`);
})
app.listen(3000);
console.log("Server is running");