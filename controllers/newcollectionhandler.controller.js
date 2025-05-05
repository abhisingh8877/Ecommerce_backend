const {asyncHandler}=require("../utils/asyncHandler.js");
const Product=require("../models/product.model.js");

const newCollectionHandler=asyncHandler(async(req,res)=>{
    let products=await Product.find({});
    let newCollection=products.slice(1).slice(-8);
    
    return res.send(newCollection)
});
module.exports=newCollectionHandler;