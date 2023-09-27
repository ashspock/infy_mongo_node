const express = require("express");
const app_new = express();
const router = require("./routes/routing"); 
const requestLogger = require("./utilities/requestLogger");
const errorLogger = require("./utilities/errorLogger");
// const morgan = require("morgan")

// ** order of middleware
app_new.use(express.json());

// app_new.use(morgan());// 3rd party request logging middleware
// app_new.use(morgan('tiny'));


app_new.use(requestLogger);// want to 

app_new.use(router);

app_new.use(errorLogger);

app_new.post("/login", (req,res,next) => {
    console.log("Hello");
})

app_new.listen(3000);
console.log("Server is running");

// ** application level middleware >> when we use app_new.use()
// router