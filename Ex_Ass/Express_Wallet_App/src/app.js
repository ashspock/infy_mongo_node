const express = require('express');
const router = require('./routes/routes');
const bodyParser = require("body-parser");// body-parser is a Node.js body parsing middleware which parse incoming request bodies and makes the data readable under the request.body property.
//  Without this middleware, data sent through POST request is inaccessible.
const app = express();


app.use(bodyParser.json());

app.use('/', router);


app.listen(3000);
console.log("Server listening in port 3000");
