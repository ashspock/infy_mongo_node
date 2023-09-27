// install mongoose
// create connection
const Mongoose = require("mongoose");
const {Schema} = require("mongoose");

let empSchema = Schema({
    name : {
        required : [true, "Name is a required field"],
        type : String
    },
    age : {
        required : [true, "Age is a required field"],
        type : Number,
        validate : [(age) => age > 18, "Age should be greater than 18"] // check validation 
    },
    empId : {
        required : [true, "EmpId is a required field"],
        type : Number,
        unique : true,
        validate : [ /^1[0-9]{2-6}$/ , "EmpId must between 100 and 1999999"]
    },
    skill : {
        type : [String],
        default : ["Python", "HTML"]
    },
    dept : {
        unit : {
            required :  [true, "Unit is a required field"],
            type : String
        },
        role : {
            required :  [true, "Role is a required field"],
            type : String
        }
    }
},{ collection : "Employees"})

// next

let url = "mongodb://localhost:27017/empRecord"
let collection = {};
collection.getEmployeeCollection = async() => {
    try{
        let database = await Mongoose.connect(url, {});
        let empmodel = await database.model("Employees", empSchema);
        return empmodel;
    } catch (error) { 
        error.message = "Could not connect to database";
        error.status = 500;
        throw error;
    }
}

module.exports = collection;