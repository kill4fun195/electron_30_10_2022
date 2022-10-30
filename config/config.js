require('dotenv').config();
const path = require('path');
const fs = require('fs');
require('dotenv').config({
  path: path.resolve(__dirname, '../.env'),
});

const env = process.env.NODE_ENV;

let dbPath;
let dbName;
if (env == 'production') {
  const publicPath =
    process.platform == 'darwin'
      ? process.env.HOME + process.env.APPDATA
      : process.env.HOME + '/.local/share';

  // dbName = `mktsoft_${env}_15_09_2022`;
  dbName = `mktsoft_${env}_20_09_2022`;
  dbPath = `${publicPath}/${dbName}.sqlite`;
} else if (env == 'development') {
  dbName = 'database';
  dbPath = path.join(__dirname, '..', `db/${dbName}.sqlite`);
} else {
  throw 'Invalid env';
}

var config = {
  database: dbName,
  dialect: 'sqlite',
  storage: dbPath,
  dialectOptions: {
    bigNumberStrings: true,
  },
};

module.exports = {
  development: config,
  production: config,
};
