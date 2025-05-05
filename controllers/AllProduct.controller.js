const {asyncHandler}=require("../utils/asyncHandler.js");
const Product=require("../models/product.model.js")

const  AllProductHandler=asyncHandler(async(req,res)=>{
    let products= await Product.find({});
    
    res.send(products);
})
module.exports=AllProductHandler;