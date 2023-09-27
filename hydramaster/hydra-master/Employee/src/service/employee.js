const employeeModel = require('../model/employee');
const validator = require('../utilities/Validator')
const employeeService = {};

employeeService.fetchDetails = async(empId) => {
    validator.validateId(empId)
    var details = await employeeModel.fetchDetails(empId)
    if (details) return details
    else {
        var error = new Error('Details not found');
        error.status = 404;
        throw error;
    }
}

module.exports = employeeService