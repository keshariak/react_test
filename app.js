const express = require("express");

require("dotenv").config()

 const app= express();

//  const PORT= process.env.PORT;

//DB connection
require("./models/dbconfig").dbconnection()



//routes
 const userRouter= require("./routes/userRoute")

//body parser
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/", userRouter)

app.all("*",(req,res,next)=>{
   res.status(404).json({
      success:false,
      message:`${req.url} route not define`
   })
})





 //server
 app.listen(process.env.PORT, ()=>{
    console.log(`server is running ${process.env.PORT}`)

 })


//  mongodb+srv://aryan123:aryan123@cluster0.zssiekq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0