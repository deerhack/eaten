const jwt = require("jsonwebtoken");

const generateJWTToken = (object) => {
  return jwt.sign(object, process.env.JWT_SECRET, { expiresIn: "5h" });
};

const validateJWTToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (e) {
    console.error(e);
    return null;
  }
};

module.exports = { generateJWTToken, validateJWTToken };
