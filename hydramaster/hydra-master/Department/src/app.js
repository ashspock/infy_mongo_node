const he = require('hydra-express');
const hExpress = he.getExpress();
let api = hExpress.Router();

//Importing Loggers 
var requestLogger = require('./utilities/RequestLogger')
var errorLogger = require('./utilities/ErrorLogger')

//Importing Router 
const router = require('./routes/routing');

he.init('../department-config.json', () => {

    api.use(requestLogger)
    api.use(router)
    api.use(errorLogger)

    he.registerRoutes({ '/department': api })
})