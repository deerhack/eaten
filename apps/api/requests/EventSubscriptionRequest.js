const Joi = require("joi");

module.exports = Joi.object().keys({
  ID: Joi.string().required(),
});
