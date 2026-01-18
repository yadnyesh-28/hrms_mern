const attendanceModel = require('../models/Attendance')
const UserModel = require('../models/User')

const markAttendance = async (req, res) => {
    try {
        const { employeeId, status } = req.body;
        const isEmployee = await UserModel.findOne({employeeId})
        if (!isEmployee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        console.log('employe ',isEmployee);
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const existingAttendance = await attendanceModel.findOne({
            employeeId:isEmployee.employeeId,
            date: today
        });
        console.log('existing ',existingAttendance);
        
        if (existingAttendance) {
            return res.status(400).json({
                message: "Attendance already marked for today"
            });
        } 
            const attendance = new attendanceModel({
                employeeId, 
                date: today, 
                status
            })
            await attendance.save()
            console.log('attendance marked',attendance);       
            
            res.status(201).json({
                message: "Attendance marked successfully",
                attendance
            });
    } catch (error) {
        return res.status(500).json({ message: 'internal server error', success: false })
    }
}

module.exports = {
    markAttendance
}