const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const cors = require("cors")
const authController = require("./controllers/authController")
const graduateController = require("./controllers/graduateController")
const undergraduateController = require("./controllers/undergraduateController")
const app = express()
const User = require('./models/User')

//mongodb connect
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL)

//routes
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/auth", authController)
app.use("/graduate", graduateController)
app.use("/undergraduate", undergraduateController)


//starting server
app.listen(process.env.PORT, ()=>console.log('Server running successfully'))
