const { verifyToken } = require("../utils/verifyToken");

const { User } = require("../models/User");

async function validateToken(req, res, next) {
  const authorizationHeader = req.headers.authorisation;
  let result;
  if (!authorizationHeader)
    return res.status(401).json({
      error: true,
      message: "Access token is missing",
    });

  const token = req.headers.authorisation.split(" ")[1]; // Bearer <token>

  try {
    result = verifyToken(token, res);
    const user = await User.findById(result.payload.id);
    // console.log(token);
    if (!user) {
      result = {
        error: true,
        message: `Authorization error`,
      };
      return res.status(403).json(result);
    }


    if (!user._id === result.id) {
      result = {
        error: true,
        message: `Invalid token`,
      };

      return res.status(401).json(result);
    }
    next();
  } catch (err) {
    // console.log(err);
    if (err.name === "TokenExpiredError") {
      result = {
        error: true,
        message: `TokenExpired`,
      };
    } else {
      result = {
        error: true,
        message: `Authentication error`,
      };
    }
    return res.status(403).json(result);
  }
}

module.exports = { validateToken };