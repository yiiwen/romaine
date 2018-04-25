var express = require('express');
var router = express.Router();

var title = '广州油麦菜信息科技有限公司'


router.get('/',function(req,res,next){
  res.render('cases',{
    title:title,
    page:{
      totalPage:6,
      currentPage:1
    },
    prevUrl:"/cases/p/",
  });
})

router.get(/p\/[\/1-9]?/,function(req,res,next){
  res.render('cases',{
    title:title,
    page:{
      totalPage:6,
      currentPage:1
    },
    prevUrl:"/cases/p/",
  });
})

module.exports = router;
