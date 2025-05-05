const {asyncHandler}=require("../utils/asyncHandler.js");

const removeFromcarthandler=asyncHandler(async(req,res)=>{
    let userData=await Users.findOne({_id:req.user.id})
  
    userData.cartData[req.body.itemId]-=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Removed");

})
module.exports=removeFromcarthandler;