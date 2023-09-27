const memberModel = require('../model/club');
const clubService = {};

clubService.fetchDetails = async(category) => {
    let data = await memberModel.fetchDetails(category)
    return data;
}

module.exports = clubService