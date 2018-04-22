var express = require('express');
var router = express.Router();
var title = '广州油麦菜信息科技有限公司';

router.get('/', function(req, res, next) {
  handle(req,res,next,'it',1);
});

router.get(/p\/(it|company)[\/1-9]?/,function(req,res,next){
  var url = req._parsedUrl.path;
  var type = 'it';
  var page = 1;
  if (url){
    url = url.substring(1,url.length);
    const paths = url.split("/");
    
    handle(req,res,next,paths[1],paths[2] >0 ? paths[2] : 1);
  } else {
    handle(req,res,next,type,page);
  }
})

router.get(/id\/[1-9]+/,function(req,res,next){
  res.render('newsdetail',{title:title});
});

var handle = function(req,res,next,type,page){
  res.render('news',{
    title:title,
    page:{
      totalPage:6,
      currentPage:page
    },
    prevUrl:"/news/p/"+type+"/",
    type:type
  });
}

module.exports = router;
