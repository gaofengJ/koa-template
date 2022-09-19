// const fs = require('fs');
// const path = require('path');

// const filePathMap: Record<string, string> = {
//   dev: '../../../db-config.json',
//   prod: '../../../db-config.json',
// };

// const {
//   MYSQL_CONF: TEMP_MYSQL_CONF,
//   REDIS_CONF: TEMP_REDIS_CONF,
// } = JSON.parse(fs.readFileSync(path.join(__dirname,
// filePathMap[process.env.NODE_ENV as string]), 'utf8'));

const TEMP_MYSQL_CONF = {
  database: 'mufeng',
  username: 'mufeng',
  password: 'mufeng',
  host: '127.0.0.1',
  port: 3000,

};
const TEMP_REDIS_CONF = {};

export const MYSQL_CONF = TEMP_MYSQL_CONF;
export const REDIS_CONF = TEMP_REDIS_CONF;
