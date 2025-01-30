const review=require("../models/review");
const listing=require("../models/listing");

module.exports.newreview=async (req,res)=>{
    let listing1= await listing.findById(req.params.id);

    if (!listing1) {
        console.log(listing1)
        throw new ExpressError(404, "not found");
    }
    let review1 = new review(req.body.review); // Assuming you have a `Review` model
    review1.author=req.user._id;
    console.log( review1.author)
    await review1.save();
    listing1.reviews.push(review1); // Push the review to the reviews array
    await listing1.save();
    req.flash("rv","added the review");
    res.redirect(`/listings/${listing1._id}`);
 
}

module.exports.deletereview=async(req,res)=>{
    let {id,reviewId}=req.params;
    await listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
   await review.findByIdAndDelete(reviewId);
   req.flash("dt","deleted the review");
   res.redirect(`/listings/${id}`);
}
