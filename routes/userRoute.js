const express = require("express")
const router = express.Router()
const user= require("../models/userModel")
const { home ,create} = require("../controllers/userControllers")



router.get("/",home)


router.post("/create",create)

module.exports = router;