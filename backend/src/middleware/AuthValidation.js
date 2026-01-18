const Joi = require("joi");

const signupValidation = (req, res, next) => {
    const schema = Joi.object({
        employeeId:Joi.number().min(1).required(),
        name: Joi.string().min(3).max(20).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(20).required(),
        role:Joi.string().valid('Admin','Employee').default('Employee').required(),
        department:Joi.string().min(2).max(10).required(),
        salary:Joi.number().required(),
        joiningDate:Joi.date().required(),
        status:Joi.string().default('Active').valid('Active','Inactive').required()
    })
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: 'Bad request ', error })
    }
    next();
}

const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(20).required(),
    })
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: 'Bad request ', err })
    }
    next();
}

module.exports = {
    signupValidation,
    loginValidation
}