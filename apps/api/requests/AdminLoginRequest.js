const Joi = require("joi");

const AdminLogin = Joi.object().keys({
  username: Joi.string().min(2).max(30).required(),
  password: Joi.string().min(3).max(300).required(),
});

module.exports = AdminLogin;
