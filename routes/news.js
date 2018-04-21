var express = require('express');
var router = express.Router();
var title = '广州油麦菜信息科技有限公司';

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('news',{title:title});
});

module.exports = router;
