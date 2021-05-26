const Joi = require("@hapi/joi");

const registerValidation = (data) => {
    const schema = Joi.object({
        Username: Joi.string().min(6).max(255).required(),
        Password: Joi.string().min(6).max(1024).required(),
        Type: Joi.number().required()
    });

    return schema.validate(data);
};

const loginValidation = (data) => {
    const schema = Joi.object({
        Username: Joi.string().min(4).max(255).required(),
        Password: Joi.string().min(4).max(1024).required(),
    });

    return schema.validate(data);
};

module.exports = {
    registerValidation,
    loginValidation,
};