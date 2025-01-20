const jwt = require("jsonwebtoken");


const generateJWTToken = (object) => {
  return jwt.sign(object, process.env.SECRET_KEY , { expiresIn: "5h" });
};

const validateJWTToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    return decoded;
  } catch (e) {
    console.error(e);
    return null;
  }
};

module.exports = { generateJWTToken, validateJWTToken };
