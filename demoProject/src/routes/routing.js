const express = require("express");
const routing = express.Router();
const fs = require('fs');
const { message } = require("statuses");
const dbSetup = require("../model/dbSetup");
const db = require("../model/user");
const dbModel = require("../model/user")

// behaving as a resetting route >> everytime you run it will load db with default value
routing.post('/setup', async(req, res, next) => {
    try{
        let data = await dbSetup.setupDb();// blocking operation >>> return promise hence async await
        res.json( {message : data} );
    }catch(error){
        next(error);
    }
})

routing.get('/employees', (req, res, next) => {
    fs.readFile("../src/model/dummy.json", "utf-8", (err,data) => {
        if(err){
            next(err); // passing to error handler
        }else{
            res.json(data); // sending back to client
        }
    })
})

routing.get('/employees', async(req, res, next) => {
    try{
        let data = await db.model();
        res.json(data);
    }catch(err){
        next(err);
    }
})

module.exports = routing;