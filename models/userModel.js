const mongoose= require('mongoose')
 const usermodel=new mongoose.Schema({
    username:{
        type:String,
        trim:true,
        required:[true, "username is required"],
        // unique:true,
        minLength:[3,"username must be at least 3 characters"],

    },
    email:{
        type:String,
        required:[true, "email is required"],
        lowercase:true,
        // unique:true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
             'Please fill a valid email address'
            ],

    },
    password:{
        type:String,
        trim:true,
        required:[true, "username is required"],
        minLength:[3,"password must be at least 3 characters"],
        maxLength:[10,"password must be min 10 characters"],

    },

 },{timestamps:true});
 const user= mongoose.model("user", usermodel)
 module.exports = user;