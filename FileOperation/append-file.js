const fs = require("fs");
let value = "Pinkman";
// fs.appendFile("append.txt",value,(err) => {
//     if(err)
//     console.log(err);
// })

/// new line 1.
fs.appendFile("append.txt",`\n ${value}`,(err) => {
    if(err)
    console.log(err);
})