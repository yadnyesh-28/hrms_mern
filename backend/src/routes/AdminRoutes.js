// const { verifyToken } = require("../../src/middleware/AuthMiddleware");
// const { isAdmin } = require("../../src/middleware/RoleMiddleware");
const {findAllEmployee ,updateEmployee,deleteEmployee, getEmployeeById}=require("../controllers/EmployeeController");
const { ensureAuthenticated } = require("../middleware/AuthMiddleware");
const { isAdmin } = require("../middleware/RoleMiddleware");
const router=require('express').Router();


router.get("/get-employee",isAdmin,ensureAuthenticated,findAllEmployee);
router.delete("/delete-employee/:employeeId", ensureAuthenticated, isAdmin, deleteEmployee);
router.get("/get-employee/:employeeId", ensureAuthenticated, getEmployeeById);
router.patch("/edit-employee/:employeeId", ensureAuthenticated, isAdmin,updateEmployee );
module.exports=router;