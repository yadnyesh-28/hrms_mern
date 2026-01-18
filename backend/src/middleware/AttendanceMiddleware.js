const Joi = require("joi");

const attendanceValidation = (req, res, next) => {
    const schema = Joi.object({
        employeeId:Joi.number().min(1).required(),
        status:Joi.string().default('Present').valid('Present','Absent').required()
    })
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: 'Bad request ', error })
    }
    next();
}
module.exports={
    attendanceValidation
}