const mongoose = require("mongoose")

// schema design
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]

    },
    email:{
        type:String,
        required:[true,"email is required and should be unique"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"password is required"]
    }

},{timestamps:true})
//user model is successfully created nwo we need controller and routes

// export
const userModel = mongoose.model("users", userSchema)


module.exports = userModel




