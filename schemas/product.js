const Joi = require('joi');

module.exports = {
    "Schema": {
        save: Joi.object({
            name: Joi.string().required(),
            images: Joi.array().required(),
            price: Joi.number().required(),
            desc: Joi.string().required(),
            detail: Joi.string().required(),
            features: Joi.array().required(),
            tag: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
            category: Joi.string().required(),
            subcat :  Joi.string().required(),
            childcat: Joi.string().required()
        })
    }
}
