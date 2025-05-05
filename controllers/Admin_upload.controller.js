const {asyncHandler}=require("../utils/asyncHandler.js")
const upload_image=asyncHandler(async(req,res)=>{
   
        res.json({
          success:1,
          image_url:`http://localhost:8000/images/${req.file.filename}`
        })
})
module.exports=upload_image;