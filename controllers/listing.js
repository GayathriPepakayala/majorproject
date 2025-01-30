const listing=require("../models/listing");
const user=require("../models/user");
module.exports.index=async (req,res)=>{
    let alldata=await listing.find({});
  //  console.log(alldata);
 
    res.render("./listings/index.ejs",{alldata});
}


module.exports.showroute=async (req,res)=>{
    let {id}=req.params;
    const list = await listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");//populate is used to get whole data related to the reviews object in the listing schema from reviews
     console.log(list);
    if(!list)
    {
        req.flash("error","DATA NOT FOUND FOR YOUR SEARCH");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs",{list});
}
module.exports.editlisting=async (req,res)=>{
   
    let {id}=req.params;
    let list=await listing.findById(id);
    let imageurl=list.image.url;
    let ogurl = list.image && list.image.url 
        ? list.image.url.replace("/upload", "/upload/e_blur:150") 
        : null;
    if(!list)
        {
            req.flash("error","DATA NOT FOUND FOR YOUR SEARCH");
            return res.redirect("/listings");
        }
    res.render("./listings/edit.ejs",{list,ogurl});
    } 
module.exports.updatelisting = async (req, res) => {
    let { id } = req.params;

    let l1 = await listing.findByIdAndUpdate(id, { ...req.body.listing });

    // Check if a new image was uploaded
    if (req.file) {
        let url = req.file.path; // ✅ Correct way to get Cloudinary URL
        let filename = req.file.filename;

        l1.image = { url, filename }; // ✅ Save image properly
        await l1.save();
    }

    req.flash("success", "Listing updated successfully!");
    res.redirect(`/listings/${id}`);
};

module.exports.deletelisting=async (req,res)=>{

    let {id}=req.params;
    
    await listing.findByIdAndDelete(id);
   
    req.flash("dlt","REMOVED A RESORT");
    res.redirect("/listings");
}
 module.exports.postlisting=async (req,res,next)=>{
   
   const data = req.body.listing;
   let url=req.file.path;
   let name=req.file.filename;
    if (!data) {
        req.flash("error", "Invalid data submitted");
        console.log(data)
        return res.redirect("/listings/new"); // Redirect to the form
    }
    data.owner=req.user._id;
  if (data.price === "") delete data.price;
    const listing1 = new listing(data);
    listing1.owner=req.user._id;
    listing1.image={url,name};
    await listing1.save();
    req.flash("msg","successfully inserted the data");
    console.log("Added new data:", listing1);
   return res.redirect("/listings");
    }