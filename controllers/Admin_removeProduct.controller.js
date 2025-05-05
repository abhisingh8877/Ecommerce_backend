const Product=require("../models/product.model");
const {asyncHandler}=require("../utils/asyncHandler.js");
const removeProductAdmin=asyncHandler(async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});

    res.json({
        success:true,
        name:req.body.name
    })
})
module.exports=removeProductAdmin;
