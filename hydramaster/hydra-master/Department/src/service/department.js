const departmentModel = require('../model/department');
const departmentService = {};

departmentService.fetchSalary = async(department) => {
    var salaryObj = await departmentModel.fetchDetails(department)
    if (salaryObj) return salaryObj
    else throw new Error('Salary details not found')
}

module.exports = departmentService