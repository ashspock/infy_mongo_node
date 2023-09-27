const express =require('express');
const routing = express.Router();
const fs = require('fs');

routing.get('/getAll', (req,res,next)=>{
    fs.readFile("games.txt", "utf-8", (err, data)=>{
        if(!err)
            res.sendStatus(200);
        else{
            err.status=500;
            err.message="Error occured while fetching data";
        }
    })
})

let handler1 = (req,res,next)=>{
        console.log(req.params);
        next();
}

let handler2 = (req,res,next)=>{
        res.send(`Filter By Year`+`\t ${(req.params.year)} \t`+`was applied`)
        next();
}

routing.get('/params/:year',[handler1,handler2]);

routing.get('/query', (req,res)=>{
    res.send(`Filter By Name`+`\t ${req.query.name} \t`+`was applied`)
})



module.exports = routing;