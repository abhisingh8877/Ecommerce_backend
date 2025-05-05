const {Router}=require("express");
const fetchUser=require("../middleware/fetchUser.middleware.js")
const addtocartHandler=require("../controllers/addtocart.controller.js")
const removeFromcarthandler=require("../controllers/removeFromCart.controller.js")
const getCartData=require("../controllers/getcart.controller.js")
const router=Router();
router.route("/addtocart").post(fetchUser,addtocartHandler);
router.route("/removefromcart").post(fetchUser,removeFromcarthandler);
router.route("/getcart").get(fetchUser,getCartData);
module.exports= router;