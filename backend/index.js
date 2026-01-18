const express=require("express")
const cors=require('cors');
const bodyParser = require("body-parser"); 
const app=express();
require("dotenv").config();
require("../backend/src/models/db")
const PORT=process.env.PORT||8080;
const AuthRouter=require('./src/routes/AuthRouter')
const ProductRouter =require('../backend/src/routes/ProductRouter')
const adminRouter=require('./src/routes/AdminRoutes')
const EmployeeRouter=require('../backend/src/routes/EmployeeRoutes')
app.use(bodyParser.json())
app.use(cors())

app.use('/auth',AuthRouter)
app.use('/admin',adminRouter)
app.use('/product',ProductRouter)
app.use('/attendance',EmployeeRouter)

app.listen(PORT,()=>{
    console.log("server is running on 8080");
    
})




// import { createEmployee } from "./src/routes/Employee.js";
// const createEmployee=require("./src/routes/AdminRoutes");
// const UserModel=require("../backend/src/models/User")




//mongodb://localhost:27017/assignment

// http://localhost:8800/sample
// app.get("/sample",(req,res)=>{
//     res.send({message:"app is running successfully"})
// });

// http://localhost:8800/add-employee
// app.use("/add-employee",createEmployee)
// app.post("/add-employee",async (req, res) => {
//     var instance= new UserModel(req.body);
//     await instance.save();
//     console.log("user  added")
//     res.status(201).json({
//       message: "Employee created successfully",
//     });
// })


// const hrmsSchema=new mongoose.Schema(
//     // db.cars.insertOne({id:101,name:"bmw",model:"x1",price:45000,carcolor:"red"})
//     {
//         id:Number,
//         name:String,
//     }
// )

// const hrmsModel=new mongoose.model("hrms",hrmsSchema)
// app.post('/addhrms', async (req, res) => {
//     var instance= new hrmsModel(req.body);
//     await instance.save();
//     console.log("hrms  added")
//     res.status(200).json({
//       message: "Employee created successfully"
      
//     });
// })


// console.log(" local host 8800");

// app.listen(8800,()=>{
//     console.log("server is running");
// });
