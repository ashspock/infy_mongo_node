// // Importing
// const Mongoose = require("mongoose");
// const {Schema} = require("mongoose"); // {Schema} >> object

// // defining the structure : we need to create schema

// // let <<variable>> = Schema({key and datatype details},{collection name})
// let characterSchema = Schema({
//     name : String,
//     age : Number,
//     gender : String
// },{collection:"Character"});

// // type of database:<<ip>>:<<port>>/<<db Name>>
// let url = "mongodb://localhost:27017/drama";// connection string

// // .connect() >> creating a connection between demo.js and the db: drama
// let getCollection = () => {
//     return Mongoose.connect(url, {useNewUrlParser: true,  useUnifiedTopology: true }) // returns :  Promise { <pending> }
//     .then(data => {
//         // i'm mapping my collection and schema inside mongodb using model method
//         return data.model("Character", characterSchema);
//     }).catch(err => {
//         // let err = new Error("could not connect to database");
//         err.meassage = "Could not connect to database"
//         err.status = 500;
//         throw err;
//     }) 
// }
// // getCollection().then( data => {console.log(data)});// returns a model, which refers to the character collection
// // console.log(getCollection());

// let data = {
//     name : "Gohan",
//     age : 23,
//     gender : "male"
// }

// let inserData = () => {
//     // calling the collection
//     return getCollection().then(model => {
//         // return data;
//         return model.create({name : "Gohan", age : 23, gender : "male"}).then(dataCreated => {
//             return dataCreated;
//         })
//         // model.create(data); // alternative to above
//     })
// }
// // console.log(inserData());
// inserData().then(data => console.log(data));

// ----------------------------------------------------------------------------


// Importing
const Mongoose = require("mongoose");
const {Schema} = require("mongoose"); // {Schema} >> object

// defining the structure : we need to create schema

// let <<variable>> = Schema({key and datatype details},{collection name})
let characterSchema = Schema({
    name : String,
    age : Number,
    gender : String
},{collection:"Character"});

// type of database:<<ip>>:<<port>>/<<db Name>>
let url = "mongodb://localhost:27017/drama";// connection string

// .connect() >> creating a connection between demo.js and the db: drama
// let getCollection = () => {
//     return Mongoose.connect(url, {useNewUrlParser: true,  useUnifiedTopology: true }) // returns :  Promise { <pending> }
//     .then(data => {
//         // i'm mapping my collection and schema inside mongodb using model method
//         return data.model("Character", characterSchema);
//     }).catch(err => {
//         // let err = new Error("could not connect to database");
//         err.meassage = "Could not connect to database"
//         err.status = 500;
//         throw err;
//     }) 
// }
// getCollection().then( data => {console.log(data)});// returns a model, which refers to the character collection
// console.log(getCollection());

// ***************************************
// using async-await
let getCollection = async() => {
    try{
        let database = await Mongoose.connect(url, {useNewUrlParser: true,  useUnifiedTopology: true })
        let data = await database.model("Character", characterSchema);
        return data;
    } catch (error) {
        error.message = "Could not connect to database"
        error.status = 500;
        throw error;
    }
}

let data = {
    name : "Gohan",
    age : 23,
    gender : "male"
}

// let inserData = () => {
//     // calling the collection
//     return getCollection().then(model => {
//         // return data;
//         return model.create({name : "Gohan", age : 23, gender : "male"}).then(dataCreated => {
//             return dataCreated;
//         })
//         // model.create(data); // alternative to above
//     })
// }

// *********************************************** using Async-Await


let insertData = async() => {
    let model = await getCollection();
    let dataInserted = await model.create({name : "Bulma", age : 49, gender : "female"})
    return dataInserted;
}




// console.log(inserData());
insertData().then(data => console.log(data));

