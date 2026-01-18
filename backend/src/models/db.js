const mongoose = require('mongoose');

const MONGO_URL=process.env.MONGO_CON

mongoose.connect("mongodb://localhost:27017/assignment").then(()=>{
    console.log("connected to MongoDB")
}).catch((err)=>{
    console.log("mongodb connection error: ",err);
    
})