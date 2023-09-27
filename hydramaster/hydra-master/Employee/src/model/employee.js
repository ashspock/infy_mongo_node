const empDetails = [
    { "empId": 101, "empName": "Claire", "age": 30, "level": 3 },
    { "empId": 102, "empName": "Benny", "age": 29, "level": 4 },
    { "empId": 103, "empName": "Daphne", "age": 27, "level": 5 },
    { "empId": 104, "empName": "Matt", "age": 31, "level": 6 },
    { "empId": 105, "empName": "Peter", "age": 29, "level": 7 }
]

var employeeModel = {};

employeeModel.fetchDetails = async(empId) => {
    return (await empDetails.find(data => data.empId === Number(empId)))
}

module.exports = employeeModel;