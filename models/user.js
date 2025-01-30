const mongoose=require("mongoose");
const passportlocalmongoose=require("passport-local-mongoose");


const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        // no need to create for username becoz passport-local-mongoose takes care of that
    }
}
)
userSchema.plugin(passportlocalmongoose);
const user=new mongoose.model("user",userSchema);
module.exports=user;