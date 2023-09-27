const express = require("express");
const routing = express.Router(); // to create route/handlers >> routing is an instance

routing.post("/login", (req,res,next) => {
    console.log(req.body);
    res.send();
})
module.exports = routing;