const { Schema } = require('mongoose');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('userCreateIndex', true);
const url = 'mongodb://localhost:27018/Members_DB'

let connection = {}

const membersSchema = Schema({
    membershipId: { type: Number, required: [true, 'Memberid is required'], unique: [true, "Id should be unique"] },
    name: { type: String, required: [true, 'Name is required'] },
    contactNo: { type: Number, required: [true, 'contactNo is required'] },
    age: { type: Number, required: [true, 'age is required'] },
    membershipType: { type: String, required: [true, 'membershipType is required'] },
    timmingShift: { type: String, required: [true, 'timmingShift is required'] },
    sportsCategory: { type: String, required: [true, 'sportsCategory is required'] }
}, { collection: "Members", timestamps: true })

//Returns model object of "Employee" collection
connection.getCollection = async() => {
    try {
        return (await mongoose.connect(url, { useNewUrlParser: true }).model('Members', membersSchema))
    } catch (error) {
        let err = new Error("Could not connect to the database");
        err.status = 500;
        throw err;
    }
}

module.exports = connection;