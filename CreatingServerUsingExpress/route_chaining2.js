const express = require("express"); 
const app = express();

// I am using same url for each http methods
// app.get("/same",(req,res) => {
//     console.log(1);
// })
// app.post("/same",(req,res) => {
//     console.log(2);
// })
// app.put("/same",(req,res) => {
//     console.log(3);
// })
// app.delete("/same",(req,res) => {
//     console.log(4);
// })

app.route("/same")
    .get((req,res) => {
        console.log(1)
    })
    .post((req,res) => {
        console.log(2)
    })
    .put((req,res) => {
        console.log(3)
    })
    .delete((req,res) => {
        console.log(4)
    })
app.listen(3000);
console.log("Server is running");