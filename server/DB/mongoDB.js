const mongoose = require('mongoose')
require('dotenv').config()

const dbConnect= async()=>{

    try {
        const mongoConenct = await mongoose.connect(process.env.MONGO_URL)
        console.log(`database connected on ${mongoConenct.connection.name}` )

    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}
module.exports =dbConnect