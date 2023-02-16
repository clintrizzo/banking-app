const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'W@llace1992!',
  host: 'localhost',
  port: 5432,
  database: 'bank_account'
});

module.exports = { pool };