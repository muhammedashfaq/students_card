const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    Language1:{
        type:Number,
        required:true,
        default:0

    },
    English:{
        type:Number,
        required:true,
        default:0

    },
    Maths:{
        type:Number,
        required:true,
        default:0

    },
    Science:{
        type:Number,
        required:true,
        default:0

    },
    Social:{
        type:Number,
        required:true,
        default:0

    },
    classD:{
        type:String,
        required:true

    }
},{
    timestamps:true
}

)




module.exports=mongoose.model('student',studentSchema)