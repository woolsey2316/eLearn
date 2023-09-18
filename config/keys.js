require('dotenv').config()
module.exports = {
  mongoURI: `mongodb://localhost/${process.env.DB}`,
  ACCESS_TOKEN_SECRET: "secret_access",
  REFRESH_TOKEN_SECRET: "secret_refresh",
};
