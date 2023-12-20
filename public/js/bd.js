var mysql      = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost:3306',
    user     : 'root',
    password : 'marcbara2023',
    database : 'funkos_challenge',
});
   
  connection.connect();

module.exports = connection; 