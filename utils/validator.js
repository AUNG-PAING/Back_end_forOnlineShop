const Helper = require('../utils/helper');

module.exports = {
    validateToken: () => {
        return (req, res, next) => {
            let cacheUser = Helper.getUserFromToken(req);
            if (cacheUser) next();
            else throw new Error("Token Validation Error!");
        }
    },
    validateBody: (schema) => {
        return (req, res, next) => {
            let result = schema.validate(req.body);
            if (!result.error) next();
            else throw new Error("Data Validation Error!");
        }
    },
    validateParam: (schema, name) => {
        return (req, res, next) => {
            let result = schema.validate(req.params[name]);
            if (!result.error) next();
            else throw new Error("Parameter Validation Error!");
        }
    },
    validateRole: (roleName) => {
        return (req, res, next) => {
            let cacheUser = Helper.getUserFromToken(req);
            if (cacheUser.role == roleName) next();
            else throw new Error("You don't have this permission!");
        }
    }
}