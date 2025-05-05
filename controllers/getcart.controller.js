const {asyncHandler}=require("../utils/asyncHandler.js");

const getCartData=asyncHandler(async(req,res)=>{
    
    let userData=await Users.findOne({_id:req.user.id});
    return res.json(userData.cartData)
});
module.exports=getCartData;