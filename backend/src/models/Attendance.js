 const mongoose=require("mongoose")
const Schema=mongoose.Schema;


const attendanceSchema = new Schema({
  employeeId: { type: mongoose.Schema.Types.Int32, ref: "users" },
  date: { type: Date, unique: true },
  status: { type: String, enum: ["Present", "Absent"] }
});

attendanceSchema.index({ employeeId: 1, date: 1 }, { unique: true });

const attendanceModel=mongoose.model('attendances',attendanceSchema)
module.exports =attendanceModel;