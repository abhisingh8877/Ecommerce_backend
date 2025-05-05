const {Router}=require('express');
const {signupUser}=require("../controllers/signup.controller.js")
const {loginUser}=require("../controllers/login.controller.js");
const router=Router();
router.route('/signup').post(signupUser);
router.route('/login').post(loginUser);

module.exports=router;