const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const verifyToken = (token, res) => {
  // if the cookie is not set, return an unauthorized error
  if (!token) {
    return res
      .status(401)
      .json({ message: "toast.user.token is undefined" })
      .end();
  }

  let payload;
  try {
    // Parse the JWT string and store the result in `payload`.
    // Note that we are passing the key in this method as well. This method will throw an error
    // if the token is invalid (if it has expired according to the expiry time we set on sign in),
    // or if the signature does not match
    payload = jwt.verify(token, keys.ACCESS_TOKEN_SECRET);
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      // if the error thrown is because the JWT is unauthorized, return a 401 error
      return res.status(401).json("jwt token is unauthorised").end();
    }
    // otherwise, return a bad request error
    return res.status(400).end();
  }
  return payload;
};

module.exports = { verifyToken };
