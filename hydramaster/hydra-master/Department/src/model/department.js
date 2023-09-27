var departmentModel = {};

var departmentObj = [
    { level: 1, salary: 15000 },
    { level: 2, salary: 20000 },
    { level: 3, salary: 25000 },
    { level: 4, salary: 30000 },
    { level: 5, salary: 35000 },
    { level: 6, salary: 40000 },
]

departmentModel.fetchDetails = async(level) => {
    return (await departmentObj.find(data => data.level === Number(level)))
}

module.exports = departmentModel;