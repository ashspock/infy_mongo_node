const express = require('express');
const demo = express();
const router = express.Router();

demo.use("/api", router);

demo.all("*", (req, res, next) => {
    console.log("App Route");
    next();
})

router.get("/user", (req, res, next) => {
    console.log("User Route");
    next();
})

router.use("/user", (req, res, next)=> {
    console.log("New User");
})
demo.use("/", (option, value)=>{
    console.log("method 1");
})
router.all("/:name", (req, res, next)=>{
    console.log("Final Route");
})

demo.listen(3000);
console.log("Server is up");