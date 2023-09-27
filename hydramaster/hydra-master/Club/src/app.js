const he=require('hydra-express');
const Hexpress=he.getExpress();
let api = Hexpress.Router();

//Importing Body parser
const bodyParser=require('body-parser');

//Importing Loggers 
var requestLogger = require('./utilities/RequestLogger')
var errorLogger = require('./utilities/ErrorLogger')

//Importing Router
const router = require('./routes/routing');

he.init('../club-config.json',()=>{
        
        api.use(bodyParser.json())
        api.use(requestLogger)
        api.use(router)
        api.use(errorLogger)

        he.registerRoutes({'/club':api})
})

console.log('Club started')