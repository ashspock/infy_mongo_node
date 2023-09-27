
//// -----------------Reading from a file
// const fs = require('fs');
// // fs > file system module

// // fs.readFile("data.txt");
// // readFile(<<url>>,<<encoding>>,<<callback>>)

// fs.readFile("data.txt", "utf-8", (err,data) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })

// console.log("i'm from file.js"); // executed first
// // hence reading from a file is async opr. 
// i'm from file.js
// Hello I am present in data.txt file

//----------- without encoding------------------

// const fs = require('fs');
// fs.readFile("data.txt", (err,data) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })

// console.log("i'm from file.js"); 
// i'm from file.js
// <Buffer 48 65 6c 6c 6f 20 49 20 61 6d 20 70 72 65 73 65 6e 74 20 69 6e 20 64 61 74 61 2e 74 78 74 20 66 69 6c 65>

const fs = require('fs');
fs.readFile("data.txt","utf-8", (err,data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})
let data = fs.readFileSync("data.txt","utf-8");
console.log("I am from sync",data);
console.log("i'm from file.js");