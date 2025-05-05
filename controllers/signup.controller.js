const {asyncHandler}=require("../utils/asyncHandler.js");
const User=require("../models/user.model.js");
const signupUser=asyncHandler(
    async(req,res)=>{
        const {username,email,password}=req.body;
        let check=await User.findOne({email});
        if(check)
        {
            return res.status(400).json({success:false,error:"existing user found with same email address"})

        }
        let cart={};
        for(let i=0;i<300;i++)
        {
            cart[i]=0;
        }
        const user=new User({
            name:username,
            email,
            password,
            cartData:cart
        })
        await user.save();
        const data={
            user:{
                id:user._id
            }
        }
        const token =jwt.sign(data,process.env.SECRET_KEY);
        return res.json({success:true,token})
})

module.exports={signupUser};