const he = require('hydra-express');
const hExpress = he.getExpress();
const hydra = he.getHydra()
let router = hExpress.Router();
const clubService = require('../service/club');

router.get('/:category', async(req, res, next) => {
    try {
        let data = await clubService.fetchDetails(req.params.category);
        if (data.length !== 0) {
            let message = hydra.createUMFMessage({
                to: 'members:[get]/members?category=' + req.params.category,
                from: 'club_service',
                body: {}
            });
            try {
                let response = await hydra.makeAPIRequest(message);
                if (response.data.length == 0) {
                    res.send({ "message": "Club details for: " + req.params.category + " is not found" })
                } else {
                    res.send({ "category": req.params.category, fees: data[0].fees, "members": response.data })
                }
            } catch (err) { next(err) }
        } else {
            res.send("The game " + req.params.category + " is not available in this club")
        }
    } catch (err) { next(err) }
});

module.exports = router