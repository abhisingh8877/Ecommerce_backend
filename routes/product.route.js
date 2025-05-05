const {Router}=require("express");
const router=Router();
const AllProductHandler=require("../controllers/AllProduct.controller.js");
const newCollectionHandler=require("../controllers/newcollectionhandler.controller.js");
const popularinwomen=require("../controllers/popularinwomen.controller.js")
router.route("/allProduct").get(AllProductHandler);
router.route("/newcollection").get(newCollectionHandler);
router.route("/popularinwomen").get(popularinwomen);
module.exports= router;