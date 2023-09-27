/*
    Import neccessary modules
*/const he = require('hydra-express');
const create = require('./model/dbsetup');
const router = require('./routes/routing');

he.init('../customer-config.json', () => {
    /*
        Configure middleware to api instance in appropriate order
    */
    he.registerRoutes({ '/customer': router });
})

router.get('/setupDb', async (req, res, next) => {
    try {
        let data = await create.setupDb()
        res.send(data)
    } catch (err) {
        next(err)
    }
})

console.log('Customer started')