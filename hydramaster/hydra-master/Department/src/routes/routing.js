const he = require('hydra-express');
const hExpress = he.getExpress();
let router = hExpress.Router();
const departmentService = require('../service/department');

router.get('/', async(req, res, next) => {
    try {
        var salaryObj = await departmentService.fetchSalary(req.query.level)
        res.send(salaryObj)
    } catch (error) {
        next(error)
    }

})

module.exports = router