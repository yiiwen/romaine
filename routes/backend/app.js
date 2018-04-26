var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var title = '广州油麦菜信息科技有限公司'

var loginRouter = require("./login");

var app = express();

app.use("/login",loginRouter);

app.use(function(req, res, next) {
  res.render("404",{title:"广州油麦菜信息科技有限公司"});
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
