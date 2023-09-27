const bodyParser = require("body-parser");
const express = require('express');
const app =express();

const router = require("./routes/routing");

// app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
// const { stringify } = require('querystring');

app.use(router);

app.listen(3000);
console.log("Server is up");