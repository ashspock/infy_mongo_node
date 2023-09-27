// for fetching data
const { model } = require('mongoose');
const collection = require('../utilities/connection');

let db = {};

// only for db query
db.fetchAll = async() => {
    let model = await collection.getEmployeeCollection();
    let data = await model.find(); // returns an array 
    if(data && data.length > 0){
        return data;
    }
    else return null;
}
module.exports = db;