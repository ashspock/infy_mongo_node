const express = require("express");
const routing = express.Router(); // to create route/handlers >> routing is an instance

routing.post("/login", (req,res,next) => {
    // console.log(req.body);
    throw Error("From routes");
})

routing.use("/login",(req,res,next) => {
    console.log("Router Level Middleware");
})

module.exports = routing;