var mysql = require('mysql');
var config = require('../config/config.js');


var conn = {
  createConnection:function(){
    const connInfo = config.mysql;
    return mysql.createConnection({
      host : connInfo.host,
      user : connInfo.username,
      password : connInfo.password,
      port : connInfo.port,
      database : connInfo.database
    });
  }
}

module.exports = conn;
