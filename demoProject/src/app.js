const express = require("express");
const app = express();

const router = require("./routes/routing");

const requestLogger = require("./utilities/requestLogger");

const errorLogger = require("./utilities/errorLogger");





app.use(requestLogger);

app.use(router);

app.use(errorLogger);




app.listen(3000);
console.log("Server is Running");