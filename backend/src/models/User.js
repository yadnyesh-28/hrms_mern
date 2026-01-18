 const mongoose=require("mongoose")
const Schema=mongoose.Schema;


const userSchema = new Schema({
  employeeId: { type: Number, unique: true },
  name: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true }, // hashed
  role: { type: String, enum: ["Admin", "Employee"], required: true },
  department: String,
  salary: Number,
  joiningDate: Date,
  status: { type: String, enum: ["Active", "Inactive"], default: "Active" }
});



const UserModel= mongoose.model("users", userSchema);
module.exports =UserModel;
