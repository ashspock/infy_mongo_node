const connection = require('../utilities/connection');
let createConnection = async() => {
    collection = connection.getCollection();
}
var clubModel = {};

clubModel.fetchDetails = async(category) => {
    let data = await collection.find({ category: category });
    return data;
}
createConnection();
module.exports = clubModel;