// controllers/userController.js
const UserModel = require("../models/User");
// const bcrypt = require("bcryptjs");

const findAllEmployee = async (req, res) => {
  try {
    const employees = await UserModel.find().select('employeeId name email department salary status ');
    console.log(employees);

    res.status(201).json({
      message: "All employees",
      data: employees,
      type: "AllEmployees"
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error, message: "Server error" });
  }
};


const updateEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const { name, email, department, salary, status } = req.body

    const checkeemployee = await UserModel.findOne({ employeeId })
    console.log(checkeemployee);

    if (!checkeemployee) {
      return res.status(404).json({ success: false, message: "employee not found" })
    }


    if (name) checkeemployee.name = name;
    if (email) checkeemployee.email = email;
    if (department) checkeemployee.department = department;
    if (salary) checkeemployee.salary = salary;
    if (status) checkeemployee.status = status;
    await checkeemployee.save();
    res.status(201).json({
      data: checkeemployee,
      success:true
    });
    console.log('employee updated');
  } catch (error) {
    return res.status(500).json({ success: false, error: error, message: "internal server error" })
  }
}

const getEmployeeById = async (req, res) => {
  try {
    const { employeeId } = req.params;

    const checkeemployee = await UserModel.findOne({ employeeId })
    console.log(checkeemployee);

    if (!checkeemployee) {
      return res.status(404).json({ success: false, message: "employee not found" })
    }
     res.status(201).json({
      data: checkeemployee,
      success:true
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error, message: "internal server error" })
  }
}




const deleteEmployee=async(req, res) => {
  try {
    const { employeeId } = req.params;
  
    const checkeemployee = await UserModel.findOne({ employeeId })

    if (!checkeemployee) {
      return res.status(404).json({ success: false, message: "employee not found" })
    }

    await checkeemployee.deleteOne();
    res.status(201).json({
      message:'employee deleted',
      success:true
    });
    console.log('employee deleted');
  } catch (error) {
    return res.status(500).json({ success: false, error: error, message: "internal server error" })
  }
}


module.exports = {
  findAllEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeeById
}
