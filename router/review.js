const express=require("express");
const router=express.Router({mergeParams:true});
const {reviewschema}=require("../schema.js");
const listing=require("../models/listing.js");
const review=require("../models/review.js");
const wrapAsync=require("../util/wrapAsync.js");
const ExpressError=require("../util/ExpressError.js");
const {validatereview,isloggedin,isauthor}=require("../middleware.js");
const controlreview=require("../controllers/review.js");


router.post("/",isloggedin,validatereview,wrapAsync(controlreview.newreview));
router.delete("/:reviewId",isloggedin,isauthor,wrapAsync(controlreview.deletereview));

module.exports=router;