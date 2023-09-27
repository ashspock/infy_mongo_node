const fs = require('fs');

// let value = "This is the Way";
// fs.writeFile("write.txt",value, (err) => {
//     if(err){
//         console.log("I am write error");
//     }
// })

// let value = {name:"This is the Way", age:23};// Error>> needs string
// fs.writeFile("write.txt",value, (err) => {
//     if(err){
//         console.log("I am write error");
//     }
// })

let value = '{name:"Sachin", age:23}';
fs.writeFile("write.txt",value, (err) => {
    if(err){
        console.log("I am write error");
    }
})// works

// writeFile : if the file is present it overwrites the value
// if file is not present it creates the file and write into it
