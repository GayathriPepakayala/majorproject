const express=require("express");
const user = require("../models/user");
const router=express.Router();
const wrapAsync=require("../util/wrapAsync");
const passport=require("passport");
const {saveurl}=require("../middleware")
const usercontrol=require("../controllers/user");

router.get("/signup",(req,res)=>{
    res.render("./users/signup.ejs");
});
router.post("/signup",wrapAsync(usercontrol.signuprouter));

router.get("/login",(req,res)=>{
    res.render("./users/login.ejs");
})

router.post("/login",saveurl,
    passport.authenticate("local",{failureRedirect:"/login",failureFlash:true}),usercontrol.loginroute);

router.get("/logout",usercontrol.logoutroute);
module.exports=router;