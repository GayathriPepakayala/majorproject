const user = require("../models/user");

module.exports.signuprouter=async(req,res)=>{
    try{
    let {username,email,password}=req.body;
    let faker1=new user({
    username,email});
    let reg=await user.register(faker1,password);
    console.log(reg);
    req.login(reg,(err)=>{
        if(err)
        {
            next(err);
        }
        req.flash("success", `Welcome ${username}!`);
    res.redirect("/listings");
    })
    
    }catch(e)
    {
        req.flash("error", `already existing ${username}!`);
        console.log("EXISTING USERNAME OR EMAIL ID");
        res.redirect("/signup");
    }

}


module.exports.loginroute= async(req,res)=>{
    let pg=await res.locals.reqpath||"/listings";
res.redirect(pg);

}


module.exports.logoutroute=(req,res,next)=>{
    req.logout((err)=>{
        if(err)
        {
            next(err);
        }
        req.flash("success","successfully loggedout");
        res.redirect("/listings");
    })
}