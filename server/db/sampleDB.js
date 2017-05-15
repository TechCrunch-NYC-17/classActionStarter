var host = process.env.RDS_HOSTNAME;
var user = process.env.RDS_USERNAME;
var password = process.env.RDS_PASSWORD;
var port = process.env.RDS_PORT;
module.exports = {
  client: 'mysql',
  connection: {
    host,
    user,
    password,
    port,
    database: 'classaction'
  }
};
