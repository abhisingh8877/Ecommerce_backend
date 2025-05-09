const mongoose=require('mongoose');
const {DB_NAME}=require('../utils/constant.js');
const connectDB=async()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOST :${connectionInstance.connection.host}`);
    }
    catch(error)
    {
        console.log("MONGODB connection error",error);
        process.exit(1);
    }
}
module.exports={connectDB};