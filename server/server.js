const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const dbConnect= require('./DB/mongoDB')
dbConnect()
const cors = require('cors')
require('dotenv').config()
app.use(cors())
app.use(express.json())



app.use("/",require("./Routes/newroutes"))


app.listen(PORT,()=>console.log(`server connected on port ${PORT}`))
