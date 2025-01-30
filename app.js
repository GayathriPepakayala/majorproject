if(process.env.NODE_ENV!="production")
{
require('dotenv').config()

}


let db_url=process.env.ATLAS_DB;

const express=require("express");
const app=express();
const mongoose=require("mongoose");
const wrapAsync=require("./util/wrapAsync.js");
const ExpressError=require("./util/ExpressError.js");
const listing=require("./models/listing.js");
const review=require("./models/review.js");
const path=require("path");
const methodoverride=require("method-override");
const ejsMate=require("ejs-mate");
const {listingschema,reviewschema}=require("./schema.js");
const listings=require("./router/listing.js");
const reviews=require("./router/review.js");
const userrouter=require("./router/user.js");
const session=require("express-session");
const MongoStore = require('connect-mongo');
const flash=require("connect-flash");
const passport=require("passport");
const localstratergy=require("passport-local");
const user=require("./models/user.js");
const MongoClient = require('mongodb').MongoClient;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodoverride("_method"));
app.engine("ejs",ejsMate);
app.use(flash());
const store=MongoStore.create({ mongoUrl: db_url,
    crypto:{
        secret:process.env.SECRET,
    },
    touchAfter:24*3600,
});


store.on("error",()=>{
    console.log("error in mongo atlas session");
})

app.use(express.static(path.join(__dirname,"/public")));
const session_detail={
    store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
cookie:{
    expiry:Date.now()+7*24*60*60*1000,
    maxAge:7*24*60*60*1000,
    httpOnly:true,

}}





app.use(session(session_detail));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localstratergy(user.authenticate()));

passport.serializeUser(user.serializeUser());//to store data after logging in
passport.deserializeUser(user.deserializeUser());//to dlt data after logging out




main()
.then((res)=>{
    console.log("connection successful");
}).catch(err => console.log(err));





async function main() {
  const client = new MongoClient(db_url, {
    ssl: true,  // Enable SSL
      // Set minimum TLS version
  });

  try {
    await client.connect();
    console.log("Connected to MongoDB!");
    mongoose.connection.client = client; // Assign the MongoClient to Mongoose
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

main().catch(console.error);
  
 
  
app.use((req,res,next)=>{
    res.locals.success=req.flash("msg");
    res.locals.ed=req.flash("ed");
    res.locals.dlt=req.flash("dlt");
    res.locals.dt=req.flash("dt");
    res.locals.rv=req.flash("rv");
    res.locals.error=req.flash("error");
    res.locals.success=req.flash("success");
    res.locals.newUser=req.user;
    next();
})



app.get("/",(req,res)=>{
    console.log("LISTENING TO THE PORT");
    res.send("working");
});


app.listen(8080,()=>{
    console.log("LISTENING TO THE PORT");

})






app.use("/listings",listings);

app.use("/listings/:id/reviews",reviews);
app.use("/",userrouter);


//app.post("/listings",async (req,res,next)=>{
    // {let listing1=new listing(req.body.listing);
    // await listing1.save();
    // console.log("added new data");
    // res.redirect("/listings");}
// try{
//     const data = req.body.listing;

//     // If price is an empty string, delete it so Mongoose applies the default value
//     if (data.price === "") delete data.price;

//     const listing1 = new listing(data);
//     await listing1.save();
//     console.log("Added new data:", listing1);
//     res.redirect("/listings");
// }
// catch(err){
//     next(err);
// }
// });


// app.get("/demouser",async (req,res)=>{
//     let faker=new user({
//         email:"anshi23@gmail.com",
//         username:"anshi123"
//     });
//     let registered=await user.register(faker,"hello");
//     res.send(registered);
//     console.log("sucess");
// })



app.all("*",(req,res,next)=>{
   next( new ExpressError(404,"page not found"));
})
app.use((err,req,res,next)=>{
    let{status=900,message="sahi galat"}=err;
    // res.status(status).send(message);
    res.status(status).render("./listings/error.ejs",{message});
  //  console.log("something went wrong");
})