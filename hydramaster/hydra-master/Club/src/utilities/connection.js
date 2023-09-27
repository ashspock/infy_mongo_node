const { Schema } = require('mongoose');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('userCreateIndex', true);
const url = 'mongodb://localhost:27017/Club_DB'

let connection = {}

const clubSchema = Schema({
    category: { type: String, required: [true, 'category is required'] },
    fees: { type: Number, required: [true, 'Fees is required'] },
}, { collection: "ClubDetails", timestamps: true })

//Returns model object of "Employee" collection
connection.getCollection = async() => {
    try {
        return (await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).model('ClubDetails', clubSchema));
    } catch (error) {
        let err = new Error("Could not connect to the database");
        err.status = 500;
        throw err;
    }
}

module.exports = connection;