const Joi = require("joi");

const AddEventRequest = Joi.object().keys({
  name: Joi.string().min(2).max(300).required(),
  start_time: Joi.date().required(),
  end_time: Joi.date().required(),
});

module.exports = AddEventRequest;
