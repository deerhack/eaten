const Joi = require("joi");

module.exports = Joi.object().keys({
    ID:Joi.string().length(36).required()
})

