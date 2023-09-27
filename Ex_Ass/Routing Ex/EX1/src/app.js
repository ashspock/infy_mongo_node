const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const router = require("./routes/routes")

app.use(bodyParser.json());
app.use(router);


app.listen(3000);
console.log("Server is up at 3000!");