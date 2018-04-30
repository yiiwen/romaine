var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require('./libs/mysql.util.js');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var newsRouter = require('./routes/news');
var infoRouter = require('./routes/info');
var caseRouter = require('./routes/cases');

var app = express();

const connection = db.createConnection();
connection.query('select * from nav',function(error,results,fields){
  if (error)
    throw error
  console.log(results);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/news',newsRouter);
app.use('/info',infoRouter);
app.use('/cases',caseRouter);

app.use(function(req, res, next) {
  res.render("404",{title:title});
});


app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
