const { nextTick } = require("process");

cosnt dbModel = require("../model/user");

let service = {};

service.fetchAll = async() => {
    let data = await dbModel.fetchAll();
    if(data && data.length > 0){
        return  data;
    }else {
        let err = new Error("No record found");
        err.status =404;
        next(err);
    }
}