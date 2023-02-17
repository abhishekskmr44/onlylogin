// import userModel
const userModel = require("../models/userModel")


// login callback
const loginController = async(req,res) => {
    try {
        const {email,password} = req.body
        const user = await userModel.findOne({email,password})
        if(!user){
           return res.status(404).send("User Not Found")
        }
        res.status(200).json({
            success:true,
            user,
        }); //loginController now created

    } catch (error) {
        res.status(400).json({success:false,error})
    }
}


// register callback
const registerController = async(req,res) => {
     try {
        const  newUser =  new userModel(req.body)
        //jo new user aara hai usey save karana hai
        await newUser.save()
        res.status(201).json({
          success:true,
          newUser,
          
        })
     } catch (error) {
        res.status(400).json({
            success:false,
            error
        })
     }
}


// add this loginContrller to userRoute.js
module.exports = {loginController,registerController};