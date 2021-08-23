const Joi = require('joi');

module.exports = {
    "Gschema": {
        id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
        skip:Joi.string().required()
    }
}