
const bodyParser = require("body-parser");
const express = require("express");
const app = express();// only one instance of this 
// entry point of an application, therfore can only be one

const router = require("./routes/routing"); // importing routes
const requestLogger = require("./utilities/requestLogger");
// to exchange data in POST request , data is login id and password
// I don't want to pass data through url(param/query)
// I will pass the data using body 
// app.use(bodyParser.json());
app.use(express.json());
//we are passing json body from the client
// data exchange over >> http -> string
// so the JSON body gets converted to JSON string
// to access the key-value from JSIN STring i need to convert it to JS object
// to convert/parse JSON string i need to use js object converter
// converter/parse > express.json()

app.use(requestLogger);// want to 
app.use(router);
// app.use(express.json())
// .use() >> this method is used to inject the middleware
// whatever functionality you write inside this behaves as a middleware

// app.use(express.json()) // should always be at top in .js file

// app.post("/login", (req,res,next) => {
//     // console.log(req);
//     // console.log(JSON.parse(req.body)); // error
//     // console.log(req.body); // undefined
//     console.log(req.body);// { id: '1109288', password: 'gondolin97' } ** after using .use()
// })

// to capture when reuest received , kind of request , url of request

// app.use(express.json()); // outputs >> undefined

app.listen(3000); 
console.log("Server is running");