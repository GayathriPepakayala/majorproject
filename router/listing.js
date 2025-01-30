const express=require("express");
const router=express.Router();

const wrapAsync=require("../util/wrapAsync.js");
const ExpressError=require("../util/ExpressError");
const listing=require("../models/listing.js");
const {validatelisting,isloggedin,isOwner}=require("../middleware.js");

const controllisting=require("../controllers/listing.js");
const multer  = require('multer') ;
const {storage}=require("../cloudconfig.js")
const upload = multer({ storage})


router
.route("/")
 .post(isloggedin,validatelisting,upload.single("listing[image]"),wrapAsync(controllisting.postlisting))
.get(wrapAsync(controllisting.index))

//new
router.get("/new",isloggedin,(req,res)=>{
 
    res.render("./listings/new.ejs");
})
router.get("/search",async (req,res)=>{
    try{
    let srch=req.query.query;
    console.log(srch);
    if(!srch)
    {
        req.flash("error","SEARCH NOT FOUND");
        res.send("/listings");
    }
    let results = await listing.find({
        $or: [
            { title: { $regex: srch, $options: "i" } }, 
            { location: { $regex: srch, $options: "i" } },
            { country: { $regex: srch, $options: "i" } }
        ]
    });
    console.log(results);
    if(results.length===0)
    {
        req.flash("error","SEARCH NOT FOUND");
        res.redirect("/listings");
    }
    res.render("listings/search.ejs",{results,srch});
    } catch (error) {
        console.error(error);
        req.flash("error", "Something went wrong. Please try again.");
        res.redirect("/listings");
    }

})

router.get('/filter', async (req, res) => {
    const { type1 } = req.query;
    try {
        const filteredListings = await listing.find({ type1:type1});
        if(filteredListings.length==0)
        {
            return res.redirect("/listings");
        }
        res.render('listings/index', { alldata: filteredListings });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});
router 
.route("/:id")
.get(wrapAsync(controllisting.showroute)) //show
.put(isloggedin,isOwner,validatelisting,upload.single("listing[image]"),wrapAsync(controllisting.updatelisting))//update
.delete(isloggedin,isOwner,validatelisting,wrapAsync(controllisting.deletelisting));//dlt


//edit
router.get("/:id/edit",isloggedin,validatelisting,wrapAsync(controllisting.editlisting));


module.exports=router;






