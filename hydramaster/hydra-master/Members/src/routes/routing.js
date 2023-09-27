const he = require('hydra-express');
const Hexpress = he.getExpress();
let router = Hexpress.Router();
const memberService = require('../service/member');

router.post('/', async(req, res, next) => {
    try {
        let response = await memberService.addMember(req.body);
        res.json({ message: "New member added with membership ID: " + response.membershipId })
    } catch (error) { next(error) }
});

router.get('/', async(req, res, next) => {
    try {
        let data = await memberService.fetchDetails(req.query.category);
        res.send({ data: data })
    } catch (error) { next(error) }
})

module.exports = router