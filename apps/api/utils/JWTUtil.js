const jwt = require("jsonwebtoken");

const JWT_SECRET = "lolcatz"

const generateJWTToken = (object) => {
  return jwt.sign(object, JWT_SECRET, { expiresIn: "5h" });
};

const validateJWTToken = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (e) {
    console.error(e);
    return null;
  }
};

module.exports = { generateJWTToken, validateJWTToken };
