
const express = require('express');
const routing = express.Router();
const fs = require('fs');
// const { stringify } = require('querystring');

routing.get('/getAllShows', (req,res,next)=> {
    fs.readFile("showDetails.txt", "utf-8", (err,data)=> {
        if(err){
            console.log(err);
        }else{
            res.send(data);
            // console.log(data);
        }
    })
})

routing.post('/bookMovie', (req,res)=> {
    // fs.appendFile("movieBooking.txt", `\n ${req.query.bookingId}`, (err)=> { // does not work
    fs.appendFile("movieBooking.txt", `\n ${JSON.stringify(req.body)}`, (err,data)=> {
        if(err){
            console.log(err);
        }
        res.send(data);
    } )
})

module.exports = routing;


