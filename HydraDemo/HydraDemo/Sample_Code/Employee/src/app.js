const he=require('hydra-express');//We are Importing hydra-express module using require() function
const express=he.getExpress();//We are creating an express object from the hydra express obj using getExpress() function
const api = express.Router();
const bodyParser=require('body-parser'); 
const requestLogger = require('./utilities/RequestLogger');
const errorLogger = require('./utilities/ErrorLogger');
const router = require('./routes/routing');
he.init('../Employee-config.json',()=>{
        api.use(bodyParser.json())
        api.use(requestLogger)
        api.use(router)
        api.use(errorLogger)
        he.registerRoutes({'/employee':api})
})
