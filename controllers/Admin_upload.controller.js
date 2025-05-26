const {asyncHandler}=require("../utils/asyncHandler.js")
const uploadOnCloudinary=require('../utils/cloudinary.js');
const upload_image=asyncHandler(async(req,res)=>{
   
    const response=await uploadOnCloudinary(req.file.path);
    
    if(!response)
    {
        res.status(403).json({success:0,message:"Their is some error with uploading file on cloud"});
    }
    else
    {
        
        res.status(200).json({success:1,message:"Everything is good",response});
    }
})
module.exports=upload_image;