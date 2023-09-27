// let empData = require('./dummy.json');
// console.log(empData);
// let collection = require('../utilities/connection');


// exports.setupDb = async() => {
//     let model = await collection.getEmployeeCollection();
//     await model.deleteMany(); // if anything is there, then delete that     
//     let insertedData = await model.insertMany(empData);
//     return insertedData;
//     //  console.log(insertedData);
// }


// let empData=require('./dummy.json');
// let collection=require("../utilities/connection");
// let setupDb=async()=>{
//     let model=await collection.getEmployeeCollection();
//     await model.deleteMany(); //if anything is there in db delete that
//     let insertedData=await model.insertMany(empData);
//     return insertedData;
// }
// setupDb().then(data=>{console.log(data)});


let empData=require('./dummy.json');
let collection=require("../utilities/connection");
dbSetup.setupDb=async()=>{
    let model=await collection.getEmployeeCollection();
    await model.deleteMany(); //if anything is there in db delete that
    let insertedData=await model.insertMany(empData);
    if(insertedData && insertedData.length > 0)
    return "Insertion Successful";
    else{
        let err = new Error("Database insertion failed");
        err.status = 503;
        throw err;
    }
    // return insertedData;
}
// setupDb().then(data=>{console.log(data)});
module.exports = dbSetup;