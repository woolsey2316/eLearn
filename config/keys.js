require('dotenv').config()
module.exports = {
  mongoURI: `mongodb://127.0.0.1:27017/${process.env.DB}`,
  ACCESS_TOKEN_SECRET: "secret_access",
  REFRESH_TOKEN_SECRET: "secret_refresh",
};
