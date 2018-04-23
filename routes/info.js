var express = require('express');
var router = express.Router();
var title = '广州油麦菜信息科技有限公司';

router.get('/aboutUs',function(req,res,next){
    res.render('aboutUs',{title:title});
});

router.get('/contactUs',function(req,res,next){
    res.render('contactUs',{title:title});
})

module.exports = router;