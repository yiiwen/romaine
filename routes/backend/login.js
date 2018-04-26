var express = require('express');
var router = express.Router();

var title = '广州油麦菜信息科技有限公司'

var handle = function (req,res,next) {
  res.render("backend/login",{title:title});
}


router.get('/',function(req,res,next){
  handle(req,res,next);
})


module.exports = router;
