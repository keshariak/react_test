exports.home= function(req,res,next){
    // res.send("hellllo")
    res.status(200).json({success:true, message:"this is test route"})
}
const user=require("../models/userModel")
exports.create=function(req,res,next){
    try{
        const newuser= new user(req.body);
        newuser.save()
        res.status(201).json({success: true, user:req.body})
    } catch(error){
        res.status(500).json({success: false, message:error.message})
    }


   
}