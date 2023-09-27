const express = require('express');
const app = express();
const router = require("./routes/routes");

app.use(express.json());
app.use('/api', router);





app.listen(3000);
console.log("Server is up at 3000");