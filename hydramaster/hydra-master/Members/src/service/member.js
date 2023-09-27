const memberModel = require('../model/member');
const Validator = require('../utilities/Validator')
const memberService = {};

memberService.addMember = async(memberObj) => {
    Validator.validateContact(memberObj.contactNo);
    Validator.validateUser(memberObj.age);
    let data = await memberModel.checkUser(memberObj.contactNo);
    if (!data) {
        let response = await memberModel.addMember(memberObj)
        if (response != {}) return response
        else throw new Error("Error occurred. Data could not be saved")
    } else {
        throw new Error('Member already registered in club')
    }
}

memberService.fetchDetails = async(category) => {
    let data = await memberModel.fetchDetails(category);
    return data;
}

module.exports = memberService