var Validator = {}
Validator.validateUser = function(age){
    if(age<=10){
        throw new Error("Sorry!too small to join the club.");
    }
}

Validator.validateContact = function(contactNo){
    if(contactNo<1000000000 || contactNo>9999999999){
        throw new Error("Invalid! Please enter a correct Contact Number.");
    }
}

module.exports = Validator;