const express = require('express');
const create = require("./model/dbsetup")
const tester = require("../parserModule/parser").reportGenerator
const app = express();



// Import necessary modules and configure the middleware in proper order
// Note :  Do not remove any code which is already given 





app.get('/setupDb', async(req, res, next) => {
    try {
        let data = await create.setupDb();
        res.send(data)
    } catch (err) {
        res.send("Error occurred during insertion of data")
    }
})

app.get('/test', async(req, res, next) => {
    try {
        let data = await tester();
        console.log("--- Verification Completed ---")
        res.send(data);
    } catch (err) {
        console.log(err.message);
    }
})

if (!module.parent) {
    app.listen(1050);
}
console.log("Server listening in port 1050");


module.exports = app;