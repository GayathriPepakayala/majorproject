
let Listing=require("./models/listing");
let Review=require("./models/review");
const ExpressError=require("./util/ExpressError");
const {listingschema,reviewschema}=require("./schema");
module.exports.isloggedin=(req,res,next)=>{
    if(!req.isAuthenticated())
        {
            req.session.reqpath=req.originalUrl;
            req.flash("error","YOU MUST BE LOGGED IN TO CREATE");
            return res.redirect("/login");
        }
        next();
}

module.exports.saveurl=(req,res,next)=>{
    if(req.session.reqpath)
    {
        res.locals.reqpath=req.session.reqpath;
    }
    next();
}

module.exports.validatereview=(req,res,next)=>{
    let {error}=reviewschema.validate(req.body);
   
    if(error)
    {
        let errmsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(404,errmsg);
    }
    else{
        next();
    }
}

module.exports.validatelisting=(req,res,next)=>{

    let {result}=listingschema.validate(req.body);
   
    if(result)
    {
        let errmsg=result.details.map((el)=>el.message).join(",");
        throw new ExpressError(404,errmsg);
    }
    else{
        next();
    }
}


module.exports.isOwner=async(req,res,next)=>{
    let {id}=req.params;
    let list=await Listing.findById(id);
    if (!list) {
        req.flash("error", "Listing not found.");
        return res.redirect("/listings");
    }

    if (!req.user || !list.owner.equals(req.user._id)) {
        req.flash("error", "You need necessary permissions.");
        return res.redirect(`/listings/${id}`);
    }
    

next();
}


module.exports.isauthor=async(req,res,next)=>{
    let {id,reviewId}=req.params;
    let review=await Review.findById(reviewId);
    if(!review.author.equals(res.locals.newUser._id))
    {
        req.flash("error","YOU ARE NOT THE AUTHOR");
        return res.redirect(`/listings/${id}`);
    }
    next();
}