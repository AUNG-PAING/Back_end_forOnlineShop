const Joi = require("joi");

module.exports = {
    "Schema": {
        register: Joi.object({
            name: Joi.string().min(4).required(),
            email: Joi.string().email().required(),
            phone: Joi.string().min(7).required(),
            password: Joi.string().min(6).required()
        }),
        login: Joi.object({
            phone: Joi.string().min(7).required(),
            password: Joi.string().min(6).required()
        })
    }
}