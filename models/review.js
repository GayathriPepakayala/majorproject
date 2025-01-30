const mongoose=require("mongoose");

let reviewschema=new mongoose.Schema({
  
    content:{type:String,
        required:true,
    },
    rating:{
        type:Number,
        min:1,
        max:5,
    },
    created_on:{
        type:Date,
        default:Date.now(),
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
            ref:"user",
    }
})

module.exports=new mongoose.model("Review",reviewschema);