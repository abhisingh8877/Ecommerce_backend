const {Router}=require('express');
const {upload}=require('../middleware/multer.middleware.js');
const router=Router();
const upload_image=require('../controllers/Admin_upload.controller.js');
const {fechAdmin}=require('../middleware/verifyAdmin.middleware.js')
const AddProductHandler=require("../controllers/Admin_addProduct.controller.js")
const removeProductAdmin=require("../controllers/Admin_removeProduct.controller.js")
router.route("/upload").post(upload.single("product"),upload_image);
router.route("/addproduct").post(AddProductHandler);
router.route('/removeproduct').post(removeProductAdmin);


module.exports= router;