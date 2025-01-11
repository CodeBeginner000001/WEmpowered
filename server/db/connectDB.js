const mongoose = require("mongoose");
const connectDB = async()=>{
    try{
        const conn = await mongoose.connect('mongodb://127.0.0.1:27017/WEmpower')
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }catch(error){
        console.log("MongoDB connection error: ",error.message)
        process.exit(1);
    }
}
module.exports = connectDB;