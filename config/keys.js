require('dotenv').config()
module.exports = {
  mongoURI: process.env.MONGODB_URI,
  ACCESS_TOKEN_SECRET: "secret_access",
  REFRESH_TOKEN_SECRET: "secret_refresh",
};
