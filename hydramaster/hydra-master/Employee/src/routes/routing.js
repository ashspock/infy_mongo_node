const he = require('hydra-express');
const Hexpress = he.getExpress();
const hydra = he.getHydra()
let router = Hexpress.Router();
const employeeService = require('../service/employee');

router.get('/:empId', async(req, res, next) => {
    try {
        let details = await employeeService.fetchDetails(req.params.empId);
        let message = hydra.createUMFMessage({
            to: 'department:[get]/department?level=' + details.level,
            from: 'employee_service',
            body: {}
        });
        try {
            let response = await hydra.makeAPIRequest(message);
            res.send({ data: {...details, salary: response.salary } })
        } catch (err) { next(err) }
    } catch (error) {
        next(error)
    }
})

module.exports = router