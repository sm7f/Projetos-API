const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'database2.cbt4qvxj4ebb.us-east-2.rds.amazonaws.com',
  database: 'postgres',
  password: '43816729',
  port: 5432,
});

client.connect();


module.exports = { db: client };
