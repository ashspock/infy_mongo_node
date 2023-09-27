const connection = require('../utilities/connection');

let createConnection = async() => {
    collection = await connection.getCollection()
}
var membersModel = {};

membersModel.generateId = async() => {
    let ids = await collection.distinct('membershipId');
    var bId;
    ids.length === 0 ? bId = 101 : bId = Math.max(...ids) + 1;
    return bId
}

membersModel.checkUser = async(contactNo) => {
    let data = await collection.findOne({ contactNo: contactNo });
    return data != {} ? data : null
}

membersModel.addMember = async(memberDetails) => {
    let id = await membersModel.generateId();
    memberDetails.membershipId = id;
    let data = await collection.create(memberDetails);
    return data;
}

membersModel.fetchDetails = async(category) => {
    let data = await collection.find({ sportsCategory: category }, { _id: 0, name: 1 });
    let memberArr = data.map(obj => obj.name)
    return memberArr;
}
createConnection();
module.exports = membersModel;