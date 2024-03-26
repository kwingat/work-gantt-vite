const dotenv = require('dotenv');
dotenv.config();
//console.log(process.env);
module.exports = {
  username: process.env.DBUSERNAME,
  password: process.env.DBPASSWORD,
  port: process.env.PORT,
  node_env: process.env.NODE_ENV,
};
