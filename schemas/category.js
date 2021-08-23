const Joi = require('joi');

module.exports = {
    "Schema": {
        create: Joi.object({
            name: Joi.string().required(),
            image: Joi.string().required(),
            subs: Joi.array().optional()
        })
    }
}