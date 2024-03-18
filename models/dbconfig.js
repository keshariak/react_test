const mongoose = require("mongoose")

exports.dbconnection = async()=>{
    try{
        mongoose.connect(process.env.MONGO_URL).then(console.log("hogya bkl"));

    }
    catch(error){
        console.log(error.message)
    }
}