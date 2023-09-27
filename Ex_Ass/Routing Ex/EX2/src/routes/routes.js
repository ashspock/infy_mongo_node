const express = require("express");
const { copyFileSync } = require("fs");
const routing = express.Router();

let handler1 = (req, res, next)=>{
    // console.log("from h1" , req.body.marks);
    let marksArr = req.body.marks;
    let total = 0;
    for(mark of marksArr){
        total += mark;
    }
    req.body.totalScore = total;
    // console.log(req.body.totalScore);
    // console.log(total);
    const avg = total/marksArr.length;
    if(avg < 50){
        console.log("Total marks:\t"+ total +". Not eligible for scholarship");
    }else{
        next();
        console.log("Total marks "+total+". Obtained grade "+grade+". Eligible for "+sch+" %scholarship.");
    }
    // console.log(total, avg);
    // console.log(totalScore, avg);
    // next();
}

let handler2 = (req, res, next)=> {
    // console.log("from h2", req.body.totalScore);
    const avg = req.body.totalScore/4;
    if(avg>50 && avg<70){grade = 'B'; sch = 5;}
    if(avg>70 && avg<85){grade = 'B'; sch = 15;}
    if(avg>85 && avg<=100){grade = 'A'; sch = 20;}
    return(grade, sch);
}


routing.post("/marks", [handler1, handler2]);



module.exports = routing;