var express = require('express');
var router = express.Router();

var handle = function(req,res,next){
  res.render('index', { title: '广州油麦菜信息科技有限公司' });
}

router.get('/', function(req,res,next){
  handle(req,res,next);
});

router.get('/index',function(req,res,next){
  handle(req,res,next);
});

router.get('/homeblog',function(req,res,next){
  res.render('homeBlog',{title:'广州油麦菜信息科技有限公司'});
})

module.exports = router;
