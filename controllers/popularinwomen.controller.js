const {asyncHandler}=require("../utils/asyncHandler.js");
const Product=require("../models/product.model.js");

 const popularinwomen=asyncHandler(async(req,res)=>{
    let products=await Product.find({category:"women"})
    let popular_in_women=products.splice(0,4);
    
    res.send(popular_in_women);
})
module.exports=popularinwomen;