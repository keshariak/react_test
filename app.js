const express = require("express");

require("dotenv").config()

// const dotenv= require("dotenv")
// dotenv.config()

 const app= express();

//  const PORT= process.env.PORT;

 app.listen(process.env.PORT, ()=>{
    console.log(`server is running ${process.env.PORT}`)

 })
