let requestLogger=(req,res,next)=>{
    let message=`${new Date()} -${req.method} :${req.url} \n`;
    fs.appendFile('RequestLogger.txt',message,(err)=>{
        if(err){
            console.log(err);
        }
    })
    next()
}
module.exports=requestLogger;