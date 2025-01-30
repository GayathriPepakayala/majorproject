const mongoose=require("mongoose");
const review=require("./review.js");



const listing_schema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    image:{
           url:String,
           filename:String
          },
        price:{
            type:Number,
            default:1000,
            // min: [50, "Price must be at least 50"],
        },
        type1:{
            type:String,
            required:true,
            default:"temple"
        },
        location:String,
        country:String,
        reviews:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Review",
        }],
        owner:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
        }
});
listing_schema.post("findOneAndDelete",async(listing)=>{
    if(listing)
    {
   await review.deleteMany({_id:{$in:listing.reviews}});
    }
});
const Listing=mongoose.model("Listing",listing_schema);
module.exports=Listing;