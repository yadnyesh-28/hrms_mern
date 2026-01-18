
const { markAttendance } = require('../controllers/AttendanceController')
const { attendanceValidation } = require("../middleware/AttendanceMiddleware");
const { ensureAuthenticated } = require("../middleware/AuthMiddleware");
const router=require('express').Router();


router.post("/mark-attendance",ensureAuthenticated,attendanceValidation, markAttendance);

module.exports=router;