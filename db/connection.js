const mysql = require('mysql2/promise');
const util = require('util');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'employee',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const query = util.promisify(pool.query).bind(pool);

module.exports = {
  pool,
  query,
};