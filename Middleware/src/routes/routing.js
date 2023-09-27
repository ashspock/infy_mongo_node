const express = require('express');
const router = express.Router();
router.get('/adminLogin',function(req,res){
	res.send("Admin login Success");
});
router.get('/userLogin',function(req,res){
	res.send("User login Success");
});
module.exports = router;
