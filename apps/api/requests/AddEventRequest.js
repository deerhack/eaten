const Joi = require("joi");

const AddEventRequest = Joi.object().keys({
    name:Joi.string().min(2).max(300),
    // start_time:Joi.date(),
    end_time:Joi.date()

})

module.exports = AddEventRequest