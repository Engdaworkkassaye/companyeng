const mysql = require('mysql2');
const util = require('util');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'employee',
});


const query = util.promisify(connection.query).bind(connection);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    throw err;
  }
  console.log('Connected to the database.');
});


module.exports = {
  connection,
  query,
};
