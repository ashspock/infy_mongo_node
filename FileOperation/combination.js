const fs = require('fs');
fs.readFile("data.txt","utf-8", (err,data) => {
    if(err){
        console.log(err);
    }else{
        fs.writeFile("combination.txt",data,(err) => {
            if(err){
                console.log(err);
            }else{
                console.log("operation performed");
            }
        })
    }
})