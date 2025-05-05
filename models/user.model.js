const mongoose=require("mongoose");

const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object
    },
    date:{
        type:Date,
        default:Date.now,
    },
    userType:{
        type:String,
        enum:['User','Admin'],
        default:'User',
        required:true
    }
})

 const User= mongoose.model("User",UserSchema);
 module.exports=User;