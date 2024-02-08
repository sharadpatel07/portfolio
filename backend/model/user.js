const mongoose = require('mongoose')


const userScheme = new mongoose.Schema({
    name:{
        type:String,
    },
    age:{
        type:Number,
    },
    email:{
        type:String, 
    },
    password:{
        type:String,
    }
})

const User = mongoose.model("User" , userScheme)
module.exports = User;