const Joi = require('joi');

module.exports = {
    "Schema": {
        save: Joi.object({
            name: Joi.string().required()
        })
    }
}