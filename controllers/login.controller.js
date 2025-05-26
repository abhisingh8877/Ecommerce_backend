const  { asyncHandler }=require("../utils/asyncHandler")
const User=require("../models/user.model");
const jwt=require('jsonwebtoken');
const loginUser=asyncHandler(async(req,res)=>{
    const {password,email}=req.body;
    let user=await User.findOne({email});
    if(user)
    {
        const passCompare=password===user.password
        if(passCompare)
        {
            const data={
                user:{
                    id:user.id
                }
            }
            const token=jwt.sign(data,process.env.SECRET_KEY);
            res.json({success:true,token})
        }
        else
        {
            res.json({success:false,error:"wrong password"})
        }
    }
    else
    {
        res.json({success:false,errors:"wrong Email id"});
    }
})
module.exports= {loginUser};