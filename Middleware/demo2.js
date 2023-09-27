const express = require('express');
const demo2 = express();
const router = express.Router();
// const {middleware, visualizer } = require("express-routes-visualizer");

let fun1 = (req, res, next)=>{
    console.log("function 1");
    next();
}
let fun2 = (req, res ,next)=>{
    next();
    console.log("function 2");
}
let fun3 = (req, res, next)=>{
    console.log("function 3");
    next();
}
demo2.use("/", fun2, router)

demo2.all("*", fun3);

router.get("/user", (req, res, next)=>{
    console.log("Get Route");
    next();
})
router.use("/user", fun1)
demo2.use("/", (req, res)=>{
    console.log("App middleware");
})
//  demo2.use(
//      '/routes',
//      middleware({httpmethods : true}),
//      visualizer({ theme: 'dark-blue'})
// )
demo2.listen(3000);
console.log("Server is up");