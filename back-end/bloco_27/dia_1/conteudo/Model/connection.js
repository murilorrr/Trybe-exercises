const mysql = require('mysql2/promise');

var connection = null;

connection ? connection : connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Senha123456',
  database: 'model_example'
});

module.exports = connection;