const {asyncHandler}=require("../utils/asyncHandler.js")
const {User}=require('../models/user.model.js');

const fechAdmin=asyncHandler(async(req,res,next)=>{
    const token=req.header('auth-token');
    if(!token)
    {
       return  res.status(401).json({error:"Please authenticate using valid token"})
    }
    else{
        try{
            const data=jwt.verify(token,process.env.SECRET_KEY);
            const id=data.user.id;
            const dbAdmin= await User.findOne({_id:id});
            if(!dbAdmin)
                return res.status(400).json({error:"Please login as Admin"});
            next();
           }
        catch(error)
        {
            return res.status(404).json({error:`their is some authentication issue ${error}`})
        }
       }
})
module.exports= {fechAdmin};